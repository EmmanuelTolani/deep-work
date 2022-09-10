import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__logo">Deep Work</div>
        <ul className="header__nav">
          <li>
            <a href="/index.html">
              <i className="fa-solid fa-chart-line"></i> Report
            </a>
          </li>
          <li>
            <a href="/index.html">
              <i className="fa-solid fa-gear"></i> Settings
            </a>
          </li>
          <li>
            <a href="/index.html">
              <i className="fa-solid fa-user"></i> Login
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
