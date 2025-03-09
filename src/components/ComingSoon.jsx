import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ComingSoon = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-900 to-purple-700 text-white text-center p-6">
      <div className="max-w-2xl w-full">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-pulse">Lokesh Verma</h1>
        <p className="text-lg md:text-xl mb-6 opacity-90">
          Software Engineer | Building Scalable & Modern Applications
        </p>
        <p className="text-md md:text-lg mb-6 opacity-80">
          A new experience is coming your way! Stay tuned for the launch of my portfolio.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email for updates"
            className="px-4 py-3 w-full md:w-2/3 rounded-lg border border-amber-400 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-lg"
          />
          <button className="px-6 py-3 bg-amber-400 text-indigo-900 font-semibold rounded-lg shadow-md hover:bg-amber-500 cursor-pointer transition transform hover:scale-105">
            Notify Me
          </button>
        </div>
        
        <p className="text-sm text-gray-300 mt-6">Launching soon! Stay connected.</p>
        
        <div className="flex justify-center gap-6 mt-6 text-2xl">
          <a href="https://www.linkedin.com/in/lokesh-vrma/" className="text-gray-300 hover:text-white transition transform hover:scale-110">
            <FaLinkedin />
          </a>
          <a href="https://github.com/LokeshVrma." className="text-gray-300 hover:text-white transition transform hover:scale-110">
            <FaGithub />
          </a>
          <a href="https://x.com/vrma_lokesh" className="text-gray-300 hover:text-white transition transform hover:scale-110">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;