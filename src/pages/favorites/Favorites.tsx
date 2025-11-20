import { useReduxSelector } from "../../hooks/userRedux/UseRedux";
import { Empty } from "antd";

const Favorites = () => {
  const favorites = useReduxSelector((state) => state.product_slice.favorites);
  return (
    <div className="w-[90%] m-auto my-[50px]">
      <h1 className="text-3xl font-bold mb-5 text-[#46A358]">Favorites</h1>
      {favorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <Empty description="No favorites yet" />
          <p className="text-gray-500">You haven't liked any products yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {favorites.map((item) => (
            <div key={item._id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img src={item.main_image} alt={item.title} className="w-32 h-32 object-cover rounded mb-3" />
              <h2 className="font-bold text-lg mb-1 text-[#3d3d3d]">{item.title}</h2>
              <p className="text-[#46A358] font-bold text-base">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
