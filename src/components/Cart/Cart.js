import '../../scss/blocks/cart.scss';
import {Product} from './Product.js';

export const Cart = ({visibility = false, onClickCart}) => {

    const onStopClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div onClick={onClickCart} className={"overlay " + (visibility? 'visible': 'invisible')} >
            <div onClick={onStopClick} className="cart">
                <h2 className="cart-title">Корзина</h2>
                <div className="cart-wrapper">
                    <Product imgUrl="/img/products/1.jpg" title="Мужские Кроссовки Nike Air Max 270" price="1235"/>
                </div>
                <div className="cart-total">
                    <ul>
                        <li>
                            <span>Итого: </span>
                            <div></div>
                            <b>21 498 грн</b>
                        </li>
                        <li>
                            <span>Налог 5%: </span>
                            <div></div>
                            <b>1074 грн</b>
                        </li>
                    </ul>
                    <button className="action">Оформить заказ <svg className='rightAnimation' width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7h13.714M8.714 1l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
                </div>
            </div>
        </div>
    )
}