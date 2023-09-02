import AsyncStorage from '@react-native-async-storage/async-storage';
import { getType } from 'deox';
import { RootState } from 'types';
import { Action, combineReducers } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import { resetStore } from 'modules/app/actions';
import { appReducer } from 'modules/app/reducer';
import { homeReducer } from 'modules/home/reducer';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['app'],
};

const projectReducer = combineReducers<RootState>({
  app: appReducer,
  home: homeReducer,
});

const rootReducer = (
  state: RootState | undefined,
  action: Action,
): ReturnType<typeof projectReducer> => {
  if (action.type === getType(resetStore)) {
    state = undefined;
  }

  return projectReducer(state, action);
};

export default persistReducer(rootPersistConfig, rootReducer);
