import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { EmptyPlaceholder } from "../components/EmptyPlaceholder/EmptyPlaceholder";
import { Products } from "../components/Products/Products";
import style from "./FavPage.module.scss";

export const FavPage = () => {
  const fav = useSelector((state) => state.fav.fav);

  const navigate = useNavigate();

  const content = {
    img: "/img/noFav.png",
    title: "Закладок нет :(",
    text: "Вы ничего не добавляли в закладки",
  };

  const goToMain = () => {
    navigate("/");
  };

  return (
    <div>
      {fav.length ? (
        <div className="container">
          <div className={style.favTitle}>
            <Link to="/">
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 11L1 6L6 1"
                  stroke="#C8C8C8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <h3>Мои закладки</h3>
          </div>
          <Products array={fav} />
        </div>
      ) : (
        <div className={style.wrapper}>
          <EmptyPlaceholder content={content} action={goToMain} />
        </div>
      )}
    </div>
  );
};
