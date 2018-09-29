import React from 'react'
import { withViewModel } from '@rxreact/core'
import { Subject, merge, fromEvent } from 'rxjs'
import {
  map,
  startWith,
  delay,
  withLatestFrom,
  flatMap,
  filter,
  tap,
  distinctUntilChanged,
  mergeAll
} from 'rxjs/operators'
import styled from 'styled-components'
import asSlide from '../slideTemplates/as-slide'
import FullScreen from '../slideTemplates/full-screen'
import colors from '../slideTemplates/colors'
import { Signalize, SignalComponent } from './visualizer/Signal'
import { Appear, Notes } from 'spectacle'

const api = {
  login: ({ username, password }) => {
    if (username === 'strangeloop' && password === 'awesome') {
      return new Promise(resolve => {
        setTimeout(
          () =>
            resolve({
              status: 'success',
              data: { userToken: 'some token' }
            }),
          1000
        )
      })
    } else {
      return new Promise(resolve => {
        setTimeout(
          () =>
            resolve({
              status: 'failure',
              error: { message: 'incorrect username/password' }
            }),
          1000
        )
      })
    }
  },
  protectedResource: {
    get: userToken => {
      if (userToken === 'some token') {
        return new Promise(resolve => {
          setTimeout(() => resolve('my stuff'), 1000)
        })
      } else {
        return new Promise(resolve => {
          setTimeout(() => resolve('not authorized'), 1000)
        })
      }
    }
  }
}

const username$ = new Subject()
const password$ = new Subject()

const submitButton$ = new Subject()

username$.subscribe(value => {
  localStorage.setItem('login-form:username', value)
})

password$.subscribe(value => {
  localStorage.setItem('login-form:password', value)
})

submitButton$.subscribe(_ => {
  localStorage.setItem('login-form:submit-button', new Date())
})

const storage$ = fromEvent(window, 'storage')
const storageUsername$ = storage$.pipe(
  filter(event => event.key === 'login-form:username'),
  map(event => event.newValue)
)
const storagePassword$ = storage$.pipe(
  filter(event => event.key === 'login-form:password'),
  map(event => event.newValue)
)
const storageSubmitButton$ = storage$.pipe(
  filter(event => event.key === 'login-form:submit-button'),
  map(event => event.newValue),
  distinctUntilChanged()
)

const allUsername$ = merge(username$, storageUsername$).pipe(
  tap(value => console.log(value))
)
const allPassword$ = merge(password$, storagePassword$)
const allSubmitButton$ = merge(submitButton$, storageSubmitButton$)

const loginAttempts$ = allSubmitButton$.pipe(
  withLatestFrom(allUsername$, allPassword$)
)

const loginResponses$ = loginAttempts$.pipe(
  flatMap(([_, username, password]) => api.login({ username, password }))
)

const loginInProgress$ = merge(
  loginAttempts$.pipe(map(_ => true)),
  loginResponses$.pipe(map(_ => false))
).pipe(startWith(false))

const loginSuccesses$ = loginResponses$.pipe(
  filter(({ status }) => status === 'success')
)

const loginFailures$ = loginResponses$.pipe(
  filter(({ status }) => status === 'failure')
)

const loginFailureMessage$ = merge(
  loginAttempts$.pipe(map(_ => '')),
  loginFailures$.pipe(map(({ error: { message } }) => message))
).pipe(startWith(''))

const userToken$ = loginSuccesses$.pipe(
  map(({ data: { userToken } }) => userToken)
)

const getProtected$ = userToken$.pipe(
  map(userToken => api.protectedResource.get(userToken))
)

const protected$ = getProtected$.pipe(mergeAll())

const Button = styled.button`
  padding: 20px;
  background-color: ${colors.tertiary};
  text-align: center;
  cursor: pointer;
`

const Pen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
  flex: 1;
`

const FormPen = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 40%;
  margin-right: 20px;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-evenly;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
`

