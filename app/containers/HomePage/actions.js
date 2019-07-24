import { CHANGE_CITYNAME } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} cityname The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_CITYNAME
 */
export function changeCityname(cityname) {
  return {
    type: CHANGE_CITYNAME,
    cityname,
  };
}
