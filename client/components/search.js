import React from "react";
import Link from "next/link";

const WidgetRecentPost = () => (
  <div className="search widget">
    <form action="" method="get" className="searchform" role="search">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search for..."
        />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button">
            {" "}
            <i className="ion-search" />{" "}
          </button>
        </span>
      </div>
    </form>
  </div>
);

export default WidgetRecentPost;
