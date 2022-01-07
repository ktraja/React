import React, {useState} from "react";
import './AddGoalForm.css';
import useHttp from "./use-http";

function AddGoalForm(props) {
  const [newGoal,addNewGoal] = useState('');
  const [invalidGoal,setinvalidGoal] = useState(false);
   
  function changeHandler(event) {
    if (event.target.value.trim().length >0)
       {setinvalidGoal(false);}
    addNewGoal(event.target.value);
  }

  const {sendRequest : addGoalHandler} = useHttp();

  function submitHandler(event){
    event.preventDefault();

   const goalStatus = inp => {
     
   } 

    if ( newGoal.trim().length === 0 )
    { 
      setinvalidGoal(true);
      return; 
    }
    setinvalidGoal(false);

    addGoalHandler(
      {url:'https://reactdb-6ad6e-default-rtdb.asia-southeast1.firebasedatabase.app/goals.json',
        method:'POST',
         body:{desc:newGoal},
         headers:{'Content-Type':'application/json'}
       },goalStatus
 )
    addNewGoal('');

     }

    return <form className='frmBox' onSubmit={submitHandler}>
            <label className={`lbl ${invalidGoal ? 'invalid' : '' }`}>Course Goal</label>
            <br/>
            <input className={`inp ${invalidGoal ? 'invalid' : ''}`} value={newGoal} onChange={changeHandler}></input>
            <br/>
            <button className='inpButton' type='submit' >Add Goal</button>
          </form>
}

export default AddGoalForm;