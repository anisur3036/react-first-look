import React from 'react';

import './Burger.css';
import BurgerIngreadient from './BurgerIngreadient/BurgerIngreadient';
import BurgerBuilder from '../containers/BurgerBuilder/BurgerBuilder';

const Burger = (props) => {
  return (
    <div className="Burger">
      <BurgerIngreadient type="bread-top" />
      <BurgerIngreadient type="cheese" />
      <BurgerIngreadient type="meat" />
      <BurgerIngreadient type="bread-bottom" />
    </div>
  );
}

export default Burger;