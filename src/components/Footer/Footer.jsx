import styles from "./Footer.module.css";
import classNames from "classnames";
import { ReactSVG } from "react-svg";
import EasyBankLogo from "../../assets/logo-white.svg";
import FacebookIcon from "../../assets/icon-facebook.svg";
import TwitterIcon from "../../assets/icon-twitter.svg";
import PinterestIcon from "../../assets/icon-pinterest.svg";
import YoutubeIcon from "../../assets/icon-youtube.svg";
import InstagramIcon from "../../assets/icon-instagram.svg";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer id="contact" className="fWrapper">
      <div
        className={classNames(
          "paddings",
          "innerWidth",
          "flexColCenter",
          styles.fContainer
        )}
      >
        <div className="flexColCenter">
          <Link to="home" smooth={true} duration={500}>
            <img src={EasyBankLogo} alt="Easy Bank Logo" />
          </Link>
          <div className={classNames("flexCenter", styles.socialLinks)}>
            <a href="#">
              <ReactSVG src={FacebookIcon} />
            </a>
            <a href="#">
              <ReactSVG src={YoutubeIcon} />
            </a>
            <a href="#">
              <ReactSVG src={TwitterIcon} />
            </a>
            <a href="#">
              <ReactSVG src={PinterestIcon} />
            </a>
            <a href="#">
              <ReactSVG src={InstagramIcon} />
            </a>
          </div>
        </div>

        <div className="flexColCenter">
          <span>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </span>
          <span>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </span>
          <span>
            <Link to="blog" smooth={true} duration={500}>
              Blog
            </Link>
          </span>
        </div>

        <div className="flexColCenter">
          <span>
            <Link to="careers" smooth={true} duration={500}>
              Careers
            </Link>
          </span>

          <span>
            <a href="#">Support</a>
          </span>

          <span>
            <a href="#">Privacy Policy</a>
          </span>
        </div>

        <div className="flexColCenter">
          <button type="button" className="buttons">
            Request Invite
          </button>
          <span className="secondaryText">
            &copy; Easybank. All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
