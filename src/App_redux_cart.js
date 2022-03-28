import Cart from './components_redux_cart/Cart/Cart';
import Layout from './components_redux_cart/Layout/Layout';
import Products from './components_redux_cart/Shop/Products';
import { useSelector } from 'react-redux';

function App() {
  const showCart = useSelector((state) => state.cart.showCart);

  return (
    <Layout>
      {showCart && <Cart /> }
      <Products />
    </Layout>
  );
}

export default App;
