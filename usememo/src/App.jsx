
import { useState, useMemo } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const nums = new Array(10000).fill(0).map((_, ind) => {
    return {
      inde: ind,
      isMagical: ind === 9000,
    };
  });

  const [numbers, setNumbers] = useState(nums);

  const magical = useMemo(() => {
    return nums.find((item) => item.isMagical === true);
  }, [nums]);

  return (
    <>
      <p>{magical?.inde !== undefined ? magical.inde : 'No magical number found'}</p>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);

            if (count === 10) {
              setNumbers(
                new Array(100).fill(0).map((_, ind) => {
                  return { inde: ind, isMagical: ind === 90 };
                })
              );
            }
          }}
        >
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
