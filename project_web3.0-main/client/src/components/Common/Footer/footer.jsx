import React from "react";
import "./styles.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer">
      <h2 className="logo" onClick={() => topFunction()}>
        Crypto MASK<span>.</span>
      </h2>
      <div className="social-links">
        <a href="https://www.facebook.com/profile.php?id=100085217108669">
          <FacebookIcon className="social-link" />
        </a>
        <a href="mailto:satyamcgt2004@gmail.com">
          <EmailIcon className="social-link" />
        </a>
        <a href="https://x.com/satyam1917?t=VCXLGBFR6byQ3iL71bNY-g&s=08">
          <TwitterIcon className="social-link" />
        </a>
        <a href="https://www.instagram.com/satyam__1917/">
          <InstagramIcon className="social-link" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
