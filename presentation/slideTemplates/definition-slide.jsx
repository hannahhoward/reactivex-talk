// Import React
import React from "react";
import PropTypes from "prop-types";

// Import Spectacle Core tags
import { Heading, Text } from "spectacle";

import asSlide from "./as-slide.jsx";
import { headingColor, textColor } from "./utilities.jsx";
import FullScreen from "./full-screen.jsx";

const DefinitionSlide = ({
  inverted,
  term,
  definition,
  size,
  fit,
  caps,
  colon,
  children
}) => {
  return (
    <FullScreen column>
      <Heading
        size={size}
        fit={fit}
        caps={caps}
        textColor={headingColor(inverted)}
      >
        {term}
        {colon ? ":" : ""}
      </Heading>
      <Text style={{ marginTop: "40px" }} textColor={textColor(inverted)}>
        {definition}
      </Text>
      {children}
    </FullScreen>
  );
};

DefinitionSlide.propTypes = {
  caps: PropTypes.bool.isRequired,
  definition: PropTypes.string.isRequired,
  fit: PropTypes.bool.isRequired,
  inverted: PropTypes.bool,
  size: PropTypes.number.isRequired,
  term: PropTypes.string.isRequired,
  colon: PropTypes.bool.isRequired
};

DefinitionSlide.defaultProps = {
  inverted: false,
  size: 1,
  fit: true,
  caps: true,
  colon: true
};

export default asSlide(DefinitionSlide);
