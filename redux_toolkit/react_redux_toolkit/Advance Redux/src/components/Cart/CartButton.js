import classes from './CartButton.module.css';
import { toogleCart } from '../../store/ui_slice';
import { useDispatch,useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const {totalQuantity} = useSelector((state)=>state.cart)

  const handleCart = ()=>{
    dispatch(toogleCart())
  }
  return (
    <button className={classes.button} onClick = {handleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
