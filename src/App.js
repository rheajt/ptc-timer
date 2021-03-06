import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const time = queryParams.get('time') || 120;

  const [count, setCount] = useState(+time);

  useEffect(() => {
    const interval = setInterval(() => {
      let newCount = count - 1;
      setCount(newCount);
    }, 1000);
    return () => clearInterval(interval);
  }, [count, setCount]);

  return (
    <div className="App">
      <div className="progress-bar" style={{ width: `${(count / time) * 100}%` }}></div>
    </div>
  );
}

export default App;
