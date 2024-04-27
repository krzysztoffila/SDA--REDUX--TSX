import { useState, useEffect } from 'react';

const EffectButton: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed: ${count}`);
  }, [count]);

  const handleButtonClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleButtonClick}>Increase Count</button>
    </div>
  );
};

export default EffectButton;
