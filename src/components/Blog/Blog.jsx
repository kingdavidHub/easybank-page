import styles from "./Blog.module.css";
import classNames from "classnames";
import ArticleImg1 from "../../assets/image-currency.jpg";
import ArticleImg2 from "../../assets/image-restaurant.jpg";
import ArticleImg3 from "../../assets/image-plane.jpg";
import ArticleImg4 from "../../assets/image-confetti.jpg";

const Blog = () => {
  return (
    <section id="blog" className="bWrapper">
      <div className={classNames("paddings", "innerWidth", styles.bContainer)}>
        <h3 className="primaryText">Latest Articles</h3>

        <div className="flexColCenter">
          <div className={classNames(styles.bCard)}>
            <div className={classNames("innerWidth", styles.imgContainer)}>
              <img src={ArticleImg1} alt="currency" />
            </div>

            <div
              className={classNames(
                "flexColStart",
                "paddings",
                styles.bDetails
              )}
            >
              <span className="secondaryText">By Claire Robinson</span>
              <h3 className="primaryText">
                <a href="#">Receive money in any currency with no fees</a>
              </h3>
              <p className="secondaryText">
                The world IS getting smaller and becoming more mobile, So why
                should you be forced to only recev.•e money an a Single
              </p>
            </div>
          </div>
          <div className={classNames(styles.bCard)}>
            <div className={classNames("innerWidth", styles.imgContainer)}>
              <img src={ArticleImg2} alt="restaurant" />
            </div>

            <div
              className={classNames(
                "flexColStart",
                "paddings",
                styles.bDetails
              )}
            >
              <span className="secondaryText">By Wilson Hutton</span>
              <h3 className="primaryText">
                <a href="#">Treat yourself without worrying about money</a>
              </h3>
              <p className="secondaryText">
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you
              </p>
            </div>
          </div>
          <div className={classNames(styles.bCard)}>
            <div className={classNames("innerWidth", styles.imgContainer)}>
              <img src={ArticleImg3} alt="plane" />
            </div>

            <div
              className={classNames(
                "flexColStart",
                "paddings",
                styles.bDetails
              )}
            >
              <span className="secondaryText">By Wilson Hutton</span>
              <h3 className="primaryText">
                <a href="#">Take your Easybank card wherever you go</a>
              </h3>
              <p className="secondaryText">
                We want you to envoy your travels. This es why we don&apos;t
                charge any fees on purchases while you&apos;re abroad.
                We&apos;ll even show you
              </p>
            </div>
          </div>
          <div className={classNames(styles.bCard)}>
            <div className={classNames("innerWidth", styles.imgContainer)}>
              <img src={ArticleImg4} alt="currency" />
            </div>

            <div
              className={classNames(
                "flexColStart",
                "paddings",
                styles.bDetails
              )}
            >
              <span className="secondaryText">By Claire Robinson</span>
              <h3 className="primaryText">
                <a href="#">Our invite-only Beta accounts are now live!</a>
              </h3>
              <p className="secondaryText">
                After a lot ot hard work by the whole team. we&apos;re excited
                to launch our closed beta. It&apos;s easy to request an invite
                through the Site
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
