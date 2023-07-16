import { useDispatch, useSelector } from "react-redux";
import { clearCart, closeCart } from "../../store/cartSlice";
import { addOrder, confirmOrder } from "../../store/orderSlice";
import { CartItem } from "../CartItem/CartItem";
import { EmptyPlaceholder } from "../EmptyPlaceholder/EmptyPlaceholder";
import style from "./Cart.module.scss";

export const Cart = () => {
  const { cart, total } = useSelector((state) => state.cart);
  const order = useSelector((state) => state.order.confirm);

  const dispatch = useDispatch();

  const closeCartAction = () => {
    dispatch(closeCart());
    document.body.className = "";
  };

  const createOrder = () => {
    dispatch(addOrder(cart));
    dispatch(clearCart());
    dispatch(confirmOrder());
  };

  const tax = (total * 5) / 100;

  const emptyContent = {
    img: "/img/emptyCart.png",
    title: "Корзина пустая",
    text: "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.",
  };

  const orderContent = {
    img: "/img/orderConfirm.png",
    title: "Заказ оформлен!",
    text: "Ваш заказ #18 скоро будет передан курьерской доставке",
  };

  return (
    <div id="cart" className={style.cart}>
      <h3 className={style.cartTitle}>Корзина</h3>
      {order ? (
        <div className={style.wrapper}>
          <EmptyPlaceholder content={orderContent} action={closeCartAction} />
        </div>
      ) : (
        <>
          {cart.length ? (
            <div className={style.cartFull}>
              <div className={style.cartItems}>
                {cart.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
              <div>
                <div className={style.cartTotal}>
                  <span>Итого:</span>
                  <div></div>
                  <b>{total.toLocaleString()} тнг.</b>
                </div>
                <div className={style.cartTax}>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{tax.toLocaleString()} тнг.</b>
                </div>
                <button className={style.cartOrderBtn} onClick={createOrder}>
                  Оформить заказ
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7H14.7143"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.71436 1L14.7144 7L8.71436 13"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <div className={style.cartEmpty}>
              <EmptyPlaceholder
                content={emptyContent}
                action={closeCartAction}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};
