import * as React from "react";
import "./index.scss";

const Header: React.FC = () => (
  <header>
    <div className="italic logo">rellate</div>
    <ul>
      <li>
        <a href="#form">Get Started</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </header>
);

export default Header;
