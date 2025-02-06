import bannerImage from "../assets/vikas1.png";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Java Developer"],
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="main-container flex flex-wrap items-center text-white py-16 px-5"
    >
      {/* Text Section */}
      <div className="w-full md:w-1/2 flex justify-center text-center md:text-left">
        <div className="w-2/3 space-y-4">
          <h3 className="text-3xl font-semibold">Hi, I am</h3>
          <h1 className="text-4xl md:text-5xl font-bold">Vikas Saini</h1>
          <h2 className="text-3xl">
            I am <span className="font-bold underline" ref={el}></span>
          </h2>
          <p>
          Passionate developer specializing in full-stack Java development, eager to build innovative applications.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-5">
          <a href="https://github.com/Vikas8218" target="_blank" rel="noopener noreferrer">
  <i className="fa-brands fa-github text-2xl"></i>
</a>
<a 
  href="https://www.intershala.com" 
  target="_blank" 
  rel="noopener noreferrer"
  className="hover:bg-orange-600 border cursor-pointer w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center"
>
  <i className="fa fa-briefcase text-2xl"></i> {/* You can use another icon or image */}
</a>

<a 
  href="https://www.linkedin.com/in/yourprofile" 
  target="_blank" 
  rel="noopener noreferrer"
  className="hover:bg-orange-600 border cursor-pointer w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center"
>
  <i className="fa-brands fa-linkedin-in text-2xl"></i>
</a>

          </div>

        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          className="rounded shadow-lg w-2/3 md:w-1/2"
          src={bannerImage}
          alt="Vikas Saini"
        />
      </div>
    </div>
  );
};

export default Banner;
