import styles from "./about.module.css"
import { useLanguage } from "../../i18n/languageContext"


const About = () => {
  const { t } = useLanguage()

  return (
    <section id="about" className={`${styles.section} fade`}>
      <div className="container">
        <h2 className={`fade fade-delay-1 ${styles.title}`}>
          <span className={styles.slash}>/</span> {t("about.title")}
        </h2>

        <div className={`fade fade-delay-2 ${styles.content}`}>
          <div className={styles.text}>
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>

            <p className={styles.techTitle}>
              {t("about.techTitle")}
            </p>

            <div className={styles.techList}>
              <ul>
                {t("about.tech.left").map((tech, idx) => (
                  <li key={idx}>▸ {tech}</li>
                ))}
              </ul>

              <ul>
                {t("about.tech.right").map((tech, idx) => (
                  <li key={idx}>▸ {tech}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <img
              src="/img/Paz_img.jpeg"
              alt="Paz Torres"
              className={styles.profileImage}
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default About;
