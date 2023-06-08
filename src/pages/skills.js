import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiPython,
  DiJava,
  DiGit,
  DiGithubBadge,
  DiHtml5,
  DiCss3,
  DiMysql,
  DiUnitySmall,
  DiC,
} from "react-icons/di";

const Skills = () => {
  let size = "5em";
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-semibold mb-8 text-center">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="flex flex-col items-center hover:scale-105 transform transition-transform duration-300">
          <DiReact color="#61DBFB" size={size} />
          <p className="mt-2">React</p>
        </div>
        <div className="flex flex-col items-center hover:scale-105 transform transition-transform duration-300">
          <DiJavascript1 color="#F7DF1E" size={size} />
          <p className="mt-2">JavaScript</p>
        </div>
        <div className="flex flex-col items-center hover:scale-105 transform transition-transform duration-300">
          <DiNodejsSmall color="#68A063" size={size} />
          <p className="mt-2">Node.js</p>
        </div>
        <div className="flex flex-col items-center hover:scale-105 transform transition-transform duration-300">
          <DiMongodb color="#47A248" size={size} />
          <p className="mt-2">MongoDB</p>
        </div>
        <div className="flex flex-col items-center hover:scale-105 transform transition-transform duration-300">
          <DiPython color="#3572A5" size={size} />
          <p className="mt-2">Python</p>
        </div>
        <div className="flex flex-col items-center hover:scale-105 transform transition-transform duration-300">
          <DiJava color="#007396" size={size} />
          <p className="mt-2">Java</p>
        </div>
        <div className="flex flex-col items-center hover:scale-105 transform transition-transform duration-300">
          <DiGit color="#F05032" size={size} />
          <p className="mt-2">Git</p>
        </div>
        <div className="flex flex-col items-center hover:scale-105 transform transition-transform duration-300">
          <DiGithubBadge color="#181717" size={size} />
          <p className="mt-2">GitHub</p>
        </div>
        <div className="flex flex-col items-center hover:scale-105 transform transition-transform duration-300">
          <DiUnitySmall color="#000000" size={size} />
          <p className="mt-2">Unity</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
