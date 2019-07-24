import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectWeather,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import Weather from 'components/Weather';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import { loadWeather } from '../App/actions';
import { changeCityname } from './actions';
import { makeSelectCityname } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage({
  cityname,
  loading,
  error,
  weather,
  onSubmitForm,
  onChangeCityname,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state cityname is not null, submit the form to load weather
    if (cityname && cityname.trim().length > 0) onSubmitForm();
  }, []);

  const weatherProps = {
    loading,
    error,
    weather,
  };

  return (
    <Section>
      <Form onSubmit={onSubmitForm}>
        <Input
          id="cityname"
          type="text"
          placeholder="City"
          value={cityname}
          onChange={onChangeCityname}
        />
      </Form>
      <Weather {...weatherProps} />
    </Section>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  weather: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  cityname: PropTypes.string,
  onChangeCityname: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  weather: makeSelectWeather(),
  cityname: makeSelectCityname(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeCityname: evt => dispatch(changeCityname(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadWeather());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
