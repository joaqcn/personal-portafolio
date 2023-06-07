import React from "react";
import profilePic from "../assets/profile-pic.jpg"; // Replace with your own image
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const AboutMe = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center flex text-gray-800">
          About Me
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full  h-full md:w-1/3 flex flex-col  justify-center items-center">
            <img
              src={profilePic}
              className=" justify-center rounded-full w-64 h-64 mb-4"
              alt="Profile"
            />
            <div className="flex flex-row mb-4">
              <a
                href="https://github.com/joaqcn"
                target="_blank"
                rel="noreferrer"
                className="mx-4 "
              >
                <FaGithub size="3em" />
              </a>
              <a
                href="https://www.linkedin.com/in/jcastrillonn/"
                target="_blank"
                rel="noreferrer"
                className="mx-4"
              >
                <FaLinkedin size="3em" />
              </a>
            </div>
          </div>
          <div className=" w-full md:w-2/3 flex flex-col items-center  my-10">
            <p className="mb-3 text-6xl">
              <Typewriter
                options={{
                  strings: ["I am Joaquin Castrillon", "CS Student at University of Central Florida"],
                  autoStart: true,
                  loop: true,
                  typeSpeed : "70",
                  deleteSpeed:"70"
                  
                }}
              />
              
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
