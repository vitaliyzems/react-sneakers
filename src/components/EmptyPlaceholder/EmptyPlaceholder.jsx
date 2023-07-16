import { GoBackBtn } from "../GoBackBtn/GoBackBtn";
import style from "./EmptyPlaceholder.module.scss";

export const EmptyPlaceholder = ({ content, action }) => {
  const { img, title, text } = content;

  return (
    <div className={style.box}>
      <img src={img} alt="img" />
      <h5>{title}</h5>
      <p>{text}</p>
      <GoBackBtn action={action} />
    </div>
  );
};
