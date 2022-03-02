import React from "react";

import {BsGithub, BsLinkedin} from "react-icons/bs";

const Hero = () => {
  return (
    <div >
      <div className="bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-700">
        <div className="container flex flex-row justify-between items-center mx-auto hero-high">
          <div className="w-full md:w-1/2">
            <h1 className="p-12 text-2xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-gray-50">
              Ran Sayada.
              <br />
              <span className="font-thin tracking-wider">
                Full-Stack Developer
              </span>
            </h1>
            <div className="container flex flex-row justify-around items-center">
            <a href="#" className=" bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded"> <BsGithub /> <p>Github</p></a>
            <a href="#" className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded"> <BsLinkedin /> <p>LinkedIn</p></a>
            </div>
          </div>

          <div className="hidden md:block w-full md:w-1/2">
            <div className="img-container rounded-xl overflow-hidden p-20 transform">
              <img
                className="rounded-lg"
                src="https://res.cloudinary.com/rscloudinary/image/upload/v1646055793/protfolio/1639643373868-removebg-preview_j9nwbd.png"
                alt="img-container"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
