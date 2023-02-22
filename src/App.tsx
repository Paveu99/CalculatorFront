import React from 'react';
import {Test} from "types"
import './App.css';

function App() {
  const foobar: Test = {
    x: 24
  }

  return <>
    <h1>{foobar.x}</h1>
  </>
}

export default App;
