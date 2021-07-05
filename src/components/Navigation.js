import { NavLink, useRouteMatch } from "react-router-dom";
import styles from "../styles/navigation.module.scss";
const Navigation = () => {
  let isMatch = useRouteMatch("/");
  return (
    <nav>
      {!isMatch && (
        <ul>
          <li>
            <NavLink
              to="/"
              activeClassName={styles["navLink-active"]}
              className={styles.navLink}
            >
              Go Back
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};
export default Navigation;
