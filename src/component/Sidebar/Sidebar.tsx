import { BiWorld, BiNews } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { FaTemperatureFull, FaFireFlameCurved } from "react-icons/fa6";
import { BsFillCarFrontFill } from "react-icons/bs";
import { GiPoisonGas } from "react-icons/gi";
import { FaSnowflake } from "react-icons/fa";
import styles from "./Sidebar.module.css";
import { ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";

/* type Props = {} */

const Sidebar: React.FC = (/* props: Props */) => {
  return (
    <aside className={`${styles.sidebar} d-flex flex-column`}>
      <div className={`${styles.sidebarBrand} d-flex mb-4`}>
        <BiWorld />
        <h1 className="ms-auto">ClimateHub</h1>
      </div>
      <ListGroup className={styles.sidebarMenu}>
        <ListGroup.Item className={`${styles.sidebarMenuItem} py-3 px-1`}>
          <NavLink
            to="/"
            className={`${styles.sidebarMenuItemLink} d-flex align-items-start`}
          >
            <AiFillHome />
            <h3>Home</h3>
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item className={`${styles.sidebarMenuItem} py-3 px-1`}>
          <NavLink
            to="/temperatures"
            className={`${styles.sidebarMenuItemLink} d-flex align-items-start`}
          >
            <FaTemperatureFull />
            <h3>Temperatures</h3>
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item className={`${styles.sidebarMenuItem} py-3 px-1`}>
          <NavLink
            to="/co2"
            className={`${styles.sidebarMenuItemLink} d-flex align-items-start`}
          >
            <BsFillCarFrontFill />
            <h3>CO2</h3>
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item className={`${styles.sidebarMenuItem} py-3 px-1`}>
          <NavLink
            to="/methane"
            className={`${styles.sidebarMenuItemLink} d-flex align-items-start`}
          >
            <FaFireFlameCurved />
            <h3>Methane</h3>
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item className={`${styles.sidebarMenuItem} py-3 px-1`}>
          <NavLink
            to="/no2"
            className={`${styles.sidebarMenuItemLink} d-flex align-items-start`}
          >
            <GiPoisonGas />
            <h3>NO2</h3>
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item className={`${styles.sidebarMenuItem} py-3 px-1`}>
          <NavLink
            to="/arctic-ice"
            className={`${styles.sidebarMenuItemLink} d-flex align-items-start`}
          >
            <FaSnowflake />
            <h3>Arctic Ice</h3>
          </NavLink>
        </ListGroup.Item>
        <ListGroup.Item className={`${styles.sidebarMenuItem} py-3 px-1`}>
          <NavLink
            to="/news"
            className={`${styles.sidebarMenuItemLink} d-flex align-items-start`}
          >
            <BiNews />
            <h3>News</h3>
          </NavLink>
        </ListGroup.Item>
      </ListGroup>
    </aside>
  );
};

export default Sidebar;
