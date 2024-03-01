import React from "react";

const CardContainer = ({ children, isDark = false }) => {
  return (
    <div
      style={
        isDark ? { background: "rgb(0, 0, 0, 0.2)" } : { background: "silver" }
      }
    >
      {children}
    </div>
  );
};

export default CardContainer;
