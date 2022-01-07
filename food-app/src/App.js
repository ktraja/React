import React, { useContext } from 'react';
import './App.css';
import Menu from './Menu/Menu';
import Button from './UI/Button';
import classes from './UI/Button.module.css'
import AppContext from './app-context';
import OrderSummary from './Menu/OrderSummary';

const menuList =[{id:1, menuItem:'Sushi',menuDesc:'Finest Fish and Veggies',unitPrice: '22.99'},
{id:2, menuItem:'Schnitzel',menuDesc:'A German Speciality',unitPrice: '16.50'},
{id:3, menuItem:'Barbecue Burger',menuDesc:'American Juicy Fresh',unitPrice: '12.99'},
{id:4, menuItem:'Green Bowl',menuDesc:'Healthy and Green',unitPrice: '18.99'}]

function App() {
function showOrdHandler(){
  Cxt.onShowOrder(true);
}


const Cxt = useContext(AppContext); 
let totQty = Cxt.ordList.map(x=> x.qty).reduce((a,b)=> a+b,0)

  return (
    <React.Fragment>
    <div className="App-header">
      <div>React Meals</div>
      <Button className={classes.button} onClick={showOrdHandler}>
      {/* <i className="fa-solid fa-cart-shopping" style={{color:'red',backgroundColor:'white',fontSize:'50px'}}></i> */}
      Your Cart&nbsp;&nbsp; :&nbsp; <span style={{fontSize:'16px',fontWeight:'bold',color:'orange'}}>{totQty}</span></Button>
    </div>
    {(Cxt.showOrdSummary) ? <OrderSummary/> : <div/>}
    <div className='menuCard'>
      <Menu menuList={menuList}/>
    </div>
    </React.Fragment>
  );
}

export default App;
