import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {
 
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    });
// let d = new Date()
const [time,setTime] = useState(0)
    useEffect(() => {
      setTimeout(() => {
        setTime((time) => time = Date());
      }, 1000);
    })
  
    return (<div><h1>I've rendered {count} times!</h1>
    <h1>The time is {time}</h1></div>);
  
}

export default App;
