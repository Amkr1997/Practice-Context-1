import { useCartContext } from "../contexts/CartContext";

const CartStatus = () => {
  const { cartItems } = useCartContext();

  return (
    <>
      <span className="bg-primary-subtle py-1 px-2 text-dark rounded-5">
        {cartItems.length}
      </span>
    </>
  );
};

export default CartStatus;
