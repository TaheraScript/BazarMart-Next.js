import Image from "next/image";

const Banner = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
   <div className=" mx-auto rounded-2xl m-5 bg-white flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-4">
     
      <div>
         <p className="inline-block w-fit px-3 py-1 mt-2 text-xs sm:text-sm font-medium text-[#1d271f] bg-[#e1f1e7] border border-[#cfe5d7] rounded-full">
        {date}
      </p>
      <h1 className="text-[36px] font-bold">আজকের বাজারের দাম এক নজরে</h1>
      <p className="text-[16px] mt-3 mb-5 font-normal text-[#5f6761]">চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-<br />সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
      <button className="btn btn-sm rounded border-none bg-[#05893E] px-5 mb-13 font-medium text-white shadow-md ">সব পণ্য দেখুন</button>
      </div>
      <Image src="/bazar-hero.png" height={300} width={250} alt="a basket with full of bazar"></Image>
    </div>
  );
};

export default Banner;