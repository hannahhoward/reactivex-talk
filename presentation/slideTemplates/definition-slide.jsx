// Import React
import React from "react";
import PropTypes from "prop-types";

// Import Spectacle Core tags
import {
  Heading,
  Text
} from "spectacle";

import asSlide from "./as-slide.jsx";


const DefinitionSlide = ({ term, definition }) => {
  return (
    <div>
    <Heading size={1} fit caps textColor="primary">
      {term}:
    </Heading>
    <Text textColor="tertiary">
      {definition}
    </Text>
    </div>
  );
};

DefinitionSlide.propTypes = {
  definition: PropTypes.string.isRequired,
  term: PropTypes.string.isRequired
};

export default asSlide(DefinitionSlide);
