import Image from "next/image";

export default function Intro() {
  return (
    <div className="relative flex flex-col py-10 gap-5 mx-auto lg:flex-row lg:justify-around lg:border-r-[.1px] lg:border-gray-400">
      <div className="text-center lg:max-w-lg my-auto w-11/12 mx-auto lg:mx-0 ">
        <h3 className="text-xl text-gray-300">הגיע הזמן להגשים חלומות.</h3>
        <p className=" text-gray-300 font-thin ">
          בלה בלה להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. קולורס
          מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף ליבם סולגק. בראיט ולחת צורק
          מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה - לתכי מורגם בורק? לתיג
          ישבעס.
        </p>
      </div>

      <div className="relative">
        <div className="relative h-72 w-72 mx-auto lg:mx-0 lg:w-96 lg:h-96 z-10 ">
          <Image
            src="https://scontent.ftlv19-2.fna.fbcdn.net/v/t39.30808-6/281758377_1226061654596043_5161498980826635865_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YErnRpoJvQoAX97clbH&_nc_ht=scontent.ftlv19-2.fna&oh=00_AfCVn_q7flPA0BMX7LImH9v8GqxyJ8hzDoG4uA3S4WC8Aw&oe=655E19A1"
            blurDataURL="https://scontent.ftlv19-2.fna.fbcdn.net/v/t39.30808-6/281758377_1226061654596043_5161498980826635865_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YErnRpoJvQoAX97clbH&_nc_ht=scontent.ftlv19-2.fna&oh=00_AfCVn_q7flPA0BMX7LImH9v8GqxyJ8hzDoG4uA3S4WC8Aw&oe=655E19A1"
            alt="profile-img"
            fill={true}
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-full border-8 shadow-2xl drop-shadow-sm shadow-theme-dark"
            priority={true}
          />
        </div>
        <div className="absolute h-32 w-32 rounded-full bg-theme-light lg:bottom-0 lg:-right-16 top-0 left-10 border-8 border-theme-light-dark" />
      </div>
    </div>
  );
}
