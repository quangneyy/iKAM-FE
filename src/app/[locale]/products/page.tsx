'use client';

import styles from "./page.module.scss";
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function Products() {
    const t = useTranslations();
    const locale = useLocale();

    return (
        <div className={styles["mobility-page"]}>

            <section className={styles["page-banner-category"]}>
                <h1>{t("mobility")}</h1>
            </section>

            <div className={styles["flex-column-category"]}>
                <div className={styles["breadcrumb-category"]}>
                    <span><Link href={`/${locale}`}>{t("home")}</Link></span> &gt;
                    <span><Link href={`/${locale}/industries-solutions`}>{t("industriesSolutions")}</Link></span> &gt;
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
                                    <Link href={`/${locale}/industries-solutions/mobility`} className={styles["btn-learn-more"]}>{t("learnMore")}</Link>
                                </div>
                            </div>
                        </section>

                        <section className={styles["explore-resources"]}>
                            <h2>{t("exploreResources")}</h2>
                            <div className={styles["explore-resources__box"]}>
                                <p><strong>{t("findOutMore")}</strong></p>
                                <div className={styles["explore-resources__links"]}>
                                    <Link href={`/${locale}/learning/electricity/voltage`}>{t("applicationNotes")}</Link>
                                    <Link href={`/${locale}/learning/electricity/voltage`}>{t("caseStudy")}</Link>
                                    <Link href={`/${locale}/learning/electricity/voltage`}>{t("solutionArticleBasicKnowledge")}</Link>
                                    <Link href={`/${locale}/learning/electricity/voltage`}>{t("technicalArticle")}</Link>
                                </div>
                            </div>
                        </section>

                        <section className={styles["application-notes"]}>
                            <h2>{t("applicationNotes")}</h2>
                            <div className={styles["application-notes__grid"]}>
                                <Link href={`/${locale}/industries-solutions/mobility`} className={styles["application-notes__item"]}>
                                    <img
                                        src="https://www.hioki.com/system/files/image/2025-02/motor_02.jpg"
                                        alt="Motor Testing Lines"
                                    />
                                    <p>{t("improvingMotorTesting")}</p>
                                </Link>
                                <Link href={`/${locale}/industries-solutions/mobility`} className={styles["application-notes__item"]}>
                                    <img
                                        src="https://www.hioki.com/system/files/image/2025-02/motor_03.jpg"
                                        alt="LCR Meter"
                                    />
                                    <p>{t("testingVarnishImpregnation")}</p>
                                </Link>
                                <Link href={`/${locale}/industries-solutions/mobility`} className={styles["application-notes__item"]}>
                                    <img
                                        src="https://www.hioki.com/system/files/image/2025-02/motor_04-2.jpg"
                                        alt="PSA Function"
                                    />
                                    <p>{t("investigationInverterMotor")}</p>
                                </Link>
                                <Link href={`/${locale}/industries-solutions/mobility`} className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_05.jpg"
                                        alt="AWD Dual-motors"
                                    />
                                    <p>{t("evaluatingAwdDualMotors")}</p>
                                </Link>
                                <Link href={`/${locale}/industries-solutions/mobility`} className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_06.jpg"
                                        alt="Outboard Motors"
                                    />
                                    <p>{t("operationalTestingEngines")}</p>
                                </Link>
                                <Link href={`/${locale}/industries-solutions/mobility`} className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_07.jpg"
                                        alt="Motor Operation" />
                                    <p>{t("recordEncoderPulse")}</p>
                                </Link>
                                <Link href={`/${locale}/industries-solutions/mobility`} className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_03.jpg"
                                        alt="LCR Meter"
                                    />
                                    <p>{t("testingVarnishImpregnation")}</p>
                                </Link>
                                <Link href={`/${locale}/industries-solutions/mobility`} className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_04-2.jpg"
                                        alt="PSA Function"
                                    />
                                    <p>{t("investigationInverterMotor")}</p>
                                </Link>
                            </div>
                        </section>

                        <section className={styles["application-notes"]}>
                            <h2>{t("caseStudy")}</h2>
                            <div className={styles["application-notes__grid"]}>
                                <Link href={`/${locale}/industries-solutions/mobility`} className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_10.jpg"
                                        alt="Motor Testing Lines"
                                    />
                                    <p>{t("performanceEvaluationDual")}</p>
                                </Link>
                                <Link href={`/${locale}/industries-solutions/mobility`} className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_11.jpg"
                                        alt="LCR Meter"
                                    />
                                    <p>{t("detectDefectsEarly")}</p>
                                </Link>
                            </div>
                        </section>

                        <section className={styles["application-notes"]}>
                            <h2>{t("solutionArticleBasicKnowledge")}</h2>
                            <div className={styles["application-notes__grid"]}>
                                <Link href={`/${locale}/industries-solutions/mobility`} className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_12-2.jpg"
                                        alt="Motor Testing Lines"
                                    />
                                    <p>{t("performanceEvaluationDual")}</p>
                                </Link>
                                <Link href={`/${locale}/industries-solutions/mobility`} className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_13-2.jpg"
                                        alt="LCR Meter" />
                                    <p>{t("detectDefectsEarly")}</p>
                                </Link>
                                <Link href={`/${locale}/industries-solutions/mobility`} className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_03.jpg"
                                        alt="LCR Meter"
                                    />
                                    <p>{t("detectDefectsEarly")}</p>
                                </Link>
                            </div>
                        </section>

                        <section className={styles["application-notes"]}>
                            <h2>{t("technicalArticle")}</h2>
                            <div className={styles["application-notes__grid"]}>
                                <Link href={`/${locale}/industries-solutions/mobility`} className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_15.jpg"
                                        alt="Motor Testing Lines"
                                    />
                                    <p>{t("effectivenessCurrentSensor")}</p>
                                </Link>
                                <Link href={`/${locale}/industries-solutions/mobility`} className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_16.jpg"
                                        alt="LCR Meter"
                                    />
                                    <p>{t("powerMeasurementDevelopment")}</p>
                                </Link>
                                <Link href={`/${locale}/industries-solutions/mobility`} className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_17.jpg"
                                        alt="LCR Meter"
                                    />
                                    <p>{t("methodIdentifyingPmsm")}</p>
                                </Link>
                            </div>
                        </section>
                    </div>

                    <div className={styles["sidebar-category"]}>
                        <Link href={`/${locale}/industries-solutions`} className={styles["category-title"]}>{t("sidebarTitle")}</Link>
                        <Link href={`/${locale}/industries-solutions/mobility`} className={styles["category-group"]}>{t("mobility")}</Link>
                        <Link href={`/${locale}/industries-solutions/mobility`} className={styles["category-group"]}>{t("battery")}</Link>
                        <Link href={`/${locale}/industries-solutions/mobility`} className={styles["category-group"]}>{t("motor")}</Link>
                        <Link href={`/${locale}/industries-solutions/mobility`} className={styles["category-group"]}>{t("energy")}</Link>
                        <Link href={`/${locale}/industries-solutions/mobility`} className={styles["category-group"]}>{t("electronicComponents")}</Link>
                        <Link href={`/${locale}/industries-solutions/mobility`} className={styles["category-group"]}>{t("infrastructure")}</Link>
                        <Link href={`/${locale}/industries-solutions/mobility`} className={styles["category-group"]}>{t("testingAnalysis")}</Link>
                        <Link href={`/${locale}/industries-solutions/mobility`} className={styles["category-group"]}>{t("manufacturingInspection")}</Link>
                        <Link href={`/${locale}/industries-solutions/mobility`} className={styles["category-group"]}>{t("facilitiesEquipmentMaintenance")}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}