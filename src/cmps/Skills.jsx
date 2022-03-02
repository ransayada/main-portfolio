import React from "react";

const Skills = () => {
  return (
    <div className="dark:bg-gray-700 flex flex-col items-center">
      <h1 className="p-12 text-1xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-50">
        Skills
      </h1>
      <div className="w-3/4">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-amber-600 bg-amber-200">
                Java-Script (es6)
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-amber-600">
                95%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-amber-200">
            <div
              style={{ width: "95%" }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amber-500"
            ></div>
          </div>
        </div>
      </div>
      <div className="w-3/4">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                React (Hooks, context, redux)
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-indigo-600">
                90%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
            <div
              style={{ width: "90%" }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
            ></div>
          </div>
        </div>
      </div>
      <div className="w-3/4">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200">
                Vue.js (Vuex)
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-emerald-600">
                90%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-emerald-200">
            <div
              style={{ width: "90%" }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
            ></div>
          </div>
        </div>
      </div>
      <div className="w-3/4">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                Node.js (Express , MongoDB , RESTful API)
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-teal-600">
                90%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-200">
            <div
              style={{ width: "90%" }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
            ></div>
          </div>
        </div>
      </div>
      <div className="w-3/4">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200">
                Angular (RxJs, NgRx)
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-red-600">
                90%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200">
            <div
              style={{ width: "90%" }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
            ></div>
          </div>
        </div>
      </div>
      <div className="w-3/4">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                css3 (Sass, Bootstrap, Tailwind etc.)
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-blue-600">
                100%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
            <div
              style={{ width: "100%" }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
            ></div>
          </div>
        </div>
      </div>
      <div className="p-2">
      <h1 className="p-6 text-1xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-50">
        More Skills
      </h1>
      <div className="p-12 flex ">
              <span className="flex justify-between text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
                 Bootstrap
              </span>
              <div className="w-5"></div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
                SASS
              </span>
              <div className="w-5"></div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-500 bg-blue-200">
                Tailwind
              </span>
              <div className="w-5"></div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
                Adobe XD
              </span>
              <div className="w-5"></div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200">
                Figma
              </span>
              <div className="w-20"></div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200">
                MongoDB
              </span>
              <div className="w-5"></div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  text-orange-600 bg-orange-200">
                Firebase
              </span>
              <div className="w-5"></div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  text-blue-600 bg-blue-200">
                MySQL
              </span>
              <div className="w-5"></div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full  text-pink-600 bg-pink-200">
                GraphQL
              </span>
              
            </div>
      <div className="px-12 flex">
      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200">
                Git
              </span>
              <div className="w-5"></div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200">
                Linux
              </span>
              <div className="w-5"></div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                other programming languages (Java, Python, C++ and C)
              </span>
              <div className="w-5"></div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-amber-600 bg-amber-200">
                AWS amplify
              </span>
              <div className="w-5"></div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                Web Pack
              </span>
              <div className="w-5"></div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                Tests (Unit, Jest, Mocha, Karma)
              </span>
              <div className="w-5"></div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                DevTools
              </span>
              
            </div>
      </div>
    </div>
  );
};

export default Skills;
