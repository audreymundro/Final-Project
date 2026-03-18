import { useState } from 'react';
import LikeButton from './LikeButton';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='bg-gray-900 text-white px-6 py-4'>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Audrey's Brand</h1>

        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-white">
          {isOpen ? "✖" : "☰"}
        </button>
        </div>

      {isOpen && (
        <nav className='mt-4'>
          <ul className="flex flex-col gap-2">
              <li> <a href="/">Home</a></li>
              <li> <a href="/about">About</a></li>
              <li> <a href="/profile">Profile</a></li>
              <li><LikeButton /></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;