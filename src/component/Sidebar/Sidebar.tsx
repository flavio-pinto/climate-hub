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

const navLinks = [
  { to: "/", icon: <AiFillHome />, text: "Home" },
  { to: "/temperatures", icon: <FaTemperatureFull />, text: "Temperatures" },
  { to: "/co2", icon: <BsFillCarFrontFill />, text: "CO2" },
  { to: "/methane", icon: <FaFireFlameCurved />, text: "Methane" },
  { to: "/no2", icon: <GiPoisonGas />, text: "NO2" },
  { to: "/arctic-ice", icon: <FaSnowflake />, text: "Arctic Ice" },
  { to: "/news", icon: <BiNews />, text: "News" },
];

const Sidebar: React.FC = () => {
  return (
    <aside className={`${styles.sidebar} d-flex flex-column`}>
      <div className={`${styles.sidebarBrand} d-flex mb-4`}>
        <BiWorld />
        <h1 className="ms-auto">ClimateHub</h1>
      </div>
      <ListGroup className={styles.sidebarMenu}>
        {navLinks.map((link, index) => (
          <ListGroup.Item
            key={index}
            className={`${styles.sidebarMenuItem}`}
          >
            <NavLink
              to={link.to}
              //className={`${styles.sidebarMenuItemLink} d-flex align-items-start`}
              className={({ isActive, isPending }) =>
                isPending
                  ? `${styles.sidebarMenuItemLink} d-flex align-items-start py-3 px-1 ${styles.pending}`
                  : isActive
                  ? `${styles.sidebarMenuItemLink} d-flex align-items-start py-3 px-1 ${styles.active}`
                  : `${styles.sidebarMenuItemLink} d-flex align-items-start py-3 px-1`
              }
            >
              {link.icon}
              <h3>{link.text}</h3>
            </NavLink>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </aside>
  );
};

export default Sidebar;
