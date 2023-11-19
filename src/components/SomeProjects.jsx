import Image from "next/image";
import { list } from "postcss";

function SomeProjects() {
  return (
    <div className="lg:border-r-[.1px] lg:border-gray-400">
      <h2>פרוייקטים</h2>
      <ul>
        {projects.map(({ name, src }) => (
          <li>
            <h4>{name}</h4>
            <div className="relative h-80 w-80">
              <Image
                src={src}
                blurDataURL={src}
                alt={name}
                fill={true}
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              ></Image>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SomeProjects;
const projects = [
  {
    name: "עיצוב לדירת קבלן בחיפה",
    src: "https://images.pexels.com/photos/19050701/pexels-photo-19050701/free-photo-of-large-windows-in-living-room.jpeg",
  },
  {
    name: "עיצוב לדירת קבלן בחיפה",
    src: "https://images.pexels.com/photos/19050701/pexels-photo-19050701/free-photo-of-large-windows-in-living-room.jpeg",
  },
];
