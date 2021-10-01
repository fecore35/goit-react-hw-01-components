import s from "./FullScreen.module.css";

function FullScreen({ children }) {
  return <div className={s.container}>{children}</div>;
}

export default FullScreen;
