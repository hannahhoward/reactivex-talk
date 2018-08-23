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
import RxJsGraphSlide from "./slideTemplates/rxjs-graph.jsx";
//import { headerColor, textColor, bgColor } from "./slideTemplates/utilities.jsx";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

preloader({});
// Import theme
import createTheme from "spectacle/lib/themes/default";
import BoxBounce from "./demos/box-bounce";
import LoginForm from "./demos/login-form";

// Require CSS
require("normalize.css");

const theme = createTheme(colors, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <AboutMeSlide />
        <DefinitionSlide
          term="RxJS"
          definition="A Better Way to Write Frontend Applications"
        />
        <ListSlide
          title="Content Warning"
          list={[
            "Possibly jarring animation",
            "Heavy pop culture references (I'm from LA)"
          ]}
        >
          <Notes>
            <p>
              A brief content warning -- there's not a lot to worry about here
              but there is a lot of animation in this talk so folks who are
              sensitive be aware
            </p>
            <p>Also since I'm from LA there's a lot of pop culture images</p>
          </Notes>
        </ListSlide>
        <ImageSlide
          title={
            <div>
              1.
              <br /> Problem Statement
            </div>
          }
          image="categoryis.gif"
        >
          <Notes>
            Good evening and good morning to all legendary children and welcome
            to the function reactive programming ball. Tonight, the category is
          </Notes>
        </ImageSlide>
        <SimpleSlide fit={false} statement="What is a computer program?" />
        <QuoteSlide
          quote="A computer program is a sequence of instructions for performing a task designed to solve specific problems."
          cite="Wikipedia"
        >
          <Notes>
            A very important computer science textbook I refer to often defines
            a computer program as a sequence of instructions for performing a
            task designed to solve specific problems
          </Notes>
        </QuoteSlide>
        <ImageSlide
          image="todolist.gif"
          title="'Sequence Of Instructions'"
          text="Program = Todo List?"
        >
          <Notes>
            Think about that phrase 'Sequence of Instructions'. it really makes
            programming feel almost like a todo list.
          </Notes>
        </ImageSlide>
        <ImageSlide image="lesson-plan.jpg" title="Lesson Plan">
          <Notes>
            <p>
              Or maybe if we were to imagine a different context like a
              classroom, a program sounds like a lesson plan.
            </p>
            <p>But is it really like a lesson or a todo list?</p>
            <p>If we're writing a command line tool, then maybe.</p>
            <p>
              But we're javascript programmers right? We write frontend programs
            </p>
            <p>
              And there's a more apt metaphor for how frontend programs run...
            </p>
          </Notes>
        </ImageSlide>
        <ImageSlide
          image="classroom-chaos.gif"
          title="How computer programs actually run"
        >
          <Notes>
            <p>
              Frontend programs don't run sequentially. The flow of execution is
              interrupted constantly by user input, responses from servers, a
              million other things
            </p>
            <p>You have way less control -- it's like an unruly classroom</p>
          </Notes>
        </ImageSlide>
        <DefinitionSlide
          term="Interruptions"
          definition="the heart of frontend programming"
        >
          <Notes>
            <p>And that's really it.</p>
            <p>
              {" "}
              Isn't the central challenge of programming complex frontend
              applications is dealing with interruptions?
            </p>
          </Notes>
        </DefinitionSlide>
        <ImageSlide
          image="kanye-taylor.gif"
          title={
            <div>
              2. <br />A Brief History Of Interruptions
            </div>
          }
        >
          <Notes>
            So let's talk briefly about a couple patterns we've used in the past
            to deal with interruptions
          </Notes>
        </ImageSlide>
        <ConceptSlide
          inverted
          concept="Technique 1"
          description="Global Event Bus"
        />
        <CodeSlide
          notes={
            <div>
              <p>
                So the first kind of programming I ever did was dos game
                writing, in C!
              </p>
              <p>
                And one thing you could do in dos was override the BIOS --
                basically to take over the keyboard
              </p>
              <p>
                And your new keyboard code would collect keys and put them in a
                buffer
              </p>
              <p>And then you whole program would be a loop like this one</p>
              <p>
                Except you'd actually on each step look at all your inputs, and
                then process from there
              </p>
              <p>
                The only issue was if you messed up your handler you could lock
                the whole computer.
              </p>
            </div>
          }
          transition={[]}
          lang="c"
          code={require("raw-loader!../assets/interrupt.c")}
          ranges={[
            { loc: [0, 5], title: "In The Beginning... C!" },
            { loc: [20, 28], note: "Override the damn BIOS!" },
            { loc: [10, 19], note: "Interrupt Service Request Code" },
            { loc: [35, 50], note: "The main loop" },
            { loc: [44, 47], note: "Read from the buffer and update state!" },
            { loc: [50, 58], note: "Ctrl+C will not save you..." }
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="c"
          code={require("raw-loader!../assets/windows-loop.c")}
          notes={
            <div>
              <p>
                So windows improved upon this by having the operating system
                take over some of the lower level input
              </p>
              <p>
                But you can see that the basic loop is still the same, read,
                process, dispath messages
              </p>
            </div>
          }
          ranges={[
            { loc: [0, 26], title: "Windows event loop" },
            { loc: [5, 14], note: "Message loop = read, translate, dispatch" }
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="c"
          notes={
            <div>
              <p>
                The main thing you would provide is procedure to handle
                different messages
              </p>
              <p>
                Which usually looked like a big switch statement where you did
                something different based on the message passed
              </p>
            </div>
          }
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
        <SimpleSlide inverted fit={false} statement="1999?">
          <Notes>
            This brings us up to about 1999 when left the global event bus in
            the dust for better things, or did we?
          </Notes>
        </SimpleSlide>
        <CodeSlide
          notes={
            <div>
              <p>
                Cause if you look your core logic function being a switch
                statement that updates state based on the type of dispatched
                messages...
              </p>
            </div>
          }
          transition={["fade"]}
          lang="c"
          code={require("raw-loader!../assets/window-procedure.c")}
          ranges={[{ loc: [0, 16] }]}
        />
        <CodeSlide
          transition={["fade"]}
          notes={
            <div>
              <p>
                That starts to look a lot like a Redux reducer. And in fact,
                Redux contains a lot of the global event bus pattern
              </p>
            </div>
          }
          lang="javascript"
          code={require("!!raw-loader!../assets/reducer.js")}
          ranges={[{ loc: [0, 16] }]}
        />
        <ImageSlide inverted image="prince.gif" title="No Shade To Redux">
          <Notes>
            And while using Redux may be programming like it's 1999 - hashtag
            the shade is real - there are actually some good reasons they went
            that way which we'll get to in a sec
          </Notes>
        </ImageSlide>
        <ConceptSlide
          inverted
          concept="Technique 2"
          description="Observer Pattern"
        >
          <Notes>
            <p>
              Now I want to talk about the Observer pattern, which is basically
              how we've, apart from Redux written frontend applications in
              modern years
            </p>
          </Notes>
        </ConceptSlide>
        <SimpleSlide statement="A Short Digression...">
          <Notes>
            But to explain it I need to make a short digression into the world
            of influencers
          </Notes>
        </SimpleSlide>
        <ImageSlide
          image="writer-pipe.jpg"
          title="Very Important Content Creator"
        >
          <Notes>
            So let's say you're a content creator and you're wondering...
          </Notes>
        </ImageSlide>
        <SimpleSlide statement="How will people see my content?" />
        <ImageSlide image="liam.jpg" title="Old School Way">
          <Notes>
            In the past it was pretty hard -- I guess you had to track down
            anyone you wanted to view your content
          </Notes>
        </ImageSlide>
        <QuotesSlide
          transition={["fade"]}
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
        >
          <Notes>
            <p>
              But now we have a better way. We have a contract. I as creator
              promise to publish content, and you as my adoring fans use one of
              our many scary surveilance social media platforms to subscribe to
              it
            </p>
            <p>
              And then whenever I publish content you get notified about my new
              content
            </p>
          </Notes>
        </QuotesSlide>
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
        >
          <Notes>
            <p>
              So this in short is the observer pattern. You have a subject --
              something that promises to emit events in the future, and
              observer, who subscribes to the events and then can act on them
            </p>
          </Notes>
        </QuotesSlide>
        <CodeSlide
          lang="javascript"
          notes={
            <div>
              <p>
                So you use this pattern in your every day programming and you
                may not even know it
              </p>
              <p>Let's say we have a toggle switch in the dom</p>
              <p>
                And we have a function to switch the text in a box from off to
                on
              </p>
              <p>
                So here's how we make the toggle switch change the text -- we
                subscribe to mouse clicks on the toggles switch
              </p>
              <p>
                And this makes our switch text function into an observer, which
                in javascript is an event listener
              </p>
            </div>
          }
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
        <ConceptSlide concept="Take home quiz" description="Try drag and drop">
          <Notes>
            A good example of this is if you try to implement a drag and drop
            with just mousedown, mouseup, and mousemove
          </Notes>
        </ConceptSlide>
        <ListSlide
          title="Mixing concerns"
          list={["Handling events", "Subscribing observers"]}
        >
          <Notes>
            What you'll find is you end up mixing concerns -- where your event
            handlers are both handling events but also setting up other
            subscriptions. And it gets to be a bit of a mess. So the observer
            pattern is great, it's been around for a long time, it's reliable,
            but it's not perfect.
          </Notes>
        </ListSlide>
        <ImageSlide
          image="redux-meme.jpg"
          title="Redux Origin Story"
          text="Is this what happened?"
        >
          <Notes>
            Which leads me to believe the story of Redux getting created might
            have looked like this... where Redux devs looked at the global event
            bus and wondered if there was something interesting there... But you
            might at this point be wondering...
          </Notes>
        </ImageSlide>
        <SimpleSlide statement="Is there a better way?" />
        <ImageSlide
          image="bridesmaids-walk.gif"
          title={
            <div>
              3.
              <br />
              Functional Reactive Programming
            </div>
          }
        >
          <Notes>
            This brings me to the heart of this talk about how you can use
            functional reactive programming to write frontends like a boss
          </Notes>
        </ImageSlide>
        <ImageSlide
          image="classroom-chaos.gif"
          title="Once upon a time..."
          text="I taught middle school"
        >
          <Notes>
            Going back to our classroom analogy, I actually taught middle school
            once, and I was a pretty bad teacher. But I want to look at how good
            teachers handle this situation...
          </Notes>
        </ImageSlide>
        <ImageSlide image="jedi-teachers.jpg" title="Good Teachers = Jedi">
          <Notes>
            Good teachers are almost like jedi -- where every student seems to
            be Obi-Wanned into thinking this is the lesson they're looking
            for...
          </Notes>
        </ImageSlide>
        <ImageSlide image="lesson-plan.jpg" title="Don't Start With A Plan...">
          <Notes>
            <p>
              So how do they do it? Well first of all lesson plan is not a
              strict plan...
            </p>
          </Notes>
        </ImageSlide>
        <SimpleSlide statement="and get interrupted.">
          <Notes>
            <p>Cause they know how that goes. It's more of a guide.</p>
          </Notes>
        </SimpleSlide>
        <SimpleSlide fit={false} statement="Plan for interruptions and react!">
          <Notes>
            <p>
              Instead you can think of actual teaching as a series of almost
              planned responses to interruptions. And really good teachers know
              how to not just respond to interruptions but draw out lessons and
              learnings from them, kind of folding these responses back into the
              stream of learning that leads to the key objectives of the
              lesson... So in that sense it almost is like Jedi mind control :)
            </p>
          </Notes>
        </SimpleSlide>
        <ConceptSlide concept="PSA" description="Pay Teachers" />
        <SimpleSlide
          fit={false}
          statement="How could we write programs reactively?"
        >
          <Notes>
            What does this have to do with programming -- how do we write
            programs with planned reactions as a core concept?
          </Notes>
        </SimpleSlide>
        <DefinitionSlide
          term="Y = X + 3"
          colon={false}
          definition="Consider this statement"
        >
          <Notes>
            Let's think about the statement y=x+3. You've probably written
            something like this in your programs at some point.
          </Notes>
        </DefinitionSlide>
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
        <ImageSlide image="graph.svg" title="Math Meaning" text="An equation">
          <Notes>
            But the mean we associate with imperative programming is not the
            only meaning. In math, this actually can describe an entire line on
            a graph
          </Notes>
        </ImageSlide>
        <DefinitionSlide
          term="Reactive meaning"
          definition="X is a value that can change over time. Y is always the value 3 greater than X"
        >
          <Notes>
            In a reactive program, this statement would express a relationship
            between Y and X. X is a value that can change over time, and Y is a
            value that changes as X changes. Every time X changes, Y becomes the
            new value plus 3
          </Notes>
        </DefinitionSlide>
        <ImageSlide
          image="xStream.svg"
          title="X values over time"
          text="a data stream of numbers over time"
        >
          <Notes>Let's imagine X as a stream of data values over time.</Notes>
        </ImageSlide>
        <ImageSlide
          image="xyStream.svg"
          title="Y values over time"
          text="a data stream of numbers derived from another stream"
        >
          <Notes>
            So y is another stream of data values, where each value is derived
            from the last value of x
          </Notes>
        </ImageSlide>
        <ImageSlide
          image="mouseStream.svg"
          title="Mouse clicks over time"
          text="Stream of user input events"
        >
          <Notes>
            And a stream isn't just numbers -- could represent a user event,
            like a mouse click
          </Notes>
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
            just need to extend it!
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
              loc: [18, 22],
              note: "Merge values"
            }
          ]}
        />
        <ImageSlide image="reallife.gif" title="4. How do I actually use this?">
          <Notes>
            Ok, so you're excited, you've drank the kool-aid in 30 minutes, now
            you want to use RxJS everywhere, but how?
          </Notes>
        </ImageSlide>
        <RxJsGraphSlide>
          <Notes>
            <p>So first, I wanna let you in on a little secret</p>
            <p>
              Raise your hand if you attended Laurie Voss's awesome talk Tuesday
              on NPM data
            </p>
            <p>
              Ok so he put up this slide usage of tools and libraries in the
              react ecosystem
            </p>
            <p>And I saw was like wait....</p>
            <p>What's that green line?</p>
            <p>Isn't that?</p>
            <p>Holly molly RxJs is more popular than React itself!</p>
          </Notes>
        </RxJsGraphSlide>
        <SimpleSlide statement="You're already using it.">
          <Notes>
            <p>
              So yesterday, wee actually spent some time figuring out how this
              is happening.
            </p>
            <p>
              And the truth is this comes mostly from RxJS being depended on
              directly or indirectly by several popular packages like Angular
              and ESLint
            </p>
            <p>
              But the interesting point is that you're already using RxJS --
              even if these concepts are really new to you, the libraries you
              depend on depend on RxJS
            </p>
          </Notes>
        </SimpleSlide>
        <ListSlide
          ordered={false}
          list={[
            "How to architect applications with RxJS?",
            "How do I integrate this in my application, today?"
          ]}
        >
          <Notes />
        </ListSlide>
        <LoginForm />
        <CodeSlide
          lang="javascript"
          code={require("!!raw-loader!../assets/loginStream.js")}
          ranges={[
            { loc: [0, 7], title: "But how tho?" },
            {
              loc: [0, 7],
              note: "Let's say we have an API"
            },
            { loc: [7, 10], note: "Get some dom elements" },
            {
              loc: [11, 13],
              note: "Login Attempt = Grab last user + password on each submit "
            },
            {
              loc: [13, 19],
              note: "Login Response = the magic of mergeMap"
            },
            {
              loc: [20, 25],
              note: "Login In Progress = toggel between attempts + responses"
            },
            {
              loc: [25, 30],
              note: "Login Successes = filter responses for successes"
            },
            {
              loc: [31, 36],
              note: "Login Failures = same thing!"
            },
            {
              loc: [37, 45],
              note: "Failure Message = extract from failures, clear on attempt"
            },
            {
              loc: [46, 53],
              note: "User token = extract from login successes"
            },
            {
              loc: [54, 60],
              note: "Use token to get a protected resource"
            }
          ]}
        />
        <ImageSlide
          image="signals-cia.gif"
          title="Signal Graph"
          text="How data propogates through your program"
        />
        <ImageSlide
          image="signal_graph.svg"
          title="Actual Signal Graph From Real APp"
        />
        <SimpleSlide statement="Integration" />
        <ListSlide
          title="Framework = Angular"
          list={["Integrated into framework (for you)!", "Check out NgRx"]}
        />
        <ImageSlide title="But what about React?" image="yodawg.jpg" />
        <ImageSlide title="Good News!" image="kiyoko.gif" />
        <DefinitionSlide
          term="RxReact"
          definition="Tools for integrating react with RxJs!"
        />
        <CodeSlide
          lang="javascript"
          code={require("!!raw-loader!../assets/boxBounceRxReact.jsx")}
          ranges={[
            { loc: [0, 7], title: "RxReact Demo" },
            {
              loc: [2, 3],
              note: "Box component, connected to pose animation library"
            },
            {
              loc: [4, 9],
              note: "viewModel = connect observables as props (see MVVM)"
            },
            {
              loc: [4, 9],
              note: "each input is an observable that becomes a prop"
            },
            {
              loc: [0, 1],
              note: "withViewModel = RxReact's core function"
            },
            {
              loc: [10, 11],
              note: "withViewModel is a HOC (like react-redux's connect!)"
            },
            {
              loc: [12, 17],
              note: "each output is a subject that becomes a callable function!"
            },
            {
              loc: [12, 17],
              note: "(think mapDispatchToProps)"
            },
            {
              loc: [18, 31]
            }
          ]}
        />
        <ImageSlide
          title={
            <div>
              5.
              <br />
              Used Car Sales Portion
            </div>
          }
          image="but-wait-theres-more.jpg"
        />
        <CodeSlide
          lang="javascript"
          code={require("!!raw-loader!../assets/vmFactory.jsx")}
          ranges={[
            {
              loc: [0, 7],
              title: "ViewModel Factories!",
              note: "when you want your vm to change w/ props"
            },
            {
              loc: [8, 9],
              note: "same function!"
            }
          ]}
        />
        <ImageSlide
          title="What about TypeScript?"
          image="securityofyourshit.gif"
        />
        <SimpleSlide
          statement={
            <span>
              RxReact <span role="img">💖</span>
              Typescript
            </span>
          }
        />
        <SimpleSlide statement="View Model as Reducer?" />
        <CodeSlide
          lang="javascript"
          code={require("!!raw-loader!../assets/rxReactReducer.js")}
          ranges={[{ loc: [0, 19] }]}
        />
        <SimpleSlide statement="@rxreact/reducer" />
        <SimpleSlide fit={false} statement="Automatic signal graphs?" />
        <ConceptSlide concept="Coming Soon" description="@rxreact/signal" />
        <ImageSlide
          inverted
          title="That's all folks!"
          image="slushie.gif"
          text={
            <div>
              reactivex-talk.techgirlwonder.com
              <br />
              github.com/hannahhoward/reactivex-talk
            </div>
          }
        />
      </Deck>
    );
  }
}
