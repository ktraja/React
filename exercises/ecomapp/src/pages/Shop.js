import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import CatFilter from "../components/CatFilter";
import ProdList from "../components/ProdList";
import { TEMP_CATEGORY, TEMP_PROD } from "../prodData";
import classes from "./Shop.module.css";

const Shop = () => {
  return (
    <Fragment>
      <div className={classes.catBox}>
        {TEMP_CATEGORY.map((cat) => (
          <CatFilter key={Math.random().toFixed(2)} cat={cat} />
        ))}
      </div>
      <div className={classes.prodBox}>
        {TEMP_PROD.map((prod) => (
          <ProdList key={prod.id} prod={prod} />
        ))}
      </div>
    </Fragment>
  );
};

export default Shop;
