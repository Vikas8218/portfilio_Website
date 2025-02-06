import { useState } from "react";
import bannerImage from "../assets/vikas2.png";

const About = () => {
  const [data, setData] = useState({
    image: bannerImage,
    title: "Java Full Stack Developer",
    desc1:
      "Passionate Full-Stack Developer specializing in Java with Spring Boot for the backend and React for the frontend, delivering robust and dynamic web applications.",
    desc2:
      "I have experience building full-stack applications that are scalable and maintainable, with a focus on performance and user experience.",
    actionButton: {
      title: "Looking",
      link: "/readmore",
    },
  });

  return (
    <div className="main-container bg-gray-100 py-16">
      <h1 className="pb-1 text-center text-5xl font-bold underline">About Me</h1>
      <div className="flex flex-wrap items-center justify-center">
        {/* Image Container */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img className="w-2/3 md:w-1/2" src={data.image} alt="Vikas Saini" />
        </div>

        {/* Text Container */}
        <div className="w-full md:w-1/2 px-4 md:px-8 text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-3xl md:text-5xl font-semibold">{data.title}</h2>
          <p className="mt-4 text-lg md:text-xl text-gray-700">{data.desc1}</p>
          <p className="mt-2 text-lg md:text-xl text-gray-700">{data.desc2}</p>
          <div className="mt-6">
            <a href={data.actionButton.link}>
              <button className="bg-orange-500 px-4 py-2 text-xl rounded-full shadow hover:bg-orange-600 transition-all">
                {data.actionButton.title}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

