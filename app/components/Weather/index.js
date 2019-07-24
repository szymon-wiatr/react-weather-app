import React from 'react';
import PropTypes from 'prop-types';

import LoadingIndicator from 'components/LoadingIndicator';
import Forecast from 'components/Forecast';

function Weather({ loading, error, weather }) {
  if (loading) {
    return <LoadingIndicator />;
  }

  if (error !== false) {
    return <h3>Something went wrong, please try again!</h3>;
  }

  if (weather !== false) {
    return <Forecast forecast={weather} />;
  }

  return null;
}

Weather.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  weather: PropTypes.any,
};

export default Weather;
