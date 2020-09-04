import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import './CheckoutProduct.css';
import * as StateProvider from './StateProvider';

function CheckoutProduct({ id, title, price, ratings, image }) {
    const [{basket},dispatch] = StateProvider.useStateValue();
    const removefromcart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            id:id,
        });
    }
    return (
        <div className="checkoutproduct">
            <img src = {image} alt = " " className = "checkoutproduct__image"></img>
            <div className="checkoutproduct__info">
                <p className="checkoutproduct__title">{title}</p>
                <p className="checkoutproduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutproduct__rating">
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
                <button onClick = {removefromcart}>Remove From Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;