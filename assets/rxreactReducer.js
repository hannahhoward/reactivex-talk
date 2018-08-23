let viewModel = viewModelFromReducer({
  initialState: {
    count: 2,
    fruit: 'bananas',
    extra: 'applesauce'
  },
  reducer(state, action) {
    switch (action.type) {
      case ActionType.SET_COUNT:
        return ReducerResult.Update({ ...state,
          count: action.payload
        })
      case ActionType.SET_FRUIT:
        return ReducerResult.Update({ ...state,
          fruit: action.payload
        })
    }
  },
  sideEffects: {}
})