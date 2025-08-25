import styles from "./page.module.scss";

export default async function Products() {
    return (
        <div className={styles["mobility-page"]}>
            <section className={styles["page-banner-category"]}>
                <h1>Mobility</h1>
            </section>

            <div className={styles["flex-column-category"]}>
                <div className={styles["breadcrumb-category"]}>
                    <span><a href="/index.html">Home</a></span> &gt;
                    <span><a href="/industries-solutions">Industries &amp; Solution</a></span> &gt;
                    <span>Mobility</span>
                </div>

                <div className={styles["product-category"]}>
                    <div className={styles["product-page-content-category"]}>

                        <section className={styles["product-intro"]}>
                            <img
                                src="https://www.hioki.com/themes/hioki/images/global/industries-solutions/motor/index-img-01.png"
                                alt="Mobility Intro"
                            />
                            <p>
                                The Memory HiCorder records waveforms across a wide frequency range, allowing safe measurement of diverse signals without the need for external isolated amplifiers or concerns about potential differences. Since the launch of the first Memory HiCorder in 1983, this product series has earned enthusiastic support from engineers and maintenance personnel.
                            </p>
                        </section>

                        <section className={styles["motor-testing"]}>
                            <h2>Discover Motor Testing Solutions</h2>
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
                                    <h3>EV Motor &amp; Inverter Measurement Solutions</h3>
                                    <p>
                                        Drive cutting-edge motor R&amp;D through rigorous testing...
                                    </p>
                                    <a href="#" className={styles["btn-learn-more"]}>Learn more</a>
                                </div>
                            </div>
                        </section>

                        <section className={styles["explore-resources"]}>
                            <h2>Explore Resources</h2>
                            <div className={styles["explore-resources__box"]}>
                                <p><strong>Find out more about our solutions, applications, and basic knowledge.</strong></p>
                                <div className={styles["explore-resources__links"]}>
                                    <a href="/learning/electricity/voltage.html"><span className={styles["arrow"]}>&#9662;</span> Application Notes</a>
                                    <a href="/learning/electricity/voltage.html"><span className={styles["arrow"]}>&#9662;</span> Case Study</a>
                                    <a href="/learning/electricity/voltage.html"><span className={styles["arrow"]}>&#9662;</span> Solution Article, Basic Knowledge</a>
                                    <a href="/learning/electricity/voltage.html"><span className={styles["arrow"]}>&#9662;</span> Technical Article</a>
                                </div>
                            </div>
                        </section>

                        <section className={styles["application-notes"]}>
                            <h2>Application Notes</h2>
                            <div className={styles["application-notes__grid"]}>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img
                                        src="https://www.hioki.com/system/files/image/2025-02/motor_02.jpg"
                                        alt="Motor Testing Lines"
                                    />
                                    <p>Improving Motor Testing Lines with Economical Partial Discharge Testing</p>
                                </a>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img
                                        src="https://www.hioki.com/system/files/image/2025-02/motor_03.jpg"
                                        alt="LCR Meter"
                                    />
                                    <p>Testing Varnish Impregnation State in a Motor with an LCR Meter</p>
                                </a>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img
                                        src="https://www.hioki.com/system/files/image/2025-02/motor_04-2.jpg"
                                        alt="PSA Function"
                                    />
                                    <p>Investigation of Inverter Motor Loss Using the Power Spectrum Analysis (PSA) Function</p>
                                </a>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_05.jpg"
                                        alt="AWD Dual-motors"
                                    />
                                    <p>Evaluating the Performance of AWD Dual-motors</p>
                                </a>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_06.jpg"
                                        alt="Outboard Motors"
                                    />
                                    <p>Operational Testing of Engines Used in Outboard Motors</p>
                                </a>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_07.jpg"
                                        alt="Motor Operation" />
                                    <p>Record Encoder Pulse Output to Verify Motor Operation</p>
                                </a>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_03.jpg"
                                        alt="LCR Meter"
                                    />
                                    <p>Testing Varnish Impregnation State in a Motor with an LCR Meter</p>
                                </a>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_04-2.jpg"
                                        alt="PSA Function"
                                    />
                                    <p>Investigation of Inverter Motor Loss Using the Power Spectrum Analysis (PSA)
                                        Function
                                    </p>
                                </a>
                            </div>
                        </section>

                        <section className={styles["application-notes"]}>
                            <h2>Case Study</h2>
                            <div className={styles["application-notes__grid"]}>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_10.jpg"
                                        alt="Motor Testing Lines"
                                    />
                                    <p>Performance Evaluation of Dual Motor Systems: Dramatic Reduction of Man-hours
                                    </p>
                                </a>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_11.jpg"
                                        alt="LCR Meter"
                                    />
                                    <p>Detect Defects at an Early Inspection Stage of Motor Production Lines</p>
                                </a>
                            </div>
                        </section>

                        <section className={styles["application-notes"]}>
                            <h2>Solution Article, Basic Knowledge</h2>
                            <div className={styles["application-notes__grid"]}>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_12-2.jpg"
                                        alt="Motor Testing Lines"
                                    />
                                    <p>Performance Evaluation of Dual Motor Systems: Dramatic Reduction of Man-hours
                                    </p>
                                </a>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_13-2.jpg"
                                        alt="LCR Meter" />
                                    <p>Detect Defects at an Early Inspection Stage of Motor Production Lines</p>
                                </a>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_03.jpg"
                                        alt="LCR Meter"
                                    />
                                    <p>Detect Defects at an Early Inspection Stage of Motor Production Lines</p>
                                </a>
                            </div>
                        </section>

                        <section className={styles["application-notes"]}>
                            <h2>Technical Article</h2>
                            <div className={styles["application-notes__grid"]}>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_15.jpg"
                                        alt="Motor Testing Lines"
                                    />
                                    <p>Effectiveness of Current Sensor Phase Shift When Evaluating the Efficiency of
                                        High-efficiency
                                        Motor Drives</p>
                                </a>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_16.jpg"
                                        alt="LCR Meter"
                                    />
                                    <p>Power Measurement in the Development of EV Motors and Inverters</p>
                                </a>
                                <a href="/industries-solutions/mobility" className={styles["application-notes__item"]}>
                                    <img src="https://www.hioki.com/system/files/image/2025-02/motor_17.jpg"
                                        alt="LCR Meter"
                                    />
                                    <p>Method for Identifying PMSM Parameters Using the Power Analyzer PW8001</p>
                                </a>
                            </div>
                        </section>
                    </div>

                    <div className={styles["sidebar-category"]}>
                        <a href="/industries-solutions" className={styles["category-title"]}>Industries &amp; Solutions</a>
                        <a href="/industries-solutions/mobility" className={styles["category-group"]}>Mobility</a>
                        <a href="/industries-solutions/mobility" className={styles["category-group"]}>Battery</a>
                        <a href="/industries-solutions/mobility" className={styles["category-group"]}>Motor</a>
                        <a href="/industries-solutions/mobility" className={styles["category-group"]}>Energy</a>
                        <a href="/industries-solutions/mobility" className={styles["category-group"]}>Electronic Components</a>
                        <a href="/industries-solutions/mobility" className={styles["category-group"]}>Infrastructure</a>
                        <a href="/industries-solutions/mobility" className={styles["category-group"]}>Testing &amp; Analysis</a>
                        <a href="/industries-solutions/mobility" className={styles["category-group"]}>Manufacturing &amp; Inspection</a>
                        <a href="/industries-solutions/mobility" className={styles["category-group"]}>Facilities &amp; Equipment Maintenance</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
