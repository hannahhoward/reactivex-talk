const signalGraph = new SignalGraphBuilder()
  .define(
    addPrimary('username$'),
    addPrimary('password$'),
    addPrimary('submitButton$'),
    addDerived(
      'loginAttempts$',
      makeLoginAttempts,
      'submitButton$',
      'username$',
      'password$'
    ),
    addDerived('loginResponses$', makeLoginResponses, 'loginAttempts$', 'api'),
    addDerived(
      'loginInProgress$',
      makeLoginInProgress,
      'loginAttempts$',
      'loginResponses$'
    ),
    addDerived('loginSuccesses$', makeLoginSuccesses, 'loginResponses$'),
    addDerived('loginFailures$', makeLoginFailures, 'loginResponses$'),
    addDerived(
      'loginFailureMessage$',
      makeLoginFailureMessage,
      'loginAttempts$',
      'loginFailures$'
    ),
    addDerived('authStatus$', makeAuthStatus, 'loginSuccesses$'),
    addDependency('api', api)
  )
  .initializeWith({
    loginInProgress$: false,
    loginFailureMessage$: '',
    username$: '',
    password$: '',
    authStatus$: { status: 'unauthorized' }
  })
  .build()

const makeLoginAttempts = (submitButton$, username$, password$) =>
  submitButton$.pipe(withLatestFrom(username$, password$))

const makeLoginResponses = (loginAttempts$, api) =>
  loginAttempts$.pipe(
    flatMap(([_, username, password]) => api.login({ username, password }))
  )

authResourceGraph.connect(
  'authStatus$',
  signalGraph,
  'authStatus$'
)
