import styles from './app.module.scss';
import { Route, Link } from 'react-router-dom';
import DemoTesting from './examples/demo-testing/demo-testing';

export function App() {
  return (
    <div className={styles.app}>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            <DemoTesting></DemoTesting>
            {/*<Link to="/page-2">Click here for page 2.</Link>*/}
          </div>
        )}
      />
      <Route
        path="/examples"
        exact
        render={() => (
          <div>
            Page 2
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </div>
  );
}

export default App;
