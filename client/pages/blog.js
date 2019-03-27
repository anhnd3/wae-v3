import React from "react";
import { withRouter } from "next/router";

import Head from "../components/head";
import Nav from "../components/nav";
import Author from "../components/widget_author";
import RecentPost from "../components/widget_recent_post";
import Search from "../components/search";
import ArticleBlog from "../components/article_blog";

const Blog = withRouter(props => (
  <div>
    <Head title={props.router.query.category} />
    <Nav />
    <section className="global-page-header">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block">
              <h2>{props.router.query.category}</h2>
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
              <Author />
              <RecentPost />
            </div>
          </div>

          <div className="col-md-8">
            <h3>Tất cả bài viết về Arduino</h3>
            <ArticleBlog
              time="0.3s"
              title="Space shouldn’t be the final frontier"
              link="/blog_detail"
              blog="2121"
              image="//wae.vn/static/timer/images/blog/post-1.jpg"
              date="Dec 11, 2020"
              author="Admin"
              desc="Ultrices posuere cubilia curae curabitur sit amet tortor ut
                  massa commodo. Vestibulum consectetur euismod malesuada
                  tincidunt cum. Sed ullamcorper dignissim consectetur ut
                  tincidunt eros sed sapien consectetur dictum. Pellentesques
                  sed volutpat ante, cursus port. Praesent mi magna, penatibus
                  et magniseget dis parturient montes sed quia consequuntur
                  magni dolores eos qui ratione."
            />
            <ArticleBlog
              time="0.4s"
              title="Space shouldn’t be the final frontier"
              link="/blog_detail"
              blog="3232"
              image="//wae.vn/static/timer/images/blog/post-2.jpg"
              date="Dec 11, 2020"
              author="Admin"
              desc="Ultrices posuere cubilia curae curabitur sit amet tortor ut
                  massa commodo. Vestibulum consectetur euismod malesuada
                  tincidunt cum. Sed ullamcorper dignissim consectetur ut
                  tincidunt eros sed sapien consectetur dictum. Pellentesques
                  sed volutpat ante, cursus port. Praesent mi magna, penatibus
                  et magniseget dis parturient montes sed quia consequuntur
                  magni dolores eos qui ratione."
            />
            <ArticleBlog
              time="0.5s"
              title="Space shouldn’t be the final frontier"
              link="/blog_detail"
              blog="4242"
              image="//wae.vn/static/timer/images/blog/post-3.jpg"
              date="Dec 11, 2020"
              author="Admin"
              desc="Ultrices posuere cubilia curae curabitur sit amet tortor ut
                  massa commodo. Vestibulum consectetur euismod malesuada
                  tincidunt cum. Sed ullamcorper dignissim consectetur ut
                  tincidunt eros sed sapien consectetur dictum. Pellentesques
                  sed volutpat ante, cursus port. Praesent mi magna, penatibus
                  et magniseget dis parturient montes sed quia consequuntur
                  magni dolores eos qui ratione."
            />

            <nav aria-label="...">
              <ul className="pager">
                <li className="previous">
                  <a href="#">
                    <span aria-hidden="true">&larr;</span> Older
                  </a>
                </li>
                <li className="next">
                  <a href="#">
                    Newer <span aria-hidden="true">&rarr;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
    <style jsx>{`
      .sidebar {
        padding-top: 20px;
      }
    `}</style>
  </div>
));

Blog.getInitialProps = ({ pathname, query }) => ({
  custom: "custom" // pass some custom props to component
});

export default Blog;
