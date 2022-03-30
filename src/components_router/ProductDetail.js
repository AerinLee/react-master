import { useParams } from "react-router-dom";

import { Fragment } from "react";

const ProductDetail = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </Fragment>
  );
};

export default ProductDetail;
