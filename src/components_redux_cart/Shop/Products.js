import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='Redux book'
          price={7}
          description='This is a first product - amazing!'
        />
        <ProductItem
          title='Flutter book'
          price={10}
          description='This is a first product - amazing!'
        />
      </ul>
    </section>
  );
};

export default Products;
