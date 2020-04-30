/* eslint-disable no-undef */
/**
 *
 * Cloud
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Modal } from 'react-materialize';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useInjectSaga } from 'onyx/utils';
import { useInjectReducer } from 'onyx/utils';
import { Container } from 'onyx/components';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { getMessage } from '../../i18n';

import { UploadProgress } from '../../components/UploadProgress/UploadProgress';
import { makeSelectCloud } from './selectors';
import {
  getFiles,
  downloadFile,
  syncFiles,
  setUploadFile,
  uploadFile,
  deleteFile,
  deleteFolder,
  changeFolderName,
  addFolder,
  getConfig,
} from './actions';

import saga from './saga';
import reducer from './reducer';

import messages from './messages';

export function Cloud({
  user,
  uploadFileFunc,
  syncFilesFunc,
  deleteFileFunc,
  getFilesFunc,
  setUploadFileFunc,
  downloadFileFunc,
  cloud,
  deleteFolderFunc,
  onChangeFolderName,
  addFolderFunc,
  getConfigFunc,
  match,
  history,
}) {
  useInjectReducer({ key: 'cloud', reducer });
  useInjectSaga({ key: 'cloud', saga });

  useEffect(() => {
    getConfigFunc();
  }, [0]);

  useEffect(() => {
    getFilesFunc(match.params.uid);
  }, [0]);

  const handleAttachFile = e => {
    setUploadFileFunc(e.target.files);
    e.target.value = '';
  };

  return (
    <div>
      <Helmet>
        <title>Cloud</title>
        <meta name="description" content="Description of Cloud" />
      </Helmet>
      {cloud && (
        <div>
          <Container
            user={user}
            title={<FormattedMessage {...messages.header} />}
          >
            {cloud.loadingFiles ? (
              <span
                className="uk-margin-small-right center"
                uk-spinner="ratio: 1"
              />
            ) : (
              <div>
                <ul className="uk-breadcrumb">
                  {cloud.tree &&
                    cloud.tree.map(tree => (
                      <li
                        onClick={() => history.push('/cloud/' + tree.uid)}
                        style={{ cursor: 'pointer' }}
                      >
                        {tree.name}
                      </li>
                    ))}
                </ul>

                {cloud.syncing ? (
                  <span
                    className="uk-margin-small-right center"
                    uk-spinner="ratio: 2"
                  />
                ) : (
                  <div>
                  {cloud.currentFolder && cloud.configPath !== '' && (
                    <ul className="collection with-header">
                        <li class="collection-header">
                          <h4>{cloud.currentFolder.name}</h4>
                          <span
                            className={`btn-floating ${user.color}`}
                            onClick={() => syncFilesFunc()}
                            style={{ cursor: 'pointer' }}
                          >
                            <i
                              className="fas fa-sync"
                              style={{
                                fontSize: '15px',
                                color: 'white',
                                position: 'relative',
                              }}
                            />
                          </span>

                          <label
                            className={`btn-floating ${user.color}`}
                            style={{ cursor: 'pointer' }}
                            for="upload_folder"
                          >
                            <i
                              className="fas fa-upload"
                              style={{
                                fontSize: '15px',
                                color: 'white',
                                position: 'relative',
                              }}
                            />
                          </label>
                          <input
                            id="upload_folder"
                            type="file"
                            webkitdirectory=""
                            mozdirectory=""
                            directory=""
                            multiple
                            onChange={handleAttachFile}
                            style={{ display: 'none' }}
                          />

                          <label
                            className={`btn-floating ${user.color}`}
                            style={{ cursor: 'pointer' }}
                            htmlFor="upload_files"
                          >
                            <i
                              className="fas fa-file-upload"
                              style={{
                                fontSize: '15px',
                                color: 'white',
                                position: 'relative',
                              }}
                            />
                          </label>
                          <input
                            id="upload_files"
                            type="file"
                            multiple
                            onChange={handleAttachFile}
                            style={{ display: 'none' }}
                          />

                          <Modal
                            header={getMessage(
                              user.language.substring(0, 2),
                              messages.create_folder_header.id,
                            )}
                            actions={<p />}
                            trigger={
                              <button
                                type="button"
                                className={`btn-floating ${user.color}`}
                              >
                                <i
                                  className="fas fa-folder-plus"
                                  style={{
                                    fontSize: '15px',
                                    color: 'white',
                                    position: 'relative',
                                  }}
                                />
                              </button>
                            }
                          >
                            <div>
                              <div className="uk-padding-small">
                                <label htmlFor="create_folder">
                                  <FormattedMessage {...messages.folder_name} />
                                </label>
                                <input id="create_folder" onChange={onChangeFolderName} type="text" className="center uk-input"/>
                              </div>
                              <div className="uk-padding-small center">
                                <button
                                  type="button"
                                  onClick={() => addFolderFunc()}
                                  className="uk-button uk-button-primary uk-button-large"
                                >
                                  <FormattedMessage id="onyx.global.send" />
                                </button>
                              </div>
                            </div>
                          </Modal>
                        </li>


                      {cloud.folders.map(folder => (
                        <li
                          className="collection-item avatar"
                        >
                          <i className="fas fa-folder circle" />
                          <span className="title" style={{ cursor: 'pointer' }} onClick={() => history.push('/cloud/' + folder.uid)}>{folder.name}</span>
                          <div className="secondary-content">
                            <i
                              onClick={() => deleteFolderFunc(folder.uid)}
                              style={{ cursor: 'pointer' }}
                              className="uk-padding-small fas fa-trash"
                            />
                          </div>
                        </li>
                      ))}

                      {cloud.files.map(file => (
                        <li className="collection-item avatar">
                          <i className="fas fa-file circle" />
                          <span className="title">{file.name}</span>
                          <div className="secondary-content">
                            <i
                              onClick={() => deleteFileFunc(file.uid)}
                              style={{ cursor: 'pointer' }}
                              className="uk-padding-small fas fa-trash"
                            />
                            <i
                              onClick={() =>
                                downloadFileFunc(file.uid, file.name)
                              }
                              style={{ cursor: 'pointer' }}
                              className="uk-padding-small fas fa-download"
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                    )}

                    {cloud.files.length === 0 && cloud.folders.length === 0 && (
                      <div>
                        {cloud.configPath === '' ? (
                          <button onClick={() => history.push('/cloud/config')} className={`btn ${user.color}`}>Config</button>
                        ) : (
                          <h3 className="uk-card-title">Nothing Here</h3>
                        )}

                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </Container>
          <UploadProgress
            fileProgress={cloud.fileProgress}
            uploadFile={uploadFileFunc}
            currentFolder={cloud.currentFolder}
          />
        </div>
      )}
    </div>
  );
}

Cloud.propTypes = {
  user: PropTypes.object,
  cloud: PropTypes.object,
  getFilesFunc: PropTypes.func,
  downloadFileFunc: PropTypes.func,
  setUploadFileFunc: PropTypes.func,
  deleteFileFunc: PropTypes.func,
  uploadFileFunc: PropTypes.func,
  syncFilesFunc: PropTypes.func,
  deleteFolderFunc: PropTypes.func,
  onChangeFolderName: PropTypes.func,
  addFolderFunc: PropTypes.func,
  match: PropTypes.object,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

const mapStateToProps = createStructuredSelector({
  cloud: makeSelectCloud(),
});

function mapDispatchToProps(dispatch) {
  return {
    getConfigFunc: () => {
      dispatch(getConfig());
    },
    getFilesFunc: uid => {
      dispatch(getFiles(uid));
    },
    addFolderFunc: () => {
      dispatch(addFolder());
    },
    downloadFileFunc: (uid, name) => {
      dispatch(downloadFile(uid, name));
    },
    deleteFileFunc: uid => {
      dispatch(deleteFile(uid));
    },
    onChangeFolderName: evt => {
      if ( evt && evt.target){
        dispatch(changeFolderName(evt.target.value));
      }
    },
    deleteFolderFunc: uid => {
      dispatch(deleteFolder(uid));
    },
    setUploadFileFunc: files => {
      dispatch(setUploadFile(files));
    },
    syncFilesFunc: () => {
      dispatch(syncFiles());
    },
    uploadFileFunc: (files, currentFolder) => {
      dispatch(uploadFile(files, currentFolder));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Cloud);
