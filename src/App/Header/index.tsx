import * as React from "react";
import "./index.scss";

const Header: React.FC = () => (
  <header>
    <nav>
      <div className="italic logo">rellate</div>
      <ul>
        <li>
          <a href="#form">Get Started</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
