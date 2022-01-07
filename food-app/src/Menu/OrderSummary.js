import React,{useContext} from "react";
import AppContext from "../app-context";
import Card from "../UI/Card";
import styles from './OrderSummary.module.css';
import Button from "../UI/Button";

function OrderSummary(props){   
 const Cxt = useContext(AppContext);
 let OrdTotal = Cxt.ordList.map(x => x.price*x.qty).reduce((a,b) => a+b,0);

  function addQtyHandler(event){
      Cxt.onOrder(Number(event.target.id),'a','b','0',+1);
  }
  function delQtyHandler(event){
    console.log(event.target.id);
    Cxt.onOrder(Number(event.target.id),'a','b','0',-1);
}

function OrdCloseHandler() {
  Cxt.onShowOrder(false);
}
 return(
     <div className={styles.backdrop}>
     <div className={styles.modal}>    
     <Card>
     <h2>Order Summary :</h2>
       {Cxt.ordList.map(ord => 
      <React.Fragment key={ord.id}>
        <div className={styles.content} key={ord.id}>
          <div>
            <p className={styles.desc}>{ord.item}</p>
             <p>{ord.price} x {ord.qty}</p>
          </div>
          <div>
            <button id={ord.id} onClick={addQtyHandler} className={styles.plusMinus}>+</button>
            <button id={ord.id} onClick={delQtyHandler} className={styles.plusMinus}>-</button>
          </div>  
        </div>
        <hr/>  
      </React.Fragment>
      )}
      <div className={styles.content}>
        <p className={styles.desc}>Total Amount: </p>
        <p className={styles.desc}>{OrdTotal.toFixed(2)}</p>
      </div>
      <Button onClick={OrdCloseHandler}>Close</Button>
      <Button>Order</Button>
     </Card>
     </div>
     </div>
 )

}

export default OrderSummary;