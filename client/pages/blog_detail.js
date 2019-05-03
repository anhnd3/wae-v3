import React from "react";

import axios from "axios";

import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";

const BlogDetail = props => {
  return (
    <div>
      <Head title="" />
      <Nav categories={props.config.categories} />

      <section className="global-page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <h2>{props.blog.title}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="single-post">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="post-img">
                <img
                  className="img-responsive"
                  alt=""
                  src={props.blog.thumbnail}
                />
              </div>
              <div
                className="post-content"
                dangerouslySetInnerHTML={{
                  __html: props.blog.content
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer
        facebook={props.config.config.homeFacebook}
        linkedin={props.config.config.homeLinkedIn}
      />
    </div>
  );
};

BlogDetail.getInitialProps = async ({ query }) => {
  const resConfig = await axios.get(`http://wae.vn/api/config`);

  let blog = query.blog || "";

  const resBlog = await axios.get(`http://wae.vn/api/blogs/${blog}`);
  console.log(resBlog);

  return {
    config: resConfig.data.data,
    blog: resBlog.data.data
  };
};

export default BlogDetail;
