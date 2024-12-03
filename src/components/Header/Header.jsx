import styles from "./Header.module.css";
import EasyBankLogo from "../../assets/logo.svg";
import HamMenu from "../../assets/icon-hamburger.svg";
import HamClose from "../../assets/icon-close.svg";
import { useState } from "react";
import classNames from "classnames";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="home">
      <div className={styles.nWrapper}>
        <div
          className={classNames(
            "innerWidth",
            "flexCenter",
            "paddings",
            styles.nContainer
          )}
        >
          <img src={EasyBankLogo} alt="EasyBank Logo" />

          {/* Desktop styles */}
          <nav>
            <ul>
              <div className={classNames("flexCenter", styles.desktopMenu)}>
                <li>
                  <Link to="home" smooth={true} duration={500}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="about" smooth={true} duration={500}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="contact" smooth={true} duration={500}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="blog" smooth={true} duration={500}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="careers" smooth={true} duration={500}>
                    Careers
                  </Link>
                </li>
              </div>
            </ul>

            {/* Mobile styles */}
            <div
              className={classNames("paddings", styles.mobileMenu, {
                [styles.active]: isOpen,
                [styles.closed]: !isOpen,
              })}
            >
              <ul className="flexColCenter">
                <li>
                  <Link to="home" smooth={true} duration={500}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="about" smooth={true} duration={500}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="contact" smooth={true} duration={500}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="blog" smooth={true} duration={500}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="careers" smooth={true} duration={500}>
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <button type="button" className="buttons">
            Request Invite
          </button>

          <div className={styles.nIcon}>
            <button onClick={() => setIsOpen((prev) => !prev)}>
              {isOpen ? (
                <img src={HamClose} alt="Close Menu" width={20} />
              ) : (
                <img src={HamMenu} alt="Open Menu" width={40} />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
