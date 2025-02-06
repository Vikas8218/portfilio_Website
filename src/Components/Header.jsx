import { useState } from "react";

const Header = () => {
  const [menuLinks] = useState([
    { title: "Home", link: "/home", id: 1 },
    { title: "About", link: "/about", id: 2 },
    { title: "Skills", link: "/skills", id: 3 },
    { title: "Portfolio", link: "/portfolio", id: 4 },
    { title: "Contact", link: "tel:+1234567890", id: 5 }

  ]);

  return (
    <div className="h-20 flex justify-between items-center px-10 md:px-16 bg-gray-100">
      {/* Brand Logo */}
      <h1 className="text-2xl font-bold">Vikas Saini</h1>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6">
        {menuLinks.map((link) => (
          <a
            key={link.id}
            href={link.link}
            className="hover:text-orange-600 text-lg"
          >
            {link.title}
          </a>
        ))}
      </div>

      {/* Hire Me Button */}
      <a
        href="/hire-me"
        className="px-4 py-2 bg-orange-500 shadow rounded-full text-lg"
      >
        Developer
      </a>
    </div>
  );
};

export default Header;
