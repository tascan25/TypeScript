import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const {cartIsVisible} = useSelector((state)=>state.ui)
  const cart = useSelector((state)=>state.cart);
  useEffect(() => {
  const sendData = async () => {
    const response = await fetch(
      "https://react-redux-e711c-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
      {
        method: "PUT",
        body: JSON.stringify(cart),
      }
    );
  };

  sendData();
}, [cart]);
  return (
    <Layout>
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
