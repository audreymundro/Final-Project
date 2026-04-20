import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LikeButton from './buttons/LikeButton';

function Header() {

  return (
    <header className='bg-gray-900 text-white px-6 py-4'>
      <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold"><img src="./images/finishtheformulacapstoneapplogo.png" alt="Logo" className="inline-block mr-2 size-20" />Finish the Formula</h1>
      </div>
        <nav className='mt-4'>
          <div className="flex flex-col gap-2 text-lg">
              <Link to="/">Home</Link>
               <Link to="/about">About</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/articles">Articles</Link>
              <Link to="/programs">Programs</Link>
              {/*<Link to="/login">Login</Link>
              <li><LikeButton /></li> */}
          </div>
        </nav>
    </header>
  );
}

export default Header;