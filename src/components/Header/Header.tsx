import { BsJustify, BsGithub, BsLinkedin, BsCodeSquare } from "react-icons/bs"
import { GiMoon } from "react-icons/gi"
import styles from "./Header.module.css"
/* type Props = {} */

const Header: React.FC = (/* props: Props */) => {
  return (
    <header className={styles.header}>
      <div className={styles.menuIcon}>
        <BsJustify className={styles.icon} />
      </div>
      <div className={styles.headerLeft}>
        <GiMoon className={styles.icon} />
      </div>
      <div className={styles.headerRight}>
        <BsGithub className={styles.icon} />
        <BsLinkedin className={styles.icon} />
        <BsCodeSquare className={styles.icon} />
      </div>
    </header>
  )
}

export default Header