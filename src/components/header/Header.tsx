import { Link, useNavigate } from "react-router-dom";
import {
  BellOutlined,
  LoginOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";
import { useReduxDispatch, useReduxSelector } from "../../hooks/userRedux/UseRedux";
import { authorizationModalVisibltiyConf } from "../../redux/modal-slice/ModalSlice";
import Cookies from "js-cookie";

const Header = () => {
  const dispatch = useReduxDispatch();
  const navigate = useNavigate();
  const { data, favorites } = useReduxSelector((state) => state.product_slice);
  const userCookie = Cookies.get("user");
  const user = userCookie ? JSON.parse(userCookie) : null;
  return (
    <header className="border-b border-[#00800043] py-3">
      <div className="w-[90%] m-auto flex items-center justify-between">
        <div>
          <Link to={"/"}>
            <img
              src="https://green-shop-otabek.vercel.app/assets/logo-nyVMFuKc.svg"
              alt=""
            />
          </Link>
        </div>

        <div className="flex gap-5">
          <Link to={"/"}>Home</Link>
          <Link to={"/blog"}>Blog</Link>
        </div>
        <div className="flex items-center gap-5">
          <SearchOutlined className="text-[20px]" />
          <BellOutlined className="text-[20px]" />
          <Badge count={favorites.length} style={{ cursor: "pointer" }}>
            <HeartOutlined
              onClick={() => navigate("/favorites")}
              className="text-[20px] text-[#46A358]"
            />
          </Badge>
          <Badge count={data.length} style={{ cursor: "pointer" }}>
            <ShoppingCartOutlined
              onClick={() => navigate("/shop")}
              className="text-[20px]"
            />
          </Badge>
          {user ? (
            <button
              onClick={() => navigate("/profile")}
              className="text-white w-auto px-3 h-[35px] bg-[#46A358] flex items-center gap-1 justify-center rounded-md max-md:hidden cursor-pointer hover:bg-[#3a8e47] transition"
            >
              <UserOutlined />
              {user?.name}
            </button>
          ) : (
            <button
              onClick={() => dispatch(authorizationModalVisibltiyConf())}
              className="text-white w-[100px] h-[35px] bg-[#46A358] flex items-center gap-1 justify-center rounded-md max-md:hidden cursor-pointer hover:bg-[#3a8e47] transition"
            >
              <LoginOutlined />
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
