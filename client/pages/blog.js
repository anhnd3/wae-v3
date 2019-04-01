import React from "react";

import axios from "axios";

import Head from "../components/head";
import Nav from "../components/nav";
import Author from "../components/widget_author";
import RecentPost from "../components/widget_recent_post";
import Search from "../components/search";
import ArticleBlog from "../components/article_blog";
import Footer from "../components/footer";

const renderListBlog = blogs => {
  const articleBlog = blogs.map(blog => {
    return (
      <ArticleBlog
        key={blog._id}
        time="0.1s"
        title={blog.title}
        link="/blog_detail"
        blog={blog._id}
        image={blog.thumbnail}
        date={new Date(blog.time).toLocaleDateString()}
        author={blog.author}
        desc={blog.desc}
      />
    );
  });
  return articleBlog;
};
const renderNavBlog = (page, blogs) => {
  let nav = "",
    navPre,
    navNext;

  if (page > 2) {
    navPre = (
      <li className="previous">
        <Link href={`/?p=${page - 1}`}>
          <span aria-hidden="true">&larr;</span> Older
        </Link>
      </li>
    );
  } else if (page > 1) {
    navPre = (
      <li className="previous">
        <Link href={`/`}>
          <span aria-hidden="true">&larr;</span> Older
        </Link>
      </li>
    );
  } else {
    navPre = "";
  }

  if (blogs && blogs.length == 3) {
    <li className="next">
      <Link href={`/?p=${page + 1}`}>
        Newer <span aria-hidden="true">&rarr;</span>
      </Link>
    </li>;
  } else {
    navNext = "";
  }

  nav = (
    <nav aria-label="Blog Navigator">
      <ul className="pager">
        {navPre}
        {navNext}
      </ul>
    </nav>
  );
  return nav;
};

const Blog = props => {
  const selectedCategory = props.config.categories.find(category => {
    return category._id === props.category;
  });

  console.log(selectedCategory);

  return (
    <div>
      <Head title={selectedCategory.name} />
      <Nav categories={props.config.categories} />
      <section className="global-page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h2>{selectedCategory.name}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog-full-width">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="sidebar">
                <Search />
                <Author
                  name={props.config.blogAboutAuthor}
                  avatar={props.config.blogAboutAvatar}
                  thumbnail={props.config.blogAboutThumbnail}
                  description={props.config.blogAboutDescription}
                />
                <RecentPost recentPost={props.recentPost} />
              </div>
            </div>

            <div className="col-md-8">
              <h3>{selectedCategory.description}</h3>
              {renderListBlog(props.blogs)}
              {renderNavBlog(props.blogs)}
            </div>
          </div>
        </div>
      </section>

      <Footer
        facebook={props.config.config.homeFacebook}
        linkedin={props.config.config.homeLinkedIn}
      />
      <style jsx>{`
        .sidebar {
          padding-top: 20px;
        }
      `}</style>
    </div>
  );
};

Blog.getInitialProps = async ({ query }) => {
  // query main blogs
  let page = query.page || 1;
  let category = query.category || "";

  console.log(page, category);

  if (category) {
    const resConfig = await axios.get(`http://wae.vn/api/config`);

    const resBlog = await axios.get(
      `http://wae.vn/api/mainsite/blog?category=${category}&page=${page}&limit=3`
    );

    // query recent post
    const resRecentPost = await axios.get(
      `http://wae.vn/api/mainsite/blog?category=${category}&limit=20`
    );

    return {
      category: category,
      config: resConfig.data.data,
      blogs: resBlog.data.data,
      recentPost: resRecentPost.data.data
    };
  }

  return {};
};
export default Blog;
