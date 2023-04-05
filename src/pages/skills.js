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
    <div className="flex ">
      <DiReact color="#61DBFB" size={size} />
      <DiJavascript1 color="#F7DF1E" size={size} />
      <DiNodejsSmall color="#68A063" size={size} />
      <DiMongodb color="#47A248" size={size} />
      <DiPython color="#3572A5" size={size} />
      <DiJava color="#007396" size={size} />
      <DiGit color="#F05032" size={size} />
      <DiGithubBadge color="#181717" size={size} />
      <DiUnitySmall color="#000000" size={size} />

      <h1>Skills</h1>
    </div>
  );
};

export default Skills;
