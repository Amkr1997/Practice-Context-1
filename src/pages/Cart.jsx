import { useCartContext } from "../contexts/CartContext";

const Cart = () => {
  const { cartItems } = useCartContext();

  return (
    <>
      <main className="container">
        <h2 className="py-4 text-center">Cart Items</h2>
        <div className="row">
          {cartItems.length > 0 ? (
            cartItems.map((item) => {
              return (
                <div
                  className="col-sm-6 col-md-4 col-lg-3 my-2 w-75 mx-auto"
                  key={item.id}
                >
                  <div className="card w-100">
                    <div className="card-body d-flex align-items-center justify-content-around w-100">
                      <img
                        src={`https://placehold.co/120x80/${item.color}/white`}
                        alt="tshirt-image"
                      />
                      <h2 className="card-title">{item.name}</h2>
                      <h4 className="card-text">₹{item.price}</h4>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <h1 className="text-center mt-5">No Items in Cart</h1>
          )}
        </div>
      </main>
    </>
  );
};

export default Cart;
