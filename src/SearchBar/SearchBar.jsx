import React, { Component } from 'react';


class SeachBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
     };
  }
  render() {
    return (
      <div>
        <input value={this.state.value} onChange={e => this.setState({ value: e.target.value })}/>
        <button onClick={() => {this.props.getCoords(this.state.value); this.props.takeQuery(this.state.value)}}>Search</button>
      </div>
    );
  }
}

export default SeachBar;
