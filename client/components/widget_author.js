import React from "react";
import Link from "next/link";

const WidgetAuthor = props => {
  return (
    <div className="author widget">
      <img className="img-responsive" src={props.thumbnail} />
      <div className="author-body text-center">
        <div className="author-img">
          <img src={props.avatar} alt={props.name} />
        </div>
        <div className="author-bio">
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default WidgetAuthor;
