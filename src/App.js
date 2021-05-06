import React from 'react'
import Child from './Profile/ComponentProfile.js';
import './App.css';
import image from './im1.png';

function App() {
  const handleName=(name)=> {alert (`Hi Im ${name}`)}
  return (
    <div className="App">
       <Child fullName="Fatma Ben Aissa"
           bio="Hi! there"
           profession="PHD student"
           handleName={handleName}
           >
        <div>
          <img src={image} style={{width:350,height:300}}></img>
        </div>
     
      </Child>

   
    </div>
  );
}

export default App;
