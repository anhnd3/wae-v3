import React from "react";
import NextHead from "next/head";
import { string } from "prop-types";

const defaultDescription = "";
const defaultOGURL = "";
const defaultOGImage = "";

const Head = props => (
  <NextHead>
    {/* <!-- Basic Page Needs
        ================================================== --> */}
    <meta charset="utf-8" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="icon" type="image/png" href="images/favicon.png" />
    <title>{props.title}</title>
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <meta name="author" content="" />
    {/* <!-- Mobile Specific Metas
        ================================================== --> */}
    <meta name="format-detection" content="telephone=no" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/* <!-- Template CSS Files
        ================================================== --> */}
    {/* <!-- Twitter Bootstrs CSS --> */}
    <link rel="stylesheet" href="//wae.vn/static/timer/css/bootstrap.min.css" />
    {/* <!-- Ionicons Fonts Css --> */}
    <link rel="stylesheet" href="//wae.vn/static/timer/css/ionicons.min.css" />
    {/* <!-- animate css --> */}
    <link rel="stylesheet" href="//wae.vn/static/timer/css/animate.css" />
    {/* <!-- Hero area slider css--> */}
    <link rel="stylesheet" href="//wae.vn/static/timer/css/slider.css" />
    {/* <!-- owl craousel css --> */}
    <link rel="stylesheet" href="//wae.vn/static/timer/css/owl.carousel.css" />
    <link rel="stylesheet" href="//wae.vn/static/timer/css/owl.theme.css" />
    <link
      rel="stylesheet"
      href="//wae.vn/static/timer/css/jquery.fancybox.css"
    />
    {/* <!-- template main css file --> */}
    <link rel="stylesheet" href="//wae.vn/static/timer/css/main.css" />
    {/* <!-- responsive css --> */}
    <link rel="stylesheet" href="//wae.vn/static/timer/css/responsive.css" />
    {/* <!-- Template Javascript Files
        ================================================== --> */}
    {/* <!-- modernizr js --> */}
    <script src="//wae.vn/static/timer/js/vendor/modernizr-2.6.2.min.js" />
    {/* <!-- jquery --> */}
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" />
    {/* <!-- owl carouserl js --> */}
    <script src="//wae.vn/static/timer/js/owl.carousel.min.js" />
    {/* <!-- bootstrap js --> */}
    <script src="//wae.vn/static/timer/js/bootstrap.min.js" />
    {/* <!-- wow js --> */}
    <script src="//wae.vn/static/timer/js/wow.min.js" />
    {/* <!-- slider js --> */}
    <script src="//wae.vn/static/timer/js/slider.js" />
    <script src="//wae.vn/static/timer/js/jquery.fancybox.js" />
    {/* <!-- template main js --> */}
    <script src="//wae.vn/static/timer/js/main.js" />
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
};

export default Head;
