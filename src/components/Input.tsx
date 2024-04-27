import { useState } from 'react';

const Input: React.FC = () => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>Preview: {value}</p>
    </div>
  );
};

export default Input;
