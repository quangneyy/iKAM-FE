'use client';
import { useTranslations } from 'next-intl';
import styles from "./page.module.scss";
import Banner from '../../components/home/Banner/Banner';

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className={styles.home_page}>
      <section className="banner swiper">
        <Banner />
      </section>

      <section className={styles.industries}>
        <div className={styles.container}>
          <h2 className={styles.industries__title}>Industries &amp; Solutions</h2>
          <p className={styles.industries__subtitle}>
            Explore how our solutions help solve your measurement challenges.
          </p>

          <div className={styles.block_industries}>
            <h3 className={styles.industries__heading}>Industries</h3>

            <div className={styles.industries__list}>
              <a href="/industries-solutions/mobility" className={styles.industries__item}>
                <img src="https://www.hioki.com/themes/hioki/images/global/index-img-03.png" alt="Mobility" />
                <h4>Mobility</h4>
              </a>
              <a href="/industries-solutions/mobility" className={styles.industries__item}>
                <img src="https://www.hioki.com/system/files/image/2024-03/img_index_batt.jpg" alt="Battery" />
                <h4>Battery</h4>
              </a>
              <a href="/industries-solutions/mobility" className={styles.industries__item}>
                <img src="https://www.hioki.com/themes/hioki/images/global/industries-solutions/index-img-09.png" alt="Motor" />
                <h4>Motor</h4>
              </a>
              <a href="/industries-solutions/mobility" className={styles.industries__item}>
                <img src="https://www.hioki.com/themes/hioki/images/global/index-img-05.png" alt="Energy" />
                <h4>Energy</h4>
              </a>
              <a href="/industries-solutions/mobility" className={styles.industries__item}>
                <img src="https://www.hioki.com/themes/hioki/images/global/index-img-06.png" alt="Electronic Component" />
                <h4>Electronic Component</h4>
              </a>
              <a href="/industries-solutions/mobility/" className={styles.industries__item}>
                <img src="https://www.hioki.com/themes/hioki/images/global/index-img-07.png" alt="Infrastructure" />
                <h4>Infrastructure</h4>
              </a>
            </div>
          </div>

          <div className={styles.block_solution}>
            <h3 className={styles.industries__heading}>Solution</h3>

            <div className={styles.industries__list}>
              <a href="/industries-solutions/mobility" className={styles.industries__item}>
                <img src="https://www.hioki.com/themes/hioki/images/global/index-img-08.png" alt="Testing" />
                <h4>Testing & Analysis</h4>
              </a>
              <a href="/industries-solutions/mobility" className={styles.industries__item}>
                <img src="https://www.hioki.com/themes/hioki/images/global/index-img-09.png" alt="Manufacturing" />
                <h4>Manufacturing & Inspection</h4>
              </a>
              <a href="/industries-solutions/mobility" className={styles.industries__item}>
                <img src="https://www.hioki.com/themes/hioki/images/global/index-img-10.png" alt="Facilities" />
                <h4>Facilities & Equipment Maintenance</h4>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.featured_products}>
        <div className={styles.container}>
          <h2 className={styles.featured_products__title}>Featured Products</h2>
          <div className={styles.featured_products__list}>
            <a href="/products/data-acquisition/daq-testing/product-detail" className={styles.featured_products__item}>
              <img src="https://www.hioki.com/system/files/image/2023-07/PW8001_compress.png" alt="POWER ANALYZER PW8001" />
              <h3>POWER ANALYZER PW8001</h3>
              <ul>
                <li>
                  Measure SiC and GaN inverters and reactor/transformer loss
                  (U7005)
                </li>
                <li>
                  Measure high-efficiency IGBT and solar inverters (U7001)
                </li>
              </ul>
            </a>

            <a href="/products/data-acquisition/daq-testing/product-detail" className={styles.featured_products__item}>
              <img src="https://www.hioki.com/system/files/image/2023-05/product_image6595.png" alt="BATTERY HiTESTER BT3563A" />
              <h3>BATTERY HiTESTER BT3563A</h3>
              <ul>
                <li>
                  Fully automated production line testing of large packs for
                  xEVs
                </li>
                <li>Large packs of up to 300 V</li>
              </ul>
            </a>

            <a href="/products/data-acquisition/daq-testing/product-detail" className={styles.featured_products__item}>
              <img src="https://www.hioki.com/system/files/image/2021-06/LR8450E_set1_3_1.png" alt="MEMORY HiLOGGER LR8450-01" />
              <h3>
                MEMORY HiLOGGER LR8450-01 <span>(Wireless LAN model)</span>
              </h3>
              <ul>
                <li>Portable data logger expandable to 330 ch</li>
                <li>Compatible with plug-in or wireless modules</li>
              </ul>
            </a>

            <a href="/products/data-acquisition/daq-testing/product-detail" className={styles.featured_products__item}>
              <img src="https://www.hioki.com/sites/default/files/2021-04/product_image6503.png" alt="POWER QUALITY ANALYZER PQ3198" />
              <h3>POWER QUALITY ANALYZER PQ3198</h3>
              <ul>
                <li>IEC61000-4-30 Ed.3 Class A Power Quality Analyzer</li>
                <li>Advanced monitoring and recording</li>
              </ul>
            </a>
          </div>
        </div>
      </section>

      <section className={styles.products_section}>
        <div className={styles.container}>
          <h2 className={styles.products_section__title}>Products</h2>

          <div className={styles.products_section__list}>
            <a href="/products/data-acquisition" className={styles.products_section__item}>
              <img src="https://www.hioki.com/themes/hioki/images/global/products/index-img-01.png" alt="Data Acquisition" />
              <h3>Data Acquisition, Oscilloscopes, Memory Recorders</h3>
            </a>

            <a href="/products/data-acquisition" className={styles.products_section__item}>
              <img src="https://www.hioki.com/themes/hioki/images/global/products/index-img-10.png" alt="Power Meters" />
              <h3>Power Meters, Power Analyzers</h3>
            </a>

            <a href="/products/data-acquisition" className={styles.products_section__item}>
              <img src="https://www.hioki.com/themes/hioki/images/global/products/index-img-18.png" alt="Clamp Meters" />
              <h3>Clamp Meters, Clamp Multimeters</h3>
            </a>

            <a href="/products/data-acquisition" className={styles.products_section__item}>
              <img src="https://www.hioki.com/themes/hioki/images/global/products/index-img-22.png" alt="Board Testing" />
              <h3>Bare board, Package, Populated Board Testing</h3>
            </a>
          </div>

          <div className={styles.products_section__more}>
            <a href="/products" className={styles.btn_view_more}>View More <span>+</span></a>
          </div>
        </div>
      </section>

      <section className={styles.events_section}>
        <div className={styles.events_section__tabs}>
          <button className={`${styles.tab}  ${styles.active}`}>Events</button>
          <button className={styles.tab}>Newsroom</button>
        </div>

        <div className={styles.events_section__list}>
          <a href="/news/detail" className={styles.event_card}>
            <span className={styles.status}>Registration Open</span>
            <h3>The Battery Show North America, Detroit, MI</h3>
            <p className={styles.date}>Oct. 06, 2025 - Oct. 09, 2025</p>
            <span className={styles.type}>Event</span>
          </a>

          <a href="/news/detail" className={styles.event_card}>
            <span className={styles.status}>Registration Open</span>
            <h3>
              [Webinar] Unlock Superior Battery Performance: Transform Electrode
              Design
            </h3>
            <p className={styles.date}>Jul. 31, 2025</p>
            <span className={styles.type}>Event</span>
          </a>

          <a href="/news/detail" className={styles.event_card}>
            <span className={styles.status}>Registration Open</span>
            <h3>Hydrogen Technology North America Expo</h3>
            <p className={styles.date}>Jun. 25, 2025 - Jun. 26, 2025</p>
            <span className={styles.type}>Event</span>
          </a>

          <a href="/news/detail" className={styles.event_card}>
            <span className={styles.status}>Registration Open</span>
            <h3>ITEC+2025</h3>
            <p className={styles.date}>Jun. 18, 2025 - Jun. 20, 2025</p>
            <span className={styles.type}>Event</span>
          </a>
        </div>
        <div className={styles.events_section__more}>
          <a href="/news" className={styles.btn_view_all}>View All</a>
        </div>
      </section>

      <section className={styles.knowledge_center}>
        <div className={styles.knowledge_center__overlay}>
          <div className={styles.knowledge_center__content}>
            <h2>Knowledge Center</h2>
            <p>
              Learn about electricity basics, measuring instrument usage,
              applications, and related topics.
            </p>
            <a href="/learning" className={styles.btn_view_all}>View All</a>
          </div>
        </div>
      </section>

      <section className={styles.service_support}>
        <div className={styles.container}>
          <h2>Service & Support</h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3>FAQ Search</h3>
              <input type="text" placeholder="Keywords" />
            </div>

            <div className={styles.card}>
              <p><strong>Resolve measurement challenges</strong></p>
              <p>
                Download product brochures and resources like technical
                documentation and instruction manuals as well as firmware and
                software.
              </p>
              <button className={styles.btn}>View All</button>
            </div>

            <div className={styles.card}>
              <h3><i class="icon-user"></i> my HIOKI</h3>
              <ul>
                <li>
                  <strong>Product registration</strong> — Receive notifications
                  of product firmware updates and access to downloadable files
                  with a simple registration.
                </li>
                <li>
                  <strong>Extensive resources</strong> — Download member-only
                  resources (software and technical documents)
                </li>
              </ul>
              <button className={styles.btn}>Login</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}