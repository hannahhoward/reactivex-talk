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
  Text,
  Notes
} from "spectacle";

import AboutMeSlide from "./slideTemplates/about-me-slide.jsx";
import QuoteSlide from "./slideTemplates/quote-slide.jsx";
import DefinitionSlide from "./slideTemplates/definition-slide.jsx";
import ListSlide from "./slideTemplates/list-slide.jsx";
import SimpleSlide from "./slideTemplates/simple-slide.jsx";
import ConceptSlide from "./slideTemplates/concept-slide.jsx";
import ImageSlide from "./slideTemplates/image-slide.jsx";
import DoubleImageSlide from "./slideTemplates/double-image-slide.jsx";
import QuotesSlide from "./slideTemplates/quotes-slide.jsx";
import colors from "./slideTemplates/colors";
import CodeSlide from "spectacle-code-slide";

//import { headerColor, textColor, bgColor } from "./slideTemplates/utilities.jsx";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

preloader({});
// Import theme
import createTheme from "spectacle/lib/themes/default";
import BoxBounce from "./demos/box-bounce";

// Require CSS
require("normalize.css");

const theme = createTheme(colors, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

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
        <DefinitionSlide
          term="RxJS"
          definition="A Better Way to Write Frontend Applications"
          notes={notes.starting}
        />
        <SimpleSlide statement="1. Problem Statement" />
        <SimpleSlide
          statement="What is a computer program?"
          notes={notes.framingForTheDay}
        />
        <QuoteSlide
          quote="A computer program is a sequence of instructions for performing a task designed to solve specific problems."
          cite="important computer science textbook (Wikipedia)"
        />
        <ImageSlide
          image="todolist.gif"
          title="'Sequence Of Instructions'"
          text="Program = Todo List?"
        />
        <ImageSlide image="lesson-plan.jpg" title="Lesson Plan" />
        <ImageSlide
          image="classroom-chaos.gif"
          title="How computer programs actually run"
        />
        <DefinitionSlide
          term="Interruptions"
          definition="the heart of frontend programming"
        />
        <ImageSlide
          image="kanye-taylor.gif"
          title={
            <div>
              2. <br />A Brief History Of Interruptions
            </div>
          }
        />
        <ConceptSlide
          inverted
          concept="Technique 1"
          description="Harware Interrupts"
          notes={notes.whoWeAre}
        />
        <CodeSlide
          transition={[]}
          lang="c"
          code={require("raw-loader!../assets/interrupt.c")}
          ranges={[
            { loc: [0, 5], title: "Let's look at some C code!" },
            { loc: [35, 50], note: "The main loop" },
            { loc: [20, 28], note: "Override the damn BIOS!" },
            { loc: [10, 19], note: "Interrupt Service Request Code" },
            { loc: [44, 47], note: "Read from the buffer and update state!" },
            { loc: [50, 58], note: "Ctrl+C will not save you..." }
          ]}
        />
        <ConceptSlide
          inverted
          concept="Technique 2"
          description="Global Event Bus"
          notes={notes.whoWeAre}
        />
        <CodeSlide
          transition={[]}
          lang="c"
          code={require("raw-loader!../assets/windows-loop.c")}
          ranges={[
            { loc: [0, 26], title: "Windows event loop" },
            { loc: [5, 14], note: "Message loop = read, translate, dispatch" }
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="c"
          code={require("raw-loader!../assets/window-procedure.c")}
          ranges={[
            {
              loc: [0, 12],
              note: "Window procedure = read message, update state"
            },
            {
              loc: [2, 14],
              note: "Window procedure = read message, update state"
            }
          ]}
        />
        <SimpleSlide inverted fit={false} statement="1997?" />
        <CodeSlide
          transition={["fade"]}
          lang="c"
          code={require("raw-loader!../assets/window-procedure.c")}
          ranges={[{ loc: [0, 16] }]}
        />
        <CodeSlide
          transition={["fade"]}
          lang="javascript"
          code={require("!!raw-loader!../assets/reducer.js")}
          ranges={[{ loc: [0, 16] }]}
        />
        <ImageSlide
          inverted
          image="prince.gif"
          title="Alternate talk title:"
          text="#theShadeIsReal"
        />
        <ConceptSlide
          inverted
          concept="Technique 3"
          description="Observer Pattern"
          notes={notes.whoWeAre}
        />
        <SimpleSlide statement="A Short Digression..." />
        <ImageSlide
          image="writer-pipe.jpg"
          title="Very Important Content Creator"
        />
        <SimpleSlide statement="How will people see my content?" />
        <ImageSlide image="liam.jpg" title="Old School Way" />
        <QuotesSlide
          transition={["fade"]}
          appear
          quotes={[
            {
              quote: "I will make content",
              cite: "influencer"
            },
            {
              quote: "I will subscribe to your content",
              cite: "adoring fan"
            },
            {
              quote: "I made new content",
              cite: "influencer"
            },
            {
              quote: "I am notified about your content, and can watch it",
              cite: "adoring fan"
            }
          ]}
        />
        <QuotesSlide
          transition={["fade"]}
          quotes={[
            {
              quote: "I will emit events",
              cite: "Subject"
            },
            {
              quote: "I will subscribe to your events",
              cite: "Observer"
            },
            {
              quote: "An event happened",
              cite: "Subject"
            },
            {
              quote: "I am notified about the event, and can handle it",
              cite: "Observer"
            }
          ]}
        />
        <CodeSlide
          lang="javascript"
          code={require("!!raw-loader!../assets/eventListener.js")}
          ranges={[
            { loc: [0, 10], title: "Real World Example" },
            { loc: [7, 8], note: "The Dom Element is our subject" },
            { loc: [0, 5], note: "We have a function to switch the toggle" },
            {
              loc: [8, 9],
              note:
                "Subscribe to mouse clicks on toggle switch, making modifyText into an observer"
            },
            {
              loc: [0, 5],
              note: "Handle each mouse click by switching the toggle"
            }
          ]}
        />
        <ListSlide
          ordered={false}
          title="Observer Pattern vs Global Event Bus"
          list={[
            "(+) Way simpler than global event bus",
            "(+) Localized scope",
            "(-) Have To Setup Subscriptions"
          ]}
        />
        <CodeSlide
          lang="javascript"
          code={require("!!raw-loader!../assets/drag-drop.js")}
          ranges={[
            {
              loc: [0, 6],
              title: "More Complex Example",
              note: "Mouse dragging"
            },
            {
              loc: [0, 4],
              note: "Given canvas + paint at x,y function, drag mouse to paint"
            },
            {
              loc: [5, 8],
              note: "Handler to paint at mouse coords"
            },
            {
              loc: [9, 10],
              note: "Attach to mousemove?"
            },
            {
              loc: [11, 14],
              note: "Attach to mouse down, wait, then attach to mouse move"
            },
            {
              loc: [15, 18],
              note: "Deattach to mouse move on mouse up"
            }
          ]}
        />
        <ListSlide
          title="Mixing concerns"
          list={["Subscribing observers", "Handling events"]}
        />
        <ImageSlide
          image="redux-meme.jpg"
          title="Redux Origin Story"
          text="Is this what happened?"
        />
        <SimpleSlide statement="Is there a better way?" />
        <SimpleSlide
          fit={false}
          statement="3. Functional Reactive Programming"
        />
        <ImageSlide
          image="classroom-chaos.gif"
          title="Once upon a time..."
          text="I taught middle school"
        />
        <ImageSlide image="jedi-teachers.jpg" title="Good Teachers = Jedi" />
        <DefinitionSlide
          term="Classroom Management"
          definition="Skills and techniques that teachers use to ensure that their classroom runs smoothly"
        />
        <ImageSlide
          image="lesson-plan.jpg"
          title="Don't Start With A Plan..."
        />
        <SimpleSlide statement="and get interrupted." />
        <SimpleSlide
          fit={false}
          statement="Plan for interruptions and react!"
        />
        <ListSlide
          appear
          ordered={false}
          title="A Teaching Program"
          list={[
            "Lesson plan is merely a guide",
            "Series of semi-planned reactions",
            "Possible techniques to fold interrupts into learning",
            "Key concepts",
            "Awareness of mental state of each student",
            "Existing rules and boundaries of the class room",
            "..."
          ]}
        >
          <Notes>
            <p>How would we express what a teacher does as a program?</p>
            <ul>
              <li>
                You'd have a lesson plan merely as a guide of where you're
                headed
              </li>
              <li>
                And then you have a bunch of different reactions -- ways of
                responding to interruptions that happen in a classroom
              </li>
              <li>
                And that would cover all kinds of things -- from basic student
                questions, to what we sometimes call "acting out", to distracted
                students, to students needed to go to the bathroom, to students
                returning from the bathroom
              </li>
              <li>
                And from each of these reactions you might have some second
                level ways for how to fold back questions into learning
              </li>
              <li>
                And then you might have some key concepts you want each learning
                to fold back into -- and then your lesson plan which is guiding
                the schedule
              </li>
              <li>Now in a real class room you also...</li>
              <li>
                Have to have a sense of the larger mental state of each student
                -- they may be dealing with difficult things outside of school
              </li>
              <li>Plus you have to exist in the larger school systems rules</li>
              <li>Build toward standardized tests...</li>
              <li>Gotta work with minimal resources...</li>
            </ul>
          </Notes>
        </ListSlide>
        <SimpleSlide
          fit={false}
          statement="(not simply a sequence of instructions)"
        >
          <Notes>
            Important thing here is this cannot be easily expressed
            sequentially. It's more of a hueristic for the stream of things that
            can happen and how to respond to them
          </Notes>
        </SimpleSlide>
        <ConceptSlide concept="PSA" description="Pay Teachers" />
        <SimpleSlide
          fit={false}
          statement="How could we write programs reactively?"
        />
        <DefinitionSlide
          term="Y = X + 3"
          colon={false}
          definition="Consider this statement"
        />
        <DefinitionSlide
          term="Imperative meaning"
          definition="Assign once the value for y by adding 3 to x"
        >
          <Notes>
            In a traditional imperative program, this represents assignment. You
            are assigning, a single time, the current value y of to the current
            value of x plus 3
          </Notes>
        </DefinitionSlide>
        <DefinitionSlide
          term="Reactive meaning"
          definition="X is a value that can change over time. Y is always the value 3 greater than X"
        >
          <Notes>
            In a reactive program, this would express a relationship between Y
            and X. X is a value that can change over time, and Y is a value that
            changes as X changes. Every time X changes, Y becomes the new value
            plus 3
          </Notes>
        </DefinitionSlide>
        <ImageSlide
          image="xStream.svg"
          title="X values over time"
          text="a data stream of numbers over time"
        >
          <Notes />
        </ImageSlide>
        <ImageSlide
          image="xyStream.svg"
          title="Y values over time"
          text="a data stream of numbers derived from another stream"
        >
          <Notes />
        </ImageSlide>
        <ImageSlide
          image="mouseStream.svg"
          title="Mouse clicks over time"
          text="Stream of user input events"
        >
          <Notes />
        </ImageSlide>
        <SimpleSlide
          fit={false}
          statement="Reactive programming in the real world?"
        >
          <Notes>
            So this is all well and good, but we code this without an entirely
            new programming language, or even a new computer? We know under the
            hood, our programs are still just instructions. So we need some kind
            of pattern where for each value that changes over time, we could get
            notified that it's changing. Like if we had some kind of subject /
            subscriber pattern somewhere....
          </Notes>
        </SimpleSlide>
        <ImageSlide
          image="runallnight.jpg"
          title="Observer pattern!"
          text="Only better..."
        >
          <Notes>
            We actually already have this concept -- the observer pattern. We
            just need to extend it! BTW, Liam Neeson actually has nothing to do
            with observer pattern, but I love pictures of him on the phone, so
            going forward this will represent the observer pattern.
          </Notes>
        </ImageSlide>
        <DefinitionSlide
          term="Observable"
          definition="A value that changes over time, that we can listen to changes on"
        />
        <CodeSlide
          lang="javascript"
          code={require("!!raw-loader!../assets/simpleObservable.js")}
          ranges={[
            { loc: [0, 7], title: "Value as 'Observable'" },
            {
              loc: [0, 1],
              note: "Subscribe to X as it changes, write its values"
            },
            { loc: [2, 3], note: "Outputs the right values for Y" },
            {
              loc: [4, 5],
              note: "What if we want to listen to Y?"
            },
            {
              loc: [6, 7],
              note: "If x were an array of numbers..."
            },
            {
              loc: [8, 9],
              note: "We could derive y array with map"
            },
            {
              loc: [10, 11],
              note: "If x is an observable"
            },
            {
              loc: [12, 13],
              note: "We use map too!"
            }
          ]}
        />
        <BoxBounce inverted />
        <CodeSlide
          lang="javascript"
          code={require("!!raw-loader!../assets/buttonStream.js")}
          ranges={[
            { loc: [0, 7], title: "How This Works" },
            {
              loc: [0, 10],
              note: "Introducing RxJS"
            },
            { loc: [10, 13], note: "Get some dom elements" },
            {
              loc: [13, 15],
              note: "Create observables from dom events"
            },
            {
              loc: [16, 18],
              note: "Convert clicks to a position"
            },
            {
              loc: [20, 22],
              note: "Merge values"
            }
          ]}
        />
        <SimpleSlide fit={false} statement="4. Using this in real life" />
        <ConceptSlide
          concept="Question #2"
          description="How can I excel as a Carbon Five developer?"
          fit={false}
          notes={notes.howCanIExcel}
        />
        <ConceptSlide
          concept="Potential Solution"
          description="Technology Radar"
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
        <SimpleSlide statement="What makes us good at frontend?" />
        <ConceptSlide concept="Case Study" description="TypeScript" />
        <ConceptSlide concept="Case Study" description="Prettier" />
        <SimpleSlide
          fit={false}
          statement="Carbon Five Developers Write Reliable Frontends"
        />
        <ConceptSlide
          fit={false}
          concept="Question"
          description="Is it time for Raygun for the Frontend?"
        />
        <SimpleSlide fit={false} statement="Insta-Poll!" />
        <SimpleSlide fit={false} statement="Insta-Poll Part Duex!" />
      </Deck>
    );
  }
}
