import PropTypes from "prop-types";
import s from "./Sidebar.module.css";

function Sidebar({ position, children }) {
  return <aside className={s[position]}>{children}</aside>;
}

Sidebar.defaultProps = {
  position: "left",
};

Sidebar.propTypes = {
  position: PropTypes.oneOf(["left", "right"]).isRequired,
  child: PropTypes.any,
};

export default Sidebar;
