import cart from '../../static/images/cart.svg';

function CartLink() {
    return (
        <a className="cart-link" href="/cart">
            <div className="cart-link__price">
                0<span>₽</span>
            </div>
            <img src={cart} alt="" width={25} height={25} />
            <span className="cart-link__quantity">0</span>
        </a>
    );
}

export default CartLink;
