/*
 *
 * Cloud reducer
 *
 */
import produce from 'immer';
import {
  GET_FILES_ERROR,
  GET_FILES_SUCCESS,
  GET_FILES,
  SYNC_FILES_ERROR,
  SYNC_FILES_SUCCESS,
  SYNC_FILES,
  DOWNLOAD_FILE,
  DOWNLOAD_FILE_SUCCESS,
  DOWNLOAD_FILE_ERROR,
  SET_UPLOAD_FILE,
  SET_UPLOAD_PROGRESS,
  DELETE_FILE,
  DELETE_FILE_SUCCESS,
  DELETE_FILE_ERROR,
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILE_ERROR,
  DELETE_FOLDER,
  DELETE_FOLDER_ERROR,
  DELETE_FOLDER_SUCCESS,
  CHANGE_FOLDER_NAME,
  ADD_FOLDER_ERROR,
  ADD_FOLDER_SUCCESS,
  CHANGE_CONFIG_NAME,
  CHANGE_CONFIG_PATH,
  GET_CONFIG_ERROR,
  SET_CONFIG_ERROR,
  GET_CONFIG_SUCCESS,
} from './constants';
import { modifyFiles } from './utils';

export const initialState = {
  errorText: '',
  loadingFiles: true,
  syncing: false,
  root: {},
  tree: [],
  currentFolder: {},
  files: [],
  folders: [],
  folderUid: undefined,
  folderName: '',
  fileUid: '',
  fileName: '',
  fileProgress: {},
  configName: '',
  configPath: '',
};

/* eslint-disable default-case, no-param-reassign */
const cloudReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_CONFIG_ERROR:
        draft.errorText = action.error;
        break;
      case GET_CONFIG_SUCCESS:
        draft.configName = action.name;
        draft.configPath = action.path;
        break;
      case SET_CONFIG_ERROR:
        draft.errorText = action.error;
        break;
      case CHANGE_FOLDER_NAME:
        draft.folderName = action.name;
        break;
      case CHANGE_CONFIG_NAME:
        draft.configName = action.name;
        break;
      case CHANGE_CONFIG_PATH:
        draft.configPath = action.path;
        break;
      case SET_UPLOAD_FILE:
        draft.fileProgress = {
          ...state.fileProgress,
          ...modifyFiles(state.fileProgress, action.data),
        };
        break;
      case SET_UPLOAD_PROGRESS:
        draft.fileProgress = {
          ...state.fileProgress,
          [action.id]: {
            ...state.fileProgress[action.id],
            progress: action.progress,
          },
        };
        break;
      case UPLOAD_FILE_SUCCESS:
        draft.fileProgress = {
          ...state.fileProgress,
          [action.id]: {
            ...state.fileProgress[action.id],
            status: 1,
          },
        };
        break;
      case UPLOAD_FILE_ERROR:
        draft.errorText = action.error;
        draft.fileProgress = {
          ...state.fileProgress,
          [action.id]: {
            ...state.fileProgress[action.id],
            status: 0,
            progress: 0,
          },
        };
        break;
      case GET_FILES:
        draft.loadingFiles = true;
        draft.folderUid = action.uid;
        break;
      case GET_FILES_SUCCESS:
        draft.root = action.root;
        draft.currentFolder = action.currentFolder;
        draft.files = action.files;
        draft.folders = action.folders;
        draft.tree = action.tree;
        draft.loadingFiles = false;
        break;
      case GET_FILES_ERROR:
        draft.loadingFiles = false;
        draft.errorText = action.error;
        break;
      case DOWNLOAD_FILE:
        draft.fileUid = action.uid;
        draft.fileName = action.name;
        break;
      case DOWNLOAD_FILE_SUCCESS:
        draft.fileUid = '';
        draft.fileName = '';
        break;
      case DOWNLOAD_FILE_ERROR:
        draft.fileUid = '';
        draft.fileName = '';
        draft.errorText = action.error;
        break;
      case DELETE_FILE:
        draft.fileUid = action.uid;
        break;
      case DELETE_FILE_SUCCESS:
        draft.fileUid = '';
        break;
      case DELETE_FILE_ERROR:
        draft.fileUid = '';
        draft.errorText = action.error;
        break;
      case DELETE_FOLDER:
        draft.folderUid = action.uid;
        break;
      case DELETE_FOLDER_SUCCESS:
        draft.folderUid = '';
        break;
      case DELETE_FOLDER_ERROR:
        draft.folderUid = '';
        draft.errorText = action.error;
        break;
      case ADD_FOLDER_SUCCESS:
        draft.folderName = '';
        break;
      case ADD_FOLDER_ERROR:
        draft.folderName = '';
        draft.errorText = action.error;
        break;
      case SYNC_FILES:
        draft.syncing = true;
        break;
      case SYNC_FILES_SUCCESS:
        draft.syncing = false;
        break;
      case SYNC_FILES_ERROR:
        draft.syncing = false;
        draft.errorText = action.error;
        break;
    }
  });

export default cloudReducer;
