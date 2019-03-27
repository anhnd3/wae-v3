import React from "react";
import Link from "next/link";

const WidgetAuthor = () => (
  <div className="author widget">
    <img
      className="img-responsive"
      src="//wae.vn/static/timer/images/author/author-bg.jpg"
    />
    <div className="author-body text-center">
      <div className="author-img">
        <img src="//wae.vn/static/timer/images/author/author.jpg" />
      </div>
      <div className="author-bio">
        <h3>Jonathon Andrew</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          magnam asperiores consectetur, corporis ullam impedit.
        </p>
      </div>
    </div>
  </div>
);

export default WidgetAuthor;
