import './demo-counter.module.scss';
import { PureComponent } from 'react';
import fetch from 'cross-fetch';

/* eslint-disable-next-line */
export interface DemoCounterProps {}
export interface DemoCounterState {
  counter: number
}

export default class extends PureComponent<DemoCounterProps, DemoCounterState> {
  state = {
    counter: 0,
  }

  componentDidMount() {
    fetch('https://example.com/counter')
      .then(response => response.json())
      .then(data => this.setState({counter: data}))
      .catch(() => null);
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  randomize = () => {
    this.setState({
      counter: this.state.counter + Math.round(Math.random() * 100)
    });
  }

  render() {
    return (
      <div>
        <h3>
          {this.state.counter}
        </h3>

        <div>
          <button className="btn btn-secondary btn-sm mr-2 increment" onClick={this.increment}>Increment</button>
          <button className="btn btn-secondary btn-sm mr-2 decrement" onClick={this.decrement}>Decrement</button>
          <button className="btn btn-secondary btn-sm mr-2 randomize" onClick={this.randomize}>Randomize</button>
        </div>
      </div>
    );
  }
}
