import { BiChevronLeft } from "react-icons/bi";
import { BsGithub, BsLinkedin, BsCodeSquare } from "react-icons/bs";
import Toggle from 'react-toggle'
import 'react-toggle/style.css'
import './DarkModeToggleOverride.css'
import styles from "./Header.module.css";

type Props = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<Props> = (props: Props) => {
  const toggleDarkMode = () => {
    props.setDarkMode(!props.darkMode);
  };

  return (
    <header
      className={`${styles.header} d-flex justify-content-between align-items-center px-1 py-2`}
    >
      <div className={`${styles.headerLeft} d-flex align-items-center`}>
        <BiChevronLeft />
        <Toggle
          checked={props.darkMode}
          onChange={toggleDarkMode}
          icons={{ checked: "🌙", unchecked: "🔆" }}
          aria-label="Dark mode toggle"
          className={`${styles.toggleIcons}`}
        />
      </div>
      <div className={`${styles.headerCenter}`}>Logo</div>
      <div className={`${styles.headerRight} d-flex align-items-center`}>
        <BsGithub />
        <BsLinkedin />
        <BsCodeSquare />
      </div>
    </header>
  );
};

export default Header;
