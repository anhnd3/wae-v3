import React, { Component } from "react";
import Link from "next/link";

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = { searchData: "" };
  }

  handleSearchChange = event => {
    // console.log(this.state.searchData);
    const dataSearch = event.target.value;
    this.setState({ searchData: dataSearch });
  };

  render() {
    return (
      <div className="search widget">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for..."
            onChange={this.handleSearchChange}
          />
          <span className="input-group-btn">
            <Link href={`/search?keywords=${this.state.searchData}`}>
              <button className="btn btn-default" type="button">
                <i className="ion-search" />
              </button>
            </Link>
          </span>
        </div>
      </div>
    );
  }
}
