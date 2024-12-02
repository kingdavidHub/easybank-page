import styles from "./Footer.module.css";
import classNames from "classnames";
import EasyBankLogo from "../../assets/logo-white.svg";
import facebookIcon from "../../assets/icon-facebook.svg";

const Footer = () => {
  return (
    <footer className="fWrapper">
      <div
        className={classNames(
          "paddings",
          "innerWidth",
          "flexColCenter",
          styles.fContainer
        )}
      >
        <div className="flexColCenter">
          <img src={EasyBankLogo} alt="Easy Bank Logo" />
          <div className={classNames("flexCenter", styles.socialLinks)}>
            <button>
              <a href="#">
                <img src={facebookIcon} alt="facebook icon" />
              </a>
            </button>
            <button>
              <a href="#">
                <img src={facebookIcon} alt="facebook icon" className={classNames(styles.links)} />
              </a>
            </button>
            <button>
              <a href="#">
                <img src={facebookIcon} alt="facebook icon" />
              </a>
            </button>
            <button>
              <a href="#">
                <img src={facebookIcon} alt="facebook icon" />
              </a>
            </button>
            <button>
              <a href="#">
                <img src={facebookIcon} alt="facebook icon" />
              </a>
            </button>
          </div>
        </div>

        <div className="flexColCenter">
          <span>
            <a href="#">About</a>
          </span>
          <span>
            <a href="#">Contact</a>
          </span>
          <span>
            <a href="#">Blog</a>
          </span>
        </div>

        <div className="flexColCenter">
          <span>
            <a href="#">Careers</a>
          </span>

          <span>
            <a href="#">Support</a>
          </span>

          <span>
            <a href="#">Privacy Policy</a>
          </span>
        </div>

        <div className="flexColCenter">
          <button className="buttons">Request Invite</button>
          <span className="secondaryText">&copy; Easybank. All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
