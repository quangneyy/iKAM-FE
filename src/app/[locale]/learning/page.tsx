import styles from "./page.module.scss";

export default async function Learning() {
    return (
        <div className={styles["page-learning"]}>
            <section className={styles["knowledge-center"]}>
                <div className={styles["knowledge-center__overlay"]}>
                    <div className={styles["knowledge-center__content"]}>
                        <h2>Knowledge Center</h2>
                        <p>Learn about electricity basics, measuring instrument usage, applications, and watch our webinars
                            on
                            demand.</p>
                    </div>
                </div>
            </section>

            <div className={styles["content"]}>
                <section className={styles["product-categories"]}>
                    <h2>Basic Solution For Engineers</h2>
                    <div className={styles["category-grid"]}>
                        <a href="/learning/electricity" className={styles["category-item"]}>
                            <img src="https://www.hioki.com/themes/hioki/images/global/learning/index-img-01.png"
                                alt="Data Acquisition"
                            />
                            <div className={styles["category-text"]}>
                                Basics of Electricity
                                <span className={styles["arrow"]}>›</span>
                            </div>
                        </a>
                        <a href="/learning/electricity" className={styles["category-item"]}>
                            <img src="https://www.hioki.com/themes/hioki/images/global/learning/index-img-02.png"
                                alt="Multichannel Data Loggers"
                            />
                            <div className={styles["category-text"]}>
                                Basic Measurement Methods
                                <span className={styles["arrow"]}>›</span>
                            </div>
                        </a>
                        <a href="/learning/electricity" className={styles["category-item"]}>
                            <img src="https://www.hioki.com/themes/hioki/images/global/learning/index-img-03.png"
                                alt="Compact Data Loggers"
                            />
                            <div className={styles["category-text"]}>
                                Test Tools
                                <span className={styles["arrow"]}>›</span>
                            </div>
                        </a>
                        <a href="/learning/electricity" className={styles["category-item"]}>
                            <img src="https://www.hioki.com/themes/hioki/images/global/learning/index-img-04.png"
                                alt="LCR Meters"
                            />
                            <div className={styles["category-text"]}>
                                How to Use Test Tools
                                <span className={styles["arrow"]}>›</span>
                            </div>
                        </a>
                        <a href="/learning/electricity" className={styles["category-item"]}>
                            <img src="https://www.hioki.com/themes/hioki/images/global/learning/index-img-05.png"
                                alt="LCR Meters"
                            />
                            <div className={styles["category-text"]}>
                                How to Test Common Devices
                                <span className={styles["arrow"]}>›</span>
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}
