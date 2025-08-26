'use client';

import styles from "./page.module.scss";
import { useI18n } from "../../../components/i18n/SimpleI18nProvider";

export default function Products() {
    const { t } = useI18n();

    return (
        <div className={styles["mobility-page"]}>

            <section className={styles["page-banner-category"]}>
                <h1>{t("mobility")}</h1>
            </section>

            <div className={styles["flex-column-category"]}>
                <div className={styles["breadcrumb-category"]}>
                    <span><a href="/index.html">{t("home")}</a></span> &gt;
                    <span><a href="/industries-solutions">{t("industriesSolutions")}</a></span> &gt;
                    <span>{t("mobility")}</span>
                </div>

                <div className={styles["product-category"]}>
                    <div className={styles["product-page-content-category"]}>

                        <section className={styles["product-intro"]}>
                            <img
                                src="https://www.hioki.com/themes/hioki/images/global/industries-solutions/motor/index-img-01.png"
                                alt="Mobility Intro"
                            />
                            <p>
                                {t("mobilityIntro")}
                            </p>
                        </section>

                        <section className={styles["motor-testing"]}>
                            <h2>{t("discoverMotorTesting")}</h2>
                            <div className={styles["motor-testing__content"]}>
                                <div className={styles["motor-testing__images"]}>
                                    <div className={styles["motor-testing__image"]}>
                                        <img
                                            src="https://www.hioki.com/system/files/image/2025-02/motor_01-3.jpg"
                                            alt="R&D Testing"
                                        />
                                    </div>
                                </div>
                                <div className={styles["motor-testing__text"]}>
                                    <h3>{t("evMotorInverter")}</h3>
                                    <p>
                                        {t("driveCuttingEdge")}
                                    </p>
                                    <a href="#" className={styles["btn-learn-more"]}>{t("learnMore")}</a>
                                </div>
                            </div>
                        </section>

                        <section className={styles["explore-resources"]}>
                            <h2>{t("exploreResources")}</h2>
                            <div className={styles["explore-resources__box"]}>
                                <p><strong>{t("findOutMore")}</strong></p>
                                <div className={styles["explore-resources__links"]}>
                                    <a href="/learning/electricity/voltage.html"><span className={styles["arrow"]}>&#9662;</span> {t("applicationNotes")}</a>
                                    <a href="/learning/electricity/voltage.html"><span className={styles["arrow"]}>&#9662;</span> {t("caseStudy")}</a>
                                    <a href="/learning/electricity/voltage.html"><span className={styles["arrow"]}>&#9662;</span> {t("solutionArticleBasicKnowledge")}</a>
                                    <a href="/learning/electricity/voltage.html"><span className={styles["arrow"]}>&#9662;</span> {t("technicalArticle")}</a>
                                </div>
                            </div>
                        </section>

                        <section className={styles["application-notes"]}>
                            <h2>{t("applicationNotes")}</h2>
                            <div className={styles["application-notes__grid"]}>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img
                                        src="https://www.hioki.com/system/files/image/2025-02/motor_02.jpg"
                                        alt="Motor Testing Lines"
                                    />
                                    <p>{t("improvingMotorTesting")}</p>
                                </a>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img
                                        src="https://www.hioki.com/system/files/image/2025-02/motor_03.jpg"
                                        alt="LCR Meter"
                                    />
                                    <p>{t("testingVarnishImpregnation")}</p>
                                </a>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img
                                        src="https://www.hioki.com/system/files/image/2025-02/motor_04-2.jpg"
                                        alt="PSA Function"
                                    />
                                    <p>{t("investigationInverterMotor")}</p>
                                </a>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_05.jpg"
                                        alt="AWD Dual-motors"
                                    />
                                    <p>{t("evaluatingAwdDualMotors")}</p>
                                </a>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_06.jpg"
                                        alt="Outboard Motors"
                                    />
                                    <p>{t("operationalTestingEngines")}</p>
                                </a>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_07.jpg"
                                        alt="Motor Operation" />
                                    <p>{t("recordEncoderPulse")}</p>
                                </a>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_03.jpg"
                                        alt="LCR Meter"
                                    />
                                    <p>{t("testingVarnishImpregnation")}</p>
                                </a>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_04-2.jpg"
                                        alt="PSA Function"
                                    />
                                    <p>{t("investigationInverterMotor")}</p>
                                </a>
                            </div>
                        </section>

                        <section className={styles["application-notes"]}>
                            <h2>{t("caseStudy")}</h2>
                            <div className={styles["application-notes__grid"]}>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_10.jpg"
                                        alt="Motor Testing Lines"
                                    />
                                    <p>{t("performanceEvaluationDual")}</p>
                                </a>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_11.jpg"
                                        alt="LCR Meter"
                                    />
                                    <p>{t("detectDefectsEarly")}</p>
                                </a>
                            </div>
                        </section>

                        <section className={styles["application-notes"]}>
                            <h2>{t("solutionArticleBasicKnowledge")}</h2>
                            <div className={styles["application-notes__grid"]}>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_12-2.jpg"
                                        alt="Motor Testing Lines"
                                    />
                                    <p>{t("performanceEvaluationDual")}</p>
                                </a>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_13-2.jpg"
                                        alt="LCR Meter" />
                                    <p>{t("detectDefectsEarly")}</p>
                                </a>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_03.jpg"
                                        alt="LCR Meter"
                                    />
                                    <p>{t("detectDefectsEarly")}</p>
                                </a>
                            </div>
                        </section>

                        <section className={styles["application-notes"]}>
                            <h2>{t("technicalArticle")}</h2>
                            <div className={styles["application-notes__grid"]}>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_15.jpg"
                                        alt="Motor Testing Lines"
                                    />
                                    <p>{t("effectivenessCurrentSensor")}</p>
                                </a>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_16.jpg"
                                        alt="LCR Meter"
                                    />
                                    <p>{t("powerMeasurementDevelopment")}</p>
                                </a>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_17.jpg"
                                        alt="LCR Meter"
                                    />
                                    <p>{t("methodIdentifyingPmsm")}</p>
                                </a>
                            </div>
                        </section>
                    </div>

                    <div className={styles["sidebar-category"]}>
                        <a href="/industries-solutions" className={styles["category-title"]}>{t("sidebarTitle")}</a>
                        <a href="/industries-solutions/mobility" className={styles["category-group"]}>{t("mobility")}</a>
                        <a href="/industries-solutions/mobility" className={styles["category-group"]}>{t("battery")}</a>
                        <a href="/industries-solutions/mobility" className={styles["category-group"]}>{t("motor")}</a>
                        <a href="/industries-solutions/mobility" className={styles["category-group"]}>{t("energy")}</a>
                        <a href="/industries-solutions/mobility" className={styles["category-group"]}>{t("electronicComponents")}</a>
                        <a href="/industries-solutions/mobility" className={styles["category-group"]}>{t("infrastructure")}</a>
                        <a href="/industries-solutions/mobility" className={styles["category-group"]}>{t("testingAnalysis")}</a>
                        <a href="/industries-solutions/mobility" className={styles["category-group"]}>{t("manufacturingInspection")}</a>
                        <a href="/industries-solutions/mobility" className={styles["category-group"]}>{t("facilitiesEquipmentMaintenance")}</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
