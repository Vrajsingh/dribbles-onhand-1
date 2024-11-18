import React from "react";
import dribbleImage from "../../assets/dribble-1.png";
import Brief from "../Brief/Brief";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div>
        <img
          src={dribbleImage}
          className="md:h-[780px] md:w-[900px] h-[500px] w-full mt-20"
          alt="dribble"
        />
      </div>
      <div className="bg-gray-200 mt-[90px] md:ml-5 mr-5 md:h-[750px] md:w-[1800px] h-[1500px] md:h-[750px] w-full rounded-3xl">
        <h1 className="text-3xl md:text-7xl md:mt-10 mt-10 ml-10 md:ml-20 max-w-5xl">
          We are redefining minimalist living with innovative design and modern
          elegance
        </h1>
        <p className="text-sm md:text-xl text-gray-500 md:mt-5 mt-5 ml-10 md:ml-20 max-w-md">
          At PureSpace, we transform everyday spaces into statements of style
          and simplicity
        </p>
        <div className="flex justify-center md:justify-end mt-10 md:mt-auto">
          <button className="rounded-3xl border-2 border-black p-2 md:p-3 mr-5">
            Explore More
          </button>
        </div>
        <div className="md:mb-5">
            <Brief />
        </div>
      </div>
    </div>
  );
};

export default About;
