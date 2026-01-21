import { useLocation, useParams } from "react-router-dom";
import { useReduxSelector, useReduxDispatch } from "../../hooks/userRedux/UseRedux";
import { getData, addFavorite, removeFavorite } from "../../redux/product-slice/ProductSlice";
import { notificationApi } from "../../generic/notification/Notafication";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useState } from "react";

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
    <div className="w-[90%] m-auto my-[60px]">

      {/* GRID → GreenShop original */}
      <div className="grid grid-cols-[120px_500px_1fr] gap-[10px] max-lg:grid-cols-1">

        {/* LEFT THUMBNAILS */}
        <div className="flex justify-between flex-col gap-4">
          {images.map((img: string, idx: number) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(idx)}
              className={`w-[100px] h-[100px] border cursor-pointer overflow-hidden transition
              ${selectedImage === idx ? "border-[#46A358]" : "border-gray-300"}`}
            >
              <img src={img} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* MAIN IMAGE */}
        <div className="border border-gray-300 h-[500px] flex items-center justify-center bg-white">
          <img
            src={images[selectedImage]}
            alt={product.title}
            className="max-w-[80%] max-h-[80%] object-contain"
          />
        </div>

        {/* RIGHT INFO */}
        <div className="ml-[50px]">

          <h1 className="text-[28px] font-medium text-[#3D3D3D] mb-1">
            {product.title}
          </h1>

          <p className="text-[18px] text-[#46A358] font-semibold mb-3">
            ${product.price}
          </p>

          {product.short_description && (
            <p className="text-[#727272] text-[14px] leading-6 mb-4">
              {product.short_description}
            </p>
          )}
          <div className="mb-4">
            <p className="text-[#3D3D3D] font-medium mb-2">Size:</p>
            <div className="flex text-[#3D3D3D] items-center gap-3">
              {["S", "M", "L", "XL"].map((s) => (
                <div
                  key={s}
                  className="w-[22px] h-[22px] rounded-full border cursor-pointer"
                ></div>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mb-6">
            <button className="bg-[#46A358] text-white w-[130px] h-[40px] rounded-md text-sm font-semibold">
              BUY NOW
            </button>

            <button
              onClick={() => {
                dispatch(getData(product));
                notify("add_to_cart");
              }}
              className="border-2 border-[#46A358] text-[#46A358] w-[120px] h-[40px] rounded-md text-sm font-semibold"
            >
              Add To Cart
            </button>

            <button
              onClick={() => {
                isFavorite
                  ? dispatch(removeFavorite(product._id))
                  : dispatch(addFavorite(product));

                notify(isFavorite ? "remove_from_favorites" : "add_to_favorites");
              }}
              className="border-2 border-[#46A358] w-[40px] h-[40px] rounded-md flex items-center justify-center text-[#46A358]"
            >
              {isFavorite ? <HeartFilled /> : <HeartOutlined />}
            </button>
          </div>

          <div className="text-sm text-[#727272] space-y-1">
            <p><span className="font-semibold text-[#3D3D3D]">SKU:</span> {product._id}</p>
            <p><span className="font-semibold text-[#3D3D3D]">Categories:</span> {product.category}</p>
            <p><span className="font-semibold text-[#3D3D3D]">Tags:</span> {product.tags?.join(", ")}</p>
          </div>

        </div>
      </div>

      {/* DESCRIPTION */}
      <h2 className="text-[18px] font-semibold mt-12 border-b-[2px] border-[#46A358] pb-2">
        Product Description
      </h2>

      <p className="text-[#727272] mt-4 leading-6">
        {product.description || ""}
      </p>

    </div>
  );
};

export default ProductDetails;
