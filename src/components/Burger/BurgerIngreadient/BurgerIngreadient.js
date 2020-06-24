import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Ingedient.css';

class BurgerIngreadient extends Component {
  render() {
    let ingedient = null;
  
    switch (this.props.type) {
      case ('bread-bottom'):
        ingedient = <div className="BreadBottom"></div>;
        break;
      case ('bread-top'):
        ingedient = (
          <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
          </div>
        );
        break;
      case ('meat'):
        ingedient = <div className="Meat"></div>;
        break;
      case ('cheese'):
        ingedient = <div className="Cheese"></div>;
        break;
      case ('bacon'):
        ingedient = <div className="Bacon"></div>;
        break;
      case ('salad'):
        ingedient = <div className="Salad"></div>;
        break;
      default:
        ingedient = null;
      
    }
    return ingedient;

  }
}

BurgerIngreadient.propTypes = {
  type: PropTypes.string.isRequired
}

export default BurgerIngreadient;
