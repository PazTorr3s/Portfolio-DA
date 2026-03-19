import { useState } from "react";
import styles from "./experience.module.css";
import { useLanguage } from "../../i18n/languageContext";

const Experience = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState("work");

  const workPoints = t("experience.workPoints");
  const studyPoints = t("experience.studyPoints");

  return (
    <section id="experience" className={`${styles.section} fade`}>
      <div className="container">
        <h2 className={`fade fade-delay-1 ${styles.title}`}>
          <span className={styles.slash}>/</span> {t("experience.title")}
        </h2>

        <div className={`fade fade-delay-2 ${styles.contentContainer}`}>
          <ul className={styles.tabs} role="tablist" aria-label="Experience tabs">
            <li
              role="tab"
              tabIndex={0}
              aria-selected={active === "work"}
              className={`${styles.tab} ${active === "work" ? styles.active : ""}`}
              onClick={() => setActive("work")}
              onKeyDown={(e) => e.key === "Enter" && setActive("work")}
            >
              {t("experience.tabs.work")}
            </li>

            <li
              role="tab"
              tabIndex={0}
              aria-selected={active === "study"}
              className={`${styles.tab} ${active === "study" ? styles.active : ""}`}
              onClick={() => setActive("study")}
              onKeyDown={(e) => e.key === "Enter" && setActive("study")}
            >
              {t("experience.tabs.study")}
            </li>
          </ul>

          <div className={styles.details}>
            {active === "work" ? (
              <div className={styles.innerDetails}>
                <h3 className={styles.jobTitle}>{t("experience.workTitle")}</h3>
                <p className={styles.date}>{t("experience.workDate")}</p>
                <p className={styles.description}>{t("experience.workDescription")}</p>
                <ul className={styles.points}>
                  {Array.isArray(workPoints) &&
                    workPoints.map((p, idx) => <li key={idx}>▸ {p}</li>)}
                </ul>
              </div>
            ) : (
              <div className={styles.innerDetails}>
                <h3 className={styles.jobTitle}>{t("experience.studyTitle")}</h3>
                <p className={styles.date}>{t("experience.studyDate")}</p>
                <p className={styles.description}>{t("experience.studyDescription")}</p>
                  <ul className={styles.points}>
                  {Array.isArray(studyPoints) &&
                    studyPoints.map((p, idx) => <li key={idx}>▸ {p}</li>)}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;