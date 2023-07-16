import style from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={style.logo}>
      <img src="/img/logo.svg" alt="logo" className={style.logoImg} />
      <div className={style.logoDesc}>
        <h3>REACT SNEAKERS</h3>
        <p>Магазин лучших кроссовок</p>
      </div>
    </div>
  );
};

export { Logo };
