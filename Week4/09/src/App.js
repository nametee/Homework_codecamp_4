import React from 'react'; 
import Popup from './popup';
import './App.css';

function App() { 
  return (
    <div> 
      <Popup heading='This Is Important'>
        Here is some important text or error or something.
      </Popup>
    </div>
  )
}

export default App;
