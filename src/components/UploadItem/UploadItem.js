import React from 'react'
import Styles from './style.css'

const UploadItem = props => {
  const { file, progress } = props.file;

  return (
    <div className="wrapperItem">
      <div className="leftSide">
        <div className="progressBar">
          <div style={{ width: `${progress}%` }} />
        </div>
        <label>{file.name}</label>
      </div>
      <span className="percentage">{progress}%</span>
    </div>
  )
}

export default UploadItem;
