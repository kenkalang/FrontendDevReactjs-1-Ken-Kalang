import {
    GET_RESTAURANTS,
    SET_RESTAURANTS,
    GET_RESTAURANT,
    SET_RESTAURANT,
} from './actionTypes';

export function getRestaurants(query) {
    return {
        type: GET_RESTAURANTS,
        payload: query,
    };
}

export function setRestaurants(restaurants) {
    return {
        type: SET_RESTAURANTS,
        payload: restaurants,
    };
}

export function getRestaurant(id) {
    return {
        type: GET_RESTAURANT,
        payload: id,
    };
}

export function setRestaurant(restaurant) {
    return {
        type: SET_RESTAURANT,
        payload: restaurant,
    };
}
