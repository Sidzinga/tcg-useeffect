import React, { useState } from "react";


function DigitButtons(props){

  
   let num = props.number

 function handleClick (e){
   e.preventDefault()

}


return<button className="numberButton" onClick={handleClick} value={num}>{num}</button>
}

function Digitize() {


  
const numbers = [1,2,3,4,5,6,7,8,9,0];

return (
 <div className="digits">
   
    <div className="buttons">{numbers.map((numb)=> <DigitButtons number = {numb} />)}</div>

   </div>
    
)

}

export default Digitize