import "./styles.css";
import React, {useEffect, useState, useRef} from 'react';

const useConfirm = (message = "", callback, rejection) => {
    /*
  if (typeof callback !== "function"){
    return;
  }
  */
  if(!callback || typeof callback !== "function"){
    return;
  }

  if(rejection && typeof rejection !== "function"){
    return;
  }

  const confirmAction = () => {
    if(confirm(message)){
      callback();
    } else {
      rejection();
    }
  }
  return confirmAction;
}

export default function App() {
  const deleteWord = () => console.log("Deleting the world....");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure", deleteWord, abort);
  return (
    <div className="App">
      <button onClick = {confirmDelete}>Delete the world.</button>
    </div>
  );
}
