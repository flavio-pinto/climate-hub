import { BiWorld, BiLogoGoogleCloud, BiNews } from "react-icons/bi";
import { BsFillCarFrontFill } from "react-icons/bs";
import { FaTemperatureFull } from "react-icons/fa6";
import { AiFillHome, AiOutlineClose } from "react-icons/ai";
import { GiPoisonGas } from "react-icons/gi";
import { ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

/* type Props = {} */

const Sidebar: React.FC = (/* props: Props */) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTitle}>
        <NavLink to="/" className={styles.sidebarBrand}>
          <h1>
            <BiWorld className={styles.brandIcon} />
            ClimateHub
          </h1>
        </NavLink>
        <span>
          <AiOutlineClose className={`${styles.icon} ${styles.closeIcon}`} />
        </span>
      </div>
      <ListGroup className={styles.sidebarList}>
        <ListGroup.Item as="li" className={styles.sidebarListItem}>
          <NavLink to="/">
            <AiFillHome className={styles.icon} />
            <h2>Home</h2>
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item as="li" className={styles.sidebarListItem}>
          <NavLink to="/temperatures">
            <FaTemperatureFull className={styles.icon} />
            <h2>Temperatures</h2>
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item as="li" className={styles.sidebarListItem}>
          <NavLink to="/co2">
            <BsFillCarFrontFill className={styles.icon} />
            <h2>CO2</h2>
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item as="li" className={styles.sidebarListItem}>
          <NavLink to="/methane">
            <BiLogoGoogleCloud className={styles.icon} />
            <h2>Methane</h2>
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item as="li" className={styles.sidebarListItem}>
          <NavLink to="/no2">
            <GiPoisonGas className={styles.icon} />
            <h2>NO2</h2>
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item as="li" className={styles.sidebarListItem}>
          <NavLink to="/arctic-ice">
            <AiFillHome className={styles.icon} />
            <h2>Arctic Ice</h2>
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item as="li" className={styles.sidebarListItem}>
          <NavLink to="/news">
            <BiNews className={styles.icon} />
            <h2>News</h2>
          </NavLink>
        </ListGroup.Item>
      </ListGroup>
    </aside>
  );
};

export default Sidebar;
