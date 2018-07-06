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
import DoubleImageSlide from "./slideTemplates/double-image-slide.jsx";
import kimmy from "../assets/kimmy.gif";
import kiyoko from "../assets/kiyoko.gif";
import janelle from "../assets/janelle.gif";
import thedude from "../assets/thedude.gif";
//import { headerColor, textColor, bgColor } from "./slideTemplates/utilities.jsx";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

preloader({
  kimmy,
  kiyoko,
  janelle,
  thedude
});
// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme(
  {
    primary: "#F65392",
    secondary: "#08000B",
    tertiary: "#FF4C00",
    quartenary: "#000B07"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const notes = {
  starting: (
    <div>
      <p>So this is a talk about identifying our frontend stack at C5.</p>
    </div>
  ),
  framingForTheDay: (
    <div>
      <p>
        I want to offer two questions to frame this talk, and to some extent,
        these are some guiding questions to shape your day here on the dev track
      </p>
      <p>
        Sometimes a dev track like this can just feel like a bunch of
        technologies thrown at you, which can be a bit overwhelming
      </p>
      <p>
        And I'd like to offer these as some guiding questions to help you get
        the most out of this talk and others, especially if this is your first
        summit
      </p>
    </div>
  ),
  whoWeAre: (
    <div>
      <p>Question 1 is about who we are</p>
      <p>
        Essentially what makes a Carbon Five developer a Carbon Five developer
      </p>
      <p>
        We're looking at mostly the tactical Level of technologies we're
        interested in, ways we develop, etc
      </p>
      <p>But we're also trying trying to identify what makes us unique</p>
    </div>
  ),
  howCanIExcel: (
    <div>
      <p>
        Question 2 is something you'll be answering for yourself throughout the
        day
      </p>
      <p>Basically, how you want to grow as a Carbon Five developer</p>
      <p>Part of today is to provide guidance on areas you may want to learn</p>
      <p>
        Hopefully you'll be able to develop a sense of what you can do if you
        want to get better or get noticed or get promoted.
      </p>
    </div>
  ),
  potentialProblem: (
    <div>
      <p>
        Of course as we look at the horizon of technologies and ask our place in
        it, we might encounter a problem deciding among like 30 of us
      </p>
      <p>
        And this was something I was worried about as a prepared a talk that was
        originally essentially "here's what I think our frontend stack should
        be"
      </p>
    </div>
  ),
  potentialSolution: (
    <div>
      <p>
        So then I encountered this thing called a technology radar which is a
        really nice way to visualize and think about technologies and how ready
        for primetime they are, and I thought I might turn this into an
        interesting way to get some data on what we're into as C5 devs.
      </p>
      <p>
        So a lot of you took a survey I put out a few weeks ago, and I'd like to
        show you some results
      </p>
    </div>
  ),
  howCanThisHelpYou: (
    <div>
      <p>
        And hopefully as you look at this, it can help you with a challenge in
        answering that second question about where you fit in
      </p>
      <p>
        Cause there really is so much to learn and it's hard to know where to
        start
      </p>
      <p>
        So you can look at the radar and the things that have made it into the
        trial area -- and you can see, hey this is what my coworkers are
        interested in, this is what my job might entail soon
      </p>
    </div>
  ),
  whatAreWeGoodAt: (
    <div>
      <p>
        So I want to spend what's left of my talk discussing something I think
        carbon five is uniquely good at
      </p>
      <p>
        And I want to ask a question: how many of you have worked on a
        javascript single page application in the last year
      </p>
    </div>
  ),
  whatAreWeGoodAt2: (
    <div>
      <p>
        Something I've noticed is that people hire us to write frontends. And
        not just that -- in enterprise situations, with often multiple
        consultants involved, people hire us to do the frontend -- they see us
        as uniquely good at this. Single Page Applications, also known as SPAs,
        are actually pretty difficult to build and they're aren't that many
        shops that do it well.
      </p>
      <p>
        So I hope I'm not stepping out of my lane, but I came up with a new
        campaign for our marketing and biz dev guys...
      </p>
    </div>
  ),
  caseStudy: (
    <div>
      <p>
        So I want to talk about TypeScript, which is one of the few non-standard
        technologies that we use a lot, that is almost in the "adopt" category
        for us
      </p>
      <p>And I promise this is the only evangelizing I'm going to do</p>
      <p>
        But I want to give an example from the current project and why it both
        illustrates the value of Typescript and says something about the kind of
        frontend development we do
      </p>
      <p>
        So we had a decently hard problem on Moody's, and that's that we had to
        parse strings into mathematical formulas we could apply
      </p>
      <p>
        No fortunately, the only operations were addition and subtraction, but
        still, a lot can go wrong
      </p>
    </div>
  )
};
export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <SimpleSlide
          statement="Towards a Carbon Five Frontend Stack"
          fit={false}
          notes={notes.starting}
        />
        <SimpleSlide
          statement="Two Questions To Frame The Day"
          fit={false}
          notes={notes.framingForTheDay}
        />
        <ConceptSlide
          concept="Question #1"
          description="Who are we as developers at Carbon Five?"
          fit={false}
          notes={notes.whoWeAre}
        />
        <ConceptSlide
          concept="Question #2"
          description="How can I excel as a Carbon Five developer?"
          fit={false}
          notes={notes.howCanIExcel}
        />
        <ImageSlide
          image="thedude.gif"
          title="Potential Problem For Question 1:"
          text="Disagreement"
          notes={notes.potentialProblem}
        />
        <ConceptSlide
          concept="Potential Solution"
          description="Technology Radar"
        />
        <ImageSlide
          image="kimmy.gif"
          title="Potential Problem For Question 2:"
          text="Indecision"
          notes={notes.howCanThisHelpYou}
        />
        <SimpleSlide statement="URL + Repo in #development" />
        <SimpleSlide
          fit={false}
          statement="What is Carbon Five good at?"
          notes={notes.whatAreWeGoodAt}
        />
        <SimpleSlide
          statement="We're good at frontend development"
          notes={notes.whatAreWeGoodAt2}
        />
        <ImageSlide image="mike-spa.gif" />
        <SimpleSlide statement="What makes us good at frontend?" />
        <ConceptSlide concept="Case Study" description="TypeScript" />
        <ConceptSlide concept="Case Study" description="Prettier" />
        <SimpleSlide
          fit={false}
          statement="Carbon Five Developers Write Reliable Frontends"
        />
        <ImageSlide fit={false} title="IOW..." image="janelle.gif" />
        <ConceptSlide
          fit={false}
          concept="Question"
          description="Is it time for Raygun for the Frontend?"
        />
        <SimpleSlide fit={false} statement="Insta-Poll!" />
        <SimpleSlide fit={false} statement="Insta-Poll Part Duex!" />
        <ImageSlide image="kiyoko.gif" />
      </Deck>
    );
  }
}
