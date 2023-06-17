import './index.css';
import React from 'react';
import { getRestaurants } from './action';
import { connect } from 'react-redux';
import StarRating from '../components/starRating';
import { withRouter } from '../witRouter';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openNow: false,
            restaurants: [],
            category: '',
        };
    }

    componentDidMount() {
        this.props.getRestaurantsFunction(this.state.category);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.restaurants !== this.props.restaurants) {
            this.setState({ restaurants: this.props.restaurants });
        }
    }

    categoryChange = (e) => {
        this.setState({ category: e.target.value });
        this.props.getRestaurantsFunction(e.target.value);
    };

    filterOpenChange = () => {
        this.setState({ openNow: !this.state.openNow });
    };

    navigateToDetail = (id) => {
        this.props.navigate('/restaurant/' + id);
    };

    render() {
        console.log('hai', this.state.restaurants);
        return (
            <>
                <header>
                    <h1>Restaurants</h1>
                    <h2>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint commodi
                        repudiandae consequuntur voluptatum laborum numquam
                        blanditiis harum quisquam eius sed odit fugiat iusto
                        fuga praesentium optio, eaque rerum! Provident similique
                        accusantium nemo autem.
                    </h2>
                </header>
                <div className="filter">
                    <h3>Filter By:</h3>
                    <select
                        name="category"
                        value={this.state.category}
                        onChange={this.categoryChange}
                    >
                        <option value="">Category</option>
                        <option value="ca">Italian</option>
                        <option value="ki">Chinese</option>
                        <option value="me">Japanese</option>
                        <option value="de">Seafood</option>
                    </select>
                </div>
                <div className="restaurant-container">
                    <div className="restaurant">
                        {this.state.restaurants.map((restaurant) => {
                            return (
                                <div
                                    key={restaurant.id}
                                    className="restaurant-card"
                                >
                                    <div className="restaurant-image">
                                        <img
                                            src={
                                                import.meta.env.VITE_API_URL +
                                                '/images/medium/' +
                                                restaurant.pictureId
                                            }
                                            alt=""
                                        />
                                    </div>
                                    <div className="restaurant-info">
                                        <h3>{restaurant.name}</h3>
                                        <StarRating
                                            rating={restaurant.rating}
                                        />
                                        <p>{restaurant.categories}</p>
                                        <button
                                            className="btn"
                                            onClick={() =>
                                                this.navigateToDetail(
                                                    restaurant.id,
                                                )
                                            }
                                        >
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants.restaurantList,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getRestaurantsFunction: (query) => dispatch(getRestaurants(query)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
