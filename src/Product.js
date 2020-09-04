import React from 'react';
import './Product.css';
import StarIcon from '@material-ui/icons/Star';
import {useStateValue} from './StateProvider';

function Product({ id, title, price, ratings, image }) {
    const [{basket},dispatch] = useStateValue();
    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                price: price,
                image: image,
                ratings: ratings,
            }
        })
    };
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(ratings)
                            .fill()
                            .map((_) => {
                                return (
                                    <StarIcon className="product__star"/>
                                );
                            })
                    }
                </div>
            </div>
            <img src={image} alt="" className="product__image"></img>
            <button onClick = {addToCart}>Add to basket</button>
        </div>
    )
}

export default Product;
