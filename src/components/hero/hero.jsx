import { useMemo } from "react"
import styles from "./hero.module.css"
import { useLanguage } from "../../i18n/languageContext"
import { useTypewriterParts } from "../../hooks/useTypewriter"

const Hero = () => {
  const { lang, t } = useLanguage()

  const start = lang === "en" ? "Hello, I'm " : "Hola, soy "
  const name = "Paz."

  const subtitle =
    lang === "en"
      ? "Data Analyst Jr passionate about data analysis, generating insights and solving problems."
      : "Data Analyst Jr apasionada por el análisis de datos, la generación de insights y la resolución de problemas."

  const parts = useMemo(
    () => [
      { text: start, speed: 70 },
      { text: name, speed: 90 },
    ],
    [start]
  )

  const { partsTyped } = useTypewriterParts(parts)

  return (
    <section id="hero" className={styles.hero}>
      <div className="container fade">
        <div className={styles.heroContent}>
          <h1 className={`${styles.heroTitle} ${styles.cursor}`}>
            <span>{partsTyped[0]}</span>
            <span className={styles.highlight}>{partsTyped[1]}</span>
          </h1>

          <p className={`fade fade-delay-1 ${styles.subtitle}`}>
            {subtitle}
          </p>

          <div className={`fade fade-delay-2 ${styles.buttons}`}>
            <a
              className={styles.glowButton}
              href="mailto:paztorres05@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              {t("hero.ctaContact")}
            </a>

            <a
              className={styles.glowButton}
              href="/cv/Paztorres-DataAnalyst.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("hero.ctaResume")}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


export default Hero;