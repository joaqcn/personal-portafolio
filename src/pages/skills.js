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
    
    <div className=" text-center flex flex-wrap justify-center items-center">
      <div className="m-4">
        <DiReact color="#61DBFB" size={size} />
        <p>React</p>
      </div>
      <div className="m-4">
        <DiJavascript1 color="#F7DF1E" size={size} />
        <p>JavaScript</p>
      </div>
      <div className="m-4">
        <DiNodejsSmall color="#68A063" size={size} />
        <p>Node.js</p>
      </div>
      <div className="m-4">
        <DiMongodb color="#47A248" size={size} />
        <p>MongoDB</p>
      </div>
      <div className="m-4">
        <DiPython color="#3572A5" size={size} />
        <p>Python</p>
      </div>
      <div className="m-4">
        <DiJava color="#007396" size={size} />
        <p>Java</p>
      </div>
      <div className="m-4">
        <DiGit color="#F05032" size={size} />
        <p>Git</p>
      </div>
      <div className="m-4">
        <DiGithubBadge color="#181717" size={size} />
        <p>GitHub</p>
      </div>
      <div className="m-4">
        <DiUnitySmall color="#000000" size={size} />
        <p>Unity</p>
      </div>

      
    </div>
  );
};

export default Skills;
