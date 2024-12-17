import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AllNoteScaleGenerator } from "./MusicThoery/Scale";
import {Note} from "./Interface/Scale"
function App() {
  
useEffect(()=>{
  let tonic :Note['pitchName'] = "C#"
  console.log((tonic))
})

  return (
    <div className="App">
    </div>
  );
}

export default App;
