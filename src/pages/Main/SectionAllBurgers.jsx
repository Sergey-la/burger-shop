import React from 'react';
import './main-page.scss';

import BurgerBlock from './BurgerBlock';

function SectionAllBurgers() {
    const [burgers, setBurgers] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3000/db.json')
            .then((res) => res.json())
            .then((json) => {
                setBurgers(json.AllBurgers);
            });
    }, []);

    return (
        <div className="burgers container">
            <h1>Все бургеры</h1>
            <div className="burgers-list">
                {burgers.map((item) => (
                    <BurgerBlock
                        img={item.imageUrl}
                        name={item.name}
                        key={`${item.name}_${item.id}`}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default SectionAllBurgers;
