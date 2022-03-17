import React from 'react'

const Header = () => {
  return (
      <>
        <div className="bg-gray-700 flex flex-start justify-center p-3">
            <button className="mr-5" onClick={() => {
                window.scrollTo({
                    top: 790,
                    left: 0,
                    behavior: "smooth",
                  });
            }}>
                <span className="text-3xl text-rose-500 hover:text-rose-300">
                    Skills
                </span>
            </button>
            <button className="mr-5" onClick={() => { 
                window.scrollTo({
            top: 1530,
            left: 0,
            behavior: "smooth",
          });}}>
                <span className="text-3xl text-rose-500 hover:text-rose-300">
                    About
                </span>
            </button>
            <button className="mr-5" onClick={() => {
                window.scrollTo({
                    top: 1950,
                    left: 0,
                    behavior: "smooth",
                  }); 
            }}>
                <span className="text-3xl text-rose-500 hover:text-rose-300">
                    Projects
                </span>
            </button>
        </div> 
      </>
  )
}

export default Header