import { useNavigate } from "react-router-dom";
import {
  UploadOutlined,
  HomeOutlined,
  HeartOutlined,
  FileTextOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
// (no redux selectors needed here)
import Cookies from "js-cookie";
import { useState } from "react";

const Profile = () => {
  const navigate = useNavigate();
  
  const userCookie = Cookies.get("user");
  const user = userCookie ? JSON.parse(userCookie) : null;

  const [form, setForm] = useState(() => ({
    name: user?.name || "",
    surname: user?.surname || "",
    email: user?.email || "",
    phone_number: user?.phone_number || "",
    username: user?.username || "",
    profile_photo: user?.profile_photo || "",
  }));

  const handleChange = (key: string, value: any) => setForm((s) => ({ ...s, [key]: value }));

  const handleSave = () => {
    const updated = { ...user, ...form };
    Cookies.set("user", JSON.stringify(updated));
    alert("Profile saved");
  };

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
        <button onClick={() => navigate("/")} className="bg-[#46A358] text-white px-6 py-2 rounded-md hover:bg-[#3a8e47] transition">
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="w-[90%] m-auto my-[40px]">
      <div className="flex gap-8">
        {/* Sidebar - left */}
        <aside className="w-1/4 bg-transparent">
          <div className="bg-[#f2f2f2] p-6 rounded mb-6 text-[#3d3d3d]">
            <h3 className="font-bold mb-4">Account Settings</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 text-[#3d3d3d] bg-[#46A358] text-white px-3 py-2 rounded"><HomeOutlined /> Profile</li>
              <li className="flex items-center gap-3 text-[#6b6b6b]"><FileTextOutlined /> My Products</li>
              <li className="flex items-center gap-3 text-[#6b6b6b]"><HomeOutlined /> Address</li>
              <li className="flex items-center gap-3 text-[#6b6b6b]"><HeartOutlined /> Wishlist</li>
              <li className="flex items-center gap-3 text-red-500 cursor-pointer" onClick={handleLogout}><LogoutOutlined/> Log out</li>
            </ul>
          </div>
        </aside>

        {/* Main form - right */}
        <main className="flex-1">
          <div className="bg-white p-6 rounded shadow mb-6">
            <h2 className="text-2xl font-bold mb-4">Account details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">First name</label>
                <input value={form.name} onChange={(e) => handleChange('name', e.target.value)} className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block text-sm mb-1">Last name</label>
                <input value={form.surname} onChange={(e) => handleChange('surname', e.target.value)} className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input value={form.email} onChange={(e) => handleChange('email', e.target.value)} className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block text-sm mb-1">Phone</label>
                <input value={form.phone_number} onChange={(e) => handleChange('phone_number', e.target.value)} className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block text-sm mb-1">Username</label>
                <input value={form.username} onChange={(e) => handleChange('username', e.target.value)} className="w-full border px-3 py-2 rounded" />
              </div>
              <div>
                <label className="block text-sm mb-1">Profile photo URL</label>
                <div className="flex gap-2 items-center">
                  <input value={form.profile_photo} onChange={(e) => handleChange('profile_photo', e.target.value)} className="w-full border px-3 py-2 rounded" />
                  <button className="px-3 py-2 bg-gray-100 border rounded"><UploadOutlined /></button>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button onClick={handleSave} className="bg-[#46A358] text-white px-6 py-2 rounded w-48">Save changes</button>
            </div>
          </div>

          {/* Quick stats / promos below (optional) */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-[#f2f2f2] p-6 rounded text-center">
              <h4 className="font-bold">Garden Care</h4>
              <p className="text-sm text-gray-600">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
            </div>
            <div className="bg-[#f2f2f2] p-6 rounded text-center">
              <h4 className="font-bold">Plant Reservation</h4>
              <p className="text-sm text-gray-600">Reserve your favourite plants easily.</p>
            </div>
            <div className="bg-[#f2f2f2] p-6 rounded text-center">
              <h4 className="font-bold">Watering Garden</h4>
              <p className="text-sm text-gray-600">Tips and guides for watering your garden.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
