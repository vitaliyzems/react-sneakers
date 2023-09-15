import style from './Product.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../store/cartSlice';
import { toggleFav } from '../../store/favSlice';
import { confirmOrder } from '../../store/orderSlice';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const fav = useSelector((state) => state.fav.fav);
  const cart = useSelector((state) => state.cart.cart);

  const isFav = fav.includes(product);
  const isInCart = cart.find((item) => item.id === product.id);

  const addToCart = (product) => {
    dispatch(addItem(product));
    dispatch(confirmOrder('false'));
  };

  return (
    <div className={style.product}>
      <button
        className={style.productFav}
        onClick={() => dispatch(toggleFav(product))}
      >
        <svg
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5849 3.22311C14.3615 2.7098 14.0394 2.24464 13.6365 1.85368C13.2333 1.46155 12.758 1.14993 12.2363 0.935761C11.6954 0.712803 11.1152 0.59868 10.5295 0.600018C9.70772 0.600018 8.90596 0.823295 8.20921 1.24504C8.04253 1.34593 7.88418 1.45674 7.73416 1.57748C7.58414 1.45674 7.42579 1.34593 7.2591 1.24504C6.56236 0.823295 5.7606 0.600018 4.93884 0.600018C4.3471 0.600018 3.7737 0.712483 3.23198 0.935761C2.70858 1.15077 2.23686 1.46005 1.83181 1.85368C1.42843 2.2442 1.10619 2.70947 0.883373 3.22311C0.65168 3.75732 0.533333 4.32461 0.533333 4.90844C0.533333 5.45919 0.646679 6.0331 0.871705 6.61693C1.06006 7.10483 1.33009 7.61092 1.67513 8.12198C2.22186 8.93074 2.97361 9.77423 3.90705 10.6293C5.4539 12.0467 6.98574 13.0258 7.05075 13.0655L7.44579 13.3169C7.62081 13.4277 7.84584 13.4277 8.02086 13.3169L8.4159 13.0655C8.48091 13.0242 10.0111 12.0467 11.5596 10.6293C12.493 9.77423 13.2448 8.93074 13.7915 8.12198C14.1366 7.61092 14.4083 7.10483 14.5949 6.61693C14.82 6.0331 14.9333 5.45919 14.9333 4.90844C14.935 4.32461 14.8166 3.75732 14.5849 3.22311Z"
            fill={isFav ? '#FF8585' : '#ECECEC'}
          />
        </svg>
      </button>
      <img src={product.img} alt="" />
      <p className={style.productName}>{product.name}</p>
      <div className={style.productPrice}>
        <p>
          <span>ЦЕНА:</span>
          {product.price.toLocaleString()} тнг.{' '}
          {isInCart && <small>&times; {isInCart?.quantity}</small>}
        </p>
        <button
          style={isInCart ? { background: '#89F09C' } : { background: '' }}
          className={style.productAdd}
          onClick={() => addToCart(product)}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z"
              fill={isInCart ? '#FFFFFF' : '#D3D3D3'}
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export { Product };
