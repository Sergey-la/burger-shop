import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.scss';
import App from './App';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound/NotFound';
import SectionBurgersBeef from './pages/Main/SectionBurgersBeef';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<App />} />
                <Route path="/cart" element={<Cart />} exact />
                <Route path="/burgeri-s-govadinoi" element={<SectionBurgersBeef />} exact />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
