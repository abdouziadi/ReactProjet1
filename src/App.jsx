import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const time = new Date();

  const monTitre = <h3>abdou</h3>;

  return (
    <>
      <h1>Hello {monTitre}{time.toLocaleString()}</h1>
     
    </>
  );
}

export default App;
