import styles from "./Hero.module.css";
import phoneImg from "../../assets/image-mockups.png";
import heroMobileImg from "../../assets/bg-intro-mobile.svg";
import heroDesktopImg from "../../assets/bg-intro-desktop.svg";

const Hero = () => {
  return (
    <section className="hWrapper">
      <div className={`flexColCenter innerWidth ${styles.hContainer}`}>
        {/* Image side */}
        <div className={`${styles.introContainer}`}>
          <div className={`${styles.heroOverlay}`} />
          {/* <div className={styles.phoneOverlay}>
            <img src={phoneImg} alt="phone"  />
          </div> */}
        </div>

        {/* Content side */}
        <div className={`paddings flexColCenter ${styles.contentSide}`}>
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
