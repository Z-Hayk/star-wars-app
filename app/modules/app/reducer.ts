import { createReducer } from 'deox';
import { changeAppInfo, setAppInto } from './actions';
import { AppTypes } from './types';

const initialState: AppTypes = {
  initialScreen: 'Welcome',
  cacheData: [],
};

export const appReducer = createReducer(initialState, handle => [
  handle(changeAppInfo, (state, { payload }) => ({
    ...state,
    [payload.key]: payload.value,
  })),
  handle(setAppInto, (state, { payload }) => ({
    ...state,
    ...payload,
  })),
]);
