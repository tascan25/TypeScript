import classes from './CartItem.module.css';
import { addToCart,removeFromCart } from '../../store/cart_slice';
import { useDispatch } from 'react-redux';

const CartItem = (props) => {
  const { title, quantity, total, price,id } = props.item;
  const dispatch = useDispatch()

  const handleAddToCart = ()=>{
    const itemToAdd = {
      id:id,
      price:price,
      title:title
    }
    dispatch(addToCart({item:itemToAdd}))
  }
  const handleRemoveFromCart = ()=>{
    dispatch(removeFromCart({id:id}))
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleRemoveFromCart}>-</button>
          <button onClick={handleAddToCart}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
