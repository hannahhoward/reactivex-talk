// Import React
import React from "react";
import PropTypes from "prop-types";

// Import Spectacle Core tags
import {
  Heading,
  List,
  ListItem
} from "spectacle";

import asSlide from "./as-slide.jsx";
import { headingColor, textColor } from "./utilities.jsx";
import FullScreen from "./full-screen.jsx";

const ListSlide = ({ inverted, title, list, size, fit, caps }) => {
  return (
    <FullScreen column>
      <Heading fit={fit} size={size} caps={caps} textColor={headingColor(inverted)}>
        { title }
      </Heading>
      <List ordered textColor={textColor(inverted)}>
        {
          list.map((listItem) => {
            return (
              <ListItem key={listItem}>
                {listItem}
              </ListItem>
            );
          })
        }
      </List>
    </FullScreen>
  );
};

ListSlide.propTypes = {
  caps: PropTypes.bool.isRequired,
  fit: PropTypes.bool.isRequired,
  inverted: PropTypes.bool,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  size: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

ListSlide.defaultProps = {
  inverted: false,
  size: 4,
  fit: false,
  caps: true
};

export default asSlide(ListSlide);
