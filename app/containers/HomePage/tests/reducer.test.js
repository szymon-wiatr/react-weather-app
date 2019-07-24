import produce from 'immer';

import homeReducer from '../reducer';
import { changeCityname } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      cityname: 'Warsaw',
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeCityname action correctly', () => {
    const fixture = 'Skarżysko-Kamienna';
    const expectedResult = produce(state, draft => {
      draft.cityname = fixture;
    });

    expect(homeReducer(state, changeCityname(fixture))).toEqual(expectedResult);
  });
});
