import { all } from 'redux-saga/effects';
import restaurantSaga from './home/saga';

export default function* rootSaga() {
    yield all([...restaurantSaga]);
}
