import { BiChevronLeft, BiWorld } from "react-icons/bi"
import { BsGithub, BsLinkedin, BsCodeSquare } from "react-icons/bs"
import Toggle from "react-toggle"
import "react-toggle/style.css"
import "./DarkModeToggleOverride.css"
import styles from "./Header.module.css"
import { NavLink } from "react-router-dom"

type Props = {
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<Props> = (props: Props) => {
  const toggleDarkMode = () => {
    props.setDarkMode(!props.darkMode)
  }

  return (
    <header
      className={`${styles.header} d-flex justify-content-between align-items-center pe-3 py-2`}
    >
      <div className={`${styles.headerLeft} d-flex align-items-center`}>
        <BiChevronLeft onClick={() => props.setSidebarOpen((open) => !open)} />
        <Toggle
          checked={props.darkMode}
          onChange={toggleDarkMode}
          icons={{ checked: "🌙", unchecked: "🔆" }}
          aria-label="Dark mode toggle"
          className={`${styles.toggleIcons}`}
        />
      </div>
      <div className={`${styles.headerCenter}`}>
        <NavLink to="/" className={`${styles.logoLink} d-flex`}>
          <BiWorld />
          <h1 className="ms-1">ClimateHub</h1>
        </NavLink>
      </div>
      <div className={`${styles.headerRight} d-flex align-items-center`}>
        <a
          href="https://github.com/flavio-pinto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="ms-3">
          <BsLinkedin />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="ms-3">
          <BsCodeSquare />
        </a>
      </div>
    </header>
  )
}

export default Header
