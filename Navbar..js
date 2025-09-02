import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#about">关于我们</a>
        </li>
        <li>
          <a href="#team">团队成员</a>
        </li>
        <li>
          <a href="#projects">项目展示</a>
        </li>
        <li>
          <a href="#teachers">指导老师</a>
        </li>
        <li>
          <a href="#contact">联系我们</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
