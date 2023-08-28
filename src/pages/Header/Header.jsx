/* eslint-disable no-unused-vars */
import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100 mt-4">
  <div className="flex-1">
    <a className="text-3xl font-extrabold text-rose-500">Avishek Paul</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
    <button className="btn btn-primary mx-8 ">Blog</button>
      <button className="btn btn-success">Resume</button>
    </ul>
  </div>
</div>
            
        </div>
    );
};

export default Header;