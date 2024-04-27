import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  const handleClick = () => {
    onClick();
    alert('Button został wciśnięty!');
  };

  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
};

export default Button;
