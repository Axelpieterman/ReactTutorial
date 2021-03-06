import React from 'react';
import { formatPrice } from '../helpers';
import {TransitionGroup, CSSTransition} from 'react-transition-group'

class Order extends React.Component {
    RenderOrder = (key) => {
        const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "available";
    // Make sure the fish is loaded before we continue!
    if (!fish) return null;

    if (!isAvailable) {
      return (
        <CSSTransition
      classNames='order'
      key={key}
      timeout={{enter: 250, exit: 250 }}
      >
        <li key={key}>
          Sorry {fish ? fish.name : "fish"} is no longer available
        </li>
        </CSSTransition>
      );
    }
    return (
      <CSSTransition
      classNames='order'
      key={key}
      timeout={{enter: 250, exit: 250 }}
      >
      <li key={key}>
        {count} lbs {fish.name}
        {formatPrice(count * fish.price)}
        <button onClick={() => this.props.deleteFromOrder(key)}>Delete from order</button>
      </li>
      </CSSTransition>
    );
  };

  
    
    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === 'available';
            if(isAvailable) {
                return prevTotal + (count * fish.price);
            }
            return prevTotal
        }, 0);
        return (
            <div className='order-wrap'>
            <h2>Order</h2>
            <TransitionGroup component='ul' className='order'>{orderIds.map(this.RenderOrder)}</TransitionGroup>
                <div className='total'>
                    <strong>Total: {formatPrice(total)}</strong>
                </div>   
            </div>
        )
    }
}

export default Order;