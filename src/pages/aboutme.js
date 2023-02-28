import React from "react";
import profilePic from "../assets/profile-pic.jpg"; // Replace with your own image
import { FaGithub, FaLinkedin } from "react-icons/fa";

const AboutMe = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          About Me
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <img
              src={profilePic}
              className="rounded-full w-64 h-64 mb-4"
              alt="Profile"
            />
            <div className="flex flex-row mb-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="mx-4"
              >
                <FaGithub size="2em" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                className="mx-4"
              >
                <FaLinkedin size="2em" />
              </a>
            </div>
          </div>
          <div className="w-full md:w-2/3 flex flex-col items-center">
            <p className="mb-3 text-xl">
              Hi, I'm Joaquin Castrillon a Computer Science Student  based in Orlando, FL.
            </p>
            <p className="mb-3 text-lg">
              I have [Number of Years] years of experience in [Your Area of
              Expertise].
            </p>
            <p className="mb-3 text-lg">
              Some of the technologies I enjoy working with include [List Your
              Technologies].
            </p>
            <p className="mb-3 text-lg">
              When I'm not coding, you can find me [Your Hobbies/Interests].
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
