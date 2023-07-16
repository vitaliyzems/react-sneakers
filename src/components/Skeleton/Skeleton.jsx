import style from "./Skeleton.module.scss";

export const Skeleton = () => {
  return (
    <div className={style.skeleton}>
      <div></div>
      <p></p>
      <span></span>
      <b></b>
      <i></i>
    </div>
  );
};
