// Import React
import React from "react";
import PropTypes from "prop-types";

// Import Spectacle Core tags
import { BlockQuote, Quote, Cite, Appear } from "spectacle";

import asSlide from "./as-slide.jsx";
import { headingColor, textColor } from "./utilities.jsx";
import FullScreen from "./full-screen.jsx";

const QuotesSlide = ({ inverted, quotes, appear, children }) => {
  return (
    <FullScreen style={{ alignItems: "right" }} column>
      {appear
        ? quotes.map(quote => (
            <Appear key={quote.quote}>
              <BlockQuote style={{ textAlign: "right" }}>
                <Quote textColor={headingColor(inverted)}>{quote.quote}</Quote>
                <Cite textColor={textColor(inverted)}>{quote.cite}</Cite>
              </BlockQuote>
            </Appear>
          ))
        : quotes.map(quote => (
            <BlockQuote key={quote.quote} style={{ textAlign: "right" }}>
              <Quote textColor={headingColor(inverted)}>{quote.quote}</Quote>
              <Cite textColor={textColor(inverted)}>{quote.cite}</Cite>
            </BlockQuote>
          ))}
      {children}
    </FullScreen>
  );
};

QuotesSlide.propTypes = {
  appear: PropTypes.bool,
  inverted: PropTypes.bool,
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      cite: PropTypes.string.isRequired
    })
  ).isRequired
};

QuotesSlide.defaultProps = {
  inverted: false,
  appear: false
};

export default asSlide(QuotesSlide);
