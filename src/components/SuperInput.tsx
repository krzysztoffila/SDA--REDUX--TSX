import { useRef } from 'react';

const SuperInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Type something..."
      />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
};

export default SuperInput;
