import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400   py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg  text-white font-semibold mb-4">
              Resources
            </h3>
            <ul className="list-none">
              <li className="mb-2 transition duration-300 ease-in-out transform hover:text-amber-500">
                <a href="#">Product</a>
              </li>
              <li className="mb-2 transition duration-300 ease-in-out transform hover:text-amber-500 ">
                <a href="#">Services</a>
              </li>
              <li className="mb-2 transition duration-300 ease-in-out transform hover:text-amber-500 ">
                <a href="#">About Us</a>
              </li>
              <li className="mb-2 transition duration-300 ease-in-out transform hover:text-amber-500 ">
                <a href="#">Benefits</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg  text-white font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="list-none">
              <li className="mb-2 transition duration-300 ease-in-out transform hover:text-amber-500 ">
                <a href="#">Features</a>
              </li>
              <li className="mb-2 transition duration-300 ease-in-out transform hover:text-amber-500 ">
                <a href="#">Pricing Plan</a>
              </li>
              <li className="mb-2 transition duration-300 ease-in-out transform hover:text-amber-500">
                <a href="#">Best Program</a>
              </li>
              <li className="mb-2 transition duration-300 ease-in-out transform hover:text-amber-500 ">
                <a href="#">Press Kit</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg text-white font-semibold mb-4">Company</h3>
            <ul className="list-none">
              <li className="mb-2 transition duration-300 ease-in-out transform hover:text-amber-500 ">
                <a href="#">About</a>
              </li>
              <li className="mb-2 transition duration-300 ease-in-out transform hover:text-amber-500">
                <a href="#">Team Member</a>
              </li>
              <li className="mb-2 transition duration-300 ease-in-out transform hover:text-amber-500 ">
                <a href="#">Reviews</a>
              </li>
              <li className="mb-2 transition duration-300 ease-in-out transform hover:text-amber-500 ">
                <a href="#">Latest News</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">Social</h3>
            <ul className="list-none">
              <li className="mb-2 transition duration-300 ease-in-out transform hover:text-amber-500 ">
                <a href="#">Facebook</a>
              </li>
              <li className="mb-2 transition duration-300 ease-in-out transform hover:text-amber-500 ">
                <a href="#">Twitter</a>
              </li>
              <li className="mb-2 transition duration-300 ease-in-out transform hover:text-amber-500 ">
                <a href="#">Instagram</a>
              </li>
              <li className="mb-2 transition duration-300 ease-in-out transform hover:text-amber-500 ">
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
