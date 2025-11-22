import { useLocation, useParams } from "react-router-dom";
import { useReduxSelector, useReduxDispatch } from "../../hooks/userRedux/UseRedux";
import { getData } from "../../redux/product-slice/ProductSlice";
import { notificationApi } from "../../generic/notification/Notafication";

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const stateProduct = (location.state as any) || null;
  const favorites = useReduxSelector((s) => s.product_slice.favorites);
  const cart = useReduxSelector((s) => s.product_slice.data);
  const all = [...favorites, ...cart];
  const productFromStore = all.find((p: any) => p._id === id) || null;
  const product = stateProduct || productFromStore;
  const dispatch = useReduxDispatch();
  const notify = notificationApi();

  if (!product) {
    return (
      <div className="w-[90%] m-auto my-[50px] text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <p className="text-gray-500 mt-2">This product may be unavailable.</p>
      </div>
    );
  }

  return (
    <div className="w-[90%] m-auto my-[50px]">
      <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-1">
        <div>
          <img src={product.main_image} alt={product.title} className="w-full h-[400px] object-cover rounded" />
        </div>
        <div className="col-span-2">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-[#46A358] font-bold text-2xl mb-4">${product.price}</p>
          {product.discount && (
            <p className="text-sm text-[#A5A5A5] line-through mb-2">{product.discount_price}</p>
          )}
          {product.description && <p className="text-gray-700 mb-4">{product.description}</p>}
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                dispatch(getData(product));
                notify("add_to_cart");
              }}
              className="bg-[#46A358] text-white px-6 py-2 rounded-md hover:bg-[#3a8e47] transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
