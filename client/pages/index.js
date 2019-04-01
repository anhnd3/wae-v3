import React from "react";

import axios from "axios";

import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import Author from "../components/widget_author";
import RecentPost from "../components/widget_recent_post";
import Search from "../components/search";
import ArticleBlog from "../components/article_blog";
import Footer from "../components/footer";

const renderListCategory = categories => {
  const liCategories = categories.map(category => {
    return (
      <li key={category._id}>
        <Link
          href={`/blog?category=${category._id}`}
          as={`/blog/${category._id}`}
        >
          <a>{category.name}</a>
        </Link>
      </li>
    );
  });
  return liCategories;
};

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

const Home = props => {
  return (
    <div>
      <Head title="Home" />
      <Nav categories={props.config.categories} />
      <section className="global-page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h2>Bài viết</h2>
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

                <div className="categories widget">
                  <h3 className="widget-head">Chủ đề</h3>
                  <ul>{renderListCategory(props.config.categories)}</ul>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              {renderListBlog(props.blogs)}
              {renderNavBlog(props.blogs)}
            </div>
          </div>
        </div>
      </section>

      <Footer
        facebook={props.config.homeFacebook}
        linkedin={props.config.homeLinkedIn}
      />
    </div>
  );
};

Home.getInitialProps = async ({ query }) => {
  // query main blogs
  let page = query.page || 1;

  const resHome = await axios.get(`http://wae.vn/api/config`);

  const resBlog = await axios.get(
    `http://wae.vn/api/mainsite/blog?page=${page}`
  );

  // query recent post
  const resRecentPost = await axios.get("http://wae.vn/api/mainsite/blog");

  return {
    config: resHome.data.data,
    blogs: resBlog.data.data,
    recentPost: resRecentPost.data.data
  };
};

export default Home;
