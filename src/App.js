import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import styled from 'styled-components'
import Digitize from './components/  numbers';





function App() {
 
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    });
// let d = new Date()
const [time,setTime] = useState(Date())
    useEffect(() => {
      setTimeout(() => {
        setTime((time) => time = Date());
      }, []);
    })
  
    return (<div><h1>I've rendered {count} times!</h1>
    <h1>The time is {time}</h1>
    <Digitize/>
    </div>);

    
  
}

export default App;
