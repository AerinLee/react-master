import { Fragment } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <Fragment>
      <h1>Products!!</h1>
      <ul>
          <li><Link to="/products/p1">React</Link></li>
          <li><Link to="/products/p2">Redux</Link></li>
          <li><Link to="/products/p3">Python</Link></li>
          <li><Link to="/products/p4">Flutter</Link></li>
      </ul>
    </Fragment>
  );
};

export default Products;
