import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectWeather = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.weatherData.weather,
  );

export { selectGlobal, makeSelectLoading, makeSelectError, makeSelectWeather };
