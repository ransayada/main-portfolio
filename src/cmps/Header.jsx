import React from "react";

const Header = () => {
  return (
    <div className="dark:bg-gray-700 p-3 flex flex-start">
      <button 
      className="mr-5  text-gray-300  hover:text-gray-800 dark:hover:text-white"
      onClick={() =>{window.scrollTo({
        top: 500,
        left: 0,
        behavior: 'smooth'
      });}}
      >
        Skills
      </button>
      <button className="mr-5 text-gray-300  hover:text-gray-800 dark:hover:text-white"
      onClick={() =>{window.scrollTo({
        top: 1200,
        left: 0,
        behavior: 'smooth'
      });}}
      >
        About
        </button>
      <button className="mr-5 text-gray-300  hover:text-gray-800 dark:hover:text-white"
      onClick={() =>{window.scrollTo({
        top: 1700,
        left: 0,
        behavior: 'smooth'
      });}}
      >
        Projects
        </button>
      
    </div>
  );
};

export default Header;
