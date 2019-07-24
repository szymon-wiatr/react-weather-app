import {
  LOAD_WEATHER,
  LOAD_WEATHER_SUCCESS,
  LOAD_WEATHER_ERROR,
} from './constants';

/**
 * Load the weather, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_WEATHER
 */
export function loadWeather() {
  return {
    type: LOAD_WEATHER,
  };
}

/**
 * Dispatched when the weather are loaded by the request saga
 *
 * @param  {array} weather The weather data
 * @param  {string} cityname The current cityname
 *
 * @return {object} An action object with a type of LOAD_WEATHER_SUCCESS passing the weather
 */
export function weatherLoaded(weather, cityname) {
  return {
    type: LOAD_WEATHER_SUCCESS,
    weather,
    cityname,
  };
}

/**
 * Dispatched when loading the wheater fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOAD_WEATHER_ERROR passing the error
 */
export function weatherLoadingError(error) {
  return {
    type: LOAD_WEATHER_ERROR,
    error,
  };
}
