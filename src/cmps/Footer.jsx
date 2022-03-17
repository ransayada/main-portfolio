import React from 'react'

const Footer = () => {
  return (
    <div >
        <footer className="bg-white dark:bg-gray-800 w-full px-6 lg:px-0 lg:py-8">
        <div className="max-w-screen-xl mx-auto px-4">
          <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
            <li className="my-2">
              <p
                className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                >
                Connect
              </p>
              <p className="text-gray-200">Ran.sayada@gmail.com</p>
            </li>

            <li className="my-2">
              <a
                className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="https://github.com/ransayada"
              >
                Github
              </a>
              <p className="text-gray-200">ransayada</p>
            </li>
            <li className="my-2">
              <a
                className="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="https://www.linkedin.com/in/ran-sayada/"
              >
                LinkedIn
              </a>
              <p className="text-gray-200">ran-sayada</p>
            </li>
          </ul>

          <div className="text-center text-gray-500 dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
            Created by Ran Sayada &copy; 2022
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer