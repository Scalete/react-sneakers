import '../scss/blocks/card.scss';

export const Card = ({title, price, imageUrl}) => {
    return (
        <div className="card">
            <div className="favorite">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="7" fill="#FFFFFF" stroke="#F2F2F2" strokeWidth={2}/><path d="M22.585 12.223a4.298 4.298 0 0 0-.948-1.37A4.453 4.453 0 0 0 18.53 9.6a4.478 4.478 0 0 0-2.796.979A4.478 4.478 0 0 0 12.94 9.6a4.453 4.453 0 0 0-3.107 1.253c-.404.39-.726.856-.949 1.37a4.213 4.213 0 0 0-.35 1.684c0 .551.114 1.125.339 1.709.188.488.458.994.803 1.505.547.809 1.299 1.652 2.232 2.507a24.93 24.93 0 0 0 3.144 2.436l.395.252c.175.11.4.11.575 0l.395-.252a25.245 25.245 0 0 0 3.144-2.436c.933-.855 1.685-1.698 2.232-2.507a7.538 7.538 0 0 0 .803-1.505 4.751 4.751 0 0 0 .338-1.709 4.182 4.182 0 0 0-.348-1.685Z" stroke="#F2F2F2" strokeWidth={2} fill="#FFFFFF"/></svg>
            </div>
            <img src={imageUrl} alt="Card Product" />
            <h5 className="card-title">{title}</h5>
            <div className="card-price">
                <div className="card-price-text">
                    <span>Цена:</span>
                    <b>{price} грн.</b>
                </div>
                <button>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x=".5" y=".5" width="31" height="31" rx="7.5" fill="#fff" stroke="#F2F2F2"/><path d="M20.665 15.131h-3.463v-3.463c0-1.335-2.07-1.335-2.07 0v3.463h-3.464c-1.335 0-1.335 2.071 0 2.071h3.463v3.463c0 1.335 2.071 1.335 2.071 0v-3.463h3.463c1.335 0 1.335-2.07 0-2.07Z" fill="#D3D3D3"/></svg>
                </button>
            </div>
        </div>      
    )
}