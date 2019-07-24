import React from 'react';
import { render } from 'react-testing-library';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';

import { HomePage, mapDispatchToProps } from '../index';
import { changeCityname } from '../actions';
import { loadWeather } from '../../App/actions';
import configureStore from '../../../configureStore';

describe('<HomePage />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <HomePage loading={false} error={false} weather={{}} />
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should fetch the weather on mount if a cityname exists', () => {
    const submitSpy = jest.fn();
    render(
      <Provider store={store}>
        <HomePage
          cityname="Not Empty"
          onChangeCityname={() => {}}
          onSubmitForm={submitSpy}
        />
      </Provider>,
    );
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should not call onSubmitForm if cityname is an empty string', () => {
    const submitSpy = jest.fn();
    render(
      <Provider store={store}>
        <HomePage onChangeCityname={() => {}} onSubmitForm={submitSpy} />
      </Provider>,
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  it('should not call onSubmitForm if cityname is null', () => {
    const submitSpy = jest.fn();
    render(
      <Provider store={store}>
        <HomePage
          cityname=""
          onChangeCityname={() => {}}
          onSubmitForm={submitSpy}
        />
      </Provider>,
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeCityname', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeCityname).toBeDefined();
      });

      it('should dispatch changeCityname when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const cityname = 'Skarżysko-Kamienna';
        result.onChangeCityname({ target: { value: cityname } });
        expect(dispatch).toHaveBeenCalledWith(changeCityname(cityname));
      });
    });

    describe('onSubmitForm', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });

      it('should dispatch loadWeather when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSubmitForm();
        expect(dispatch).toHaveBeenCalledWith(loadWeather());
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.onSubmitForm(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});
