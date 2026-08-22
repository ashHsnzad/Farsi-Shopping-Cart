import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from "react-icons/md";
import { useGlobalContext } from "./contexts/GlobalContext";
const CartItem = ({ id, img, title, price, amount }) => {
  const { removeItem, increaseAmount, decreaseAmount, totalCost } =
    useGlobalContext();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div className="item-info">
        <h5>{title}</h5>
        <span className="item-price">
          {price.toLocaleString("fa-IR")} تومان
        </span>
        {/* removing each item */}
        <button className="remove-btn" onClick={() => removeItem(id)}>
          حذف
        </button>
      </div>
      <div className="increase-decrease">
        <h5>{(amount * price).toLocaleString("fa-IR")} تومان</h5>
        <div className="up-down-btns">
          {/* increase amount */}
          <button className="amount-btn" onClick={() => increaseAmount(id)}>
            <MdOutlineArrowDropUp className="amount-icon" />
          </button>
          {/* amount */}
          <span className="amount">{amount.toLocaleString("fa-IR")}</span>
          {/* decrease amount */}
          <button className="amount-btn" onClick={() => decreaseAmount(id)}>
            <MdOutlineArrowDropDown className="amount-icon" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
