import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useReduxSelector, useReduxDispatch } from "../../hooks/userRedux/UseRedux";
import { getData, addFavorite, removeFavorite } from "../../redux/product-slice/ProductSlice";
import { notificationApi } from "../../generic/notification/Notafication";
import { HeartOutlined, HeartFilled, ShoppingCartOutlined, EyeOutlined, FireOutlined } from "@ant-design/icons";
import { useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const stateProduct = (location.state as any) || null;
  const favorites = useReduxSelector((s) => s.product_slice.favorites);
  const cart = useReduxSelector((s) => s.product_slice.data);
  const all = [...favorites, ...cart];
  const productFromStore = all.find((p: any) => p._id === id) || null;
  const product = stateProduct || productFromStore;
  const dispatch = useReduxDispatch();
  const notify = notificationApi();
  const [selectedImage, setSelectedImage] = useState(0);
  const isFavorite = favorites.some((p: any) => p._id === product?._id);

  if (!product) {
    return (
      <div className="w-[90%] m-auto my-[50px] text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <p className="text-gray-500 mt-2">This product may be unavailable.</p>
      </div>
    );
  }

  const images = product.detailed_images || [product.main_image];

  return (
    <div className="w-[90%] m-auto my-[50px]">
      {/* Main Product Section */}
      <div className="grid grid-cols-3 gap-8 mb-10 max-lg:grid-cols-1">
        {/* Images Section */}
        <div className="col-span-1">
          <div className="bg-[#f5f5f5] rounded-lg p-4 mb-4 flex items-center justify-center h-[400px]">
            <img
              src={images[selectedImage]}
              alt={product.title}
              className="w-full h-full object-contain"
            />
          </div>
          {images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {images.map((img: string, idx: number) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`cursor-pointer rounded border-2 overflow-hidden h-20 ${
                    selectedImage === idx ? "border-[#46A358]" : "border-gray-200"
                  }`}
                >
                  <img src={img} alt={`${idx}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Info Section */}
        <div className="col-span-2 max-lg:col-span-1">
          <div className="mb-4">
            <span className="bg-[#46A358] text-white text-xs px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-2 text-[#3d3d3d]">{product.title}</h1>

          {product.short_description && (
            <p className="text-[#727272] mb-4">{product.short_description}</p>
          )}

          {/* Price Section */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <p className="text-[#46A358] font-bold text-3xl">${product.price}</p>
              {product.discount && (
                <p className="text-[#A5A5A5] line-through text-xl">${product.discount_price}</p>
              )}
              {product.discount && (
                <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">
                  Sale
                </span>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6 bg-[#f2f2f2] p-4 rounded-lg">
            <div className="text-center">
              <EyeOutlined className="text-[#46A358] text-xl mb-2 block" />
              <p className="text-[#727272] text-sm">{product.views || 0} Views</p>
            </div>
            <div className="text-center">
              <FireOutlined className="text-[#46A358] text-xl mb-2 block" />
              <p className="text-[#727272] text-sm">{product.sold_times || 0} Sold</p>
            </div>
            <div className="text-center">
              <p className="text-[#46A358] font-bold text-lg">⭐ {product.rate || 0}</p>
              <p className="text-[#727272] text-sm">Rating</p>
            </div>
          </div>

          {/* Description */}
          {product.description && (
            <div className="mb-6 bg-white border-l-4 border-[#46A358] p-4 rounded">
              <h3 className="font-bold text-[#3d3d3d] mb-2">Description</h3>
              <p className="text-[#727272] leading-relaxed">{product.description}</p>
            </div>
          )}

          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="mb-6">
              <p className="font-bold text-[#3d3d3d] mb-2">Tags:</p>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag: string, idx: number) => (
                  <span
                    key={idx}
                    className="bg-[#f2f2f2] text-[#3d3d3d] text-sm px-3 py-1 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => {
                dispatch(getData(product));
                notify("add_to_cart");
              }}
              className="bg-[#46A358] text-white px-8 py-3 rounded-md hover:bg-[#3a8e47] transition font-bold flex items-center gap-2"
            >
              <ShoppingCartOutlined /> Add to Cart
            </button>
            <button
              onClick={() => {
                if (isFavorite) {
                  dispatch(removeFavorite(product._id));
                  notify("remove_from_favorites");
                } else {
                  dispatch(addFavorite(product));
                  notify("add_to_favorites");
                }
              }}
              className={`px-6 py-3 rounded-md font-bold flex items-center gap-2 transition ${
                isFavorite
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-gray-200 text-[#3d3d3d] hover:bg-gray-300"
              }`}
            >
              {isFavorite ? <HeartFilled /> : <HeartOutlined />}
              {isFavorite ? "Liked" : "Like"}
            </button>
          </div>

          {/* Product Meta */}
          <div className="text-sm text-[#727272] border-t pt-4">
            <p>Product ID: {product._id}</p>
            <p>Category: {product.category}</p>
            {product.created_at && (
              <p>Available since: {new Date(product.created_at).toLocaleDateString()}</p>
            )}
          </div>
        </div>
      </div>

      {/* Comments Section */}
      {product.comments && product.comments.length > 0 && (
        <div className="bg-white border-l-4 border-[#46A358] p-6 rounded-lg mb-10">
          <h2 className="text-2xl font-bold text-[#3d3d3d] mb-6">Comments ({product.comments.length})</h2>
          <div className="space-y-4">
            {product.comments.map((comment: any, idx: number) => (
              <div key={idx} className="bg-[#f2f2f2] p-4 rounded-lg">
                <p className="font-semibold text-[#3d3d3d]">{comment.author || "Anonymous"}</p>
                <p className="text-[#727272] text-sm mt-1">{comment.text || comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
