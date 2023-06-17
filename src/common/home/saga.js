import { GET_RESTAURANT, GET_RESTAURANTS } from './actionTypes';
import { call, takeLatest, put } from '@redux-saga/core/effects';
import { getRestaurantsApi, getRestaurantApi } from './api';
import { setRestaurants, setRestaurant } from './action';

export function* getRestaurants(action) {
    try {
        const response = yield call(getRestaurantsApi, action.payload);
        yield put(setRestaurants(response.restaurants));
    } catch (error) {
        console.log(error);
    }
}

export function* getRestaurantSaga(action) {
    try {
        const response = yield call(getRestaurantApi, action.payload);
        yield put(setRestaurant(response.restaurant));
    } catch (error) {
        console.log(error);
    }
}

const restaurantSaga = [
    takeLatest(GET_RESTAURANTS, getRestaurants),
    takeLatest(GET_RESTAURANT, getRestaurantSaga),
];

export default restaurantSaga;
