import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

export function Forecast(props) {
  const { forecast } = props;
  return (
    <Wrapper>
      {forecast.weather && (
        <>
          <img
            alt="icon"
            src={`https://www.weatherbit.io/static/img/icons/${
              forecast.weather.icon
            }.png`}
          />
          <h3 className="forecast-description">
            {forecast.weather.description}
          </h3>
        </>
      )}
      <h1 className="forecast-temperature">{forecast.temp} ℃</h1>
      <span className="sun-icon" role="img" aria-labelledby="sunrise">
        🌅 {forecast.sunrise}
      </span>
      <span className="sun-icon" role="img" aria-labelledby="sunset">
        🌄 {forecast.sunset}
      </span>
    </Wrapper>
  );
}

Forecast.propTypes = {
  forecast: PropTypes.object,
};

export default Forecast;
