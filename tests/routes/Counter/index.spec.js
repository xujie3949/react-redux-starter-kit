import createCounterRoute from 'routes/Counter';

describe('(Route) Counter', () => {
  let route;

  beforeEach(() => {
    route = createCounterRoute({});
  });

  it('Should return a route configuration object', () => {
    expect(typeof route).to.equal('object');
  });

  it('Configuration should contain path `counter`', () => {
    expect(route.path).to.equal('counter');
  });
});
