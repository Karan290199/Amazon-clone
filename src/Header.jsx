import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import CartIcon from "@material-ui/icons/AddShoppingCartOutlined";
import {useStateValue} from './StateProvider';
import {auth} from './firebase';
function Header() {
    const [{basket, user}] = useStateValue();
    const login = () =>{
        if(user){
            auth.signOut();
        }
    };

    return (
        <nav className="header">
            <Link to = "/">
                <img className="header__logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt = ""></img>
            </Link>
            <div className="header__search">
                <input type = "text" className = "header__searchInput"></input>
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>
            <div className = "header__nav">
                <Link to={!user && "/login"} className = "header__link">
                    <div className="header__option" onClick = {login}>
                        <span className="header__optionLineOne">Hello </span>
                        <span className="header__optionLineTwo">{user?'Sign Out':'Sign In'}</span>
                    </div>
                </Link>
                
                <Link to="/login" className = "header__link" >
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns </span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                
                <Link to="/login" className = "header__link" >
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className = "header__link">
                    <div className="header__optionBasket">
                        <CartIcon></CartIcon>
                        <span className = "header__optionLineTwo header__basketcount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
};

export default Header;
