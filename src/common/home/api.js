import { wretchInstance } from '../wretchInstance';

export const getRestaurantsApi = (query) => {
    return wretchInstance()
        .url(import.meta.env.VITE_API_URL + '/search?q=' + query)
        .get()
        .json((response) => {
            return response;
        });
};

export const getRestaurantApi = (id) => {
    return wretchInstance()
        .url(import.meta.env.VITE_API_URL + '/detail/' + id)
        .get()
        .json((response) => {
            console.log(response);
            return response;
        });
};
