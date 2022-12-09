import React from "react";
import "./navbar.css";
import { ProjectRoutes } from "../../Routes/routes";

export const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="linkContainer">
          <a className="links" href="/Task1">
            Coding Task #1
          </a>
          <a className="links" href="/Task2">
            Coding Task #2
          </a>
          <a className="links" href="/Task3">
            Coding Task #3
          </a>
        </div>
      </div>
      <ProjectRoutes />
    </div>
  );
};
