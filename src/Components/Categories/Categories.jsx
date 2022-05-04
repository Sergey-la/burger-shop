import './categories.scss';
import { useState } from 'react';

function Categories({ categoriesData }) {
    categoriesData = [
        'Бургеры из говядины',
        'Бургеры из курицы и рыбы',
        'Кинг Комбо',
        'Кинг Бокс 5в1',
    ];

    const [activeCategory, setActiveCategory] = useState(null);

    const onSelectCategory = (i) => {
        setActiveCategory(i);
    };

    return (
        <ul className="categories container">
            <li
                onClick={() => onSelectCategory(null)}
                className={
                    activeCategory === null
                        ? 'categories__item active'
                        : 'categories__item'
                }
            >
                Все бургеры
            </li>
            {categoriesData &&
                categoriesData.map((item, i) => {
                    return (
                        <li
                            onClick={() => onSelectCategory(i)}
                            className={
                                activeCategory === i
                                    ? 'categories__item active'
                                    : 'categories__item'
                            }
                            key={`${item}_${i}`}
                        >
                            {item}
                        </li>
                    );
                })}
        </ul>
    );
}

export default Categories;
