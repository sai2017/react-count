import React from 'react';
import './App.css';

class App extends React.Component {
  // classが初期化されるときに呼ばれるメソッド
  constructor() {
    super()
    this.state={
      count: 0,
    }
  }

  plus() {
    // setState関数というものを呼び出して、stateを更新
    this.setState({count: this.state.count + 1})
  }

  minus() {
    this.setState({count: this.state.count - 1})
  }

  render() {
    return (
      <div>
        <h1>カウンターApp</h1>
        <p>{this.state.count}</p>
        <div>
          <button onClick={() => this.plus()}>+</button>
          <button onClick={() => this.minus()}>-</button>
        </div>
      </div>
    );
  }
}

export default App;
