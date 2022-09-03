import React from 'react'
import { SneakersContext } from "../../services/SneakersContext"

export const Product = ({cartItemId, id, imageUrl, title, price}) => {

    const {onDeleteCartProduct} = React.useContext(SneakersContext);
    const [isDeleteProductCartLoading, setIsDeleteProductCartLoading] = React.useState(false);

    const renderCurrentDeleteBtnState = (isDeleteProductCartLoading) => {
        const loading = <img src="./img/loading.gif" alt="Loading" style={{display: isDeleteProductCartLoading?'block': 'none', width: '25px', height: '25px'}}/>;
        const addImg = <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x=".5" y=".5" width="31" height="31" rx="7.5" fill="#fff" stroke="#DBDBDB"/><path d="m20.08 18.616-2.449-2.45 2.449-2.448c.944-.944-.52-2.409-1.465-1.464l-2.448 2.448-2.45-2.448c-.943-.944-2.408.52-1.463 1.464l2.448 2.449-2.448 2.448c-.945.945.52 2.41 1.464 1.465l2.449-2.449 2.448 2.449c.945.944 2.41-.52 1.465-1.464Z" fill="#B5B5B5"/></svg>;

        console.log(isDeleteProductCartLoading);

        return isDeleteProductCartLoading? loading: addImg;
    }

    return (
        <div className="product">
            <img className="product-img" src={imageUrl} alt="Cart Product" />
            <div className="product-content">
                <h5 className="product-title">{title}</h5>
                <b className="product-price">{price} грн</b>
            </div>
            <div className="product-delete" onClick={() => onDeleteCartProduct(id, cartItemId, setIsDeleteProductCartLoading)}>
                {renderCurrentDeleteBtnState(isDeleteProductCartLoading)}
            </div>
        </div>
    )
}