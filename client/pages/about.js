import React from "react";

import axios from "axios";

import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";

const renderListHighlightBlog = blogs => {
  if (blogs.length <= 0) {
    return "";
  }
  const htmlHighlightBlog = blogs.map(blog => {
    console.log(blog);
    return (
      <div className="col-sm-4 col-xs-12" key={blog._id}>
        <figure
          className="wow fadeInLeft animated portfolio-item"
          data-wow-duration="500ms"
          data-wow-delay="0ms"
        >
          <div className="img-wrapper">
            <img
              src={blog.thumbnail}
              className="img-responsive"
              alt={blog.title}
            />
          </div>
          <figcaption>
            <h4>
              <a href="">{blog.title}</a>
            </h4>
            <p>{blog.description}</p>
          </figcaption>
        </figure>
      </div>
    );
  });

  return htmlHighlightBlog;
};

const About = props => {
  const aboutMeContent = (
    <div
      dangerouslySetInnerHTML={{
        __html: props.config.homeAboutMeContent
      }}
    />
  );
  return (
    <div>
      <Head title="About" />
      <Nav categories={props.categories} />
      <section id="hero-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="block wow fadeInUp" data-wow-delay=".3s">
                {/* <!-- Slider --> */}
                <section className="cd-intro">
                  <h1
                    className="wow fadeInUp animated cd-headline slide"
                    data-wow-delay=".4s"
                  >
                    <span>{props.config.homeTitle}</span>
                  </h1>
                </section>
                {/* <!-- cd-intro --> */}
                {/* <!-- /.slider --> */}
                <h2 className="wow fadeInUp animated" data-wow-delay=".6s">
                  {props.config.homeDescription}
                </h2>
                <a
                  className="btn-lines dark light wow fadeInUp animated smooth-scroll btn btn-default btn-green"
                  data-wow-delay=".9s"
                  href="#works"
                  data-section="#works"
                >
                  View Works
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <div
                className="block wow fadeInLeft"
                data-wow-delay=".3s"
                data-wow-duration="500ms"
              >
                <h2>Về chúng tôi</h2>
                {aboutMeContent}
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div
                className="block wow fadeInRight"
                data-wow-delay=".3s"
                data-wow-duration="500ms"
              >
                <img
                  src={props.config.homeAboutMeThumbnail}
                  alt="about images"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="works" className="works">
        <div className="container">
          <div className="section-heading">
            <h1 className="title wow fadeInDown" data-wow-delay=".3s">
              {props.config.homeLatestWorksTitle}
            </h1>
            <p className="wow fadeInDown" data-wow-delay=".5s">
              {props.config.homeLatestWorksDescription}
            </p>
          </div>
          <div className="row">
            {renderListHighlightBlog(props.blogsHighlight)}
          </div>
        </div>
      </section>
      <Footer
        facebook={props.config.homeFacebook}
        linkedin={props.config.homeLinkedIn}
      />
      <style jsx>{`
        #hero-area {
          background: url(${props.config.homeThumbnail}) no-repeat 50%;
        }
      `}</style>
    </div>
  );
};

About.getInitialProps = async () => {
  const resConfig = await axios.get(`http://wae.vn/api/config`);

  return resConfig.data.data;
};

export default About;
