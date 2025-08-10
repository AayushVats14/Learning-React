import DisplayArea from './components/DisplayArea';
import Buttons from './components/Buttons';
import './App.css'
import { useState } from 'react';

function App() {
  let inputType = ['C','1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
  const [calVal, setCalVal] = useState("");
  const onBtnClick = (items) => {
    if (items === "C") {

    } else if (items === "=") {

    } else {
      const newDisp = calVal + items;
      setCalVal(newDisp);
    }
  };

  return (

    <>
    <center>
      <DisplayArea displayValue= {calVal}></DisplayArea>
    </center>
    <center>
      <div className='container'>
        <Buttons btnContent={inputType} onBtnClick={onBtnClick}></Buttons>
        {console.log("val")}
      </div>
      </center>
    </>
  )
}

export default App;
