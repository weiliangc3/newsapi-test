import React, { FunctionComponent, useState } from 'react';

// Sample component
const Counter: FunctionComponent<Props> = ({ initialCount = 0 }: Props) => {
  const [count, setCount] = useState<number>(initialCount);
  return (
    <div>
      <span data-testid="count">{count}</span>
      <button
        onClick={() => { setCount(count + 1); }}
        type="button"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;

interface Props{
  initialCount?: number,
}
