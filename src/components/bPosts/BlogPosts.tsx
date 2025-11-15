function BlogPosts() {
  return (
    <>
        <div className="my-[50px]">
          <div className="flex flex-col justify-center items-center gap-2.5 mb-4">
            <h1 className='font-bold text-[30px] leading-[53%] text-center text-[#3d3d3d] max-[400px]:text-[20px]'>Our Blog Posts</h1>
            <p className="font-normal text-[14px] leading-[171%] text-center text-[#727272] max-[400px]:leading-[120%]">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </div>
          <div className="grid grid-cols-4 gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1">
            <div className="flex flex-col gap-2 group justify-between">
              <div className="flex justify-center items-center h-[200px] overflow-hidden rounded-md">
                <img className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out" src="https://green-shop-otabek.vercel.app/assets/1-Ch9JE0GV.png" alt="" />
              </div>
              <p className="font-medium text-[14px] leading-[114%] text-[#46a358] max-[540px]:text-[12px]">September 12 | Read in 6 minutes</p>
              <h3 className="font-bold text-[20px] leading-[130%] text-[#3d3d3d] max-[540px]:text-[18px]">Cactus & Succulent Care Tips</h3>
              <p className="font-normal text-[14px] leading-[127%] text-[#727272]">Cacti are succulents are easy care plants for any home or patio.</p>
              <button className="text-[#3d3d3d] flex justify-start items-center gap-2.5 hover:text-[#46a358]">Read More →</button>
            </div>
            <div className="flex flex-col gap-2 group justify-between">
              <div className="flex justify-center items-center h-[200px] overflow-hidden rounded-md">
                <img className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out" src="https://green-shop-otabek.vercel.app/assets/1-Ch9JE0GV.png" alt="" />
              </div>
              <p className="font-medium text-[14px] leading-[114%] text-[#46a358] max-[540px]:text-[12px]">September 12 | Read in 6 minutes</p>
              <h3 className="font-bold text-[20px] leading-[130%] text-[#3d3d3d] max-[540px]:text-[18px]">Cactus & Succulent Care Tips</h3>
              <p className="font-normal text-[14px] leading-[127%] text-[#727272]">Cacti are succulents are easy care plants for any home or patio.</p>
              <button className="text-[#3d3d3d] flex justify-start items-center gap-2.5 hover:text-[#46a358]">Read More →</button>
            </div>
            <div className="flex flex-col gap-2 group justify-between">
              <div className="flex justify-center items-center h-[200px] overflow-hidden rounded-md">
                <img className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out" src="https://green-shop-otabek.vercel.app/assets/1-Ch9JE0GV.png" alt="" />
              </div>
              <p className="font-medium text-[14px] leading-[114%] text-[#46a358] max-[540px]:text-[12px]">September 12 | Read in 6 minutes</p>
              <h3 className="font-bold text-[20px] leading-[130%] text-[#3d3d3d] max-[540px]:text-[18px]">Cactus & Succulent Care Tips</h3>
              <p className="font-normal text-[14px] leading-[127%] text-[#727272]">Cacti are succulents are easy care plants for any home or patio.</p>
              <button className="text-[#3d3d3d] flex justify-start items-center gap-2.5 hover:text-[#46a358]">Read More →</button>
            </div>
            <div className="flex flex-col gap-2 group justify-between">
              <div className="flex justify-center items-center h-[200px] overflow-hidden rounded-md">
                <img className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out" src="https://green-shop-otabek.vercel.app/assets/1-Ch9JE0GV.png" alt="" />
              </div>
              <p className="font-medium text-[14px] leading-[114%] text-[#46a358] max-[540px]:text-[12px]">September 12 | Read in 6 minutes</p>
              <h3 className="font-bold text-[20px] leading-[130%] text-[#3d3d3d] max-[540px]:text-[18px]">Cactus & Succulent Care Tips</h3>
              <p className="font-normal text-[14px] leading-[127%] text-[#727272]">Cacti are succulents are easy care plants for any home or patio.</p>
              <button className="text-[#3d3d3d] flex justify-start items-center gap-2.5 hover:text-[#46a358]">Read More →</button>
            </div>
          </div>
        </div>
    </>
  )
}

export default BlogPosts
