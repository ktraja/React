import React,{useState} from "react";

const AppContext = React.createContext({
   ordList:[{}],
   showOrdSummary : false,
   onShowOrder: (flg) => {},
   onOrder: (id,item,desc,price,qty)=>{}
})


export function AppContextProvider(props){

    const [ordList,updateOrder] = useState([]);
    const [showOrdSummary,updShowOrdSummary] = useState(false);

  function menuSubmitHandler(id,item,desc,price,qty){
     
    let tmpOrd = ordList;

    const idFound = tmpOrd.findIndex(ord => ord.id === id);
    if (idFound > -1) {
      if ( (Number(tmpOrd[idFound].qty) +  Number(qty)) === 0 ) {
          tmpOrd.splice(idFound,1);
      } else {
        tmpOrd[idFound].qty = Number(tmpOrd[idFound].qty) +  Number(qty);
      }
    } else {
        tmpOrd  = [...tmpOrd,{id:id, item:item, desc:desc, price:price, qty:Number(qty)}];
    }
    
    updateOrder(tmp =>{
      return [...tmpOrd]
    });
}

function onShowOrderHandler(flg) {
  if (flg) {
    updShowOrdSummary(true);
  } else
  {
    updShowOrdSummary(false);
  }

}

return <AppContext.Provider value={{
    ordList:ordList,
    showOrdSummary: showOrdSummary,
    onShowOrder: onShowOrderHandler,
    onOrder: menuSubmitHandler
}}>{props.children}</AppContext.Provider>

}


export default AppContext;