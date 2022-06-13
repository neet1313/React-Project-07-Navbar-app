import React from "react";

const Sidebar = ({onLinks}) => {
  return (
    <ul className="links">
      {onLinks.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <a href={url}>{text}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Sidebar;
