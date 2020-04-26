import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { size, toArray } from 'lodash';

import UploadItem from '../UploadItem/UploadItem';
import Styles from './style.css';

export const UploadProgress = props => {
  const { fileProgress, uploadFile, currentFolder } = props;
  const uploadedFileAmount = size(fileProgress);

  useEffect(() => {
    const fileToUpload = toArray(fileProgress).filter(
      file => file.progress === 0,
    );
    uploadFile(fileToUpload, currentFolder);
  }, [uploadedFileAmount]);

  return uploadedFileAmount > 0 ? (
    <div className="wrapper">
      <h4>Uploading File</h4>
      {size(fileProgress)
        ? toArray(fileProgress).map(file => (
            <UploadItem key={file.id} file={file} />
          ))
        : null}
    </div>
  ) : null;
};

UploadProgress.propTypes = {
  currentFolder: PropTypes.object,
  fileProgress: PropTypes.object,
  uploadFile: PropTypes.func,
};
