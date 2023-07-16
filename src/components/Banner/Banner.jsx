import style from "./Banner.module.scss";
import brandImg from "./img/brand.svg";
import bannerMainImg from "./img/bannerMain.png";
import arrowImg from "./img/arrow.svg";

const Banner = () => {
  return (
    <div className={style.banner}>
      <div className={style.bannerLeft}>
        <img src={brandImg} alt="brand" />
        <div>
          <h3>
            <span>Stan Smith</span>, Forever!
          </h3>
          <button>КУПИТЬ</button>
        </div>
      </div>
      <img src={bannerMainImg} alt="main" />
      <div className={style.arrowBlock}>
        <div id="bannerRightBtn">
          <img src={arrowImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export { Banner };
