import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export const Nav = () => {
  const [active, setActive] = useState(0);
  const routes = [
    {
      name: "Home",
      path: "/project1",
    },
    {
      name: "Redux Project One",
      path: "/project2",
    },
    {
        name: "Redux Project Two",
        path: "/project2",
      }
  ];
  const changeActive = (index) => {
    setActive(index);
  }
  return (
    <div className="Nav">
      <ul>
        {routes.map((item,index) => {
          return (
            <li>
              <Link className = {index === active ? "active" : null} onClick={() => changeActive(index)} to={item.path}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
