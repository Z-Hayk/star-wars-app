import { createReducer } from 'deox';
import { changeHomeInfo, setHomeInto, getHomeInfo } from './actions';
import { HomeTypes } from './types';
import { AsyncStatus } from 'types';

const initialState: HomeTypes = {
  searchText: '',
  data: [],
  getHomeInfoReqStat: AsyncStatus.NONE,
};

export const homeReducer = createReducer(initialState, handle => [
  handle(changeHomeInfo, (state, { payload }) => ({
    ...state,
    [payload.key]: payload.value,
  })),
  handle(setHomeInto, (state, { payload }) => ({
    ...state,
    ...payload,
  })),

  handle(getHomeInfo.request, (state, { payload }) => ({
    ...state,
    searchText: payload,
  })),
  handle(getHomeInfo.success, (state, { payload }) => ({
    ...state,
    data: payload,
    getHomeInfoReqStat: AsyncStatus.SUCCESS,
  })),
  handle(getHomeInfo.fail, state => ({
    ...state,
    getHomeInfoReqStat: AsyncStatus.FAIL,
  })),
]);
