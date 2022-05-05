import React, { useEffect,useState } from "react";
import {initialState} from "./helper";
import {createStore} from "./createStore";
import {taskReducer} from "./taskReducer";
import "./style.scss";
import { todoUpdate } from "./actionTypes";

  const store = createStore(taskReducer,initialState);

export const ProjectOne =()=> {
    const [state, setState] = useState(store.getState());
    console.log(state, "state is here !");
   useEffect(()=>{
       store.subscribe(()=>{setState(store.getState())})
       console.log("updated one time");
   },[])

    const handleClick =(taskId,newTodo)=> {
        const action = {
            type: todoUpdate,
            payload : {
                id:taskId,
                title:newTodo, 
                complated:true
            }
        }
        store.dispatch(action);
    }
    return (
      <div className = "ProjectOne">
        <h1>Redux</h1>
        <h2>Redux JS Implementation</h2>
        <h2>Create Store, Dispatch <span>11,12,13,14 </span>Lessons</h2>
        <h3>1) createStore(reducer, [preloadedState], [enhancer])</h3>
        <hr/>
        <ul>
            {
                state !== undefined && state.map((task)=>{
                    return (
                      <li key={task.id}>
                        <button onClick = {()=>handleClick(task.id, "New-To-Do")}>Complate</button>
                        {"  "}{task.name}{" - "}
                        <span> Complated : {`${task.complated}`}</span>
                      </li>
                    );
                })
            }
        </ul>
      </div>
    );
} 