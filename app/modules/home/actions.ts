import { createAction } from 'deox';
import { HomeTypes } from './types';
import { AsyncStatus, StarWarsRSDT } from 'types';

export const changeHomeInfo = createAction(
  'home/CHANGE_HOME_INFO',
  resolve => (payload: { key: keyof HomeTypes; value: string | AsyncStatus }) => resolve(payload),
);
export const setHomeInto = createAction(
  'home/SET_HOME_INFO',
  resolve => (payload: {}) => resolve(payload),
);

export const getHomeInfo = {
  request: createAction('home/GET_HOME_INFO', resolve => (payload: string) => resolve(payload)),
  success: createAction(
    'home/GET_HOME_INFO_SUCCESS',
    resolve => (payload: StarWarsRSDT[]) => resolve(payload),
  ),
  fail: createAction('home/GET_HOME_INFO_FAIL'),
};
