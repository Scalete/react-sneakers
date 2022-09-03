import '../../scss/blocks/cart.scss';
import {Product} from './Product';

export const Cart = ({visibility = false, onHandleCart, cartProducts}) => {

    const renderCartProducts = (cartProducts) => {
        return cartProducts.map(item => <Product key={item[0].id} cartItemId={item.id} id={item[0].id} imageUrl={item[0].imageUrl} title={item[0].title} price={item[0].price} />); 
    }

    const renderEmptyCart = () => {
        return (
            <div className="cart-empty">
                <img src="./img/box.png" alt="" className="box" />
                <h2 className="title">Корзина пустая</h2>
                <span>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</span>
            </div>
        )
    }

    const countTotalPrice = () => {
        return cartProducts.reduce((sum, item) => item[0].price + sum, 0);
    }

    const countTax = () => {
        return Math.round(countTotalPrice() * 0.05);
    }

    const renderCartTotal = () => {
        const total = <div className="cart-total">
                            <ul>
                                <li>
                                    <span>Налог 5%: </span>
                                    <div></div>
                                    <b>{countTax()} грн</b>
                                </li>
                                <li>
                                    <span>Итого: </span>
                                    <div></div>
                                    <b>{countTotalPrice() - countTax()} грн</b>
                                </li>
                            </ul>
                            <button className="action">Оформить заказ <svg className='rightAnimation' width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7h13.714M8.714 1l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
                        </div>;

        return cartProducts.length? total: null;
    }

    const onStopClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div onClick={onHandleCart} className={"overlay " + (visibility? 'visible': 'invisible')} >
            <div onClick={onStopClick} className="cart">
                <div className="cart-header">
                    <h2 className="cart-title">Корзина</h2>
                    <button onClick={onHandleCart} className="action">Закрыть</button>
                </div>
                <div className="cart-wrapper">
                    {cartProducts.length? renderCartProducts(cartProducts): renderEmptyCart()}
                </div>
                
                {renderCartTotal()}
            </div>
        </div>
    )
}