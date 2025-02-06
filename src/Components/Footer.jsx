const Footer = () => {
    return (
      <div className="py-5 border bg-gray-100 flex flex-wrap justify-between px-10 md:px-72">
        <p>&copy; 2025 Vikas Saini. All Rights Reserved.</p>
        <div className="space-x-5">
          <a className="hover:underline" href="#">
            About
          </a>
          <a className="hover:underline" href="#">
             Policy
          </a>
          <a className="hover:underline" href="#">
            Contact
          </a>
        </div>
      </div>
    );
  };
  
  export default Footer;
  