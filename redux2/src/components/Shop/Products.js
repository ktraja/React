import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummyData = [
  { id: 1, title: "P1", price: 3, description: "Product 1" },
  { id: 2, title: "P2", price: 7, description: "Product 2" },
  { id: 3, title: "P3", price: 2, description: "Product 3" },
  { id: 4, title: "P4", price: 1, description: "Product 4" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyData.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            quantity={1}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
