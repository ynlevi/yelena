import Image from "next/image";
function CTA() {
  return (
    <div className="mx-auto lg:w-full lg:px-[2.25rem] w-11/12 lg:border-r-[.1px] border-gray-600 pb-10">
      <div className="flex flex-col lg:flex-row lg:justify-center gap-4  items-center py-10  lg:gap-12 ">
        <div className="relative h-80 w-80 ">
          <div className=" h-full w-full absolute rounded-full z-10 gradient-circle scale-105" />
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgTmE-cN53SCD3bvL4muxU3Sa1uCu5yO3H43NLVxx_s9OR4d0IwP5Obzl2D8_7H_w7PIw&usqp=CAU"
            alt="herzl"
            blurDataURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgTmE-cN53SCD3bvL4muxU3Sa1uCu5yO3H43NLVxx_s9OR4d0IwP5Obzl2D8_7H_w7PIw&usqp=CAU"
            fill={true}
            quality={100}
            className="object-cover rounded-full object-right-top "
          />
        </div>
        <div
          className="text-2xl tracking-widest text-center "
          style={{ textShadow: "var(--theme-light-dark) 1px 0 10px" }}
        >
          <h2>לך יֵשׁ חֲלוֹמוֹת,</h2>
          <h2>אֲנַחְנוּ כָּאן כְּדֵי לְהַגְשִׁים אוֹתָם.</h2>
        </div>
      </div>
      <h2 className="text-2xl tracking-wider mb-4 text-theme-light-dark ">
        השינוי מתחיל מכאן. בהצלחה!
      </h2>
      <form
        // method="post"
        // acceptCharset="UTF-8"
        className={`flex w-full text-lg gap-2 md:gap-4 mx-auto mb-10 flex-col md:flex-row text-theme-dark`}
      >
        <input
          className={`w-full px-3 py-2 rounded-t-lg md:rounded-r-lg md:rounded-tl-none text-retiner focus:outline-none focus:ring-theme-yellow focus:ring-2 bg-rose-100 lg:bg-white  lg:hover:bg-rose-50 placeholder:text-thring-theme-yellow tracking-wide placeholder:text-theme-light-dark font-medium`}
          name="Name"
          id="name"
          type="text"
          placeholder={"השם שלך"}
        />
        <input
          className="w-full px-3 py-2 rounded-br-lg md:rounded-none focus:outline-none text-retiner focus:ring-theme-yellow focus:ring-2 bg-rose-100 lg:bg-white  lg:hover:bg-rose-50 placeholder:text-thring-theme-yellow placeholder:text-theme-light-dark font-medium"
          name="Tel"
          id="tel"
          type="tel"
          required
          dir="rtl"
          placeholder={"טלפון"}
        />

        <div className="mr-auto w-fit">
          <input
            className={`h-full px-2 py-2 bg-theme-yellow text-theme-dark font-extrabold rounded-b-lg cursor-pointer md:rounded-r-none md:rounded-l-lg  lg:hover:bottom-1 relative bottom-0 duration-300 tracking-wide`}
            type="submit"
            value={"אני רוצה שתחזרו אלי!"}
          />
          <div aria-hidden="true" className="aria-hidden:hidden">
            {/* <input
              type="text"
              name="_gotcha"
              tabIndex="-1"
              autoComplete="off"
            /> */}
          </div>
        </div>
      </form>
    </div>
  );
}
export default CTA;
