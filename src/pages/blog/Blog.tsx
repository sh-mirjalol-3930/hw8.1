const Blog = () => {
  return (
    <>
        <div className="w-[90%] m-auto flex flex-col items-center gap-[20px] my-[50px]">
            <img className="w-[100%] rounded-[20px]" src="https://green-shop-otabek.vercel.app/assets/blog-header-hi2KeX2m.png" alt="" />
            <h1 className="font-bold text-center text-6xl leading-[130%] max-[730px]:text-4xl max-[430px]:text-2xl mt-[20px]">Monetize your content <br /> with <span className="text-[#46A358]">GreenShop</span></h1>
            <p className="text-center w-[70%] leading-[140%] text-[#3d3d3d] font-medium max-[730px]:w-[100%] max-[730px]:font-normal max-[730px]:text-[14px]">GreenShop - a platform for buying and selling, publishing and monetizing all types of flowers: articles, notes, video, photos, podcasts or songs.</p>
            <button className="bg-[#46A358] rounded-md text-white p-[8px_25px] max-[335px]:w-full">Join GreenShop</button>
        </div>
    </>
  )
}

export default Blog
