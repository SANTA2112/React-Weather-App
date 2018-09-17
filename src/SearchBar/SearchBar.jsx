import React, { Component } from 'react';
import { Input, Wrapper, SearchButton, History, HistoryItem, Wrap } from "./styled";

class SeachBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
     };
  }
  handleChange = () => {
    this.props.getCoords(this.state.value); this.props.takeQuery(this.state.value); this.setState({ value: '' })
  }
  render() {
    return (
      <Wrapper>
        <Wrap>
          <Input value={this.state.value} onChange={e => this.setState({ value: e.target.value })} list='mylist'/>
          {this.props.searchQueryes.length > 0 && <History id='mylist'>
            {this.props.searchQueryes.map(el => <HistoryItem key={el} value={el} />)}
          </History>}
          <SearchButton onClick={this.handleChange}>Search</SearchButton>
        </Wrap>
      </Wrapper>
    );
  }
}

export default SeachBar;
