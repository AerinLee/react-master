import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components_router_practice/layout/Layout";
import AllQuotes from "./components_router_practice/pages/AllQuotes";
import NewQuote from "./components_router_practice/pages/NewQuote";
import NotFound from "./components_router_practice/pages/NotFound";
import QuoteDetail from "./components_router_practice/pages/QuoteDetail";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetail />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
