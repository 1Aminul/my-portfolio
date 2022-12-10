import React from "react";

const About = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1">
      <div className="my-20 ml-32">
        <h2 className="text-6xl font-bold text-white"><span className="text-red-500">Hey I'm</span><br/> MD Aminul Islam</h2>
        <p className="text-error text-3xl font-bold">I am Frontend Developer</p>

        <button className="btn btn-error text-white mt-4">Download Resume</button>
      </div>
      <div>
        <img src="" alt=""/>
      </div>
    </div>
  );
};

export default About;
