import { useState } from 'react';

const Form: React.FC = () => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleButtonClick = () => {
    alert(`You entered: ${value}`);
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
      <button onClick={handleButtonClick}>Show Alert</button>
    </div>
  );
};

export default Form;
