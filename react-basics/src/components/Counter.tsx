import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState<number>(12);
  
    const increment = () => {
      setCount(count + 1);
    };
  
    return (
      <div className="counter">
        <p className="count">
          {count}
        </p>
        <button onClick={increment}>Increment</button>
      </div>
    );
  };
  
  export default Counter;