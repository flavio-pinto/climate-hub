import { BiChevronLeft } from "react-icons/bi"
import { BsFillSunFill, BsFillMoonStarsFill, BsGithub, BsLinkedin, BsCodeSquare } from "react-icons/bs"
import styles from "./Header.module.css"

type Props = {
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<Props> = (props: Props) => {
  return (
    <header className={`${styles.header} d-flex justify-content-between align-items-center px-1 py-2`}>
      <div className={`${styles.headerLeft} d-flex align-items-center`}>
        <BiChevronLeft />
        {/* <BsFillSunFill />
        <BsFillMoonStarsFill /> */}
        {props.darkMode ? (
          <BsFillMoonStarsFill onClick={() => props.setDarkMode(false)} />
        ) : (
          <BsFillSunFill onClick={() => props.setDarkMode(true)} />
        )}
      </div>
      <div className={`${styles.headerCenter}`}>
        Logo
      </div>
      <div className={`${styles.headerRight} d-flex align-items-center`}>
        <BsGithub />
        <BsLinkedin />
        <BsCodeSquare />
      </div>
      
    </header>
  )
}

export default Header