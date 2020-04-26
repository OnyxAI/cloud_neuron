/*
 * Cloud Messages
 *
 * This contains all the text for the Cloud container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Cloud';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Cloud',
  },
  create_folder_header: {
    id: `${scope}.create_folder_header`,
    defaultMessage: 'Add a folder',
  },
  folder_name: {
    id: `${scope}.folder_name`,
    defaultMessage: 'Name',
  },
});
