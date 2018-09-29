import { withViewModel } from '@rxreact/signal-connect'

const PositionedBox = ({ position }) => <RedBox pose={position} />

const ballSignalGraph = new SignalGraphBuilder().define(/*...*/).build()

// connect(graph, mapGraphOutputsToProps, mapGraphInputsToProps = {})
const BoundBox = connect(
  ballSignalGraph,
  {
    position: 'position$'
  }
)(PositionedBox)

const LeftButton = connect(
  ballSignalGraph,
  {},
  {
    onClick: 'leftClick$'
  }
)(({ onClick }) => <Button onClick={onClick}> Go Left </Button>)

const ConnectedComponent = connect(
  signalGraph,
  {
    loginInProgress: 'loginInProgress$',
    loginFailureMessage: 'loginFailureMessage$',
    username: 'username$',
    password: 'password$'
  },
  {
    usernameChanged: 'username$',
    passwordChanged: 'password$',
    submitButton: 'submitButton$'
  }
)(LoginForm)
