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

import { makeSelectCloud } from './selectors';

import { changeConfigName, changeConfigPath, getConfig, setConfig } from './actions';

import saga from './saga';
import reducer from './reducer';

import messages from './messages';

export function CloudConfig({
  user,
  cloud,
  changeConfigNameFunc,
  changeConfigPathFunc,
  setConfigFunc,
  getConfigFunc,
}) {
  useInjectReducer({ key: 'cloud', reducer });
  useInjectSaga({ key: 'cloud', saga });

  useEffect(() => {
    getConfigFunc();
  }, [0])

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
            <h1>Config</h1>

            <input value={cloud.configName} onChange={changeConfigNameFunc} className="uk-input uk-form-large" type="text" placeholder="Name" />
            <input value={cloud.configPath} onChange={changeConfigPathFunc} className="uk-input uk-form-large" type="text" placeholder="Path" />
            <div className="uk-padding-small center">
              <button
                type="button"
                className="uk-button uk-button-primary uk-button-large"
                onClick={() => setConfigFunc()}
              >
                <FormattedMessage id="onyx.global.send" />
              </button>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
}

CloudConfig.propTypes = {
  user: PropTypes.object,
  cloud: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  cloud: makeSelectCloud(),
});

function mapDispatchToProps(dispatch) {
  return {
    changeConfigNameFunc: evt => {
      if(evt && evt.target){
        dispatch(changeConfigName(evt.target.value));
      }
    },
    changeConfigPathFunc: evt => {
      if(evt && evt.target){
        dispatch(changeConfigPath(evt.target.value));
      }
    },
    getConfigFunc: () => {
      dispatch(getConfig());
    },
    setConfigFunc: () => {
      dispatch(setConfig());
    }
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CloudConfig);
