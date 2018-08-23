// Import React
import React from "react";
import PropTypes from "prop-types";

// Import Spectacle Core tags
import { Heading, Image, Text, Anim } from "spectacle";

import asSlide from "./as-slide.jsx";
import { headingColor, textColor } from "./utilities.jsx";
import FullScreen from "./full-screen.jsx";

const imageStyle = {
  position: "absolute",
  left: "50%",
  transform: "scale(1) translateX(-50%)"
};

const RxJsGraphSlide = ({ size, fit, caps, inverted, children }) => {
  const imageSrc = require(`../../assets/images/rxjsgraph.png`).replace(
    "/",
    ""
  );
  const replaceImageSrc = require(`../../assets/images/rxjsgraph-highlighted.png`).replace(
    "/",
    ""
  );
  const thisImageStyle = {
    ...imageStyle,
    zoom: 8, //increase if you have very small images
    display: "block",
    margin: "auto",
    height: "auto",
    width: "auto",
    top: "10%"
  };
  const replaceImageStyle = {
    ...imageStyle,
    zoom: 8, //increase if you have very small images
    display: "block",
    margin: "auto",
    height: "auto",
    width: "auto",
    top: "10%"
  };

  const glassesImageSrc = require(`../../assets/images/jurassic-park-glasses.gif`).replace(
    "/",
    ""
  );
  const glassesImageStyle = {
    ...imageStyle,
    zoom: 8, //increase if you have very small images
    display: "block",
    margin: "auto",
    height: "auto",
    width: "auto",
    maxWidth: "90%",
    maxHeight: "90%",
    transform: "translate(-110%, 0%)"
  };
  const arrowImageSrc = require(`../../assets/images/arrow.png`).replace(
    "/",
    ""
  );
  const arrowImageStyle = {
    ...imageStyle,
    zoom: 8, //increase if you have very small images
    display: "block",
    margin: "auto",
    height: "auto",
    width: "auto",
    maxWidth: "30%",
    maxHeight: "30%"
  };

  return (
    <FullScreen column>
      <div style={{ width: 1000 }}>
        <Heading
          size={size}
          fit={fit}
          caps={caps}
          textColor={headingColor(inverted)}
          style={{ marginBottom: ".5em" }}
        >
          Talk Callback
        </Heading>
      </div>
      <div
        style={{
          flex: 1,
          position: "relative",
          width: "100%",
          justifyContent: "stretch"
        }}
      >
        <Image style={thisImageStyle} src={imageSrc} />
        <Anim
          transitionDuration={500}
          fromStyle={{ opacity: 0, transform: "scale(1) translate(-50%, 0%)" }}
          toStyle={[
            { opacity: 1, transform: "scale(1) translate(-50%, 0%)" },
            { opacity: 1, transform: "scale(3) translate(-40%, 15%)" }
          ]}
          easing="quadInOut"
        >
          <Image style={replaceImageStyle} src={replaceImageSrc} />
        </Anim>
        <Anim
          transitionDuration={300}
          fromStyle={{ opacity: 0 }}
          toStyle={[{ opacity: 1 }]}
          easing="quadInOut"
        >
          <div>
            <Image style={glassesImageStyle} src={glassesImageSrc} />
            <Image
              style={{ ...arrowImageStyle, transform: "translate(290%, 38%)" }}
              src={arrowImageSrc}
            />
            <Image
              style={{
                ...arrowImageStyle,
                transform: "translate(290%, -85%)"
              }}
              src={arrowImageSrc}
            />
          </div>
        </Anim>
      </div>
      {children}
    </FullScreen>
  );
};

RxJsGraphSlide.propTypes = {
  caps: PropTypes.bool.isRequired,
  fit: PropTypes.bool.isRequired,
  inverted: PropTypes.bool,
  size: PropTypes.number.isRequired
};

RxJsGraphSlide.defaultProps = {
  inverted: false,
  size: 1,
  fit: true,
  caps: true
};

export default asSlide(RxJsGraphSlide);
