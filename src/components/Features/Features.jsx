import styles from "./Features.module.css";
import onlineBanking from "../../assets/icon-online.svg";
import budgetBanking from "../../assets/icon-budgeting.svg";
import onboardingBanking from "../../assets/icon-onboarding.svg";
import apiBanking from "../../assets/icon-api.svg";
import classNames from "classnames";

const Features = () => {
  return (
    <section id="about" className="fWrapper">
      <div
        className={classNames("flexColCenter", "paddings", "innerWidth", styles.fContainer)}
      >
        <div className={classNames("flexColCenter", styles.firstSide)}>
          <h2 className="primaryText">Why choose Easybank?</h2>
          <h3 className="secondaryText">
            We leverage Open Banking to turn your bank account into your financial hub.
            Control your finances like never before.
          </h3>
        </div>

        <div className={classNames("flexColCenter", styles.secondSide)}>
          <div className={classNames("flexColCenter", styles.card)}>
            <img src={onlineBanking} alt="icon-online" />
            <h3 className="primaryText">Online Banking</h3>
            <h4 className="secondaryText">
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </h4>
          </div>
          <div className={classNames("flexColCenter", styles.card)}>
            <img src={budgetBanking} alt="icon-online" />
            <h3 className="primaryText">Simple Budgeting</h3>
            <h4 className="secondaryText">
              See exactly where your money goes each month. Receive
              notifications when you&apos;re close to hitting your limits.
            </h4>
          </div>
          <div className={classNames("flexColCenter", styles.card)}>
            <img src={onboardingBanking} alt="icon-online" />
            <h3 className="primaryText">Fast Onboarding</h3>
            <h4 className="secondaryText">
              We don&apos;t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </h4>
          </div>
          <div className={classNames("flexColCenter", styles.card)}>
            <img src={apiBanking} alt="icon-online" />
            <h3 className="primaryText">Open API</h3>
            <h4 className="secondaryText">
              Manage your savings, investments, pension, and much more from one
              account, Tracking your money has never been easier
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
