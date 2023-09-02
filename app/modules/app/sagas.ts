import { getType, ActionType } from 'deox';
import { SagaIterator } from 'redux-saga';
import { Api } from 'services/api';
import { ShowPopUpMessage } from 'services/popUpMessage';
import { RootState, StarWarsRSDT } from 'types';
import { takeEvery, takeLatest, call, select, put } from 'redux-saga/effects';
import { resetStore, changeAppInfo, addCacheData, deleteCacheData } from './actions';
import lodashCloneDeep from 'lodash/cloneDeep';

function* resetStoreSaga(): SagaIterator {
  yield call(Api.clearAuthToken);
}

function* addCacheDataSaga({ payload }: ActionType<typeof addCacheData>): SagaIterator {
  const cacheData = yield select((state: RootState) => state.app.cacheData);

  if (!cacheData.some((item: StarWarsRSDT) => item.url === payload.url)) {
    yield call(ShowPopUpMessage, 'This element has been successfully added to favorites.');
    const newCacheItem = lodashCloneDeep(payload);
    newCacheItem.isCache = true;
    yield put(changeAppInfo({ key: 'cacheData', value: [...cacheData, newCacheItem] }));
  } else {
    yield call(ShowPopUpMessage, 'This element already exists.', true);
  }
}

function* deleteCacheDataSaga({ payload }: ActionType<typeof deleteCacheData>): SagaIterator {
  const cacheData = yield select((state: RootState) => state.app.cacheData);

  const newCacheData = cacheData.filter((item: StarWarsRSDT) => item.url !== payload.url);
  yield put(changeAppInfo({ key: 'cacheData', value: newCacheData }));
  yield call(ShowPopUpMessage, 'The element has been successfully deleted.');
}

export function* watchApp(): SagaIterator {
  yield takeEvery(getType(resetStore), resetStoreSaga);
  yield takeLatest(getType(addCacheData), addCacheDataSaga);
  yield takeLatest(getType(deleteCacheData), deleteCacheDataSaga);
}
