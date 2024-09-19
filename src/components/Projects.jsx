import React from "react";
import { PROJECT } from "../utils/data"; // Assuming PROJECT is defined correctly

const Projects = () => {
  return (
    <div className="container mx-auto my-3">
      <h1 className="text-2xl font-bold text-center mb-5">Projects</h1>
      <div className="flex flex-wrap justify-center">
        {PROJECT.map((data) => (
          <div key={data.id} className="my-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3">
            <div
              className="bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40"
              
            >
              <div className="flex justify-center items-center p-3">
                <img
                  src={data.imageSrc} // Double-check image path
                  className="w-64 h-48 rounded-lg border-2 border-yellow-400"
                  alt="..."
                />
              </div>
              <div className="text-center p-4">
                <h5 className="text-base">{data.title}</h5>
                <p className="text-xs font-light leading-5 opacity-80">{data.description}</p>

                <div className="card bg-dark text-light shadow-lg p-4">
                    <div className="flex items-center justify-center gap-2 flex-wrap my-3">
                        {data.languages?.map((language, index) => (
                    <div
                    key={language + index}
                    className="text-[11px] bg-blue-800/30 rounded md:text-xs px-3 py-1"
                    >
                        {language}
                    </div>
                    ))}
                </div>
                </div>

                <div className="mt-3 flex justify-center space-x-4">
                  <a href={data.demo} className="primary-btn px-3 py-2 rounded">
                    Demo
                  </a>
                  <a href={data.source} className="warning-btn px-3 py-2 rounded">
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;