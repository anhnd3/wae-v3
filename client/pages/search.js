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
  if (blogs.length === 0) {
    return <div>Không tìm thấy bài viết nào</div>;
  }
  const articleBlog = blogs.map(blog => {
    return (
      <ArticleBlog
        key={blog._id}
        time="0.1s"
        title={blog.title}
        link="/blog_detail"
        blog={blog._id}
        image={blog.thumbnail}
        date={new Date(blog.createdTime).toLocaleDateString("de-DE")}
        author={blog.author}
        desc={blog.description}
      />
    );
  });
  return articleBlog;
};

const SearchPage = props => {
  return (
    <div>
      <Head title={`Search by ${props.keywords}`} />
      <Nav categories={props.config.categories} />
      <section className="global-page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h2>Tìm kiếm: {props.keywords}</h2>
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
                  name={props.config.config.blogAboutAuthor}
                  avatar={props.config.config.blogAboutAvatar}
                  thumbnail={props.config.config.blogAboutThumbnail}
                  description={props.config.config.blogAboutDescription}
                />
                <RecentPost recentPost={props.recentPost} />
              </div>
            </div>

            <div className="col-md-8">
              <h3>Từ khoá: "{props.keywords}"</h3>
              {renderListBlog(props.blogs)}
              {/* {renderNavBlog(props.blogs)} */}
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

SearchPage.getInitialProps = async ({ query }) => {
  // query main blogs
  let keywords = query.keywords || "";

  const resConfig = await axios.get(`http://wae.vn/api/config`);

  const resBlogSearch = await axios.get(
    `http://wae.vn/api/mainsite/blogsearch?keywords=${keywords}`
  );

  return {
    keywords: keywords,
    config: resConfig.data.data,
    blogs: resBlogSearch.data.data
  };
};
export default SearchPage;