const Panes = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: stretch;
`

const LoginForm = ({
  loginInProgress,
  loginFailureMessage,
  username,
  password,
  submitButton,
  usernameChanged,
  passwordChanged
}) => {
  const onSubmit = event => {
    submitButton()
    event.preventDefault()
  }
  return (
    <FormPen onSubmit={onSubmit}>
      <Column>
        <label htmlFor="username">User name:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          disabled={loginInProgress}
          onChange={event => usernameChanged(event.target.value)}
        />
      </Column>
      <Column>
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          name="password"
          value={password}
          disabled={loginInProgress}
          onChange={event => passwordChanged(event.target.value)}
        />
      </Column>
      <Row>
        <div>{loginFailureMessage}</div>
      </Row>
      <Row>
        <Button disabled={loginInProgress} type="submit">
          Submit
        </Button>
      </Row>
    </FormPen>
  )
}
const ConnectedLoginForm = withViewModel({
  inputs: {
    username: allUsername$.pipe(startWith('')),
    password: allPassword$.pipe(startWith('')),
    loginInProgress: loginInProgress$,
    loginFailureMessage: loginFailureMessage$
  },
  outputs: {
    usernameChanged: username$,
    passwordChanged: password$,
    submitButton: submitButton$
  }
})(LoginForm)

const SVGText = styled.text`
  fill: ${colors.tertiary};
  font-size: 16px;
`
const SVGBox = styled.rect`
  fill: ${colors.secondary};
`

const SVGNode = ({ x, y, textLines, height, width, children }) => {
  return (
    <g>
      <SVGBox x={x} y={y} height={height} width={width} />
      <SVGText>
        {textLines.map((textLine, index) => (
          <tspan x={x + 10} y={y + 30 + index * 20} key={index}>
            {textLine}
          </tspan>
        ))}
      </SVGText>
      {children}
    </g>
  )
}

const PathToLines = ({ paths }) => {
  return (
    <g>
      {paths.map((pathObj, idxOuter) => {
        const path = pathObj.path
        return (
          <g key={idxOuter}>
            {path.map((item, index) => {
              if (index === path.length - 1) {
                return null
              }
              const { x1, y1, x2, y2 } =
                pathObj.edge === 'bottom'
                  ? {
                      x1: item.coord.x - 10,
                      y1: index === 0 ? item.coord.y : item.coord.y + 10,
                      x2: path[index + 1].coord.x - 10,
                      y2: path[index + 1].coord.y + 10
                    }
                  : pathObj.edge === 'right'
                    ? {
                        x1: index === 0 ? item.coord.x : item.coord.x - 10,
                        y1: item.coord.y + 10,
                        x2: path[index + 1].coord.x - 10,
                        y2: path[index + 1].coord.y + 10
                      }
                    : {
                        x1: index === 0 ? item.coord.x : item.coord.x - 10,
                        y1: item.coord.y - 30,
                        x2: path[index + 1].coord.x - 10,
                        y2: path[index + 1].coord.y - 30
                      }
              return (
                <line
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  strokeWidth="2px"
                  stroke={`${colors.tertiary}`}
                  key={index}
                />
              )
            })}
          </g>
        )
      })}
    </g>
  )
}

const StyledSignalComponent = styled(SignalComponent)`
  fill: ${colors.secondary};
  font-size: 16px;
