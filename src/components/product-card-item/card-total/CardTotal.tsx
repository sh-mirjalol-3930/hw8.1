import { Form } from "antd";
import { Link } from "react-router-dom";
import { useReduxSelector } from "../../../hooks/userRedux/UseRedux";
import { useRef } from "react";
import { useAxios } from "../../../hooks/useAxios/UseAxios";
import { useDispatch } from "react-redux";
import { getCouponCode } from "../../../redux/product-slice/ProductSlice";

const CartTotal = () => {
  const cupon_title_style = "text-[#3D3D3D] text-[15px] font-normal";
  const { data, coupon } = useReduxSelector((state) => state.product_slice);
  const couponRef = useRef<HTMLInputElement>(null);

  console.log(coupon);
  const totalPrice = data.reduce(
    (acc, value) => (acc += value.userPrice as number),
    16
  );
  const dispatch = useDispatch();

  const axios = useAxios();

  const getCoupon = () => {
    axios({
      url: "features/coupon",
      params: {
        coupon_code: couponRef.current?.value,
      },
    }).then((res) => dispatch(getCouponCode(res.data.data.discount_for)));
  };

  return (
    <div className="top-[100px] sticky">
      <div className="flex border-b-[1px] border-[#46A358]">
        <h2 className="pb-[9px] text-[#3D3D3D] font-bold text-[18px]">
          Card total
        </h2>
      </div>
      <Form className="flex h-[40px] mt-[35px]">
        <input
          ref={couponRef}
          name="coupon"
          placeholder="Enter coupon code here..."
          className="border w-4/5  border-[#46A358] pl-[15px] placeholder:font-light rounded-l-lg rounded-r-none outline-none text-[18px] text-black font-normal"
        />
        <button
          onClick={getCoupon}
          className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-1/5 rounded-l-none "
        >
          <span> Apply</span>
        </button>
      </Form>
      <div className="mt-[20px]">
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${cupon_title_style}`}>Subtotal</h3>
          <h2 className="text-[#3D3D3D] text-[18px] font-medium">$</h2>
        </div>
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${cupon_title_style}`}>Coupon Discount</h3>
          <h2 className="text-[#3D3D3D] text-[15px]">0$</h2>
        </div>
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${cupon_title_style}`}>Shiping</h3>
          <h2 className="text-[#3D3D3D] text-[18px] font-medium">$16.00</h2>
        </div>
      </div>
      <div>
        <div className="flex justify-between mt-[20px]">
          <h2 className="text-[#3D3D3D] text-[16px] font-bold">Total:</h2>
          <h1 className="text-[#46A358] text-[18px] font-bold">
            {coupon ? (
              <div>
                $
                {(
                  Number(totalPrice?.toFixed(2)) -
                  (Number(totalPrice?.toFixed(2)) * coupon) / 100
                ).toFixed(2)}
              </div>
            ) : (
              <div>${totalPrice?.toFixed(2)}</div>
            )}

            {coupon && (
              <span className="line-through">${totalPrice?.toFixed(2)}</span>
            )}
          </h1>
        </div>
        <button className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-full h-[40px] mt-[30px]">
          Proceed To Checkout
        </button>
        <Link to={"/"} className="flex justify-center">
          <button className="mt-[14px] text-[#46A358] cursor-pointer">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartTotal;
