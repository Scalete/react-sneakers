import React from 'react'
import { SneakersContext } from '../services/SneakersContext';

import '../scss/blocks/card.scss';

export const Card = ({favoriteItemId, id, title, price, imageUrl}) => {
    const {onAddToCart, onAddtoFavorites, isProductAddedToCart, isProductAddedToFavorites, onDeleteFavorite} = React.useContext(SneakersContext);
    const [onAddToCartLoading, setOnAddToCartLoading] = React.useState(false);
    const [onAddToFavoritesLoading, setFavoriteLoading] = React.useState(false);

    const renderCurrentAddBtnState = (onAddToCartLoading) => {
        const loading =  <img src="./img/loading.gif" alt="Loading" style={{display: onAddToCartLoading?'block': 'none', width: '25px', height: '25px'}}/>;
        const addImg = <svg style={{display: onAddToCartLoading?'none': 'block'}} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x=".5" y=".5" width="31" height="31" rx="7.5" fill="#fff" stroke="#F2F2F2"/><path d="M20.665 15.131h-3.463v-3.463c0-1.335-2.07-1.335-2.07 0v3.463h-3.464c-1.335 0-1.335 2.071 0 2.071h3.463v3.463c0 1.335 2.071 1.335 2.071 0v-3.463h3.463c1.335 0 1.335-2.07 0-2.07Z" fill="#D3D3D3"/></svg>;
        const succesImg = <img src="/img/succes-btn.png" alt="Succes Btn"/>;

        return isProductAddedToCart(id)? succesImg: onAddToCartLoading? loading: addImg;
    }

    const renderCurrentFavoriteBtnState = (onAddToFavoritesLoading) => {
        const loading =  <img src="./img/loading.gif" alt="Loading" style={{display: onAddToFavoritesLoading?'block': 'none', width: '25px', height: '25px'}}/>;
        const favoriteImg = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="7" fill="#FFFFFF" stroke="#F2F2F2" strokeWidth={2}/><path d="M22.585 12.223a4.298 4.298 0 0 0-.948-1.37A4.453 4.453 0 0 0 18.53 9.6a4.478 4.478 0 0 0-2.796.979A4.478 4.478 0 0 0 12.94 9.6a4.453 4.453 0 0 0-3.107 1.253c-.404.39-.726.856-.949 1.37a4.213 4.213 0 0 0-.35 1.684c0 .551.114 1.125.339 1.709.188.488.458.994.803 1.505.547.809 1.299 1.652 2.232 2.507a24.93 24.93 0 0 0 3.144 2.436l.395.252c.175.11.4.11.575 0l.395-.252a25.245 25.245 0 0 0 3.144-2.436c.933-.855 1.685-1.698 2.232-2.507a7.538 7.538 0 0 0 .803-1.505 4.751 4.751 0 0 0 .338-1.709 4.182 4.182 0 0 0-.348-1.685Z" stroke="#F2F2F2" strokeWidth={2} fill="#FFFFFF"/></svg>
        const succesImg = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="7" fill="#FEF0F0"/><path d="M23.613 11.869a4.703 4.703 0 0 0-1.054-1.498 4.908 4.908 0 0 0-1.556-1.004A5.016 5.016 0 0 0 19.107 9 5.035 5.035 0 0 0 16 10.07 5.035 5.035 0 0 0 12.895 9c-.658 0-1.295.123-1.897.367a4.897 4.897 0 0 0-1.555 1.004 4.673 4.673 0 0 0-1.054 1.498A4.546 4.546 0 0 0 8 13.712c0 .603.126 1.23.376 1.869.21.534.51 1.087.893 1.646.607.885 1.442 1.807 2.48 2.742a27.65 27.65 0 0 0 3.493 2.665l.438.275a.607.607 0 0 0 .64 0l.438-.275a28.018 28.018 0 0 0 3.493-2.665c1.038-.935 1.873-1.857 2.48-2.742a8.21 8.21 0 0 0 .893-1.646c.25-.639.376-1.266.376-1.869a4.515 4.515 0 0 0-.387-1.843Z" fill="url(#a)"/><defs><linearGradient id="a" x1="16" y1="9" x2="16" y2="23" gradientUnits="userSpaceOnUse"><stop stopColor="#FFB0B0"/><stop offset="1" stopColor="#FF4343"/></linearGradient></defs></svg>;

        return isProductAddedToFavorites(id)? succesImg: onAddToFavoritesLoading? loading: favoriteImg;
    }

    const isOnFavoritePage = () => {
        return Boolean(favoriteItemId);
    }

    return (
        <div className="card">
            <div className="favorite">
                <button disabled={!isOnFavoritePage() && isProductAddedToFavorites(id)} onClick={() => isOnFavoritePage()?onDeleteFavorite(id, favoriteItemId, setFavoriteLoading):onAddtoFavorites(id, setFavoriteLoading)}>
                    {renderCurrentFavoriteBtnState(onAddToFavoritesLoading)}
                </button>
            </div>
            <img src={imageUrl} alt="Card Product" />
            <h5 className="card-title">{title}</h5>
            <div className="card-price">
                <div className="card-price-text">
                    <span>Цена:</span>
                    <b>{price} грн.</b>
                </div>
                <button style={{display: isOnFavoritePage()?"none":"block"}} disabled={isProductAddedToCart(id)} className='card-add' onClick={() => onAddToCart(id, setOnAddToCartLoading)}>
                    {renderCurrentAddBtnState(onAddToCartLoading)}
                </button>
            </div>
        </div>      
    )
}