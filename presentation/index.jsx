// Import React
import React from 'react'
import '../assets/prism-tomorrow-ally.css'

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
} from 'spectacle'

import AboutMeSlide from './slideTemplates/about-me-slide.jsx'
import QuoteSlide from './slideTemplates/quote-slide.jsx'
import DefinitionSlide from './slideTemplates/definition-slide.jsx'
import ListSlide from './slideTemplates/list-slide.jsx'
import SimpleSlide from './slideTemplates/simple-slide.jsx'
import ConceptSlide from './slideTemplates/concept-slide.jsx'
import ImageSlide from './slideTemplates/image-slide.jsx'
import DoubleImageSlide from './slideTemplates/double-image-slide.jsx'
import QuotesSlide from './slideTemplates/quotes-slide.jsx'
import colors from './slideTemplates/colors'
import CodeSlide from 'spectacle-code-slide'
import RxJsGraphSlide from './slideTemplates/rxjs-graph.jsx'
//import { headerColor, textColor, bgColor } from "./slideTemplates/utilities.jsx";

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader'
import { headingColor, textColor } from './slideTemplates/utilities'
preloader({})
// Import theme
import createTheme from 'spectacle/lib/themes/default'
import BoxBounce from './demos/box-bounce'
import LoginForm from './demos/login-form'

