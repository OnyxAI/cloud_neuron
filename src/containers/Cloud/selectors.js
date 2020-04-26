import { createSelector } from 'reselect';

const selectCloud = state => state.cloud;

const makeSelectCloud = () =>
  createSelector(
    selectCloud,
    cloudState => cloudState,
  );

export { makeSelectCloud };
