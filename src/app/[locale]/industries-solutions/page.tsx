'use client';

import styles from "./page.module.scss";
import { useI18n } from "../../../components/i18n/SimpleI18nProvider";

export default async function IndustriesSolutions() {
    const { t } = useI18n();

    return (
        <div className={styles["industries-solutions-page"]}>
            <section className={styles["industries-hero"]}>
                <div className={styles["industries-hero__overlay"]}></div>
                <div className={styles["industries-hero__content"]}>
                    <h1>{t("mobility")}</h1>
                    <p>
                        Explore how our solutions help solve your measurement challenges and
                        issues.
                    </p>
                    <div className="user">
                        <div className="user__avatar user__avatar__aaa__asdd--round">
                        </div>
                        <div className="user__name"></div>
                    </div>
                </div>
            </section>

            <section className={styles["industries-solutions-header"]}>
                <div className={styles.container}>
                    <div className={styles.tabs}>
                        <button className={`${styles.tab} ${styles.active}`}>
                            Industries <span>▼</span>
                        </button>
                        <button className={styles.tab}>
                            Solutions <span>▼</span>
                        </button>
                    </div>
                    <hr />
                </div>
            </section>

            <section className={styles["industries-solutions"]}>
                <div className={styles.container}>
                    <h2>Industries</h2>

                    <div className={styles["industries-grid"]}>
                        <a href="/industries-solutions/mobility" className={styles["industry-card"]}>
                            <img src="https://www.hioki.com/themes/hioki/images/global/industries-solutions/index-img-01.png" alt="Mobility" />
                            <div className={styles["industry-card__title"]}>
                                Mobility <span>›</span>
                            </div>
                        </a>

                        <a href="/industries-solutions/mobility" className={styles["industry-card"]}>
                            <img src="https://www.hioki.com/system/files/image/2024-03/img_index_batt.jpg" alt="Battery" />
                            <div className={styles["industry-card__title"]}>
                                Battery <span>›</span>
                            </div>
                        </a>

                        <a href="/industries-solutions/mobility" className={styles["industry-card"]}>
                            <img src="https://www.hioki.com/themes/hioki/images/global/industries-solutions/index-img-09.png" alt="Motor" />
                            <div className={styles["industry-card__title"]}>
                                Motor <span>›</span>
                            </div>
                        </a>

                        <a href="/industries-solutions/mobility" className={styles["industry-card"]}>
                            <img src="https://www.hioki.com/themes/hioki/images/global/industries-solutions/index-img-03.png" alt="Energy" />
                            <div className={styles["industry-card__title"]}>
                                Energy <span>›</span>
                            </div>
                        </a>

                        <a href="/industries-solutions/mobility" className={styles["industry-card"]}>
                            <img src="https://www.hioki.com/themes/hioki/images/global/industries-solutions/index-img-04.png" alt="Electronic" />
                            <div className={styles["industry-card__title"]}>
                                Electronic <span>›</span>
                            </div>
                        </a>

                        <a href="/industries-solutions/mobility" className={styles["industry-card"]}>
                            <img src="https://www.hioki.com/themes/hioki/images/global/industries-solutions/index-img-05.png" alt="Infrastructure" />
                            <div className={styles["industry-card__title"]}>
                                Infrastructure <span>›</span>
                            </div>
                        </a>
                    </div>

                    <h2>Solutions</h2>
                    <div className={styles["industries-grid"]}>
                        <a href="/industries-solutions/mobility" className={styles["industry-card"]}>
                            <img src="https://www.hioki.com/themes/hioki/images/global/industries-solutions/index-img-06.png" alt="Testing & Analysis" />
                            <div className={styles["industry-card__title"]}>
                                Testing &amp; Analysis <span>›</span>
                            </div>
                        </a>

                        <a href="/industries-solutions/mobility" className={styles["industry-card"]}>
                            <img src="https://www.hioki.com/themes/hioki/images/global/industries-solutions/index-img-07.png" alt="Manufacturing" />
                            <div className={styles["industry-card__title"]}>
                                Manufacturing &amp; Inspection <span>›</span>
                            </div>
                        </a>

                        <a href="/industries-solutions/mobility" className={styles["industry-card"]}>
                            <img src="https://www.hioki.com/themes/hioki/images/global/industries-solutions/index-img-08.png" alt="Facilities" />
                            <div className={styles["industry-card__title"]}>
                                Facilities &amp; Equipment Maintenance <span>›</span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
