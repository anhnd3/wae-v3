import React from "react";

const Footer = props => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="col-md-8">
          <p className="copyright">
            Copyright: <span>2019</span> . Developed by Anhnd
          </p>
        </div>
        <div className="col-md-4">
          {/* <!-- Social Media --> */}
          <ul className="social">
            <li>
              <a href={props.facebook} target="_blank" className="Facebook">
                <i className="ion-social-facebook" />
              </a>
            </li>
            <li>
              <a href={props.linkedin} target="_blank" className="Linkedin">
                <i className="ion-social-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
