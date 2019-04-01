import React from "react";
import Link from "next/link";

const Nav = props => {
  let listCategory = "";
  if (props.categories && props.categories.length > 0) {
    listCategory = props.categories.map(category => (
      <li key={`nav-${category._id}`}>
        <Link href={`/blog?category=${category._id}`}>
          <a>{category.name}</a>
        </Link>
      </li>
    ));
  }

  return (
    // <!--
    //       ==================================================
    //       Header Section Start
    //       ================================================== -->
    <header id="top-bar" className="navbar-fixed-top animated-header">
      <div className="container">
        <div className="navbar-header">
          {/* <!-- responsive nav button --> */}
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          {/* <!-- /responsive nav button --> */}

          {/* <!-- logo --> */}
          <div className="navbar-brand">
            <Link href="/">
              <a>
                <img src="//wae.vn/static/timer/images/logo.png" alt="logo" />
              </a>
            </Link>
          </div>
          {/* <!-- /logo --> */}
        </div>
        {/* <!-- main menu --> */}
        <nav
          className="collapse navbar-collapse navbar-right"
          role="navigation"
        >
          <div className="main-menu">
            <ul className="nav navbar-nav navbar-right">
              {listCategory}
              <li>
                <Link href="/about">
                  <a>Về chúng tôi</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* <!-- /main nav --> */}
      </div>
    </header>
  );
};

export default Nav;
