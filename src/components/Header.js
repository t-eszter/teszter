import React from 'react';
import { Link } from 'react-router-dom';
import ReactLogo from './ET_logo.svg';


const Header = () => {
  return (
      <nav className="flex flex-col drop-shadow-sm">
          <div className="w-full h-1 bg-gradient-to-r from-vivamagenta-900 to-vivanautica-900"></div>

          <div className="flex justify-between px-14 py-6 items-center bg-white">
                <a href='/' className="flex items-center">
                  <img className="w-auto h-12 mr-5" src={ReactLogo} alt="React Logo" />
                {/* <h1 className="font-kumbh font-bold text-xl h-fit self-center tracking-widest">Eszter Tóth</h1> */}
                </a>

            <div className="flex items-center">
              <ul className="flex items-center space-x-8 text-xl font-semibold">
                {/* <li><Link to="/" className="text-vivanautica hover:text-vivapink">Home</Link></li> */}
                <li><Link to="/" className=" text-vivanautica hover:text-vivamagenta-600">Home</Link></li>
                {/* <li><Link to="/playground" className="text-vivanautica hover:text-vivapurple-600">Playground</Link></li> */}
                <li><Link to="/about" className="text-vivanautica hover:text-vivamidnight-600">About</Link></li>
              </ul>
            </div>
          </div>
      </nav>
  );
}

export default Header;
