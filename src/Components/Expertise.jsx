import React from "react";
import bannerBackground from "../assets/banner_wallpaper.svg";

const Expertise = () => {
  return (
    <>
      <div className="mt-2">
        <h1 className="mb-16 text-5xl font-bold underline text-center">
          My Expertise
        </h1>

        {/* Box Section */}
        <div
          style={{
            backgroundImage: `URL(${bannerBackground})`,
            backgroundSize: "cover",
          }}
          className="box-container items-center flex py-16"
        >
          {/* Text Container */}
          <div className="flex justify-center">
            <div className="text-white w-2/3 text-center space-y-3">
              <h1 className="text-4xl font-bold">I love these technologies</h1>
              <p>
              Proficient in Core Java, J2EE, Hibernate, Spring, Spring Boot, HTML, CSS, JavaScript, ReactJS, Tailwind CSS, and MySQL.This line captures all the technologies and frameworks you're familiar this coding.
              </p>
             
            </div>
          </div>

          {/* Skills Container */}
          <div className="flex justify-center">
            <div className="flex justify-center w-2/3 h-fit space-x-3 flex-wrap">
              {[
                "Core Java",
                "J2EE",
                "Hibernate",
                "Spring ",
                "Spring Boot",
                "Html"
                ,"Css",
                "JavaScript",
                "ReactJS",
                "Tailwind CSS",
                "MySql"
              ].map((skill, index) => (
                <p
                  key={index}
                  className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
