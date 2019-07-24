import produce from 'immer';
import {
  LOAD_WEATHER_SUCCESS,
  LOAD_WEATHER,
  LOAD_WEATHER_ERROR,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  currentCity: false,
  weatherData: {
    weather: false,
  },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_WEATHER:
        draft.loading = true;
        draft.error = false;
        draft.weatherData.weather = false;
        break;

      case LOAD_WEATHER_SUCCESS:
        [draft.weatherData.weather] = action.weather.data;
        draft.loading = false;
        draft.currentCity = action.cityname;
        break;

      case LOAD_WEATHER_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;
    }
  });

export default appReducer;
