// Import React
import React from "react";
import PropTypes from "prop-types";

// Import Spectacle Core tags
import {
  BlockQuote, Quote, Cite
} from "spectacle";

import asSlide from "./as-slide.jsx";
//import { headingColor, textColor } from "./utilities.jsx";
import FullScreen from "./full-screen.jsx";

const QuoteSlide = ({ inverted, quote, cite }) => {
  return (
    <FullScreen column>
      <BlockQuote>
        <Quote>{quote}</Quote>
        <Cite>{cite}</Cite>
      </BlockQuote>
    </FullScreen>
  );
};

QuoteSlide.propTypes = {
  cite: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired
};

QuoteSlide.defaultProps = {
};

export default asSlide(QuoteSlide);
