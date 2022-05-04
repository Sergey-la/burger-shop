import './header.scss';
import logo from '../../static/images/logo.png';

import Cart from './Cart';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <a href="/" className="logo">
                        <img src={logo} alt="бургер" width={54} height={58} />
                        Лучшие бургеры
                    </a>
                    <Cart />
                </div>
            </div>
        </header>
    );
}

export default Header;
