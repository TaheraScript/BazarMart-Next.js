import { Icon } from "@iconify/react";
import NavLinks from "./NavLinks";

const date = new Date().toLocaleDateString("bn-BD", {
  dateStyle: "full",
});

const Header = () => {
  return (
    <header className="w-full border-b border-gray-100 max-w-7xl mx-auto">
      <div className=" flex items-center justify-between gap-2 px-4 py-3 sm:gap-3 sm:px-6 lg:px-8 lg:py-4">
        
        <div className="flex items-center gap-2 ">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#05893E] sm:h-10 sm:w-10 lg:h-12 lg:w-12">
          <Icon
            icon="fluent-emoji-flat:shopping-cart"
            className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7"
          />
        </div>

       
        <div className="min-w-0">
          <h1 className="text-base font-semibold sm:text-lg lg:text-xl">
            বাজার দর
          </h1>
          <p className="truncate text-[10px] text-[#1d271f] sm:text-xs lg:text-sm">
            {date}
          </p>
        </div>
        </div>
        <div>
          <button className="btn btn-ghost btn-sm rounded px-4 font-medium text-[#1D271F] hover:bg-gray-100 ">সাইন ইন</button>
        <button className="btn btn-sm rounded border-none bg-[#05893E] px-5 font-medium text-white shadow-md ">সাইন আপ</button>
        </div>
      </div>
      <NavLinks></NavLinks>
    </header>
  );
};

export default Header;