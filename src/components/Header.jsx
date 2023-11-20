import MenuItems from "@/components/ManuItems";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
function Header() {
  return (
    <div className=" flex items-center h-20 lg:h-screen lg:items-start lg:w-36 fixed inset-0 z-20">
      <div className="flex lg:flex-col px-2 lg:py-4 h-fit lg:h-full my-auto justify-between w-full">
        <button
          className="border rounded-xl px-2 lg:px-3 py-1 tracking-wide lg:tracking-wider shadow-xl text-sm lg:mt-16 lg:mx-auto text-theme-yellow border-theme-yellow"
          style={{
            backdropFilter: "blur(6px)",
            "-webkitBackdropFilter": "blur(6px)",
          }}
        >
          לפגישת יעוץ חינם
        </button>
        <div className="flex items-center flex-col gap-10 ">
          <ul className="hidden lg:flex flex-col gap-1 font-extralight ">
            <MenuItems />
          </ul>
          {/* when changing to real logo - remove top 5!!! */}
          <Link
            id="logo"
            className="font-serif font-extralight text-3xl absolute right-[46%] top-5"
            href={"/"}
          >
            logo
          </Link>
        </div>
        <MobileMenu />
      </div>
    </div>
  );
}

export default Header;
