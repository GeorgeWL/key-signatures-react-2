import { NavLink, useLocation } from "react-router-dom";
import styles from "../styles/navigation.module.scss";
const Navigation = () => {
  let location = useLocation();
  let isMatch = location.pathname === "/";
  return (
    <nav className={styles.nav}>
      {!isMatch && (
        <ul>
          <li>
            <NavLink
              to="/"
              activeClassName={styles["navLink-active"]}
              className={styles.navLink}
            >
              Close
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};
export default Navigation;
