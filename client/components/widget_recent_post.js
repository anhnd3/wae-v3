import React from "react";
import Link from "next/link";

const WidgetRecentPost = props => {
  const { recentPost } = props;

  if (!recentPost || recentPost.length === 0) {
    return "";
  }

  let listRecentPost = recentPost.map(blog => (
    <li key={`recent-post-${blog._id}`}>
      <Link href={`/blog_detail?blog=${blog._id}`}>
        <a>{blog.title}</a>
      </Link>
      <time>{blog.time}</time>
    </li>
  ));

  return (
    <div className="recent-post widget">
      <h3>Bài viết liên quan</h3>
      <ul>{listRecentPost}</ul>
    </div>
  );
};
export default WidgetRecentPost;
