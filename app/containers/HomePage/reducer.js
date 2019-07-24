import produce from 'immer';
import { CHANGE_CITYNAME } from './constants';

export const initialState = {
  cityname: 'Warsaw',
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_CITYNAME:
        draft.cityname = action.cityname;
        break;
    }
  });

export default homeReducer;
