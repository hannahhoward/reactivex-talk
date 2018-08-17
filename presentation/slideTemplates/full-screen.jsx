import React from "react";
import PropTypes from "prop-types";

const fullScreenStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  top: "calc(-50vh + 50%)",
  left: "calc(-50vw + 50%)",
  position: "absolute",
  width: "100vw",
  height: "100vh",
  padding: "10vh 10vw"
};

const FullScreen = ({ children, column, style }) => {
  const flexDirection = column ? "column" : "row";
  const justifyContent = column ? "center" : "flex-start";
  const finalStyle = {
    ...fullScreenStyle,
    ...style,
    flexDirection,
    justifyContent
  };
  return <div style={finalStyle}>{children}</div>;
};

FullScreen.propTypes = {
  children: PropTypes.node,
  column: PropTypes.bool.isRequired,
  style: PropTypes.object
};

FullScreen.defaultProps = {
  column: false
};

export default FullScreen;