// Require CSS
require('normalize.css')
const theme = createTheme(colors, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
})

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <AboutMeSlide>
          <Notes>
            <p>Hi everyone I'm Hannah!</p>
            <p>Before we start just a bit about me--</p>
            <p>
              If you're looking for me on the internet, @techgirlwonder is my
              handle on most platforms, that's my little logo. FYI I use she/her
              pronsouns
            </p>
            <p>
              I work for Carbon Five. We're a product development agency that
              works with all kinds of clients from startups to enterprise,
              helping them turn their ideas into software. We're hiring and
              hirable, so come find us afterward if you're interested
            </p>
            <p>Finally, here's my dog. She's cute and she can vouch for me.</p>
          </Notes>
        </AboutMeSlide>
        <DefinitionSlide
          fit={false}
          term="Reactive Programming"
          definition="A Better Way to Write Frontend Applications"
        >
          <Notes>
            <p>
              So this is a talk on Reactive Programming, and why I think it's a
              great way to write frontend applications.
            </p>
            <p>It's in five parts. Here we go</p>
          </Notes>
        </DefinitionSlide>

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
            Hello to all legendary children and welcome to the functional
            reactive programming ball. Tonight, the category is
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
            So I always focus on the phrase 'Sequence of Instructions'. it
            really makes programming feel almost like a todo list.
          </Notes>
        </ImageSlide>
        <ImageSlide image="lesson-plan.jpg" title="Lesson Plan">
          <Notes>
            <p>
              Or maybe if we were to imagine a classroom context, a program
              sounds like a lesson plan.
            </p>
            <p>Are these the write metaphors for a computer program?</p>
            <p>If we're writing a command line tool, then maybe.</p>
            <p>
              But if you're doing frontend programming, I think there's a more
              apt metaphor for how your programs run...
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
              {' '}
              Isn't the central challenge of programming complex frontend
              applications dealing with interruptions?
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
          code={require('raw-loader!../assets/interrupt.c')}
          ranges={[
            { loc: [0, 5], title: 'In The Beginning... C!' },
            { loc: [20, 28], note: 'Override the damn BIOS!' },
            { loc: [10, 19], note: 'Interrupt Service Request Code' },
            { loc: [35, 50], note: 'The main loop' },
            { loc: [44, 47], note: 'Read from the buffer and update state!' },
            { loc: [50, 58], note: 'Ctrl+C will not save you...' }
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="c"
          code={require('raw-loader!../assets/windows-loop.c')}
          notes={
            <div>
              <p>
                Windows improved upon this by having the operating system take
                over some of the lower level input so you couldn't lock your
                computer
              </p>
              <p>
                But you can see that the basic loop is the same: read, process,
                dispath messages
              </p>
            </div>
          }
          ranges={[
            { loc: [0, 26], title: 'Windows event loop' },
            { loc: [5, 14], note: 'Message loop = read, translate, dispatch' }
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="c"
          notes={
            <div>
              <p>
                The main thing your code would provide is procedure to handle
                different messages
              </p>
              <p>
                Which usually looked like a big switch statement where you did
                something different based on the message passed
              </p>
            </div>
          }
          code={require('raw-loader!../assets/window-procedure.c')}
          ranges={[
            {
              loc: [0, 12],
              note: 'Window procedure = read message, update state'
            },
            {
              loc: [2, 14],
              note: 'Window procedure = read message, update state'
            }
          ]}
        />
        <SimpleSlide inverted fit={false} statement="1999?">
          <Notes>
            This brings us up to about 1999 when we left the global event bus in
            the dust for better things. Or did we?
          </Notes>
        </SimpleSlide>
        <CodeSlide
          notes={
            <div>
              <p>
                Notice core logic function is a switch statement that updates
                state based on the type of dispatched messages... I dunno if
                anyone's been writing code in the React ecosystem lately...
              </p>
            </div>
          }
          transition={['fade']}
          lang="c"
          code={require('raw-loader!../assets/window-procedure.c')}
          ranges={[{ loc: [0, 16], note: 'Or did we?' }]}
        />
        <CodeSlide
          transition={['fade']}
          notes={
            <div>
              <p>
                But that looks a lot like a Redux reducer. In fact, Redux
                contains a lot of the global event bus pattern
              </p>
            </div>
          }
          lang="javascript"
          code={require('!!raw-loader!../assets/reducer.js')}
          ranges={[{ loc: [0, 16] }]}
        />
        <ImageSlide inverted image="prince.gif" title="No Shade To Redux">
          <Notes>
            And while using Redux may be programming like it's 1999 there are
            some good reasons they went that way which we'll get to in a sec
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
              how we've mostly written frontend applications in modern years
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
            In the past it was pretty hard. You had to track down individually
            anyone you wanted to view your content
          </Notes>
        </ImageSlide>
        <QuotesSlide
          transition={['fade']}
          quotes={[
            {
              quote: 'I will make content',
              cite: 'influencer'
            },
            {
              quote: 'I will subscribe to your content',
              cite: 'adoring fan'
            },
            {
              quote: 'I made new content',
              cite: 'influencer'
            },
            {
              quote: 'I am notified about your content, and can watch it',
              cite: 'adoring fan'
            }
          ]}
        >
          <Notes>
            <p>
              But now we have a better way. We have a contract. I, the creator,
              promises to publish content, and you, my adoring fans, use one of
              our many scary surveilance social media platforms to subscribe to
              it
            </p>
            <p>
              And then whenever I publish you get notified about my new content
            </p>
          </Notes>
        </QuotesSlide>
        <QuotesSlide
          transition={['fade']}
          quotes={[
            {
              quote: 'I will emit events',
              cite: 'Subject'
            },
            {
              quote: 'I will subscribe to your events',
              cite: 'Observer'
            },
            {
              quote: 'An event happened',
              cite: 'Subject'
            },
            {
              quote: 'I am notified about the event, and can handle it',
              cite: 'Observer'
            }
          ]}
        >
          <Notes>
            <p>
              And that's basically the observer pattern. You have a subject --
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
                You use this pattern in your every day programming and you may
                not even know it. Let's imagine an example where you have two
                dom elements, one thats a switch and another who's content you
                want to change whenever the switch is clicked
              </p>
              <p>Here we have a reference to our switch</p>
              <p>
                And here we have a function to switch the text in a box from off
                to on
              </p>
              <p>
                We need to make the toggle switch change the text -- so we
                subscribe to mouse clicks on the toggles switch
              </p>
              <p>
                And this makes our switch text function into an observer, which
                in javascript is an event listener. And that's the Observer
                pattern!
              </p>
            </div>
          }
          code={require('!!raw-loader!../assets/eventListener.js')}
          ranges={[
            { loc: [0, 10], title: 'Real World Example' },
            { loc: [7, 8], note: 'The Dom Element is our subject' },
            { loc: [0, 5], note: 'We have a function to switch the toggle' },
            {
              loc: [8, 9],
              note:
                'Subscribe to mouse clicks on toggle switch, making modifyText into an observer'
            },
            {
              loc: [0, 5],
              note: 'Handle each mouse click by switching the toggle'
            }
          ]}
        />
        <ListSlide
          ordered={false}
          title="Observer Pattern vs Global Event Bus"
          list={[
            '(+) Way simpler than global event bus',
            '(+) Localized scope',
            '(-) Have To Setup Subscriptions'
          ]}
        >
          <Notes>
            <p>
              This is a great partern, cause it's way simple than the event bus.
            </p>
            <p>
              And it's really much more localized... you focus just on the
              events you want to listen to.
            </p>
            <p>
              The downside is you have to setup subscriptions, which starts
              small... but it can get complicated
            </p>
          </Notes>
        </ListSlide>

        <ConceptSlide concept="Take home quiz" description="Try drag and drop">
          <Notes>
            A good example of this is if you try to implement a drag and drop
            with just mousedown, mouseup, and mousemove
          </Notes>
        </ConceptSlide>
        <ListSlide
          title="Mixing concerns"
          list={['Handling events', 'Subscribing observers']}
        >
          <Notes>
            What you'll find is you end up mixing concerns. Your event handlers
            end up both handling events but also setting up other subscriptions.
            And it gets to be a bit of a mess. So the observer pattern is great,
            it's been around for a long time, it's reliable, but it's not
            perfect.
          </Notes>
        </ListSlide>
        <ImageSlide
          image="redux-meme.jpg"
          title="Redux Origin Story"
          text="Is this what happened?"
        >
          <Notes>
            Which leads me to believe the story of Redux getting created might
            have looked like this.
          </Notes>
        </ImageSlide>
        <SimpleSlide statement="Is there a better way?">
          <Notes>
            But maybe there's another way to do this, that offers the
            convenience of the observer pattern with the flexibility of a global
            event bus...
          </Notes>
        </SimpleSlide>
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
            That way is functional reactive programming. I'm gonna show you how
            to use it to write frontends like a boss.
          </Notes>
        </ImageSlide>
        <ImageSlide
          image="classroom-chaos.gif"
          title="Once upon a time..."
          text="I taught middle school"
        >
          <Notes>
            Let's rewind to our classroom analogy. So I actually taught middle
            school once. I was was really bad at it. I don't want you to learn
            from me. But I want to look at how good teachers handle this
            situation...
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
              So how do they do it? Well first of all lesson plan is more of a
              guide than a strict plan
            </p>
          </Notes>
        </ImageSlide>
        <SimpleSlide statement="and get interrupted.">
          <Notes>
            <p>Cause if it were you'd get off track quickly</p>
          </Notes>
        </SimpleSlide>
        <SimpleSlide fit={false} statement="Plan for interruptions and react!">
          <Notes>
            <p>
              Instead you can think of actual teaching as a series of almost
              planned responses to interruptions. And really good teachers know
              how to not just respond to interruptions but draw out lessons and
              learnings from them, kind of folding these responses back into a
              stream of learning that seems to flow almost inevitably to the key
              objectives of the lesson... So it almost is like Jedi mind control
              :)
            </p>
          </Notes>
        </SimpleSlide>
        <ConceptSlide concept="PSA" description="Pay Teachers" />
        <SimpleSlide
          fit={false}
          statement="How could we write programs reactively?"
        >
          <Notes>
            So what if we wrote programs like this -- as planned reactions to
            interruptions? What would it look like?
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
            But the meaninb we associate with imperative programming is not the
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
            And a stream isn't just numbers -- it could represent a user event,
            like a mouse click
          </Notes>
        </ImageSlide>
        <SimpleSlide
          fit={false}
          statement="Reactive programming in the real world?"
        >
          <Notes>
            That's the theortical idea of reactive programming. But how can we
            write this on our computers are that are just executing instructions
            in sequence? We need a pattern where for each value that changes
            over time, we could get notified that it's changing and respond.
            Hmm... where have we heard of this?
          </Notes>
        </SimpleSlide>
        <ImageSlide
          image="runallnight.jpg"
          title="Observer pattern!"
          text="Only better..."
        >
          <Notes>The Observer Pattern! We just need to extend it a bit!</Notes>
        </ImageSlide>
        <DefinitionSlide
          term="Observable"
          definition="A value that changes over time, that we can listen to changes on"
        >
          <Notes>
            So let's introduce the Observable. The observable is sorta like our
            traditional subject from the observer pattern, but it can represent
            anything. It just represents any value that changes over time.
          </Notes>
        </DefinitionSlide>
        <CodeSlide
          notes={
            <div>
              <p>Let's look at how observables work</p>
              <p>
                Here we have x, and x is an observable. So we can subscribe to
                x, and any time x emits a new value, the function we give to
                subscribe will get called
              </p>
              <p>
                And if we wanted to print the values of y we could just
                subscribe and print the value plus 3
              </p>
              <p>
                But what if we wanted to listen to y? We'd need a way to
                transform an x oberservable to a y observable
              </p>
              <p>Let's rewind and imaging x is just an array of numbers.</p>
              <p>
                If we want to produce an array of y values, we have an operation
                to do this -- most languages call it map
              </p>
              <p>
                The great thing is we have the same concept with of observables.
                We can produce y with map. The difference is map is a
                transformation on values over time. As each new x value is
                produced, a new y value is produced by applying the
                transformation function
              </p>
            </div>
          }
          lang="javascript"
          code={require('!!raw-loader!../assets/simpleObservable.js')}
          ranges={[
            { loc: [0, 7], title: "Value as 'Observable'" },
            {
              loc: [0, 1],
              note: 'Subscribe to X as it changes, write its values'
            },
            { loc: [2, 3], note: 'Outputs the right values for Y' },
            {
              loc: [4, 5],
              note: 'What if we want to listen to Y?'
            },
            {
              loc: [6, 7],
              note: 'If x were an array of numbers...'
            },
            {
              loc: [8, 9],
              note: 'We could derive y array with map'
            },
            {
              loc: [10, 13],
              note: 'If x is an observable, we use map too!'
            }
          ]}
        />
        <BoxBounce inverted />
        <CodeSlide
          lang="javascript"
          code={require('!!raw-loader!../assets/buttonStream.js')}
          ranges={[
            { loc: [0, 7], title: 'How This Works' },
            {
              loc: [0, 10],
              note: 'Introducing RxJS'
            },
            { loc: [10, 13], note: 'Get some dom elements' },
            {
              loc: [13, 15],
              note: 'Create observables from dom events'
            },
            {
              loc: [16, 18],
              note: 'Convert clicks to a position'
            },
            {
              loc: [18, 22],
              note: 'Merge values'
            }
          ]}
          notes={
            <div>
              <p>So let's look at how this works in code</p>
              <p>
                For the rest of the talk, I'll be using a really great
                observable library called RxJS. Our remaining examples will be
                in javascript, but there are solid Rx libraries in most major
                programming languages, and you can apply these patterns to
                almost any language or context
              </p>
              <p>So the first step is to look up our DOM elements</p>
              <p>
                Then, RxJs provides us with `fromEvent` to generate observables
                from DOM events
              </p>
              <p>
                Next we'll use the map operation convert a click even to a
                corresponding position
              </p>
              <p>
                Finally, we can use RxJS merge function to merge these two
                position streams, which gives us a stream of the current
                position of the ball
              </p>
            </div>
          }
        />
        <ImageSlide image="reallife.gif" title="4. How do I actually use this?">
          <Notes>
            Ok, so you're excited, you've drank the kool-aid in 20 minutes, now
            you want to use RxJS everywhere, but how?
          </Notes>
        </ImageSlide>
        <RxJsGraphSlide>
          <Notes>
            <p>So first, I wanna let you in on a little secret</p>
            <p>
              Recently I was at a talk given by Laurie Voss, who works for NPM.
              He had collected data about packages downloads on NPM and he had
              this slide showing usage of tools and libraries in the react
              ecosystem
            </p>
            <p>And when I saw it, I was like wait....</p>
            <p>What's that green line?</p>
            <p>Isn't that?</p>
            <p>Holly molly RxJs is more popular than React itself!</p>
          </Notes>
        </RxJsGraphSlide>
        <SimpleSlide statement="You're already using it.">
          <Notes>
            <p>
              As it turns out, RxJS is being depended on directly or indirectly
              by several popular packages like Angular and ESLint.
            </p>
            <p>
              But the interesting point is that even if these concepts are
              really new to you, the libraries you depend on depend on RxJS
            </p>
          </Notes>
        </SimpleSlide>
        <ListSlide
          ordered={false}
          title="Two Questions For Using RxJS"
          list={[
            'How to architect applications with RxJS?',
            'How do I integrate this in my application, today?'
          ]}
        >
          <Notes>
            But if you personally want to use RxJS or an Rx library, we need to
            answer a couple questions. First, how do real applications actually
            get architected with this, and second, how would I bring RxJs in the
            ecosystem of tools I'm already using.
          </Notes>
        </ListSlide>
        <LoginForm />
        <CodeSlide
          lang="javascript"
          code={require('!!raw-loader!../assets/loginStream.js')}
          ranges={[
            { loc: [0, 7], title: 'But how tho?' },
            {
              loc: [0, 7],
              note: "Let's say we have an API"
            },
            { loc: [7, 10], note: 'Get some dom elements' },
            {
              loc: [11, 13],
              note: 'Login Attempt = Grab last user + password on each submit '
            },
            {
              loc: [13, 19],
              note: 'Login Response = the magic of mergeMap'
            },
            {
              loc: [20, 25],
              note: 'Login In Progress = toggel between attempts + responses'
            },
            {
              loc: [25, 30],
              note: 'Login Successes = filter responses for successes'
            },
            {
              loc: [31, 36],
              note: 'Login Failures = same thing!'
            },
            {
              loc: [37, 45],
              note: 'Failure Message = extract from failures, clear on attempt'
            },
            {
              loc: [46, 53],
              note: 'User token = extract from login successes'
            },
            {
              loc: [54, 60],
              note: 'Use token to get a protected resource'
            }
          ]}
        />
        <ImageSlide
          image="signals-cia.gif"
          title="Signal Graph"
          text="How data propogates through your program"
        >
          <Notes>
            You've seem me draw these diagrams of emissions from observables
            twice now, as a way to conceptualize how data propogates though a
            program built with observables. There's a term for this concept.
            It's called a signal graph. The signals are the emissions from
            observables, and the graph is how they're all tied together. This is
            how we architect programs with Observables. Our programs become a
            series of reactive data streams, starting with primary signals and
            extending to all the derivations based on those primary signals. And
            taken together, those form a signal graph.
          </Notes>
        </ImageSlide>
        <ImageSlide
          image="signal_graph.svg"
          title="Actual Signal Graph From Real App"
        >
          <Notes>
            When I'm on teams that write programs with Observables, we actually
            maintain a signal graph as a seperate diagram! Here's an example
            that's part of an actual producton application I worked on.
          </Notes>
        </ImageSlide>
        <ListSlide
          ordered={true}
          appear={true}
          title="Production Concerns"
          list={[
            'How do I test?',
            'How do I make sure my graph is sound?',
            'Ack RxJs idiosyncracies!',
            'One big graph or lots of smaller ones?',
            'Diagramming is hard'
          ]}
        >
          <Notes>
            <p>
              At Carbon Five we write a lot of code using Signal Graphs.
              Obviously there are concerns that come up when you use this in
              production.
            </p>
            <p>You might be wondering how you test your signals</p>
            <p>
              Or how you make sure your graphs don't have cycles or missing
              dependencies
            </p>
            <p>
              Also, RxJs has some idiosycracies I haven't covered here that you
              might encounter. Google hot/cold observables
            </p>
            <p>
              And then as your program grows if you have just one graph it gets
              huge.... so maybe you want a few graphs and a way to represent
              connections
            </p>
            <p>
              And finally, these graph diagrams sure take a lot of time to
              maintain. Man I thought we were agile why we spending all this
              time on documentation instead of working software?
            </p>
            <p>
              So we've spent a lot of time at Carbon Five over several projects
              developing best practices around all of these
            </p>
          </Notes>
        </ListSlide>
        <ImageSlide
          image="boughtthecompany.jpg"
          text={
            <BlockQuote style={{ textAlign: 'right' }}>
              <Quote
                style={{ fontSize: '2.66rem' }}
                textColor={headingColor(false)}
              >
                I liked Signal Graphs so much I bought the company!
              </Quote>
              <Cite textColor={textColor(false)}>me, 2018</Cite>
            </BlockQuote>
          }
        >
          <Notes>
            And recently I thought, what if we could take all those best
            practices and build a library to encode them so other people could
            skip over these hurdles?
          </Notes>
        </ImageSlide>
        <DefinitionSlide
          term="Signal"
          definition="A library for frontend state management using signal graphs"
        >
          <Notes>
            So I'd like to tell you about Signal, a library for doing state
            management in your frontend javascript apps with signal graphs
          </Notes>
        </DefinitionSlide>
        <CodeSlide
          lang="javascript"
          code={require('!!raw-loader!../assets/signal.js')}
          ranges={[
            { loc: [0, 7], title: 'Signal!' },
            { loc: [0, 15], note: 'Your whole graph in one place' },
            {
              loc: [39, 46],
              note: 'Observable factory functions, easily testable'
            },
            { loc: [30, 37], note: 'hydrate with initial state' },
            {
              loc: [37, 38],
              note: 'wiring up w/ topological sort, good defaults'
            },
            {
              loc: [47, 52],
              note: 'connect to other graphs you build'
            },
            {
              loc: [13, 21],
              note: 'DI with strings like Angular 1???'
            }
          ]}
          notes={
            <div>
              <p>
                Let's take a look at this in the context of the Login example
              </p>
              <p>
                You start in Signal by defining your graph. I'm going to gloss
                over this DSL a bit, but basically it's listing all the
                observables that make up the graph and how they relate to each
                other. Primary signals are the inputs -- the starting
                observables that are usually tied to user interface elements.
                Everything after that is a derived signal. The definition is in
                a single place so you have a nice single reference for the
                structure of your graph
              </p>
              <p>
                And in terms of the actual operations for your derived signals,
                you make factory functions like these examples for login
                attempts and responses. The only difference here is because all
                the dependent signals are injected, they're really easy to test.
              </p>
              <p>
                One of the common problems with signal graphs is how you hydrate
                them with an initial state, there's a function to quickly do
                that for all your signals
              </p>
              <p>
                Finally, you build your graph. And the Signal library handles
                the whole process of sorting dependencies, and setting up all
                your observables with good defaults. If have a circular
                dependency, it'll get caught. If you depend on a signal you
                didn't define, it'll get caught.
              </p>
              <p>
                To keep your graphs from getting overwhelming, you can define
                more than one of them, and then connect them up. Here we see an
                example where the authStatus from our authentication graph gets
                wired into a different graph that handles fetching protected
                resources
              </p>
              <p>
                You might be wondering about this Angular 1-ish looking
                Dependency Injection. I've left Typescript out of all code
                examples, but I love it, and I write my libraries with it. If
                you use this library with Typescript you're gonna get some
                really incredible type bindings that'll prevent you from typing
                strings wrong or injecting the wrong kinds of observables
                anywhere. It's pretty amazing cause Typescript's pretty amazing
              </p>
            </div>
          }
        />
        <ConceptSlide
          fit={false}
          concept="Available Now(ish)"
          description="@rxreact/signal"
        >
          <Notes>
            <p>
              This is available now on npm and don't worry I'm not crimping on
              my favorite messaging app by stealing it's name. That's why it's
              under a namespace :) I'll explain why the namespace is RxReact in
              a second.
            </p>
            <p>
              Caveat is this is not production ready yet. So play but don't
              adopt just yet.
            </p>
          </Notes>
        </ConceptSlide>
        <ConceptSlide
          fit={false}
          concept="Coming Soon"
          description="Automatic graph visualization"
        >
          <Notes>
            <p>
              One thing I haven't been able to do yet but believe is totally
              possible is to automatically generate real time visualizations of
              signals moving through the graph like the examples I showed. I
              think you could get some amazing debugging insights by watching
              how signals propogate. Those examples you saw are real and totally
              interactive, but still have to be created by hand. I've got all
              the pieces but am not there yet.
            </p>
          </Notes>
        </ConceptSlide>
        <SimpleSlide statement="Integration">
          <Notes>
            So ok, RxJS is a great abstract tool, and now you vaguely understand
            how you'd use it, but how do your tie it to a trusty javascript MVC?
          </Notes>
        </SimpleSlide>
        <ListSlide
          ordered={true}
          appear={true}
          title="Framework = Angular"
          list={["You're done", 'Check out NgRx']}
        >
          <Notes>
            So if you're using Angular, step 1 is nothing. The Angular authors
            integrated RxJs from the beginning and there's some interesting
            tooling like NgRx in the ecosystem.
          </Notes>
        </ListSlide>
        <ImageSlide title="But what about React?" image="yodawg.jpg">
          <Notes>
            <p>
              But I use React at my job. And I want to use my React with my
              reactive programming!
            </p>
            <p>
              That's where this talk started -- wanting to use RxJs with React
              but using Redux cause I work at a consulting company where I'm
              can't saddle our client developers who take over my code with a
              newish technology with minimal tooling.
            </p>
          </Notes>
        </ImageSlide>
        <ImageSlide title="Good News!" image="kiyoko.gif">
          <Notes>
            And that's why I've been working on a lot of tooling for RxJS and
            React.
          </Notes>
        </ImageSlide>
        <DefinitionSlide
          term="RxReact"
          definition="Tools for integrating react with RxJs!"
        >
          <Notes>
            So I want to talk about RxReact, which are a series of tools for
            integrating RxJS with React. Now, I want to be clear there are
            actually a bunch of tools out there. This is just one offering and I
            encourage you to checkout the ecosystem.
          </Notes>
        </DefinitionSlide>
        <CodeSlide
          lang="javascript"
          code={require('!!raw-loader!../assets/boxBounceSignal.jsx')}
          ranges={[
            {
              loc: [0, 4],
              title: 'Signal-connect'
            },
            {
              loc: [2, 3],
              note: 'Box component, connected to pose animation library'
            },
            {
              loc: [4, 6],
              note: 'Signal Graph for our ball state'
            },
            {
              loc: [0, 2],
              note: 'Import connect'
            },
            {
              loc: [6, 13],
              note: 'Connect outputs to props'
            },
            {
              loc: [13, 22],
              note: 'Connect inputs as props'
            },
            {
              loc: [22, 37],
              note: 'More complex example!'
            }
          ]}
          notes={
            <div>
              <p>
                The simplest tool is one I made to connect the Signal Graphs you
                make with Signal to react components. I call it 'signal-connect'
              </p>
              <p>
                Here is a simple react component. It's the ball from our earlier
                demo. You can see it takes a simple prop, specifying it's
                position.
              </p>
              <p>
                And let's say we've defined a singal graph for the state of the
                ball, using the DSL of Signal
              </p>
              <p>
                Now, we want to first connect the position of the ball to our
                signal graph. So we import a connect function from RxReact
              </p>
              <p>
                And this function works a lot like the `connect` function from
                RxReact. You pass it the signalGraph and two parameters. The
                first parameter represents the 'outputs' of the signal graph. In
                the object you pass here, any keys become props on the
                component, that are auto-updated as a signals emit from the
                graph. In this case, we tie the position prop to the position$
                signal in the graph.
              </p>
              <p>
                What about sending data back to the graph. Let's look at one of
                our buttons. This component sends data out. So we need a prop
                that's a function we can call to send a signal into the graph.
                That's what the second parameter is for. Here is any key is a
                prop function you can call and it will generate a new emission
                on a primary signal in your graph. So in this example, we
                connect the onClick to the leftClick in graph.
              </p>
              <p>
                And that's basically it, but I want to show you how simple it is
                to connect a more complex example. This is the entire connection
                for our login component. Just our inputs and outps. Now there
                are more complex versions of this which I won't show there, but
                you actually have all the functionality you'd get in redux's
                connect
              </p>
            </div>
          }
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
        <DefinitionSlide
          term="@rxreact/core"
          definition="RxJs+React on it's own"
        >
          <Notes>
            But let's say you don't want to buy into my signal library. Well the
            good news is I have a simpler version if you just want to use RxJs
            and react on their own. I actually wrote this first and it's more
            stable.
          </Notes>
        </DefinitionSlide>
        <CodeSlide
          lang="javascript"
          code={require('!!raw-loader!../assets/boxBounceRxReact.jsx')}
          ranges={[
            { loc: [0, 5], title: 'RxReact Demo' },
            {
              loc: [2, 3],
              note: 'Box component, connected to pose animation library'
            },
            {
              loc: [4, 9],
              note: 'viewModel = connect observables as props (see MVVM)'
            },
            {
              loc: [4, 9],
              note: 'each input is an observable that becomes a prop'
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
              note: 'each output is a subject that becomes a callable function!'
            },
            {
              loc: [12, 17],
              note: '(think mapDispatchToProps)'
            },
            {
              loc: [18, 31]
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
          code={require('!!raw-loader!../assets/rxReactReducer.js')}
          ranges={[{ loc: [0, 19] }]}
        />
        <SimpleSlide statement="@rxreact/process" />
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
    )
  }
}
