// Import React
import React from "react";
import PropTypes from "prop-types";

// Import Spectacle Core tags
import {
  Heading,
  Text
} from "spectacle";

import asSlide from "./as-slide.jsx";
import { headingColor, textColor } from "./utilities.jsx";

const DefinitionSlide = ({ inverted, term, definition, size, fit, caps }) => {
  return (
    <div>
    <Heading size={size} fit={fit} caps={caps} textColor={headingColor(inverted)}>
      {term}:
    </Heading>
    <Text textColor={textColor(inverted)}>
      {definition}
    </Text>
    </div>
  );
};

DefinitionSlide.propTypes = {
  caps: PropTypes.bool.isRequired,
  definition: PropTypes.string.isRequired,
  fit: PropTypes.bool.isRequired,
  inverted: PropTypes.bool,
  size: PropTypes.number.isRequired,
  term: PropTypes.string.isRequired
};

DefinitionSlide.defaultProps = {
  inverted: false,
  size: 1,
  fit: true,
  caps: true
};

export default asSlide(DefinitionSlide);
