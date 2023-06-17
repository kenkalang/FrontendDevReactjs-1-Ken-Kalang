import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './common/store.js';
import Home from './common/home/home.jsx';
import RestaurantDetail from './common/home/detail/restaurantDetail';

class App extends React.Component {
    render() {
        return (
            <React.StrictMode>
                <Provider store={store}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                        <Routes>
                            <Route
                                path="/restaurant/:id"
                                element={<RestaurantDetail />}
                            />
                        </Routes>
                    </BrowserRouter>
                </Provider>
            </React.StrictMode>
        );
    }
}

export default App;
