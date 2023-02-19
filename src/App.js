import React, { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    function handleKeyPress(event) {
      const keyValue = event.key;
      if (/\d/.test(keyValue)) {
        if (result) {
          setInput(keyValue)
          setResult("")
        } else {
          setInput(input + keyValue);
        };
      } else if (keyValue === "+" || keyValue === "-" || keyValue === "*" || keyValue === "/") {
        setInput(input + keyValue);
      } else if (keyValue === "Enter") {
        try {
          setResult(eval(input));
        } catch (error) {
          setResult("Invalid Input");
        }
      } else if (keyValue === "Backspace") {
        setInput(input.slice(0, -1));
        setResult("");
      } else if (keyValue === "c") {
        setInput("");
        setResult("");
      }
    }
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [input]);

  function handleClick(event) {
    const value = event.target.value;
    switch (value) {
      case "C":
        setInput("");
        setResult("");
        break;
      case "DEL":
        setInput(input.slice(0, -1));
        setResult("");
        break;
      case "=":
        try {
          setResult(eval(input));
        } catch (error) {
          setResult("Invalid Input");
        }
        break;
      default:
        if (result) {
          setInput(value)
          setResult("")
        } else {
          setInput(input + value);
        }
    }
  }
  return (
    <>
      {/* calculator */}
      <div className='calculator'>

     {/* screen */}
      <div className='screen'>
        <div className='equation'>{input}</div>
        <div className='result'>{result}</div>
      </div>
      {/* buttons */}
      <div className="r1">
        <div><button onClick={handleClick} value="C">C</button></div>
        <div><button onClick={handleClick} value="DEL">DEL</button></div>
        <div><button>%</button></div>
        <div><button onClick={handleClick} value="/">/</button></div>
      </div>
      <div className="r1">
        <div><button onClick={handleClick} value="1">1</button></div>
        <div><button onClick={handleClick} value="2">2</button></div>
        <div><button onClick={handleClick} value="3">3</button></div>
        <div><button onClick={handleClick} value="*">X</button></div>
      </div>
      <div className="r1">
        <div><button onClick={handleClick} value="4">4</button></div>
        <div><button onClick={handleClick} value="5">5</button></div>
        <div><button onClick={handleClick} value="6">6</button></div>
        <div><button onClick={handleClick} value="-">-</button></div>
      </div>
      <div className="r1">
        <div><button onClick={handleClick} value="7">7</button></div>
        <div><button onClick={handleClick} value="8">8</button></div>
        <div><button onClick={handleClick} value="9">9</button></div>
        <div><button onClick={handleClick} value="+">+</button></div>
      </div>
      <div className="r1">
        <div><button onClick={handleClick} value="0">0</button></div>
        <div><button onClick={handleClick} value=".">,</button></div>
        <div><button onClick={handleClick} value="=">=</button></div>
      </div>      
      </div>
    </>
  );
}

export default App;
