import { useState } from 'react'
import './App.css'

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmistatus, setBmistatus] = useState("");
  const [errormessage, setErrormessage] = useState("");



  const calculatebmi = () => {
    const isValidHeight = /^\d+$/.test(height);
    const isValidweight = /^\d+$/.test(weight);
    if(height && weight) {
      const heightInmeters =height / 100;
      const bmiValue = weight / (heightInmeters * heightInmeters)
      setBmi(bmiValue.toFixed(2))
      if (bmiValue<18.5){
        setBmistatus("UnderWeight");
      }else if(bmiValue >= 18.5&& bmiValue<25 ){
        setBmistatus("Normal Weight");
      }else if(bmiValue>= 25 && bmiValue<29.9){
        setBmistatus("Over Weight");
      }else{
        setBmistatus("Obese");
      }
      setErrormessage("")
    }else{
      setBmi(null);
      setBmistatus("");
      setErrormessage("Please enter a valid input");
    }
  }
    const clearall = () =>{
      setHeight("");
      setWeight("");
      setBmi(null);
      setBmistatus("");

    }

  
  return (
    <>
      <div className="bmi-cal">
        <div className="box"></div>
        <div className="data">
          <h1>BMI CALCULATOR</h1>
          {errormessage&&<p className="error">{errormessage}</p>}
          <div className="input-con">
            <label htmlFor="height">HEIGHT(cm):</label>
            <input type="text" value={height} id='height' onChange={(e)=>setHeight(e.target.value)}/>
          </div>
          <div className="input-con">
            <label htmlFor="weight">WEIGHT(kg):</label>
            <input type="text" value={weight} id='weight'  onChange={(e)=>setWeight(e.target.value)}/>
          </div>
          <button onClick={calculatebmi}>Calculate BMI</button>
          <button onClick={clearall}>Clear</button>

          {bmi !==null && (
          <div className="result">
          <p>Your BMI is :{bmi}</p>
          <p>status: {bmistatus}</p>
          </div>
          )}
        </div>
      </div>
      
    </>
  )
}

export default App
