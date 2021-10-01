import s from "./ContentWrapper.module.css";

function ContentWrapper({ children }) {
  return <div className={s.container}>{children}</div>;
}

export default ContentWrapper;
