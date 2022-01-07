import React ,{useContext,useRef} from "react";
import classes from './MenuItem.module.css'
import Button from '../UI/Button';
import AppContext from "../app-context";

function MenuItem(props){
 
const Cxt = useContext(AppContext);
const qtyRef = useRef();

function addCartHandler(){
  Cxt.onOrder(props.menu.id,props.menu.menuItem,props.menu.menuDesc,props.menu.unitPrice, qtyRef.current.value);
}
  return(
    <form className={classes.menu}>
      <div>
          <p className={classes.item}>{props.menu.menuItem}</p>
          <p>{props.menu.menuDesc}</p>
          <p className={classes.rate}>{props.menu.unitPrice}</p>
       </div>
       <div>   
          <input ref={qtyRef} type='number' min='1' defaultValue='1' style={{'width':'50px'}}  />
          <Button className={classes.button} onClick={addCartHandler}>Add</Button>
      </div>
      </form>
  )
}

export default MenuItem;