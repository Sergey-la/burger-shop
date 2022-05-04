import React from 'react';
import axios from 'axios';

import './main-page.scss';

import BurgerBlock from './BurgerBlock';

function SectionAllBurgers() {
    const [burgers, setBurgers] = React.useState([]);

    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({ data }) => {
            setBurgers(data.AllBurgers);
        });
    }, []);

    return (
        <div className="burgers container">
            <h1>Все бургеры</h1>
            <div className="burgers-list">
                {burgers.map((item) => (
                    <BurgerBlock {...item} key={`${item.name}_${item.id}`} />
                ))}
            </div>
        </div>
    );
}



export default SectionAllBurgers;
