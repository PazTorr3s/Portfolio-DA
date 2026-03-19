import styles from "./projects.module.css"
import { useLanguage } from "../../i18n/languageContext"

const Projects = () => {
  const { t } = useLanguage()
  const projects = t("projects.items")

  return (
    <section id="projects" className={`${styles.section} fade`}>
      <div className="container">
        <h2 className={`fade fade-delay-1 ${styles.title}`}>
          <span className={styles.slash}>/</span> {t("projects.title")}
        </h2>

        <div className={`fade fade-delay-2 ${styles.grid}`}>
          {projects.map((p, idx) => (
            <article key={idx} className={styles.card}>
              <h3>{p.title}</h3>
              <p className={styles.description}>{p.description}</p>

              <ul className={styles.stack}>
                {p.stack.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>

              <div className={styles.links}>
                <a src="https://www.notion.so/Analisis-de-datos-328845903c7580538ff4d5696b62be4d?source=copy_link">
                Info
                </a>
                <a href={p.live} target="_blank" rel="noreferrer">
                  Dashboard
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;