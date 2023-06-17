import { SET_RESTAURANTS, SET_RESTAURANT } from './actionTypes';

const initialState = {
    restaurantList: [],
    restaurant: {},
};

const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESTAURANTS:
            return {
                ...state,
                restaurantList: action.payload,
            };
        case SET_RESTAURANT:
            return {
                ...state,
                restaurant: action.payload,
            };
        default:
            return state;
    }
};

export default restaurantReducer;
