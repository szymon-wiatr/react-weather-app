/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectCityname = () =>
  createSelector(
    selectHome,
    homeState => homeState.cityname,
  );

export { selectHome, makeSelectCityname };
