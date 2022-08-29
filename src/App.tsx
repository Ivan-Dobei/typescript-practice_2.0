import React from 'react';
import { useTypedSelector } from './hooks/useTypedSelector';
import './App.css';

function App() {
   const {loading, users, error} = useTypedSelector(state => state.user);
   console.log(users);
   return (
      <div className="App">

      </div>
   );
}

export default App;
