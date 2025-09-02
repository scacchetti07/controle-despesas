import React from "react";

function Link({ path, children }) {
  return (
    <a
      className="hover:text-orange-400 transition-colors duration-300"
      href={path}
    >
      {children}
    </a>
  );
}

export default Link;
