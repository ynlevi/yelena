import Link from "next/link";
import Image from "next/image";
function Services() {
  return (
    <div className="lg:border-r-[.1px] border-gray-400 ">
      <ul className="py-6 flex justify-between w-11/12 mx-auto lg:flex-row flex-col gap-8 lg:gap-0 items-center ">
        {services.map(({ name, link, img }) => (
          <li className="flex gap-2  ">
            <div className="relative h-80 w-80">
              <Link href={link}>
                <Image
                  src={img}
                  blurDataURL={img}
                  alt={name}
                  fill={true}
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-lg"
                ></Image>
                <div
                  className="absolute bottom-7 inset-x-0 text-center font-extrabold text-2xl tracking-wider text-theme-yellow "
                  style={{ textShadow: "var(--theme-dark) 1px 0 10px" }}
                >
                  {name}
                </div>
              </Link>
            </div>
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
