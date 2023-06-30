import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-vivamagenta-900 to-vivanautica-900 flex content-center h-40 flex-wrap px-20 ">
      <div className="flex flex-row justify-between h-fit text-white text-sm w-full">
        <span className="text-left">Copyright © 2023 All Rights Reserved</span>
        <span className="text-right">Made with ♡, React and Tailwind by <a href='http://www.teszter.com' target='_blank' rel="noreferrer" className="text-vivamagenta-200">teszter</a></span>
      </div>
    </footer>
  );
};

export default Footer;
