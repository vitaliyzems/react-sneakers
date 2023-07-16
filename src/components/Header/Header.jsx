import styles from "./Header.module.scss";
import { Logo } from "../Logo/Logo";
import { Menu } from "../Menu/Menu";
import { Link } from "react-router-dom";

const Header = ({ displayCart }) => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <Logo />
      </Link>
      <Menu displayCart={displayCart} />
    </div>
  );
};

export { Header };
