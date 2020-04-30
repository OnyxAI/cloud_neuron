import {
  call,
  put,
  takeLatest,
  select,
  all,
  eventChannel,
  END,
} from 'redux-saga/effects';

import { request } from 'onyx/utils';
import { makeSelectCloud } from './selectors';
import {
  GET_FILES,
  DOWNLOAD_FILE,
  SYNC_FILES,
  DELETE_FILE,
  DELETE_FOLDER,
  ADD_FOLDER,
  SET_CONFIG,
  GET_CONFIG,
} from './constants';

import {
  getFiles,
  getFilesSuccess,
  getFilesError,
  getConfig,
  getConfigError,
  getConfigSuccess,
  setConfigError,
  setConfigSuccess,
  downloadFileError,
  downloadFileSuccess,
  syncFiles,
  syncFilesSuccess,
  syncFilesError,
  deleteFileSuccess,
  deleteFileError,
  deleteFolderError,
  deleteFolderSuccess,
  addFolderError,
  addFolderSuccess,
} from './actions';

// Sync Files
export function* loadSyncFiles() {
  const cloud = yield select(makeSelectCloud());
  const token = localStorage.getItem('access_token');

  try {
    const result = yield call(request, {
      method: 'GET',
      url: `/api/neuron/cloud/sync`,
      headers: { Authorization: `Bearer ${token}` },
    });
    if (result && result.status === 'success') {
      yield put(syncFilesSuccess());
      yield put(getFiles(cloud.currentFolder.uid));
    } else if (result && result.status === 'error') {
      yield put(syncFilesError(result.message));
    } else {
      yield put(syncFilesError('onyx.global.error'));
    }
  } catch (error) {
    yield put(syncFilesError(error.toString()));
  }
}

// Get Files
export function* loadGetFiles() {
  const token = localStorage.getItem('access_token');
  const cloud = yield select(makeSelectCloud());

  try {
    const result = yield call(request, {
      method: 'POST',
      url: `/api/neuron/cloud/folder/get`,
      headers: { Authorization: `Bearer ${token}` },
      data: {
        uid: cloud.folderUid,
      },
    });
    if (result && result.status === 'success') {
      yield put(
        getFilesSuccess(
          result.folders,
          result.files,
          result.current_folder,
          result.root,
          result.tree,
        ),
      );
    } else if (result && result.status === 'error') {
      yield put(getFilesError(result.message));
    } else {
      yield put(getFilesError('onyx.global.error'));
    }
  } catch (error) {
    yield put(getFilesError(error.toString()));
  }
}

