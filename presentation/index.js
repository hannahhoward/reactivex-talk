// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

import AboutMeSlide from "./slideTemplates/about-me-slide.jsx";
import QuoteSlide from "./slideTemplates/quote-slide.jsx";
import DefinitionSlide from "./slideTemplates/definition-slide.jsx";
import ListSlide from "./slideTemplates/list-slide.jsx";
import SimpleSlide from "./slideTemplates/simple-slide.jsx";
import ConceptSlide from "./slideTemplates/concept-slide.jsx";
import ImageSlide from "./slideTemplates/image-slide.jsx";
import MozillaReleaseSlide from "./slides/mozilla-release.jsx";

//import { headerColor, textColor, bgColor } from "./slideTemplates/utilities.jsx";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "white",
  secondary: "#795786",
  tertiary: "#ff5102",
  quartenary: "#031428"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {


  render() {

    const joeSound = (
      <audio src={require("../assets/joearmstrong.mp3")} controls>
        Your browser does not support the <code>audio</code> element.
      </audio>
    );

    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <AboutMeSlide notes="hello" />
        <ImageSlide image="erlang-logo.png" title="Let's Talk About Erlang" />
        <SimpleSlide statement="Erlang is incredible" />
        <SimpleSlide statement="Concurrency sucks" />
        <SimpleSlide fit={false} statement="Erlang Is Based On The Actor Model"/>
        <SimpleSlide fit={false} statement="Erlang Offers Preemptive Scheduling"/>
        <ConceptSlide fit={false} description="Best Language For Concurrency Ever" concept="(Possibly Alternative) Erlang Fact" />
        <SimpleSlide statement="Scaling sucks" />
        <ConceptSlide description="500+" concept="Facebook Programmer Count" />
        <SimpleSlide fit={false} statement="Erlang makes scaling practically effortless" />
        <SimpleSlide statement="Preventing crashes sucks" />
        <ConceptSlide description="Let It Crash" concept="Erlang Motto" />
        <SimpleSlide statement="Results?" />
        <ConceptSlide description="99.9999999%" concept="Ericcson PBX Uptime" />
        <ImageSlide image="whats-app.jpg" title="" />
        <ConceptSlide description="19 Billion" concept="Purchase Price" />
        <ConceptSlide description="..55.." concept="Total # WhatsApp Employees" />
        <SimpleSlide statement="Why isn't everyone using this?" />
        <SimpleSlide transition={["zoom"]} statement={<span>idea<br />scaling</span>} />
        <ListSlide
          title="Outline"
          list={
          [
            "A Story",
            "Why is idea scaling hard?",
            "Community Organizing - For Techies!",
            "Three Rules For Scaling Great Ideas",
            "A Closing Story"
          ]
          }
        />
        <SimpleSlide inverted statement="Once upon a time (April 2017)..." />
        <ImageSlide inverted image="tiedie.gif" title="...I went to Erlang/Elixir Factory..." />
        <ImageSlide inverted image="joearmstrong.jpg" title="...and I met this guy..."/>
        <QuoteSlide inverted quote="The way to judge something is whether the property of the result is good. If something is beautiful, you gotta do it" cite="Joe Armstrong, the guy who made Erlang" />
        <ImageSlide inverted image="hannah.jpg" title="...and then I asked this question..." text={joeSound} />
        <DefinitionSlide inverted term="Public Service Announcement" definition="Don't Ask Questions Like This" />
        <DefinitionSlide inverted definition="http://www.unlimitednovelty.com/2011/07/trouble-with-erlang-or-erlang-is-ghetto.html" term="#ErlangGotIssues" />
        <SimpleSlide inverted statement="Why does this topic scare us?" />
        <SimpleSlide inverted statement="Idea scaling = Selling ?" />
        <SimpleSlide inverted statement="What does selling make you think of?" />
        <ImageSlide inverted image="don-draper.jpg" title="This guy..."/>
        <ImageSlide inverted image="stock-people.jpg" title="This super substantive group..."/>
        <ImageSlide inverted image="coffee-closer.jpg" title="I am not here to teach you how to sell."/>
        <SimpleSlide inverted statement="Community Organizing" />
        <ImageSlide inverted image="barack-obama.jpg" title="Our president" text="(former)" />
        <SimpleSlide inverted fit={false} statement="Community organizers bring people together to make ideas a reality" />
        <SimpleSlide inverted statement="Ideas like..." />
        <SimpleSlide inverted fit={false} statement="No person should be homeless" />
        <SimpleSlide inverted fit={false} statement="No person should go hungry" />
        <SimpleSlide inverted fit={false} statement="No human being is illegal" />
        <SimpleSlide inverted fit={false} statement="Regular people should have a say in big decisions" />
        <SimpleSlide inverted statement="Self Interest" />
        <SimpleSlide inverted fit={false} statement="What Is The Academic Programmer's Self Interest?" />
        <SimpleSlide inverted fit={false} statement="What Is Today's Programmer's Self Interest?" />
        <SimpleSlide inverted statement="How We Organize" />
        <ConceptSlide inverted description="Win Concrete Improvements" concept="Rule #1"/>
        <SimpleSlide inverted statement="Productive Out Of The Box" />
        <SimpleSlide inverted statement="Faster out of the box" />
        <ConceptSlide inverted description="Give People A Sense Of The Own Power" concept="Rule #2"/>
        <SimpleSlide inverted statement="Clear The Erlang Cruft" />
        <SimpleSlide inverted statement="Package Manager" />
        <SimpleSlide inverted statement="Use Erlang to Deliver!" />
        <ConceptSlide inverted description="Build Organizations, Build Power" concept="Rule #3"/>
        <SimpleSlide inverted statement="Ideas Live In Communities" />
        <SimpleSlide inverted statement="ElixirBridge" />
        <SimpleSlide inverted statement="Open Source" />
        <SimpleSlide inverted statement="Relationships" />
        <ConceptSlide inverted description="Meet people where they're at" concept="Practice #1" />
        <ConceptSlide inverted description="Keep a sustaining approach" concept="Practice #2" />
        <ConceptSlide inverted description="Look At The Long Term!" concept="Practice #3" />
        <SimpleSlide statement="Once upon a time... (the 1990's)" />
        <ImageSlide image="windows.jpg" title="Bad old days" />
        <SimpleSlide statement="Then there was linux..." />
        <SimpleSlide statement="Then there was open source..." />
        <MozillaReleaseSlide />
      </Deck>
    );
  }
}
