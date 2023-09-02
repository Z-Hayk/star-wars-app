import { createAction } from 'deox';
import { AppTypes } from './types';
import { StarWarsRSDT } from 'types';

export const changeAppInfo = createAction(
  'app/CHANGE_APP_INFO',
  resolve => (payload: { key: keyof AppTypes; value: 'Welcome' | 'Home' | StarWarsRSDT[] }) =>
    resolve(payload),
);
export const setAppInto = createAction(
  'app/SET_APP_INFO',
  resolve => (payload: {}) => resolve(payload),
);

export const addCacheData = createAction(
  'app/ADD_CACHE_DATA',
  resolve => (payload: StarWarsRSDT) => resolve(payload),
);
export const deleteCacheData = createAction(
  'app/DELETE_CACHE_DATA',
  resolve => (payload: StarWarsRSDT) => resolve(payload),
);

export const resetStore = createAction('app/RESET_STORE');
