// Import React
import React from "react";
import PropTypes from "prop-types";

// Import Spectacle Core tags
import { Heading, Image, Text } from "spectacle";

import asSlide from "./as-slide.jsx";
import { headingColor, textColor } from "./utilities.jsx";
import FullScreen from "./full-screen.jsx";

const imageStyle = {
  position: "relative",
  top: "10%",
  height: "40%",
  width: "35%"
};

const DoubleImageSlide = ({
  title,
  image1,
  image2,
  size,
  fit,
  caps,
  inverted,
  text,
  children
}) => {
  const imageSrc1 = require(`../../assets/images/${image1}`).replace("/", "");
  const imageSrc2 = require(`../../assets/images/${image2}`).replace("/", "");

  return (
    <FullScreen column>
      {!!title && (
        <div style={{ width: 1000 }}>
          <Heading
            size={size}
            fit={fit}
            caps={caps}
            textColor={headingColor(inverted)}
            style={{ marginBottom: ".5em" }}
          >
            {title}
          </Heading>
        </div>
      )}
      <div
        style={{
          flex: 1,
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <Image style={imageStyle} src={imageSrc1} />
        <Image style={imageStyle} src={imageSrc2} />
      </div>
      {!!text && (
        <div style={{ width: 1000 }}>
          <Text textColor={textColor(inverted)} style={{ marginTop: ".5em" }}>
            {text}
          </Text>
        </div>
      )}
      {children}
    </FullScreen>
  );
};

DoubleImageSlide.propTypes = {
  caps: PropTypes.bool.isRequired,
  fit: PropTypes.bool.isRequired,
  image1: PropTypes.string.isRequired,
  image2: PropTypes.string.isRequired,
  inverted: PropTypes.bool,
  size: PropTypes.number.isRequired,
  text: PropTypes.node,
  title: PropTypes.string
};

DoubleImageSlide.defaultProps = {
  inverted: false,
  size: 1,
  fit: true,
  caps: true
};

export default asSlide(DoubleImageSlide);
