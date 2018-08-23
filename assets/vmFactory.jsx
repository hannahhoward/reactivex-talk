let vmFactory = ownProps$ => {
  return {
    inputs: {
      greeting: ownProps$.pipe(map(({ name }) => "Hello " + name))
    }
  };
};

const Greeting = withViewModel(vmFactory)(({ greeting }) => <p>{greeting}</p>);
