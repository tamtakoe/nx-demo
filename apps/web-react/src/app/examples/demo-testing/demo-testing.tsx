import './demo-testing.module.scss';
import DemoCounter from './demo-counter/demo-counter';
import { PureComponent } from 'react';

/* eslint-disable-next-line */
export interface DemoTestingProps {}
export interface DemoTestingState {
  counters: number[]
}

export default class DemoTesting extends PureComponent<DemoTestingProps, DemoTestingState> {
  state = {
    counters: [0],
  }

  addCounter = () => {
    this.setState({
      counters: [...this.state.counters, 0]
    });
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>See test for more useful information</p>

        <button className="btn btn-secondary add-counter" onClick={this.addCounter}>Add counter</button>

        {this.state.counters.map(counter => {
          return <DemoCounter key="{counter}"></DemoCounter>
        })}

      </div>
    );
  }
}