`

const SignalNode = ({ x, y, textLines, height, width, paths, children }) => (
  <SVGNode x={x} y={y} textLines={textLines} height={height} width={width}>
    {children}
    <PathToLines paths={paths} />
  </SVGNode>
)

const offset = (path, x, y, width, height) => {
  switch (path.edge) {
    case 'bottom':
      return { offsetX: width / 2 + 10 + x, offsetY: height + y }
    case 'left':
      return { offsetX: x, offsetY: y + height / 2 + 30 }
    case 'right':
      return { offsetX: x + width, offsetY: y + height / 2 - 10 }
  }
}
const makeSignalNode = (
  observable$,
  pause,
  paths,
  width,
  height,
  x,
  y,
  textLines
) => {
  const signalPaths = paths.map(path => {
    const { offsetX, offsetY } = offset(path, x, y, width, height)
    return {
      ...path,
      path: path.path.map(item => ({
        ...item,
        coord: {
          x: item.coord.x + offsetX,
          y: item.coord.y + offsetY
        }
      }))
    }
  })

  const Signals = signalPaths.map(signalPath =>
    Signalize(observable$.pipe(delay(pause)), signalPath.path)(
      StyledSignalComponent
    )
  )
  return () => (
    <SignalNode
      x={x}
      y={y}
      textLines={textLines}
      height={height}
      width={width}
      paths={signalPaths}
    >
      {Signals.map(Signal => (
        <Signal />
      ))}
    </SignalNode>
  )
}

const UsernameSignal = makeSignalNode(
  allUsername$,
  0,
  [
    {
      edge: 'bottom',
      path: [
        {
          coord: { x: 0, y: 0 }
        },
        {
          duration: 500,
          coord: { x: 0, y: 110 }
        },
        {
          duration: 500,
          coord: { x: 190, y: 110 }
        }
      ]
    }
  ],
  110,
  50,
  0,
  0,
  ['User name']
)

const PasswordSignal = makeSignalNode(
  allPassword$,
  0,
  [
    {
      edge: 'bottom',
      path: [
        {
          coord: { x: 0, y: 0 }
        },
        {
          duration: 500,
          coord: { x: 0, y: 80 }
        },
        {
          duration: 500,
          coord: { x: 70, y: 80 }
        }
      ]
    }
  ],
  110,
  50,
  120,
  0,
  ['Password']
)

const SubmitButtonSignal = makeSignalNode(
  allSubmitButton$.pipe(map(_ => 'clicked')),
  0,
  [
    {
      edge: 'bottom',
      path: [
        {
          coord: { x: 0, y: 0 }
        },
        {
          duration: 1000,
          coord: { x: 0, y: 75 }
        }
      ]
    }
  ],
  140,
  50,
  240,
  0,
  ['Submit Button']
)

const LoginAttemptsSignal = makeSignalNode(
  loginAttempts$.pipe(
    map(([_, username, password]) => `u: ${username}, p: ${password}`)
  ),
  1000,
  [
    {
      edge: 'bottom',
      path: [
        {
          coord: { x: 0, y: 0 }
        },
        {
          duration: 1000,
          coord: { x: 0, y: 50 }
        }
      ]
    },
    {
      edge: 'right',
      path: [
        {
          coord: { x: 0, y: 0 }
        },
        {
          duration: 500,
          coord: { x: 180, y: 0 }
        },
        {
          duration: 500,
          coord: { x: 180, y: 150 }
        }
      ]
    }
  ],
  140,
  50,
  240,
  125,
  ['Login Attempts']
)

const LoginResponsesSignal = makeSignalNode(
  loginResponses$.pipe(map(({ status }) => status)),
  1000,
  [
    {
      edge: 'bottom',
      path: [
        {
          coord: { x: 0, y: 0 }
        },
        {
          duration: 1000,
          coord: { x: 0, y: 50 }
        }
      ]
    },
    {
      edge: 'right',
      path: [
        {
          coord: { x: 0, y: 0 }
        },
        {
          duration: 500,
          coord: { x: 70, y: 0 }
        },
        {
          duration: 500,
          coord: { x: 70, y: 50 }
        }
      ]
    },
    {
      edge: 'left',
      path: [
        {
          coord: { x: 0, y: 0 }
        },
        {
          duration: 500,
          coord: { x: -110, y: 0 }
        },
        {
          duration: 500,
          coord: { x: -110, y: 50 }
        }
      ]
    }
  ],
  160,
  50,
  230,
  225,
  ['Login Responses']
)

const LoginInProgressSignal = makeSignalNode(
  loginInProgress$,
  2000,
  [
    {
      edge: 'bottom',
      path: [
        {
          coord: { x: 0, y: 0 }
        },
        {
          duration: 1000,
          coord: { x: 0, y: 35 }
        }
      ]
    }
  ],
  160,
  50,
  410,
  300,
  ['Login In Progress']
)

const LoginFailuresSignal = makeSignalNode(
  loginFailures$.pipe(map(({ status }) => status)),
  2000,
  [
    {
      edge: 'bottom',
      path: [
        {
          coord: { x: 0, y: 0 }
        },
        {
          duration: 1000,
          coord: { x: 0, y: 50 }
        }
      ]
    }
  ],
  140,
  50,
  40,
  300,
  ['Login Failures']
)

const LoginSuccessesSignal = makeSignalNode(
  loginSuccesses$.pipe(map(({ status }) => status)),
  2000,
  [
    {
      edge: 'bottom',
      path: [
        {
          coord: { x: 0, y: 0 }
        },
        {
          duration: 1000,
          coord: { x: 0, y: 100 }
        }
      ]
    }
  ],
  150,
  50,
  235,
  325,
  ['Login Successes']
)

const LoginFailureMessageSignal = makeSignalNode(
  loginFailureMessage$,
  3000,
  [
    {
      edge: 'bottom',
      path: [
        {
          coord: { x: 0, y: 0 }
        },
        {
          duration: 1000,
          coord: { x: 0, y: 50 }
        }
      ]
    }
  ],
  150,
  50,
  35,
  400,
  ['Failure Message']
)
const UserTokenSignal = makeSignalNode(
  userToken$,
  3000,
  [
    {
      edge: 'right',
      path: [
        {
          coord: { x: 0, y: 0 }
        },
        {
          duration: 1000,
          coord: { x: 90, y: 0 }
        }
      ]
    }
  ],
  110,
  50,
  280,
  475,
  ['User Token']
)

const GetProtectedSignal = makeSignalNode(
  getProtected$.pipe(map(_ => 'get!')),
  4000,
  [
    {
      edge: 'bottom',
      path: [
        {
          coord: { x: 0, y: 0 }
        },
        {
          duration: 1000,
          coord: { x: 0, y: 50 }
        }
      ]
    }
  ],
  140,
  50,
  470,
  475,
  ['Get Protected']
)

const ProtectedResourceSignal = makeSignalNode(
  protected$,
  4000,
  [
    {
      edge: 'left',
      path: [
        {
          coord: { x: 0, y: 0 }
        },
        {
          duration: 1000,
          coord: { x: -140, y: 0 }
        }
      ]
    }
  ],
  180,
  50,
  450,
  575,
  ['Protected Resource']
)

const SVGResultText = styled.text`
  fill: ${colors.secondary};
  font-size: 16px;
