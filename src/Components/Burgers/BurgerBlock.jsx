import React from 'react';
import PropTypes from 'prop-types';

function BurgerBlock(props) {
    const { imageUrl, name, price } = props;

    return (
        <div className="burgers__block">
            <div className="burgers__block-wrapper">
                <img src={imageUrl} alt={name} width={256} height={256} />
                <h2>{name}</h2>
                <div className="burgers__block-price">
                    {price} <span>₽</span>
                </div>
                <div className="burgers__block-btn-cart">
                    <button>+ Добавить</button>
                </div>
            </div>
        </div>
    );
}

BurgerBlock.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

export default BurgerBlock;
