import { Modal } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/userRedux/UseRedux";
import { profileModalVisibilityConf } from "../../../redux/modal-slice/ModalSlice";
import Cookies from "js-cookie";

const Profile = () => {
  const dispatch = useReduxDispatch();
  const { profileModalVisibility } = useReduxSelector((state) => state.modalSlice);
  const userCookie = Cookies.get("user");
  const user = userCookie ? JSON.parse(userCookie) : null;
  const favorites = useReduxSelector((state) => state.product_slice.favorites);

  const handleLogout = () => {
    Cookies.remove("user");
    Cookies.remove("token");
    dispatch(profileModalVisibilityConf());
    window.location.reload();
  };

  return (
    <Modal
      title={<div className="flex items-center gap-2"><UserOutlined /> Profile</div>}
      open={profileModalVisibility}
      onCancel={() => dispatch(profileModalVisibilityConf())}
      footer={null}
      centered
    >
      {user ? (
        <div className="flex flex-col gap-4">
          <div className="bg-[#f2f2f2] p-4 rounded-md">
            <h3 className="text-[#46A358] font-bold mb-2">User Information</h3>
            <div className="flex flex-col gap-2">
              <p><span className="font-bold">Name:</span> {user?.name}</p>
              <p><span className="font-bold">Email:</span> {user?.email}</p>
              {user?.surname && <p><span className="font-bold">Surname:</span> {user?.surname}</p>}
            </div>
          </div>
          <div className="bg-[#f2f2f2] p-4 rounded-md mt-2">
            <h3 className="text-[#46A358] font-bold mb-2">Liked Products</h3>
            {favorites.length === 0 ? (
              <p className="text-gray-500">No liked products yet.</p>
            ) : (
              <ul className="flex flex-col gap-2">
                {favorites.map((item) => (
                  <li key={item._id} className="flex items-center gap-2">
                    <img src={item.main_image} alt={item.title} className="w-8 h-8 rounded" />
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md flex items-center justify-center gap-2 transition"
          >
            <LogoutOutlined /> Logout
          </button>
        </div>
      ) : (
        <p className="text-center">User not found</p>
      )}
    </Modal>
  );
};

export default Profile;
