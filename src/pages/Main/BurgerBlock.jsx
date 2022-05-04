import React from 'react';

function BurgerBlock({ img, name, price }) {
    return (
        <div className="burgers__block">
            <div className="burgers__block-wrapper">
                <img src={img} alt={name} width={256} height={256} />
                <h2>{name}</h2>
                <div className="burgers__block-price">
                    {price} <span>₽</span>
                </div>
                <div className='burgers__block-btn-cart'>
                    <button>+ Добавить</button>
                </div>
            </div>
        </div>
    );
}

export default BurgerBlock;
