import { withViewModel } from "@rxreact/core";

const PositionedBox = ({ position }) => <RedBox pose={position} />;

const boxVm = {
  inputs: {
    position: position$
  }
};

const BoundBox = withViewModel(boxVm)(PositionedBox);

const LeftButton = withViewModel({
  outputs: {
    onClick: leftClick$
  }
})(({ onClick }) => <Button onClick={onClick}> Go Left </Button>);

const ConnectedLoginForm = withViewModel({
  inputs: {
    username: username$.pipe(startWith("")),
    password: password$.pipe(startWith("")),
    loginInProgress: loginInProgress$,
    loginFailureMessage: loginFailureMessage$
  },
  outputs: {
    usernameChanged: username$,
    passwordChanged: password$,
    submitButton: submitButton$
  }
})(LoginForm);

// fin
