import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-500">
      <div className="mx-auto px-4 py-2">
        <div className="flex justify-between">
          <div className="flex space-x-4" >
            <Link to="/" className="text-white font-bold">
              About Me
            </Link>
            <Link to="/skills" className="text-white font-bold">
              Skills
            </Link>
            <Link to="/projects" className="text-white font-bold">
              Projects
            </Link>
          </div>
          <div className="flex items-center">
            <Outlet />
            <div> Image </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
