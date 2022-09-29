import React, { useState } from 'react'
import "./App.css"

function App() {
  const [answer, setAnswer] = useState("");

  const equal = ()=>{
    setAnswer(eval(answer).toString())
  }
  const click = (x)=>{

          setAnswer(answer.concat(x.target.value))
  }

  const kopaytiruv = (x)=>{
    if(answer[0]=== undefined || answer[0] === "-"){
      setAnswer("")
    }else{
      setAnswer(answer.concat(x.target.value))
    }
  }

  const buluv = (x)=>{
    if(answer[0]=== undefined || answer[0] === "-"){
      setAnswer("")
    }else{
      setAnswer(answer.concat(x.target.value))
    }
  }

  const qushuv = (x)=>{
    if(answer[0]=== undefined || answer[0] === "-"){
      setAnswer("")
    }else{
      setAnswer(answer.concat(x.target.value))
    }
  }
  const nul = (x)=>{
    if(answer[0]=== undefined){
      setAnswer("")
    }else{
      setAnswer(answer.concat(x.target.value))
    }
  }

  const reset = ()=>{
    setAnswer("");
  }
  
  return (
    <div>
      <div className='app'>
          <div className='result'>
            <input type="text" placeholder='0' id='result' value={answer}/>
          </div>
          <div className='keypad'>
            <div className='numerical'>
                <input type="button" value='7' onClick={click}/>
                <input type="button" value='8' onClick={click}/>
                <input type="button" value='9' onClick={click}/>
                <input type="button" value='Clear' onClick={reset}/>
                <input type="button" value='4' onClick={click}/>
                <input type="button" value='5' onClick={click}/>
                <input type="button" value='6' onClick={click}/>
                <input type="button" value='*' onClick={kopaytiruv}/>
                <input type="button" value='1' onClick={click}/>
                <input type="button" value='2' onClick={click}/>
                <input type="button" value='3' onClick={click}/>
                <input type="button" value='/' onClick={buluv} />
            </div>
            <div className='operations'>
                <input type="button" value="0" onClick={nul}/> 
                <input type="button" value='=' onClick={equal}/>
                <input type="button" value='+' onClick={qushuv}/> 
                <input type="button" value='-' onClick={click}/>
            </div> 
          </div>
      </div>
    </div>
  )
}

export default App