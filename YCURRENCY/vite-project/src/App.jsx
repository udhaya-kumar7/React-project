import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const[amount,setAmount] =useState(1);
  const[fromcurrency,setFromcurrency] =useState("USD");
  const[tocurrency,setTocurrency] =useState("INR");
  const[conamount,setConamount] =useState(null);
  const[exchangerate,setExchangerate]=useState(null);

  useEffect(()=> {
    const getExchangeRate =async () => {
      try {
        let url= `https://api.exchangerate-api.com/v4/latest/${fromcurrency}`;
        const response =await axios.get(url);
        //console.log(response);
        setExchangerate(response.data.rates[tocurrency])
      } catch(error){
        console.error("error fetching exchange rate:",error);
      }
    
    }
    getExchangeRate();
  },[fromcurrency,tocurrency])
   

  useEffect(() =>{
    if (exchangerate!==null && exchangerate !== undefined){
      setConamount((amount *exchangerate).toFixed(2))
    }

  },[amount,exchangerate])
   
  const handleAmountchange = (e) => {
    const value =parseFloat(e.target.value)
    setAmount(isNaN(value)?0:value)
  };

   
  const handlefromAmountchange = (e) => {
    setFromcurrency(e.target.value)
  }

  
  const handletoAmountchange = (e) => {
    setTocurrency(e.target.value)
  }
  return (
    <>
    <div className="currency-con">
      <div className="box"></div>
      <h1>Currency Converter</h1>
      <div className="input-con">
        <label htmlFor="amt">Amount</label>
        <input type="number" id='amt' value={amount} onChange={handleAmountchange}/>
      </div>
      <div className="input-con">
        <label htmlFor="fromcurrency">From Currency</label>
        <select id="fromcurrency" value={fromcurrency} onChange={handlefromAmountchange}>
          
            <option value="USD">USD - United States Dollar</option>

            <option value="EUR">FUR - Euro</option>

            <option value="GBP">GBP - British Pound Sterling</option>

            <option value="JPY">JPY - Japanese Yen</option>

            <option value="AUD">AUD - Australian Dollar</option>

            <option value="CAD">CAD Canadian Dollar</option>

            <option value="CNY">CNY - Chinese Yuan</option>

            <option value="INR">INR - Indian Rupee</option>

            <option value="BRL">BRL-Brazilian Real</option>

             <option value="ZAR">ZAR - South African Rand</option>

        </select>
      </div>
      <div className="input-con">
        <label htmlFor="tocurrency">To Currency</label>
        <select id="tocurrency" value={tocurrency} onChange={handletoAmountchange}>
          
            <option value="USD">USD - United States Dollar</option>

            <option value="EUR">FUR - Euro</option>

            <option value="GBP">GBP - British Pound Sterling</option>

            <option value="JPY">JPY - Japanese Yen</option>

            <option value="AUD">AUD - Australian Dollar</option>

            <option value="CAD">CAD Canadian Dollar</option>

            <option value="CNY">CNY - Chinese Yuan</option>

            <option value="INR">INR - Indian Rupee</option>

            <option value="BRL">BRL-Brazilian Real</option>

             <option value="ZAR">ZAR - South African Rand</option>

        </select>
      </div>
      <div className="result">
        <p>{amount} {fromcurrency}  is equal to {conamount} {tocurrency}</p>
        </div>
    </div>
    </>
    
  )
}

export default App
