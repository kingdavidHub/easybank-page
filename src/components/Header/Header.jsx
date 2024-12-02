import styles from "./Header.module.css";
import EasyBankLogo from "../../assets/logo.svg";
import HamMenu from "../../assets/icon-hamburger.svg";
import HamClose from "../../assets/icon-close.svg";
import { useState } from "react";
import classNames from "classnames";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const getNavStyles = () => {
    return document.documentElement.clientWidth < 768 ? { display: "none" } : {};
  };

  return (
    <header>
      <div className={styles.nWrapper}>
        <div className={classNames("innerWidth", "flexCenter", "paddings", styles.nContainer)}>
          <img src={EasyBankLogo} alt="EasyBank Logo" />

          {/* Desktop styles */}
          <nav>
            <ul>
              <div className={classNames("flexCenter", styles.desktopMenu)}>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
              </div>
            </ul>

            {/* Mobile styles */}
            <div
              className={classNames("paddings", styles.mobileMenu, {
                [styles.active]: isOpen,
                [styles.closed]: !isOpen,
              })}
              style={getNavStyles()}
            >
              <ul className="flexColCenter">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
              </ul>
            </div>
          </nav>

          <button className="buttons">Request Invite</button>

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
