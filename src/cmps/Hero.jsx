import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col  bg-gray-700">
        <div className="hero-up">
          <div className="hero-text">
            <h1 className="p-5 text-2xl md:text-4xl lg:text-6xl font-bold text-gray-800 dark:text-gray-50">
              Ran Sayada.
              <br />
              <span className="font-thin tracking-wider">
                Full-Stack Developer
              </span>
            </h1>
            <div className="container flex justify-around">
              <a
                href="https://github.com/ransayada"
                className=" bg-rose-500 hover:bg-rose-400 text-white font-bold  py-2 px-6 border-b-4 border-rose-700 hover:border-rose-500 rounded-full"
              >
                <div className="flex  flex-col items-center justify-between">
                  <p>
                    <BsGithub />
                  </p>{" "}
                  <p>Github</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/ran-sayada/"
                className="bg-rose-500 hover:bg-rose-400 text-white font-bold py-2 px-4 border-b-4 border-rose-700 hover:border-rose-500 rounded-full"
              >
                <div className="flex  flex-col items-center justify-between">
                  <p>
                    <BsLinkedin />
                  </p>{" "}
                  <p>LinkedIn</p>
                </div>
              </a>
            </div>
          <div className=" hero-img rounded-xl flex items-center justify-center">
            <img
              className="rounded-lg "
              src="https://res.cloudinary.com/rscloudinary/image/upload/v1646055793/protfolio/1639643373868-removebg-preview_j9nwbd.png"
              alt="img-container"
            />
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
