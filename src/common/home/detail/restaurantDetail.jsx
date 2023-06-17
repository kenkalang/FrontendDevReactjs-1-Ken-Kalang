import React from 'react';
import { getRestaurant } from '../action';
import { connect } from 'react-redux';
import { withRouter } from '../../witRouter';
import StarRating from '../../components/starRating';
import './index.css';

class RestaurantDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurant: {},
        };
    }

    componentDidMount() {
        this.props.getRestaurantFunction(this.props.params.id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.restaurant !== this.props.restaurant) {
            this.setState({ restaurant: this.props.restaurant });
        }
    }

    render() {
        return (
            console.log(this.state.restaurant),
            (
                <div className="restaurant-detail">
                    <div className="restaurant-description">
                        <div className="restaurant-desc-detail">
                            <h1>{this.state.restaurant.name}</h1>
                            <StarRating rating={this.state.restaurant.rating} />
                            <h3>{this.state.restaurant.description}</h3>
                        </div>
                        <div className="restaurant-img">
                            <img
                                src={
                                    import.meta.env.VITE_API_URL +
                                    '/images/medium/' +
                                    this.state.restaurant.pictureId
                                }
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="review-container">
                        {this.state.restaurant.customerReviews &&
                            this.state.restaurant.customerReviews.map(
                                (review, index) => (
                                    <div key={index} className="review">
                                        <h4>{review.name}</h4>
                                        <p>{review.review}</p>
                                    </div>
                                ),
                            )}
                    </div>
                </div>
            )
        );
    }
}

const mapStateToProps = (state) => {
    return {
        restaurant: state.restaurants.restaurant,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getRestaurantFunction: (id) => dispatch(getRestaurant(id)),
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(RestaurantDetail),
);
