import {call, takeLatest, put} from 'redux-saga/effects';
import {mastersService} from '@services';
import * as homeActs from './actions';
import * as sliceActs from './slice';

function* getMemberGroups() {
  try {
    const {data} = yield call(mastersService.getHomePages);
    yield put(sliceActs.getHomeActionSucceed(data));
  } catch (err) {
    console.log(err);
  }
}
export default function* homeSaga() {
  yield takeLatest(homeActs.HomeAction, getMemberGroups);
}
