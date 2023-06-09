import React, { useContext } from 'react';
import classNames from 'classnames';
import {
  removeOneCart,
  addOneCart,
  deleteCart,
} from '../utils/cartApi';
import { ProductsContext } from '../context/ProductsContext';
import { Cart } from '../types/Cart';

type Props = {
  cart: Cart,
};

export const CartItem: React.FC<Props> = ({
  cart,
}) => {
  const { cartList, setCartList } = useContext(ProductsContext);

  const handleMinusButton = () => {
    setCartList(removeOneCart(cartList, cart));
  };

  const handlePlusButton = () => {
    setCartList(addOneCart(cartList, cart));
  };

  const handleCrossButton = () => {
    setCartList(deleteCart(cartList, cart));
  };

  const {
    image,
    name,
    quantity,
    price,
  } = cart;

  return (
    <div className="cart-block">
      <button
        className="cart-block__cross"
        aria-label="Close"
        data-cy="cartDeleteButton"
        type="button"
        onClick={handleCrossButton}
      />
      <img
        className="cart-block__image"
        src={image}
        alt={name}
      />
      <div className="cart-block__model">
        {name}
      </div>
      <div className="cart-select">
        <button
          className={classNames(
            'cart-select__minus',
            { 'cart-select__minus--disabled': quantity === 1 },
          )}
          disabled={quantity === 1}
          aria-label="Delete"
          type="button"
          onClick={handleMinusButton}
        />
        <div className="cart-select__number">
          {quantity}
        </div>
        <button
          className="cart-select__plus"
          type="button"
          aria-label="Add"
          onClick={handlePlusButton}
        />
      </div>
      <h2 className="cart-block__price">
        {`$${price}`}
      </h2>
    </div>
  );
};
