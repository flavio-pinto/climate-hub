import { BiChevronLeft } from "react-icons/bi"
import { BsFillSunFill, /* BsFillMoonStarsFill, */ BsGithub, BsLinkedin, BsCodeSquare } from "react-icons/bs"
import styles from "./Header.module.css"
/* type Props = {} */

const Header: React.FC = (/* props: Props */) => {
  return (
    <header className={`${styles.header} d-flex justify-content-between align-items-center px-1 py-2`}>
      <div className={`${styles.headerLeft} d-flex align-items-center`}>
        <BiChevronLeft />
        <BsFillSunFill />
        {/* <BsFillMoonStarsFill /> */}
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