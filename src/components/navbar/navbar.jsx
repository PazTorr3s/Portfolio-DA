import {FaGithub,FaLinkedin,FaWhatsapp,FaEnvelope} from "react-icons/fa"
import styles from "./navbar.module.css"
import { useLanguage } from "../../i18n/languageContext"

const Navbar = () => {
  const { lang, setLang, t } = useLanguage()

  return (
    <header className={styles.header}>
      <nav className={styles.mainNav}>
        <div className={styles.leftGroup}>
          <div className={styles.logo}>Paz Torres</div>

          <ul className={styles.navLinks}>
            <li><a href="#hero">{t("nav.home")}</a></li>
            <li><a href="#about">{t("nav.about")}</a></li>
            <li><a href="#experience">{t("nav.experience")}</a></li>
            <li><a href="#projects">{t("nav.projects")}</a></li>
          </ul>
        </div>

        <div className={styles.right}>
          <div className={styles.socials}>
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

            <a
              href="https://wa.me/56945949291"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="mailto:paztorres05@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
        </div>
          <div className={styles.languageSwitch} aria-label="Language switch">
            <button
              type="button"
              className={lang === "es" ? styles.activeLang : ""}
              onClick={() => setLang("es")}
            >
              🇪🇸
            </button>
            <button
              type="button"
              className={lang === "en" ? styles.activeLang : ""}
              onClick={() => setLang("en")}
            >
              🇪n
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;