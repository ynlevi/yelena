import Image from "next/image";
import { IoDiamondOutline } from "react-icons/io5";

export default function Intro() {
  return (
    <div className="lg:border-r-[.1px] lg:border-gray-600">
      <div className="relative flex flex-col py-10 gap-5 mx-auto lg:flex-row lg:justify-around ">
        <div className="text-center lg:max-w-lg my-auto w-11/12 mx-auto lg:mx-0 font-extralight tracking-wide">
          <h3 className="text-2xl text-theme-light-dark">
            הגיע הזמן להגשים חלומות.
          </h3>
          <p className="">
            פה צריך לנסות לגעת בחוויה וברגשות, מה הלקוח ירגיש אחרי שהבית שלו
            ישתנה מהקצה לקצה, מה בעצם היתרונות של עיצוב ומה זה יגרום לבנאדם
            להרגיש. אפשר להוסיף טיפה על הנקודה האישית שלך בתור מעצבת (במה הגישה
            המיוחדת שלך כשזה מגיע לעיצוב) אבל שימי לב שבשורה מתחת נרחיב טיפה
            יותר על היתרונות שלך.
          </p>
        </div>

        <div className="relative">
          <div className="relative h-72 w-72 mx-auto lg:mx-0 lg:w-96 lg:h-96 z-[01] ">
            <Image
              src="/img/yelena-main-image.jpg"
              blurDataURL="/img/yelena-main-image.jpg"
              alt="profile-img"
              fill={true}
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-full border-8 shadow-2xl drop-shadow-sm shadow-theme-dark"
              priority={true}
            />
          </div>
          <div className="absolute h-32 w-32 rounded-full bg-theme-light lg:bottom-0 lg:-right-14 top-0 left-10 border-8 border-theme-light-dark" />
        </div>
      </div>
      <ul className="flex gap-2 lg:gap-8 px-1 w-fit mx-auto mt-4">
        {benefit.map(({ icon, title, p }, i) => (
          <li
            key={i}
            className={`flex flex-col items-center text-center gap-1 flex-1 max-w-[15rem] ${
              i % 2 === 0 ? "text-theme-light-dark" : "text-theme-light"
            }`}
          >
            {icon}
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="text-sm">{p}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const benefit = [
  {
    icon: <IoDiamondOutline size={40} />,
    title: "יתרון יחודי",
    p: "בכמה מילים צריך לתאר יתרון יחודי, בערך באורך של המשפט הזה. ",
  },
  {
    icon: <IoDiamondOutline size={40} />,
    title: "יתרון יחודי",
    p: "בכמה מילים צריך לתאר יתרון יחודי, בערך באורך של המשפט הזה.",
  },
  {
    icon: <IoDiamondOutline size={40} />,
    title: "יתרון יחודי",
    p: "בכמה מילים צריך לתאר יתרון יחודי, בערך באורך של המשפט הזה.",
  },
];
