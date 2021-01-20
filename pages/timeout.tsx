import { useEffect, useState } from "react";

export interface CounterProps {
  description: String;
}

function Counter({ description }: CounterProps) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let currentRender = true;

    const id = setTimeout(() => {
      if (currentRender) {
        console.log(description);
      } else {
        console.log("It is done.");
      }
      console.log(description);
    }, 3000);

    return () => {
      currentRender = false;
    };

    /*
    return function cleanIntervalFromSetTimeout() {
      clearInterval(id);
      // This clears the interval where it
      // should not fill up the queue for changes
    };
    */
  }, [description]); // only runs when the description var is changed

  return (
    <>
      <h3>Description: {description}</h3>
      <button onClick={() => setCount(count - 1)}>-</button>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

export default Counter;
