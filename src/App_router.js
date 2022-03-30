import { Route, Switch, Redirect } from "react-router-dom";

import Welcome from "./components_router/Welcome";
import Products from "./components_router/Products";
import MainHeader from "./components_router/MainHeader";
import ProductDetail from "./components_router/ProductDetail";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome"/>
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
