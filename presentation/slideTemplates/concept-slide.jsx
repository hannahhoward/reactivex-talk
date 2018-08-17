// Import React
import React from "react";
import PropTypes from "prop-types";

// Import Spectacle Core tags
import { Heading, Text } from "spectacle";

import asSlide from "./as-slide.jsx";
import { headingColor, textColor } from "./utilities.jsx";
import FullScreen from "./full-screen.jsx";

const ConceptSlide = ({
  inverted,
  concept,
  description,
  size,
  fit,
  caps,
  children
}) => {
  return (
    <FullScreen column>
      <Text textColor={textColor(inverted)}>{concept}:</Text>
      <Heading
        size={size}
        fit={fit}
        caps={caps}
        textColor={headingColor(inverted)}
      >
        {description}
      </Heading>
      {children}
    </FullScreen>
  );
};

ConceptSlide.propTypes = {
  caps: PropTypes.bool.isRequired,
  concept: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fit: PropTypes.bool.isRequired,
  inverted: PropTypes.bool,
  size: PropTypes.number.isRequired
};

ConceptSlide.defaultProps = {
  inverted: false,
  size: 1,
  fit: true,
  caps: true
};

export default asSlide(ConceptSlide);
