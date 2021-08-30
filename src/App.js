import './App.css';
import React, { useState } from 'react'


function App() {

  let accNumber='';
  let accNumber2='';
  const [showResult,setShowResult ] = useState(true)
  const [result,setResult] = useState(0);
  const [operation,setOperation]=useState('');
  const [pressed,setPressed]=useState(false)
  const [number1,setNumber1]=useState('');
  const [number2,setNumber2]=useState('');


  const setNumber= (n)=>{
    if(!pressed){
      accNumber = number1 + n;
      setNumber1(accNumber);
      setShowResult(false)
    }else{
      accNumber2 = number2 + n;
      setNumber2(accNumber2);
    }
  }

  const operator = (type)=>{
    setOperation(type);
    setPressed(true);
    console.log(type)
  }

  const getResult = ()=>{
    setShowResult(true)
    switch (operation) {
      case 'add' :
        setResult(parseInt(number1) + parseInt(number2))
        break;
      case 'substract' :
        setResult(parseInt(number1) - parseInt(number2))
        break;
      case 'multiplies' :
        setResult(parseInt(number1) * parseInt(number2))
        break;
      case 'divides' :
        setResult(parseInt(number1) / parseInt(number2))
        break;
    }
    

  }


  return (
  <div className="calculator">
      <div className="row display">
      { showResult ? result  : pressed ? number2 : number1 }
      </div>

      {/* Row 1 */}
      <div className="row">
        <div className="clear">
          C
        </div>
        <div className="operador" onClick={ ()=>getResult()}>
          =
        </div>
        <div className="operador" onClick={()=>operator('add')} >
          +
        </div>
      </div>

       {/* Row 2 */}
      <div className="row">
        <div className="numero" onClick={()=>setNumber('7')} >
          7
        </div>
        <div className="numero" onClick={()=>setNumber('8')} >
          8
        </div>
        <div className="numero" onClick={()=>setNumber('9')} >
          9
        </div>
        <div className="operador" onClick={()=>operator('substract')} >
          -
        </div>
      </div>

      {/* Row 3 */}
      <div className="row">
        <div className="numero" onClick={()=>setNumber('4')} >
          4
        </div>
        <div className="numero" onClick={()=>setNumber('5')} >
          5
        </div>
        <div className="numero" onClick={()=>setNumber('6')} >
          6
        </div>
        <div className="operador" onClick={()=>operator('multiplies')} >
          x
        </div>
      </div>

      {/* Row 4 */}
      <div className="row">
        <div className="numero" onClick={()=>setNumber('1')} >
          1
        </div>
        <div className="numero" onClick={()=>setNumber('2')} >
          2
        </div>
        <div className="numero" onClick={()=>setNumber('3')} >
          3
        </div>
        <div className="operador" onClick={()=>operator('divides')} >
          /
        </div>
      </div>
  
  </div>
   

  );
}

export default App;
