import React from "react";

import axios from "axios";

import Head from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";

const BlogDetail = props => (
  <div>
    <Head title="" />
    <Nav categories={props.categories} />

    <section className="global-page-header">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block">
              <h2>Demo</h2>
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
                src="//wae.vn/static/timer/images/blog/post-1.jpg"
              />
            </div>
            <div className="post-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                sit expedita, iusto repellendus cumque, officia architecto
                consequatur illo fuga eum sed ut autem eos voluptas. Nemo, a,
                rem! Atque quisquam aperiam eaque tenetur autem, soluta itaque
                omnis. Minus nesciunt, sint, animi illum quo ab voluptate esse
                delectus unde maiores iure, quasi a suscipit ipsam aliquid
                voluptatem. Perspiciatis eveniet, pariatur illum aut cum dolor
                neque consequatur error aliquid facilis in quasi temporibus
                assumenda tempore, doloremque autem saepe enim nihil. Voluptates
                asperiores ullam voluptate quas similique ratione quia hic, eum
                distinctio laboriosam, consectetur tempora voluptatibus optio
                natus cumque est necessitatibus dolore alias.
              </p>
              <blockquote>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                alias ut totam labore, rerum soluta harum vitae pariatur, optio,
                ad dolore, nihil eligendi nesciunt repellat esse provident
                sapiente. Repellendus, minus!
              </blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veritatis expedita repellendus laboriosam aliquid. Neque
                doloribus ea, id reprehenderit alias saepe debitis eligendi
                molestias odit, nesciunt rem. Dolorem saepe, provident dolore
                nesciunt laudantium nostrum enim natus veritatis harum maxime et
                iure ratione, nulla. Minus excepturi commodi tempore voluptate.
                Blanditiis similique dolor asperiores ex excepturi perspiciatis,
                dolores id esse. Voluptate beatae nesciunt cum esse ratione
                officiis necessitatibus blanditiis ea, laboriosam fugit vero
                maxime? Voluptatum illo dolorum autem pariatur quisquam.
                Voluptates soluta culpa necessitatibus veritatis tempora
                incidunt doloribus placeat repellat et facilis eum sapiente
                fugit numquam aut, laboriosam aspernatur, esse, magnam excepturi
                repudiandae amet voluptas nulla quidem. Veritatis nisi
                consequuntur saepe qui quisquam dignissimos assumenda, iusto
                odio. Dignissimos reprehenderit esse iusto cupiditate nisi enim,
                animi similique itaque, perspiciatis error qui. Aperiam,
                architecto provident.
              </p>
              <ol>
                <li>Ipsum dolor sit amet.</li>
                <li>Lorem sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor amet.</li>
              </ol>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellendus nostrum consectetur voluptatibus, odio ea ab
                distinctio, nulla asperiores facere sequi dolorum molestiae
                magni sed velit officia rerum illo necessitatibus consequatur
                maiores magnam possimus voluptas suscipit praesentium iste!
                Praesentium, modi, illum. Sint quis eos expedita porro
                voluptatum reiciendis minus vitae atque deleniti eligendi nulla,
                dolorem adipisci, assumenda sunt modi suscipit inventore hic
                nostrum veniam, ea accusantium quisquam! Ipsum odio, ducimus
                magnam nam ad quaerat soluta, ab laudantium beatae eius iusto
                fugit blanditiis laboriosam cupiditate dolor aut nulla a quam
                dolores? Unde, sunt, explicabo sapiente quos reiciendis iste
                fuga atque esse voluptatem.
              </p>
            </div>
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

BlogDetail.getInitialProps = async ({ query }) => {
  const resConfig = await axios.get(`http://wae.vn/api/config`);
  return resConfig.data.data;
};

export default BlogDetail;
