import { FaDiscord, FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <>
        <div className="w-[90%] m-auto">
            <div className="flex justify-between gap-[20px] py-[10px] max-[1326px]:flex-col max-[1326px]:gap-[30px]">
                <div className="grid grid-cols-3 gap-[15px] max-[930px]:grid-cols-1 *:max-[930px]:border *:max-[930px]:p-[15px] *:max-[930px]:border-[#e0e0e0] *:max-[930px]:rounded-md">
                    <div className="flex flex-col gap-[10px] items-start justify-between">
                        <img className="h-[70px] object-contain" src="https://green-shop-otabek.vercel.app/assets/1-Ctm6W3Jq.png" alt="" />
                        <b className="font-bold text-[17px] leading-[94%] text-[#3d3d3d]">Garden care</b>
                        <p className="font-normal text-[14px] leading-[127%] text-[#727272]">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                    </div>
                    <div className="flex flex-col gap-[10px] items-start justify-between">
                        <img className="h-[70px] object-contain" src="https://green-shop-otabek.vercel.app/assets/1-Ctm6W3Jq.png" alt="" />
                        <b className="font-bold text-[17px] leading-[94%] text-[#3d3d3d]">Garden care</b>
                        <p className="font-normal text-[14px] leading-[127%] text-[#727272]">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                    </div>
                    <div className="flex flex-col gap-[10px] items-start justify-between">
                        <img className="h-[70px] object-contain" src="https://green-shop-otabek.vercel.app/assets/1-Ctm6W3Jq.png" alt="" />
                        <b className="font-bold text-[17px] leading-[94%] text-[#3d3d3d]">Garden care</b>
                        <p className="font-normal text-[14px] leading-[127%] text-[#727272]">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[12px] flex-2/4 max-[1326px]:hidden">
                    <p className="font-bold text-[17px] leading-[94%] text-[#3d3d3d]">Would you like to join newsletters?</p>
                    <div className="flex justify-between items-center h-[35px] overflow-hidden rounded-md border border-[#46a358]">
                        <input type="text" placeholder="enter your email address..." className="h-full w-full outline-none px-2"/>
                        <button className="h-full px-[20px] text-white bg-[#46a358]">Join</button>
                    </div>
                    <p className="font-normal text-[14px] leading-[127%] text-[#727272]">We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours!</p>
                </div>
            </div>
            <div className="flex my-[20px]">
                <div className="flex flex-col gap-4 flex-1/4 max-[600px]:hidden">
                    <b className="mb-[15px] text-sm font-semibold text-gray-900 uppercase">My Account</b>
                    <ul className="text-gray-500 font-medium *:hover:text-[#46a358] *:cursor-pointer">
                        <li className="mb-4">About</li>
                        <li className="mb-4">Careers</li>
                        <li className="mb-4">Brand Center</li>
                        <li className="mb-4">Blog</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4 flex-1/4 max-[600px]:hidden">
                    <b className="mb-[15px] text-sm font-semibold text-gray-900 uppercase">Help & Guide</b>
                    <ul className="text-gray-500 font-medium *:hover:text-[#46a358] *:cursor-pointer">
                        <li className="mb-4">Discord Server</li>
                        <li className="mb-4">Twitter</li>
                        <li className="mb-4">Facebook</li>
                        <li className="mb-4">Contact Us</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4 flex-1/4 max-[600px]:hidden">
                    <b className="mb-[15px] text-sm font-semibold text-gray-900 uppercase">Categories</b>
                    <ul className="text-gray-500 font-medium *:hover:text-[#46a358] *:cursor-pointer">
                        <li className="mb-4">Privacy Policy</li>
                        <li className="mb-4">Licensing</li>
                        <li className="mb-4">Terms & Conditions</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4 flex-1/4 max-[600px]:hidden">
                    <b className="mb-[15px] text-sm font-semibold text-gray-900 uppercase">Download</b>
                    <ul className="text-gray-500 font-medium *:hover:text-[#46a358] *:cursor-pointer">
                        <li className="mb-4">iOS</li>
                        <li className="mb-4">Android</li>
                        <li className="mb-4">Windows</li>
                        <li className="mb-4"><img src="https://green-shop-otabek.vercel.app/assets/payment-CJ6HT73w.png" alt="" /></li>
                    </ul>
                </div>
            </div>
            <div className="px-4 py-6 md:flex md:items-center md:justify-between border-t border-gray-200">
                <p className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2025 GreenShop. All Rights Reserved.</p>
                <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                    <FaFacebookF className="text-[gray]" />
                    <FaDiscord className="text-[gray]"/>
                    <FaTwitter className="text-[gray]"/>
                    <FaGithub className="text-[gray]"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
