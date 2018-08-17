// Import React
import React from "react";
import PropTypes from "prop-types";

// Import Spectacle Core tags
import { Heading } from "spectacle";

import asSlide from "./as-slide.jsx";
import { headingColor } from "./utilities.jsx";
import FullScreen from "./full-screen.jsx";

const SimpleSlide = ({ inverted, statement, size, fit, caps, children }) => {
  return (
    <FullScreen column>
      <Heading
        size={size}
        fit={fit}
        caps={caps}
        textColor={headingColor(inverted)}
      >
        {statement}
      </Heading>
      {children}
    </FullScreen>
  );
};

SimpleSlide.propTypes = {
  caps: PropTypes.bool.isRequired,
  fit: PropTypes.bool.isRequired,
  inverted: PropTypes.bool,
  size: PropTypes.number.isRequired,
  statement: PropTypes.string.isRequired
};

SimpleSlide.defaultProps = {
  inverted: false,
  size: 1,
  fit: true,
  caps: true
};

export default asSlide(SimpleSlide);
