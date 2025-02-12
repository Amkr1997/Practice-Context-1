import { useCartContext } from "../contexts/CartContext";

const ProductListing = () => {
  const { productItems, addToCart } = useCartContext();

  return (
    <>
      <main className="container mt-5">
        <div className="row">
          {productItems.map((prod) => {
            return (
              <div className="col-sm-6 col-md-4 col-lg-3 my-2" key={prod.id}>
                <div className="card">
                  <img
                    src={`https://placehold.co/600x400/${prod.color}/white`}
                    alt="tshirt-image"
                  />
                  <div className="card-body">
                    <h2 className="card-title">{prod.name}</h2>
                    <p className="card-text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Temporibus eum placeat unde, autem aliquid magnam.
                    </p>
                    <h4 className="card-text">₹{prod.price}</h4>
                    <button
                      onClick={() => addToCart(prod)}
                      className="btn btn-outline-danger w-100 btn-sm"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default ProductListing;
