import { BiWorld, BiNews } from "react-icons/bi"
import { AiFillHome } from "react-icons/ai"
import { FaTemperatureFull, FaFireFlameCurved } from "react-icons/fa6"
import { BsFillCarFrontFill } from "react-icons/bs"
import { GiPoisonGas } from "react-icons/gi"
import { FaSnowflake } from "react-icons/fa"
import styles from "./Sidebar.module.css"
import { ListGroup } from "react-bootstrap"
import { NavLink } from "react-router-dom"

type Props = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const navLinks = [
  { to: "/", icon: <AiFillHome />, text: "Home" },
  { to: "/temperature", icon: <FaTemperatureFull />, text: "Temperatures" },
  { to: "/co2", icon: <BsFillCarFrontFill />, text: "CO2" },
  { to: "/methane", icon: <FaFireFlameCurved />, text: "Methane" },
  { to: "/nitrous-oxide", icon: <GiPoisonGas />, text: "NO2" },
  { to: "/arctic", icon: <FaSnowflake />, text: "Arctic Ice" },
  { to: "/news", icon: <BiNews />, text: "News" },
]

const Sidebar: React.FC<Props> = (props: Props) => {
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
              onClick={() => !(window.innerWidth >= 992) ?? props.setSidebarOpen(false)}
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
  )
}

export default Sidebar
