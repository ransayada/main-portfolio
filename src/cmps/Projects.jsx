import React from "react";

const Projects = () => {
  return (
    <div className="p-5 dark:bg-gray-700 flex flex-col items-center">
      <h1 className="p-12 text-1xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-50">
        Projects
      </h1>
      <div className="flex flex-col ">
        <div className="flex p-5">
          <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-2xl">
            <div className="px-4 py-2">
              <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">
                earth-bnb 
              </h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                AirBnb PixelPerfect clone programed with Vue Vuex Mongo Node.js
                Express{" "}
              </p>
            </div>

            <img
              className="object-cover w-full h-48 mt-2"
              src="https://res.cloudinary.com/rscloudinary/image/upload/v1646142140/protfolio/Screenshot_1_rmjk7e.png"
              alt="earth-bnb"
            />

            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
              <a
                href="https://github.com/ransayada/earthBnb"
                className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
              >
                go to code
              </a>
              <a
                href="https://earth-bnb-2021.herokuapp.com/#"
                className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
              >
                got to site
              </a>
            </div>
          </div>
          <div className="w-5"></div>
          <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-2xl">
            <div className="px-4 py-2">
              <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">
                angular-app
              </h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Simple angular app, components. programed with angular and sass
              </p>
            </div>

            <img
              className="object-cover w-full h-48 mt-2"
              src="https://res.cloudinary.com/rscloudinary/image/upload/v1646215689/protfolio/Screenshot_2_k3chj8.png"
              alt="angular-app"
            />

            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
              <a
                href="https://github.com/ransayada/angularApp"
                className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
              >
                go to code
              </a>
              <a
                href="https://ransayada.github.io/angularApp/"
                className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
              >
                got to site
              </a>
            </div>
          </div>
          <div className="w-5"></div>
          <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-2xl">
            <div className="px-4 py-2">
              <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">
                recipe-app
              </h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                SPA with firebase backend, recipe app React(Hooks, context etc.)
                frontend
              </p>
            </div>

            <img
              className="object-cover w-full h-48 mt-2"
              src="https://res.cloudinary.com/rscloudinary/image/upload/v1646216383/protfolio/Screenshot_3_su3l7n.png"
              alt="recipe"
            />

            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
              <a
                href="https://github.com/ransayada/recipes"
                className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
              >
                go to code
              </a>
              <a
                href="https://ransayada.github.io/recipes/"
                className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
              >
                got to site
              </a>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-2xl">
            <div className="px-4 py-2">
              <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">
                mine-sweeper
              </h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                MineSweeper game with vanilla JS and CSS . add features like
                hints and different play mats.
              </p>
            </div>

            <img
              className="object-cover w-full h-48 mt-2"
              src="https://res.cloudinary.com/rscloudinary/image/upload/v1646218502/protfolio/Screenshot_6_ty5sgo.png"
              alt="mine-sweeper"
            />

            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
              <a
                href="https://github.com/ransayada/MineSweeper"
                className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
              >
                go to code
              </a>
              <a
                href="https://ransayada.github.io/MineSweeper/"
                className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
              >
                got to site
              </a>
            </div>
          </div>
          <div className="w-5"></div>
          <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-2xl">
            <div className="px-4 py-2">
              <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">
                keep app
              </h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                google keep clone along side gmail clone programed with vue and
                css.
              </p>
            </div>

            <img
              className="object-cover w-full h-48 mt-2"
              src="https://res.cloudinary.com/rscloudinary/image/upload/v1646218293/protfolio/Screenshot_5_gdxyve.png"
              alt="keep"
            />

            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
              <a
                href="https://github.com/ransayada/Appsus"
                className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
              >
                go to code
              </a>
              <a
                href="https://ransayada.github.io/Appsus/#/keep"
                className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
              >
                got to site
              </a>
            </div>
          </div>
          <div className="w-5"></div>
          <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 hover:shadow-2xl">
            <div className="px-4 py-2">
              <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">
                Miss-Books
              </h1>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                book shop programed with vue and vanilla CSS3 JS(ES6) and HTML5
              </p>
            </div>

            <img
              className="object-cover w-full h-48 mt-2"
              src="https://res.cloudinary.com/rscloudinary/image/upload/v1646217812/protfolio/Screenshot_4_ju3ugd.png"
              alt="bookshop"
            />

            <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
              <a
                href="https://github.com/ransayada/missBooks"
                className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
              >
                go to code
              </a>
              <a
                href="https://ransayada.github.io/missBooks/#/book"
                className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
              >
                got to site
              </a>
            </div>
          </div>
        </div>
        <div>


        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
        <br />
        <span className="text-lg text-gray-200 underline">❗ This Portfolio was made with React, TypeScript and Tailwind ❗ </span><br />
                ❗ Go and check my other projects on github ❗ <br />
                ❗ Go and  me a question on LinkedIn ❗ <br/>
                ❗ Go and  me an email via Connect ❗ <br/>
        </p>
        <button className="m-5 text-gray-300  hover:text-gray-800 dark:hover:text-white border-2 border-gray-600 dark:border-gray-600 rounded-full px-4 py-2 transition-colors duration-200 transform bg-white hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
      onClick={() =>{window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });}}
      >
        Back up
        </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
