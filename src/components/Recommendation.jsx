import Title from "./Title";
import Image from "next/image";
function Recommendation() {
  return (
    <div className="lg:border-r-[.1px] border-gray-600 ">
      <div className="w-11/12 mx-auto lg:w-full lg:px-[2.25rem]">
        <Title text={"לקוחות ממליצים"} />
      </div>
      <ul className="flex gap-6 lg:gap-9 py-6 overflow-scroll px-[2.25rem] snap-x ">
        {recomms.map(({ name, city, avatar, p }) => (
          <li className=" snap-mandatory snap-start scroll-mr-9 border-theme-light-dark min-w-full font-light sm:min-w-[66%] md:min-w-[30%] py-4 px-10 text-center flex flex-col gap-4  tracking-wider text-[.9rem] border-2">
            <div className="flex justify-center items-center gap-2">
              <div className="">
                <h4 className="font-bold ">{name}</h4>
                <h4 className="">{city}</h4>
              </div>
              <div className="relative h-20 w-20">
                <Image
                  src={avatar}
                  blurDataURL={avatar}
                  fill={true}
                  className="object-cover rounded-full "
                  alt={name}
                ></Image>
              </div>
            </div>
            <p
              className=" text-theme-yellow"
              style={{ letterSpacing: ".25em" }}
            >
              ★★★★★
            </p>
            <p>{p}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recommendation;
const recomms = [
  {
    name: "אלה רונדל",
    city: "קרית אתא",
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    p: `
    היתה לי הזכות לעבוד עם ילנה על שיפוץ די גדול בביתנו. זה היה שיפוץ חוץ.
כשרק התחלנו לחשוב על הרעיון , ידעתי ישר שזה האדם המקצועי המתאים מהיכרות הקודמת איתה ועם העבודות שלה. בלעדיה לא הייתי עוברת את התהליך. ילנה אכפתית, סובלנית ומשרה אוירה נעימה.

יודעת להקשיב לצרכי הלקוח ולתרגם חלומות למציאות.

מעצבת מקצועית ומוכשרת , עושה עבודה מצויינת במסגרת התקציב הנתון.

מומלצת בחום ומבחינתי הולכת להיות שותפה גם לשיפוץ הבא!

`,
  },
  {
    name: "אלה רונדל",
    city: "קרית אתא",
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    p: `
    היתה לי הזכות לעבוד עם ילנה על שיפוץ די גדול בביתנו. זה היה שיפוץ חוץ.
כשרק התחלנו לחשוב על הרעיון , ידעתי ישר שזה האדם המקצועי המתאים מהיכרות הקודמת איתה ועם העבודות שלה. בלעדיה לא הייתי עוברת את התהליך. ילנה אכפתית, סובלנית ומשרה אוירה נעימה.

יודעת להקשיב לצרכי הלקוח ולתרגם חלומות למציאות.

מעצבת מקצועית ומוכשרת , עושה עבודה מצויינת במסגרת התקציב הנתון.;

מומלצת בחום ומבחינתי הולכת להיות שותפה גם לשיפוץ הבא!

`,
  },
  {
    name: "אלה רונדל",
    city: "קרית אתא",
    avatar:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    p: `
    היתה לי הזכות לעבוד עם ילנה על שיפוץ די גדול בביתנו. זה היה שיפוץ חוץ.
כשרק התחלנו לחשוב על הרעיון , ידעתי ישר שזה האדם המקצועי המתאים מהיכרות הקודמת איתה ועם העבודות שלה. בלעדיה לא הייתי עוברת את התהליך. ילנה אכפתית, סובלנית ומשרה אוירה נעימה.

יודעת להקשיב לצרכי הלקוח ולתרגם חלומות למציאות.

מעצבת מקצועית ומוכשרת , עושה עבודה מצויינת במסגרת התקציב הנתון.;

מומלצת בחום ומבחינתי הולכת להיות שותפה גם לשיפוץ הבא!

`,
  },
];
