/*
 *
 * Cloud actions
 *
 */
import { request } from 'onyx/utils';
import {
  GET_FILES_SUCCESS,
  GET_FILES_ERROR,
  GET_FILES,
  DOWNLOAD_FILE,
  DOWNLOAD_FILE_SUCCESS,
  DOWNLOAD_FILE_ERROR,
  SYNC_FILES,
  SYNC_FILES_ERROR,
  SYNC_FILES_SUCCESS,
  SET_UPLOAD_FILE,
  SET_UPLOAD_PROGRESS,
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILE_ERROR,
  DELETE_FILE,
  DELETE_FILE_SUCCESS,
  DELETE_FILE_ERROR,
  DELETE_FOLDER,
  DELETE_FOLDER_SUCCESS,
  DELETE_FOLDER_ERROR,
  CHANGE_FOLDER_NAME,
  ADD_FOLDER,
  ADD_FOLDER_SUCCESS,
  ADD_FOLDER_ERROR,
  CHANGE_CONFIG_NAME,
  CHANGE_CONFIG_PATH,
  SET_CONFIG,
  SET_CONFIG_ERROR,
  SET_CONFIG_SUCCESS,
  GET_CONFIG,
  GET_CONFIG_ERROR,
  GET_CONFIG_SUCCESS,
} from './constants';

export function changeFolderName(name) {
  return dispatch => {
    dispatch({
      type: CHANGE_FOLDER_NAME,
      name,
    });
  };
}

export function changeConfigName(name) {
  return dispatch => {
    dispatch({
      type: CHANGE_CONFIG_NAME,
      name,
    });
  };
}

export function changeConfigPath(path) {
  return dispatch => {
    dispatch({
      type: CHANGE_CONFIG_PATH,
      path,
    });
  };
}

export const uploadFile = (files, currentFolder) => dispatch => {
  const token = localStorage.getItem('access_token');

  if (files.length) {
    files.forEach(async file => {
      const formPayload = new FormData();
      formPayload.append('file', file.file);
      try {
        await request({
          url: `/api/neuron/cloud/file/upload/${currentFolder.uid}`,
          method: 'POST',
          headers: { Authorization: `Bearer ${token}` },
          data: formPayload,
          onUploadProgress: progress => {
            const { loaded, total } = progress;
            const percentageProgress = Math.floor((loaded / total) * 100);
            dispatch(setUploadProgress(file.id, percentageProgress));
          },
        }).then(result => {
          if (result && result.status === 'success') {
            dispatch(uploadFileSuccess(file.id));
            dispatch(syncFiles());
            dispatch(getFiles());
          } else if (result && result.status === 'error') {
            dispatch(uploadFileError(result.message, file.id));
          } else {
            dispatch(uploadFileSuccess('onyx.global.error', file.id));
          }
        });
      } catch (error) {
        dispatch(uploadFileError(file.id));
      }
    });
  }
};

export function uploadFileSuccess(id) {
  return dispatch => {
    dispatch({
      type: UPLOAD_FILE_SUCCESS,
      id,
    });
  };
}

export function uploadFileError(error, id) {
  return dispatch => {
    dispatch({ type: UPLOAD_FILE_ERROR, error, id });
  };
}

export function setUploadFile(data) {
  return {
    type: SET_UPLOAD_FILE,
    data,
  };
}

export function setUploadProgress(id, progress) {
  return dispatch => {
    dispatch({ type: SET_UPLOAD_PROGRESS, id, progress });
  };
}

export function getFiles(uid) {
  return {
    type: GET_FILES,
    uid,
  };
}

export function getFilesSuccess(folders, files, currentFolder, root, tree) {
  return dispatch => {
    dispatch({
      type: GET_FILES_SUCCESS,
      folders,
      files,
      currentFolder,
      root,
      tree,
    });
  };
}

export function getFilesError(error) {
  return dispatch => {
    dispatch({ type: GET_FILES_ERROR, error });
  };
}

export function syncFiles() {
  return {
    type: SYNC_FILES,
  };
}

export function syncFilesSuccess() {
  return dispatch => {
    dispatch({ type: SYNC_FILES_SUCCESS });
  };
}

export function syncFilesError(error) {
  return dispatch => {
    dispatch({ type: SYNC_FILES_ERROR, error });
  };
}

export function getConfig() {
  return {
    type: GET_CONFIG,
  };
}

export function getConfigSuccess(config) {
  return dispatch => {
    dispatch({
      type: GET_CONFIG_SUCCESS,
      name: config.name,
      path: config.path,
    });
  };
}

export function getConfigError(error) {
  return dispatch => {
    dispatch({ type: GET_CONFIG_ERROR, error });
  };
}

export function setConfig() {
  return {
    type: SET_CONFIG,
  };
}

export function setConfigSuccess() {
  return dispatch => {
    dispatch({ type: SET_CONFIG_SUCCESS });
  };
}

export function setConfigError(error) {
  return dispatch => {
    dispatch({ type: SET_CONFIG_ERROR, error });
  };
}

export function downloadFile(uid, name) {
  return {
    type: DOWNLOAD_FILE,
    uid,
    name,
  };
}

export function downloadFileSuccess() {
  return dispatch => {
    dispatch({ type: DOWNLOAD_FILE_SUCCESS });
  };
}

export function downloadFileError(error) {
  return dispatch => {
    dispatch({ type: DOWNLOAD_FILE_ERROR, error });
    dispatch(syncFiles());
  };
}

export function deleteFile(uid) {
  return {
    type: DELETE_FILE,
    uid,
  };
}

export function deleteFileSuccess() {
  return dispatch => {
    dispatch({ type: DELETE_FILE_SUCCESS });
  };
}

export function deleteFileError(error) {
  return dispatch => {
    dispatch({ type: DELETE_FILE_ERROR, error });
  };
}

export function deleteFolder(uid) {
  return {
    type: DELETE_FOLDER,
    uid,
  };
}

export function deleteFolderSuccess() {
  return dispatch => {
    dispatch({ type: DELETE_FOLDER_SUCCESS });
  };
}

export function deleteFolderError(error) {
  return dispatch => {
    dispatch({ type: DELETE_FOLDER_ERROR, error });
  };
}

export function addFolder() {
  return {
    type: ADD_FOLDER,
  };
}

export function addFolderSuccess() {
  return dispatch => {
    dispatch({ type: ADD_FOLDER_SUCCESS });
  };
}

export function addFolderError(error) {
  return dispatch => {
    dispatch({ type: ADD_FOLDER_ERROR, error });
  };
}
