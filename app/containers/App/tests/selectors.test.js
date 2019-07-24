import {
  selectGlobal,
  makeSelectLoading,
  makeSelectError,
  makeSelectWeather,
} from '../selectors';

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalState = {};
    const mockedState = {
      global: globalState,
    };
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = {
      global: {
        loading,
      },
    };
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error', () => {
    const error = 404;
    const mockedState = {
      global: {
        error,
      },
    };
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectWeather', () => {
  const weatherSelector = makeSelectWeather();
  it('should select the weather', () => {
    const weather = [];
    const mockedState = {
      global: {
        weatherData: {
          weather,
        },
      },
    };
    expect(weatherSelector(mockedState)).toEqual(weather);
  });
});
