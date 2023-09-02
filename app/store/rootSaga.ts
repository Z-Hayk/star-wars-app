import { SagaIterator } from 'redux-saga';
import { all, AllEffect } from 'redux-saga/effects';

import { watchApp } from 'modules/app/sagas';
import { watchHome } from 'modules/home/sagas';

export default function* rootSaga(): Generator<AllEffect<SagaIterator<Promise<void>>>> {
  yield all([watchApp(), watchHome()]);
}
