import { CiShoppingCart } from "react-icons/ci";
import logo from "./assets/logo/band9logo.png";
import { useGlobalContext } from "./contexts/GlobalContext";
const Navbar = () => {
  const { totalAmount } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-title">
          <img src={logo} alt="logo" className="logo" />
          <h4>سبد خرید شما</h4>
        </div>
        <div className="nav-container">
          <CiShoppingCart className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">
              {totalAmount.toLocaleString("fa-IR")}
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