`
const SVGResultBox = styled.rect`
  fill: ${colors.tertiary};
`

const SVGResultNode = ({ x, y, result, height, width }) => {
  return (
    <g>
      <SVGResultBox x={x} y={y} height={height} width={width} />
      <SVGResultText>
        <tspan x={x + 10} y={y + 30}>
          {result}
        </tspan>
      </SVGResultText>
    </g>
  )
}

const LoginInProgressResult = withViewModel({
  inputs: {
    result: loginInProgress$.pipe(
      map(loginInProgress => (loginInProgress ? 'true' : 'false')),
      delay(3000),
      startWith('')
    )
  }
})(SVGResultNode)

const LoginFailureMessageResult = withViewModel({
  inputs: {
    result: loginFailureMessage$.pipe(
      delay(4000),
      startWith('')
    )
  }
})(SVGResultNode)

const ProtectedResourceResult = withViewModel({
  inputs: {
    result: protected$.pipe(
      delay(5000),
      startWith('')
    )
  }
})(SVGResultNode)

const LoginDemo = () => (
  <Panes>
    <ConnectedLoginForm />
    <Pen style={{ flexBasis: '66%', flexShrink: '0' }}>
      <svg width="100%" height="100%">
        <Appear>
          <g>
            <UsernameSignal />
            <PasswordSignal />
            <SubmitButtonSignal />
          </g>
        </Appear>
        <Appear>
          <g>
            <LoginAttemptsSignal />
          </g>
        </Appear>
        <Appear>
          <g>
            <LoginResponsesSignal />
          </g>
        </Appear>
        <Appear>
          <g>
            <LoginInProgressSignal />
            <LoginFailuresSignal />
            <LoginSuccessesSignal />
            <LoginInProgressResult x={430} y={385} height={50} width={100} />
          </g>
        </Appear>
        <Appear>
          <g>
            <LoginFailureMessageSignal />
            <LoginFailureMessageResult x={0} y={500} height={50} width={255} />

            <UserTokenSignal />
          </g>
        </Appear>
        <Appear>
          <g>
            <GetProtectedSignal />
            <ProtectedResourceSignal />
            <ProtectedResourceResult x={200} y={575} height={50} width={150} />
          </g>
        </Appear>
      </svg>
    </Pen>
  </Panes>
)

export default asSlide(() => (
  <FullScreen column>
    <LoginDemo />
    <Notes>
      <p>
        So let's look at a very real world example -- something you've probably
        all built at some point -- a login form
      </p>
      <p>
        You login form will need an entry for your credentials and a way to
        submit. You probably want to display feedback from the server about
        incorrect logins, and maybe you also want to disable clicking submit
        while a login is in progress.
      </p>
      <p>
        So how do we model this with observables? We'll let's start with what we
        have - three streams of data from user inputs. We can track every thing
        the user types in each text field, and we can track clicking on a submit
        button.
      </p>
      <p>
        From there, we can probably come up with a stream of attempted logins by
        combining the username and password every time the user clicks the
        submit button.
      </p>
      <p>
        We can use those to kick off API calls to a server, which will
        eventually result a stream of responses
      </p>
      <p>
        From there we can derive more things -- we can seperate successes and
        failures from the response stream, and we can derive whether a login is
        progress from the time between a login attempt and a login response
      </p>
      <p>
        We can extract useful data from our success and failure streams -- the
        error messages returned from the server and maybe an auth token that
        comes back in a success login response
      </p>
      <p>
        And finally later on we can use the auth token stream to trigger a fetch
        of a protected resource since the next screen after a login is usually
        to display some personalized data
      </p>
      <p>
        So Let's watch that all work -- here's a success, and here's a failure
      </p>
    </Notes>
  </FullScreen>
))
