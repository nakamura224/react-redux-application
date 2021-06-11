import React,{ Component } from "react";

function App() {
  return (
    <>
    <input type ="text" onChange={() => {console.log('clicked')}}/>
    <h1>Welcome to React</h1>
    </>
  );
}

export default App;
