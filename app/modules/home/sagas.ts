import { getType, ActionType } from 'deox';
import { SagaIterator } from 'redux-saga';
import { takeLatest, put, delay, all, call } from 'redux-saga/effects';
import { Home } from 'services';
import { starWarsDataGenerator } from 'utils';
import { getHomeInfo, changeHomeInfo, setHomeInto } from './actions';
import { AsyncStatus } from 'types';

function* getHomeInfoSaga({ payload }: ActionType<typeof getHomeInfo.request>): SagaIterator {
  if (payload.length > 2) {
    yield put(changeHomeInfo({ key: 'getHomeInfoReqStat', value: AsyncStatus.LOADING }));
    yield delay(500);

    const requests = [
      yield call(Home.getPeopleReq, payload),
      yield call(Home.getStarshipReq, payload),
      yield call(Home.getPlanetReq, payload),
      yield call(Home.getFilmReq, payload),
    ];
    const data = yield all(requests);
    const newData = starWarsDataGenerator(data);

    yield put(getHomeInfo.success(newData));
  } else {
    yield put(setHomeInto({ getHomeInfoReqStat: AsyncStatus.NONE, data: [] }));
  }
}

export function* watchHome(): SagaIterator {
  yield takeLatest(getType(getHomeInfo.request), getHomeInfoSaga);
}
