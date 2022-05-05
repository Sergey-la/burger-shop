import { MAIN_ROUTE, CART_ROUTE } from './utils/consts';
import Main from './pages/Main/Main';
import Cart from './pages/Cart/Cart';

export const routes = [
    {
        path: MAIN_ROUTE,
        Component: <Main />,
    },
    {
        path: CART_ROUTE,
        Component: <Cart />,
    },
];
