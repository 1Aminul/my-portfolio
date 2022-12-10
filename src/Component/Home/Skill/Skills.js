import React from "react";

const Skills = () => {
    const skills = ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "MongoDB"]
  return (
   <div className="text-center">
        <h2 className="text-center text-2xl font-bold text-white">Skills & Technology</h2>
        <div className="grid lg:grid-cols-2 w-4/5 mx-auto mt-20 gap-5">
            {
                skills.map(skill=>  
                <div className="card w-[100%] bg-gray-800 shadow-xl">
                <div className="card-body">
                  
                  <p className="text-white">{skill}</p>
                </div>
              </div>)
            }
        </div>
   </div>
  );
};

export default Skills;
