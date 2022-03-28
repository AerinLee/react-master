import { Fragment } from "react";
import Counter from "./components_redux_counter/Counter";
import Header from "./components_redux_counter/Header";
import Auth from "./components_redux_counter/Auth";
import UserProfile from "./components_redux_counter/UserProfile";
import { useSelector } from "react-redux";
import { authActions } from "./store/index_redux_counter";

function App() {

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  return (
    <Fragment>
      <Header />
      {isAuthenticated ? <UserProfile /> :  <Auth />}
      <Counter />
    </Fragment>
  );
}

export default App;
