import React from 'react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import { render } from 'react-testing-library';

import Weather from '../index';
import configureStore from '../../../configureStore';

describe('<Weather />', () => {
  it('should render the loading indicator when its loading', () => {
    const { container } = render(<Weather loading />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render an error if loading failed', () => {
    const { queryByText } = render(
      <Weather loading={false} error={{ message: 'Loading failed!' }} />,
    );
    expect(queryByText(/Something went wrong/)).not.toBeNull();
  });

  it('should render the weather if loading was successful', () => {
    const store = configureStore(
      { global: { currentCity: 'Skarżysko-Kamienna' } },
      browserHistory,
    );
    const weather = {
      rh: 45,
      pod: 'd',
      lon: 20.87162,
      pres: 983.265,
      timezone: 'Europe/Warsaw',
      ob_time: '2019-07-18 15:28',
      country_code: 'PL',
      clouds: 0,
      ts: 1563463708,
      solar_rad: 339.82,
      state_code: '84',
      city_name: 'Skarżysko-Kamienna',
      wind_spd: 0.644932,
      last_ob_time: '2019-07-18T15:05:00',
      wind_cdir_full: 'north-northeast',
      wind_cdir: 'NNE',
      slp: 1013.09,
      vis: 24.135,
      h_angle: 56.3,
      sunset: '18:43',
      dni: 688.51,
      dewpt: 8.7,
      snow: 0,
      uv: 2.69986,
      precip: 0,
      wind_dir: 12,
      sunrise: '02:40',
      ghi: 339.82,
      dhi: 79.51,
      aqi: 36,
      lat: 51.11311,
      weather: {
        icon: 'c01d',
        code: '800',
        description: 'Clear sky',
      },
      datetime: '2019-07-18:15',
      temp: 21.1,
      station: 'AS411',
      elev_angle: 32.25,
      app_temp: 20.4,
    };

    const { container } = render(
      <Provider store={store}>
        <Weather weather={weather} error={false} />
      </Provider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should not render anything if nothing interesting is provided', () => {
    const { container } = render(
      <Weather weather={false} error={false} loading={false} />,
    );

    expect(container.firstChild).toBeNull();
  });
});
