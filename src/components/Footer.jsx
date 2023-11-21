import Link from "next/link";

function Footer() {
  return (
    <div className=" relative z-40 lg:border-r-[.1px] lg:border-t-[0.1px] lg:mr-36 border-gray-600">
      <div className="text-sm w-fit mx-auto py-2 ">
        <Link href="https://ynlevi.github.io/portfolio/">
          hand-coded by{" "}
          <span className="text-theme-yellow">
            Levi's Digital Solutions for Small Business
          </span>{" "}
          2023 ©
        </Link>
      </div>
    </div>
  );
}

export default Footer;
