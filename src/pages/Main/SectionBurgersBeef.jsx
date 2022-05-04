import React from 'react';
import axios from 'axios';
import { Header, Categories } from '../../Components';
import BurgerBlock from './BurgerBlock';

function SectionBurgersBeef() {
    const [burgers, setBurgers] = React.useState([]);

    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({ data }) => {
            setBurgers(data.beef);
        });
    }, []);

    return (
        <div className='burgers container'>
            <Header />
            <Categories />
            <h1>Бургеры с говядиной</h1>
            <div className="burgers-list">
                {burgers.map((item) => (
                    <BurgerBlock {...item} key={`${item.name}_${item.id}`} />
                ))}
            </div>
        </div>
    );
}

export default SectionBurgersBeef;
