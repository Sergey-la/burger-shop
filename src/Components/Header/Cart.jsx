import cart from '../../static/images/cart.svg';

function Cart() {
    return (
        <a className="cart" href="/">
            <div className="cart__price">
                0<span>₽</span>
            </div>
            <img src={cart} alt="" width={25} height={25} />
            <span className="cart__quantity">0</span>
        </a>
    );
}

export default Cart;
