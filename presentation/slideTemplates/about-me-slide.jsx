// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Heading,
  ListItem,
  List,
  Appear,
  Image
} from "spectacle";

import asSlide from "./as-slide.jsx";

const fullScreenStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  top: "calc(-50vh + 50%)",
  left: "calc(-50vw + 50%)",
  position: "absolute",
  width: "100vw",
  height: "100vh",
  padding: "10vh 10vw"
};

const AboutMeSlide = () => {
  const tgwLogo = require("../../assets/techgirlwonder-01.png").replace("/", "");
  return (
      <div style={fullScreenStyle}>
        <div style={{ flexGrow: 0, height: "100%" }}>
          <Appear >
              <Image src={tgwLogo} height="100%" margin="0px 40px 0px 0px" />
          </Appear>
        </div>
        <div style={{ flexGrow: 1 }}>
          <Heading size={1} fit caps lineHeight={1} textColor="quartenary">
            @techgirlwonder #AboutMe
          </Heading>
          <List>
            <Appear><ListItem>Hannah Howard</ListItem></Appear>
            <Appear><ListItem>hannah@carbonfive.com</ListItem></Appear>
            <Appear><ListItem>Twitter above!</ListItem></Appear>
          </List>
        </div>
      </div>
  );
};

export default asSlide(AboutMeSlide);