import { useSelector } from "react-redux";
import { EmptyPlaceholder } from "../components/EmptyPlaceholder/EmptyPlaceholder";
import { Products } from "../components/Products/Products";
import style from "./ProfilePage.module.scss";
import { Link, useNavigate } from "react-router-dom";

export const ProfilePage = () => {
  const order = useSelector((state) => state.order.order);

  const navigate = useNavigate();

  const content = {
    img: "/img/noOrders.png",
    title: "У вас нет заказов",
    text: "Оформите хотя бы один заказ.",
  };

  const goToMain = () => {
    navigate("/");
  };

  return (
    <div>
      {order.length ? (
        <div className="container">
          <div className={style.orderTitle}>
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
            <h3>Мои покупки</h3>
          </div>
          <Products array={order} />
        </div>
      ) : (
        <div className={style.wrapper}>
          <EmptyPlaceholder content={content} action={goToMain} />
        </div>
      )}
    </div>
  );
};
