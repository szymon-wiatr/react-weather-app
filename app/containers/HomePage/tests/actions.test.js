import { CHANGE_CITYNAME } from '../constants';

import { changeCityname } from '../actions';

describe('Home Actions', () => {
  describe('changeCityname', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'Warsaw';
      const expectedResult = {
        type: CHANGE_CITYNAME,
        cityname: fixture,
      };

      expect(changeCityname(fixture)).toEqual(expectedResult);
    });
  });
});
