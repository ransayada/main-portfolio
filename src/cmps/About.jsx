import React from 'react'

const About = () => {
  return (
    <div className=" dark:bg-gray-700 flex flex-col items-center">
      <h1 className="p-12 text-1xl md:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-50">
        About Me
      </h1>
      <div className="dark:bg-gray-700 flex flex-col items-center">
        <h1 className="p-1  lg:text-xl text-gray-800 dark:text-gray-50">
          Hi, my name is{" "}
          <span className="text-emerald-500 hover:text-emerald-300 underline">
            Ran Sayada
          </span>{" "}
          and I'm a{" "}
          <span className="text-emerald-500 hover:text-emerald-300">
            Full-Stack
          </span>{" "}
          developer from Israel. <br />
          Since I can remember my name, I have been programming. <br />
          First, I learned, by myself{" "}
          <span className="text-emerald-500 hover:text-emerald-300">
            OOP
          </span>{" "}
          with{" "}
          <span className="text-emerald-500 hover:text-emerald-300">JAVA</span>,
          then i learned{" "}
          <span className="text-emerald-500 hover:text-emerald-300">
            Python
          </span>{" "}
          and work with those two for a while. <br />
          After a while, I learned software and web security, and how to work
          with{" "}
          <span className="text-emerald-500 hover:text-emerald-300">
            LINUX
          </span>{" "}
          (Ubuntu, Kubuntu, Kali, etc). <br />
          Then, I got into web development with{" "}
          <span className="text-emerald-500 hover:text-emerald-300">
            HTML5, CSS3, JS(ES6)
          </span>
          . <br />
          I've learned about HTTP requests and responses, how to work with{" "}
          <span className="text-emerald-500 hover:text-emerald-300">
            ExpressJS (NodeJS),
          </span>{" "}
          and more Back-end features. <br />I liked it, so I learned some
          Front-end UI as well, frameworks like{" "}
          <span className="text-emerald-500 hover:text-emerald-300">
            ReactJS
          </span>{" "}
          ( Hooks Context and Redux SM),
          <br /> as well as{" "}
          <span className="text-emerald-500 hover:text-emerald-300">Vue</span> (
          with Vuex SM) and{" "}
          <span className="text-emerald-500 hover:text-emerald-300">
            Angular
          </span>{" "}
          (with NgRx and{" "}
          <span className="text-emerald-500 hover:text-emerald-300">
            TypeScript
          </span>
          ). <br />I also learned about concepts and design stacks like{" "}
          <span className="text-emerald-500 hover:text-emerald-300">MERN</span>{" "}
          , in addition to design patterns, Algorithms, and data structures.{" "}
          <br />
          <span className="text-emerald-500 hover:text-emerald-300">Now</span>,
          I am searching for a job that will make me feel{" "}
          <span className="text-teal-500 hover:text-teal-300">
            Useful, Happy and Interested
          </span>{" "}
          I love to learn new technologies and challenging myself. <br />
          If you liked my website, feel free to message me and Check my projects
          down below.
        </h1>
      </div>
    </div>
  )
}

export default About