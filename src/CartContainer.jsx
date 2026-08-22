import CartItem from "./CartItem";
import { useGlobalContext } from "./contexts/GlobalContext";
import { CiTrash } from "react-icons/ci";

const CartContainer = () => {
  const { cart, clearCart, totalCost } = useGlobalContext();
  const cartArray = Array.from(cart.entries());

  if (cartArray.length === 0) {
    return (
      <section className="empty-cart">
        <header>
          <h4>سبد خریدتان خالی است</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* items */}
      <div className="cart-items">
        {cartArray.map((cartItem) => {
          const [id, item] = cartItem;
          return <CartItem key={id} {...item} />;
        })}
      </div>
      {/* checkout info */}
      <footer>
        <div className="cart-footer">
          <h5 className="cart-total">مجموع سبد خرید</h5>
          <span>{totalCost.toLocaleString("fa-IR")} تومان</span>
          <button className="btn go-to-checkout">ثبت سفارش</button>
          <div className="remove-all">
            <button className="btn btn-remove-all" onClick={clearCart}>
              <CiTrash />
              خالی کردن سبد خرید
            </button>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default CartContainer;
