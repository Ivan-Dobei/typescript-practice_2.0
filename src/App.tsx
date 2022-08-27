import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
   const users = useSelector(state => state);
   console.log(users);
   return (
      <div className="App">

      </div>
   );
}

export default App;
