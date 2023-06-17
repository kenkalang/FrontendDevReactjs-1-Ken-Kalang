import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import restaurantReducer from './home/reducer';
const rootReducer = combineReducers({
    restaurants: restaurantReducer,
});

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhancer);

export default store;

sagaMiddleware.run(rootSaga);
