import React, {useEffect, useState} from 'react';
import GoalList from './GoalList';
import AddGoalForm from './AddGoalForm';
import './CourseGoals.css';
import useHttp from './use-http';

function CourseGoals() {
  const [dynGoalList, setDynGoalList] = useState([]);

  const {isLoading, error, sendRequest : getGoals} = useHttp();

  useEffect( ()=>{
    const formatData =  goalObj => {
    const goals = [];
    
    for (const key in goalObj){
       goals.push({
         id:key,
         desc:goalObj[key].desc
         });
      }
      setDynGoalList(goals);
    };

    getGoals({url:'https://reactdb-6ad6e-default-rtdb.asia-southeast1.firebasedatabase.app/goals.json'},formatData);
    
  },[getGoals])

  dynGoalList.sort(function(a, b){return a.key - b.key});



function goalDelHandler(goalNo){
 
  setDynGoalList((prevGoals) => {
    const updGoals = prevGoals.filter(goal => goal.id !== goalNo);
    return updGoals;
  });  
}

  return (<div className='container'>
          <AddGoalForm/>
          {error && <p>No Data fetched.</p>}
          {isLoading && <p>Loading.....</p>}
          {dynGoalList.map(goal => <GoalList key={goal.id} id={goal.id} desc={goal.desc} onDelGoal={goalDelHandler}/>)}
         </div>)
}

export default CourseGoals;