export function createStore(reducer,initialValue){
    let state = initialValue;
    let listeners = [];
    function getState(){
        return state;
    }
    function dispatch(action){
       state = reducer(state,action);
       for(let i = 0; i < listeners.length; i++){
           const listener = listeners[i];
           listener();
       }
    }
    function subscribe(listener){
      console.log("subscribe only one time");
      listeners.push(listener);
    }
    return {getState, dispatch, subscribe};
}