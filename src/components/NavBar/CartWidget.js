import { BsFillBasket2Fill } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../Cart/CartContext";

const CartWidget = () => {
  const ctx = useContext(CartContext);

  return (
    <div>
      <BsFillBasket2Fill />
      <span>{ctx.totalProducts() || ""}</span>
    </div>
  );
};

export default CartWidget;