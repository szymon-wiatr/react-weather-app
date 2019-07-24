import { selectHome, makeSelectCityname } from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = {
      weatherData: {},
    };
    const mockedState = {
      home: homeState,
    };
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectCityname', () => {
  const citynameSelector = makeSelectCityname();
  it('should select the cityname', () => {
    const cityname = 'Skarżysko-Kamienna';
    const mockedState = {
      home: {
        cityname,
      },
    };
    expect(citynameSelector(mockedState)).toEqual(cityname);
  });
});
