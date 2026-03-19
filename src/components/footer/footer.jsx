import styles from "./footer.module.css"
import { useLanguage } from "../../i18n/languageContext"
import {FaGithub, FaLinkedin} from "react-icons/fa"

const Footer = () => {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        © {year} Paz Torres · {t("footer.rights")}
      </p>

      <p className={styles.subtext}>
        {t("footer.madeWith")}
      </p>

      <div className={styles.links}>
        <a
        href="https://github.com/PazTorr3s"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        >
        <FaGithub />
        </a>

        <a
        href="https://www.linkedin.com/in/paz-torres-53905b31b/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        >
        <FaLinkedin />
        </a>
      </div>
    </footer>
  )
}

export default Footer
