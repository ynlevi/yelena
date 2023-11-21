import Link from "next/link";
import Image from "next/image";
import Title from "./Title";
function Services() {
  return (
    <div className="lg:border-r-[.1px] border-gray-600 w-11/12 mx-auto lg:w-full lg:px-[2.25rem] ">
      <Title text={"השירותים שלנו"} />
      <ul className="py-6 flex justify-between lg:flex-row flex-col gap-8 xl:gap-[4.5rem] items-center flex-wrap">
        {services.map(({ name, link, img }) => (
          <li className=" h-80 w-80 lg:w-72 xl:h-80 max-w-full flex-grow relative overflow-hidden rounded-lg border-2 border-theme-yellow ">
            <Link href={link}>
              <Image
                src={img}
                blurDataURL={img}
                alt={name}
                fill={true}
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover lg:hover:scale-110 duration-700  "
              ></Image>
              <div
                className="absolute bottom-7 inset-x-0 text-center font-extrabold text-2xl tracking-wider text-theme-yellow pointer-events-none "
                style={{
                  textShadow: "var(--theme-dark) 1px 0 10px",
                }}
              >
                {name}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;

const services = [
  {
    name: "עיצוב ותכנון פנים",
    link: "#",
    img: "https://images.pexels.com/photos/19050701/pexels-photo-19050701/free-photo-of-large-windows-in-living-room.jpeg",
  },
  {
    name: "הום סטיילינג",
    link: "#",
    img: "https://images.pexels.com/photos/6035357/pexels-photo-6035357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "יעוץ לקראת שיפוץ",
    link: "#",
    img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];
