import React,  { Component, Fragment } from "react";
import Counter from './components';

function App(props){
    return (
        <Counter 
        date="2021-01-10T14:48:00" 
        timerStyle={{marginTop:'10px', width:'20%'}} 
        counterStyle={{fontSize:'15px', color:'white', border:'1px solid red', padding:'10px', margin:'5px', backgroundColor:'red'}} 
        labelStyle={{color:'grey',fontSize:'12px', textTransform:'uppercase'}}
    />
    )
}
export default App;