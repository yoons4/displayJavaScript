import "./styles.css";
import React, {useEffect, useState, useRef} from 'react';

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  }
  const enablePrevent = () => 
    window.addEventListener("beforeunload", listener)
  const disablePrevent = () => 
    window.removeEventListener("beforeunload", listener)
  
  return {enablePrevent, disablePrevent};
}
export default function App() {
  const {enablePrevent, disablePrevent} = usePreventLeave();
  return (
    <div className="App">
      <button onClick = {enablePrevent}>Protect</button>
      <button onClick = {disablePrevent}>Unprotect</button>
    </div>
  );
}
