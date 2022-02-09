import React from "react";
import { useSelector } from "react-redux";
import { Fragment } from "react/cjs/react.production.min";
import CatFilter from "../components/CatFilter";
import ProdList from "../components/ProdList";
import { TEMP_PROD, TEMP_CATEGORY } from "../prodData";
import classes from "./Shop.module.css";
let prodList;

const Shop = () => {
  const categoryReducer = useSelector((state) => state.categoryReducer);

  if (categoryReducer.catArray.length > 0) {
    prodList = TEMP_PROD.filter(function (itm) {
      return categoryReducer.catArray.indexOf(itm.cat) > -1;
    });
  } else {
    prodList = [...TEMP_PROD];
  }

  return (
    <Fragment>
      <div className={classes.catBox}>
        {TEMP_CATEGORY.map((cat) => (
          <CatFilter key={Math.random().toFixed(4)} cat={cat} />
        ))}
      </div>
      <div className={classes.prodBox}>
        {prodList.map((prod) => (
          <ProdList key={Math.random().toFixed(4)} prod={prod} />
        ))}
      </div>
    </Fragment>
  );
};

export default Shop;