// Download File
export function* loadDownloadFile() {
  const token = localStorage.getItem('access_token');
  const cloud = yield select(makeSelectCloud());

  try {
    const result = yield call(request, {
      method: 'POST',
      url: `/api/neuron/cloud/file/get`,
      headers: { Authorization: `Bearer ${token}` },
      responseType: 'arraybuffer',
      data: {
        uid: cloud.fileUid,
      },
    });
    if (result) {
      const url = window.URL.createObjectURL(new Blob([result]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', cloud.fileName); // 3. Append to html page
      document.body.appendChild(link); // 4. Force download
      link.click(); // 5. Clean up and remove the link
      link.parentNode.removeChild(link);

      yield put(downloadFileSuccess());
    } else {
      yield put(downloadFileError('onyx.global.error'));
    }
  } catch (error) {
    yield put(downloadFileError(error.toString()));
  }
}

// Delete File
export function* loadDeleteFile() {
  const token = localStorage.getItem('access_token');
  const cloud = yield select(makeSelectCloud());

  try {
    const result = yield call(request, {
      method: 'POST',
      url: `/api/neuron/cloud/file/delete`,
      headers: { Authorization: `Bearer ${token}` },
      data: {
        uid: cloud.fileUid,
      },
    });
    if (result && result.status === 'success') {
      yield put(deleteFileSuccess());
      yield put(syncFiles());
      yield put(getFiles());
    } else if (result && result.status === 'error') {
      yield put(deleteFileError(result.message));
    } else {
      yield put(deleteFileError('onyx.global.error'));
    }
  } catch (error) {
    yield put(deleteFileError(error.toString()));
  }
}

// Delete Folder
export function* loadDeleteFolder() {
  const token = localStorage.getItem('access_token');
  const cloud = yield select(makeSelectCloud());

  try {
    const result = yield call(request, {
      method: 'POST',
      url: `/api/neuron/cloud/folder/delete`,
      headers: { Authorization: `Bearer ${token}` },
      data: {
        uid: cloud.folderUid,
      },
    });
    if (result && result.status === 'success') {
      yield put(deleteFolderSuccess());
      yield put(syncFiles());
      yield put(getFiles());
    } else if (result && result.status === 'error') {
      yield put(deleteFolderError(result.message));
      yield put(syncFiles());
      yield put(getFiles());
    } else {
      yield put(deleteFolderError('onyx.global.error'));
      yield put(syncFiles());
      yield put(getFiles());
    }
  } catch (error) {
    yield put(deleteFolderError(error.toString()));
  }
}

// Add Folder
export function* loadAddFolder() {
  const token = localStorage.getItem('access_token');
  const cloud = yield select(makeSelectCloud());

  try {
    const result = yield call(request, {
      method: 'POST',
      url: `/api/neuron/cloud/folder/add`,
      headers: { Authorization: `Bearer ${token}` },
      data: {
        name: cloud.folderName,
        folder: cloud.currentFolder.path,
      },
    });
    if (result && result.status === 'success') {
      yield put(addFolderSuccess());
      yield put(syncFiles());
      yield put(getFiles());
    } else if (result && result.status === 'error') {
      yield put(addFolderError(result.message));
      yield put(syncFiles());
      yield put(getFiles());
    } else {
      yield put(addFolderError('onyx.global.error'));
      yield put(syncFiles());
      yield put(getFiles());
    }
  } catch (error) {
    yield put(addFolderError(error.toString()));
  }
}

// Get Config
export function* loadGetConfig() {
  const token = localStorage.getItem('access_token');

  try {
    const result = yield call(request, {
      method: 'GET',
      url: `/api/neuron/cloud/config`,
      headers: { Authorization: `Bearer ${token}` },
    });
    if (result && result.status === 'success') {
      yield put(
        getConfigSuccess(result.config),
      );
    } else if (result && result.status === 'error') {
      yield put(getConfigError(result.message));
    } else {
      yield put(getConfigError('onyx.global.error'));
    }
  } catch (error) {
    yield put(getConfigError(error.toString()));
  }
}

// Set Config
export function* loadSetConfig() {
  const token = localStorage.getItem('access_token');
  const cloud = yield select(makeSelectCloud());

  try {
    const result = yield call(request, {
      method: 'POST',
      url: `/api/neuron/cloud/config`,
      headers: { Authorization: `Bearer ${token}` },
      data: {
        name: cloud.configName,
        path: cloud.configPath,
      },
    });
    if (result && result.status === 'success') {
      yield put(setConfigSuccess());
      yield put(syncFiles());
      yield put(getConfig());
    } else if (result && result.status === 'error') {
      yield put(setConfigError(result.message));
    } else {
      yield put(setConfigError('onyx.global.error'));
    }
  } catch (error) {
    yield put(setConfigError(error.toString()));
  }
}

// Individual exports for testing
export default function* cloudSaga() {
  yield takeLatest(SYNC_FILES, loadSyncFiles);
  yield takeLatest(GET_FILES, loadGetFiles);
  yield takeLatest(DOWNLOAD_FILE, loadDownloadFile);
  yield takeLatest(DELETE_FILE, loadDeleteFile);
  yield takeLatest(DELETE_FOLDER, loadDeleteFolder);
  yield takeLatest(ADD_FOLDER, loadAddFolder);
  yield takeLatest(GET_CONFIG, loadGetConfig);
  yield takeLatest(SET_CONFIG, loadSetConfig);
}
