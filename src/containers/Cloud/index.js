/* eslint-disable no-undef */
/**
 *
 * Cloud
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import { Card, CardBody, CardHeader, CardTitle } from 'uikit-react';

import messages from './messages';

export function Cloud({ user }) {
  return (
    <div>
      <Helmet>
        <title>Cloud</title>
        <meta name="description" content="Description of Cloud" />
      </Helmet>
      <Card hover>
        <CardHeader>
          <CardTitle>
            <FormattedMessage {...messages.header} />
          </CardTitle>
          <CardBody>
            <p>Welcome to cloud neuron</p>
          </CardBody>
        </CardHeader>
      </Card>
    </div>
  );
}

Cloud.propTypes = {
  user: PropTypes.object,
};

export default memo(Cloud);
