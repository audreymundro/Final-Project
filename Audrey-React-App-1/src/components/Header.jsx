import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LikeButton from './buttons/LikeButton';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='bg-gray-900 text-white px-6 py-4'>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold"><img src="./images/finishtheformulacapstoneapplogo.png" alt="Logo" className="inline-block mr-2 size-20" />Finish the Formula</h1>

        <button onClick={() => setIsOpen(!isOpen)} className="text-4xl text-white">
          {isOpen ? "✖" : "☰"}
        </button>
        </div>

      {isOpen && (
        <nav className='mt-4'>
          <ul className="flex flex-col gap-2 text-lg">
              <li> <Link to="/">Home</Link></li>
              <li> <Link to="/about">About</Link></li>
              <li> <Link to="/profile">Profile</Link></li>
              <li><Link to="/articles">Articles</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/loginpage">Login</Link></li>
              {/* <li> <Link to="/login">Login</Link> </li>
              <li><LikeButton /></li> */}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;