import {fork} from 'redux-saga/effects';
import homeSaga from '@containers/home/saga';

function* rootSaga() {
  yield fork(homeSaga);
}

export default rootSaga;
