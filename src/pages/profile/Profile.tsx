import { useNavigate } from "react-router-dom";
import { UserOutlined, LogoutOutlined, HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useReduxSelector } from "../../hooks/userRedux/UseRedux";
import Cookies from "js-cookie";

const Profile = () => {
  const navigate = useNavigate();
  const favorites = useReduxSelector((state) => state.product_slice.favorites);
  const cartItems = useReduxSelector((state) => state.product_slice.data);
  const userCookie = Cookies.get("user");
  const user = userCookie ? JSON.parse(userCookie) : null;

  const handleLogout = () => {
    Cookies.remove("user");
    Cookies.remove("token");
    window.location.href = "/";
  };

  if (!user) {
    return (
      <div className="w-[90%] m-auto my-[50px] flex flex-col items-center justify-center gap-4 min-h-[400px]">
        <h1 className="text-3xl font-bold text-[#3d3d3d]">Please Login</h1>
        <p className="text-gray-500">You need to login to view your profile.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-[#46A358] text-white px-6 py-2 rounded-md hover:bg-[#3a8e47] transition"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="w-[90%] m-auto my-[50px]">
      {/* User Information */}
      <div className="grid grid-cols-3 gap-8 mb-10 max-lg:grid-cols-1">
        {/* Profile Card */}
        <div className="bg-gradient-to-br from-[#46A358] to-[#3a8e47] text-white p-8 rounded-lg shadow-lg col-span-1">
          <div className="flex flex-col items-center gap-4">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <UserOutlined className="text-[40px] text-[#46A358]" />
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold">{user?.name}</h2>
              {user?.surname && <p className="text-sm opacity-90">{user?.surname}</p>}
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="flex flex-col gap-4 col-span-2 max-lg:col-span-1">
          <div className="bg-[#f2f2f2] p-6 rounded-lg">
            <h3 className="text-[#46A358] font-bold mb-2">Email</h3>
            <p className="text-[#3d3d3d]">{user?.email}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#f2f2f2] p-6 rounded-lg text-center">
              <HeartOutlined className="text-[#46A358] text-[24px] mb-2 block" />
              <p className="text-[#46A358] font-bold text-2xl">{favorites.length}</p>
              <p className="text-[#727272] text-sm">Liked Products</p>
            </div>
            <div className="bg-[#f2f2f2] p-6 rounded-lg text-center">
              <ShoppingCartOutlined className="text-[#46A358] text-[24px] mb-2 block" />
              <p className="text-[#46A358] font-bold text-2xl">{cartItems.length}</p>
              <p className="text-[#727272] text-sm">Cart Items</p>
            </div>
          </div>
        </div>
      </div>

      {/* Liked Products Section */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-[#3d3d3d] flex items-center gap-2">
            <HeartOutlined className="text-[#46A358]" /> Liked Products
          </h2>
          {favorites.length > 0 && (
            <button
              onClick={() => navigate("/favorites")}
              className="text-[#46A358] hover:underline text-sm"
            >
              View All →
            </button>
          )}
        </div>
        {favorites.length === 0 ? (
          <div className="bg-[#f2f2f2] p-8 rounded-lg text-center">
            <p className="text-gray-500 mb-3">No liked products yet.</p>
            <button
              onClick={() => navigate("/")}
              className="bg-[#46A358] text-white px-4 py-2 rounded-md hover:bg-[#3a8e47] transition text-sm"
            >
              Browse Products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {favorites.slice(0, 4).map((item) => (
              <div key={item._id} className="bg-white rounded-lg shadow p-4 border border-[#e0e0e0]">
                <img src={item.main_image} alt={item.title} className="w-full h-32 object-cover rounded mb-3" />
                <h3 className="font-bold text-sm mb-1 text-[#3d3d3d] truncate">{item.title}</h3>
                <p className="text-[#46A358] font-bold">${item.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Cart Items Section */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-[#3d3d3d] flex items-center gap-2">
            <ShoppingCartOutlined className="text-[#46A358]" /> Your Cart
          </h2>
          {cartItems.length > 0 && (
            <button
              onClick={() => navigate("/shop")}
              className="text-[#46A358] hover:underline text-sm"
            >
              View Full Cart →
            </button>
          )}
        </div>
        {cartItems.length === 0 ? (
          <div className="bg-[#f2f2f2] p-8 rounded-lg text-center">
            <p className="text-gray-500 mb-3">Your cart is empty.</p>
            <button
              onClick={() => navigate("/")}
              className="bg-[#46A358] text-white px-4 py-2 rounded-md hover:bg-[#3a8e47] transition text-sm"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="bg-white border border-[#e0e0e0] rounded-lg overflow-hidden">
            <div className="grid grid-cols-4 gap-4 p-4 bg-[#f2f2f2] font-bold text-[#3d3d3d] max-sm:hidden">
              <div>Product</div>
              <div className="text-center">Price</div>
              <div className="text-center">Qty</div>
              <div className="text-right">Total</div>
            </div>
            <div className="divide-y">
              {cartItems.map((item) => (
                <div key={item._id} className="grid grid-cols-4 gap-4 p-4 items-center max-sm:grid-cols-2 max-sm:gap-2">
                  <div className="flex items-center gap-2">
                    <img src={item.main_image} alt={item.title} className="w-12 h-12 object-cover rounded" />
                    <p className="text-sm font-medium text-[#3d3d3d] truncate">{item.title}</p>
                  </div>
                  <p className="text-center text-[#46A358] font-bold">${item.price}</p>
                  <p className="text-center text-[#3d3d3d]">{item.count}</p>
                  <p className="text-right text-[#46A358] font-bold">${item.userPrice?.toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Logout Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-md flex items-center justify-center gap-2 transition text-lg"
        >
          <LogoutOutlined /> Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
