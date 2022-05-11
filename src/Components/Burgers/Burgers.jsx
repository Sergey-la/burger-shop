import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import BurgerBlock from './BurgerBlock';

import { setBurgers } from '../../redux/actions/burgers';

import './burgers.scss';

function Burgers() {
    const dispatch = useDispatch();

    const { items } = useSelector((state) => {
        return {
            items: state.burgers.items,
        };
    });

    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({ data }) => {
            dispatch(setBurgers(data.AllBurgers));
        });
    }, []);

    return (
        <div className="burgers container">
            <h1>Все бургеры</h1>
            <div className="burgers-list">
                {items.map((item) => (
                    <BurgerBlock {...item} key={`${item.name}_${item.id}`} />
                ))}
            </div>
        </div>
    );
}

export default Burgers;
