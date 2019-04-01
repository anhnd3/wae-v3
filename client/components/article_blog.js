import React from "react";
import Link from "next/link";

const ArticleBlog = props => {
  return (
    <article
      className="wow fadeInDown"
      data-wow-delay={props.time}
      data-wow-duration="500ms"
    >
      <div className="blog-post-image">
        <Link href={`${props.link}?blog=${props.blog}`}>
          <a>
            <img className="img-responsive" src={props.image} alt="" />
          </a>
        </Link>
      </div>
      <div className="blog-content">
        <h2 className="blogpost-title">
          <Link href={`${props.link}?blog=${props.blog}`}>
            <a>{props.title}</a>
          </Link>
        </h2>
        <div className="blog-meta">
          <span>{props.date}</span>
          <span>
            by <a>{props.author}</a>
          </span>
        </div>
        <p>{props.desc}</p>
        <Link href={`${props.link}?blog=${props.blog}`}>
          <a className="btn btn-dafault btn-details">Xem thêm</a>
        </Link>
      </div>
    </article>
  );
};

export default ArticleBlog;
