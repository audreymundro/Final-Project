import { useState } from 'react';

function LoginButton() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      onClick={handleClick}
      className={`m-2 p-2 rounded-lg ${isActive ? 'bg-blue-500 text-underline' : ''}`}
    >
      {isActive ? 'Active' : 'Inactive'}
    </button>
  );
}

export default LoginButton;
