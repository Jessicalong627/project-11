import React, { Component } from 'react';

export default class Search extends Component {
//for search input value

  handleValueSearch(e) {
    e.preventDefault();
    let input = e.target.children[0].value;
    if (input === "") {
      input = 'forest';
    }
    this.props.handleValueSearch(input);
}


  render() {
    return(
      <div >
        <form className="search-form" onSubmit={this.handleValueSearch.bind(this)}>
          <input type="text"/>
          <button >Search</button>
        </form>
      </div>
    );
  }
}
