import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Result from './component/Result';
const secretnumber= Math.floor(Math.random()*10)+1
function App() {

  
  const[term,setTerm]=useState("")
  const handleChange=(e)=>{ setTerm(e.target.value)}
  return (
    <div className="container">
     <div className="head" htmlFor="term">
      <label>Guess the number between 1 to 10!</label>
     </div>
     <input  type="text"id="term" name="term" onChange={handleChange}/>
     <Result const secretnumber={secretnumber} term={term}/>
    </div>
    
  );
  
}

export default App;
