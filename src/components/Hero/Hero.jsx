import styles from "./Hero.module.css";
import phoneImg from "../../assets/image-mockups.png";
import heroMobileImg from "../../assets/bg-intro-mobile.svg";
import heroDesktopImg from "../../assets/bg-intro-desktop.svg";
import classNames from "classnames";
import { useEffect, useState } from "react";

const Hero = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const currentWidth = () => setWidth(window.innerWidth);

    window.addEventListener("resize", currentWidth);

    return () => {
      window.removeEventListener("resize", currentWidth);
    };
  }, []);

  return (
    <section className="hWrapper">
      <div
        className={classNames("flexColCenter", "innerWidth", styles.hContainer)}
      >
        <img src={phoneImg} alt="phone" className={styles.phoneOverlay} />
        {/* Image side */}
        <div className={classNames(styles.introContainer)}>
          <img
            src={width < 768 ? heroMobileImg : heroDesktopImg}
            alt="Hero overlay"
          />
        </div>

        {/* Content side */}
        <div
          className={classNames(
            "paddings",
            "flexColCenter",
            styles.contentSide
          )}
        >
          <h1 className="primaryText">
            Next generation <br />
            digital banking
          </h1>
          <h2 className="secondaryText">
            Take your financial freedom life online. Your Easybank account will
            be a one-stop-shop for spending, saving budgeting, investing, and
            much more.
          </h2>

          <button className="buttons">Request Invite</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
