import './categories.scss';
import { useState } from 'react';

const Categories = () => {
    const categoriesData = [
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
            {categoriesData.map((item, i) => {
                return (
                    <li
                        onClick={() => onSelectCategory(i)}
                        className={
                            activeCategory === i
                                ? 'categories__item active'
                                : 'categories__item'
                        }
                    >
                        {item}
                    </li>
                );
            })}
        </ul>
    );
};

export default Categories;
