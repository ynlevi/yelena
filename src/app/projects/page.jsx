import Title from "@/components/Title";
import ProjectCard from "@/components/projects/projectCard";
export default function Projects() {
  return (
    <div className="mt-8">
      <Title text={"הפרוייקטים שלנו"} />
      {projects.map((data, i) => (
        <ProjectCard key={i} {...data} />
      ))}
    </div>
  );
}

const projects = [
  {
    headline: "הווילה ברחובות",
    mainImage:
      "https://images.pexels.com/photos/19050701/pexels-photo-19050701/free-photo-of-large-windows-in-living-room.jpeg",
    p: "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית נולום ארווס סאפיאן - פוסיליס קוויס, אקווזמן להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורךגולר מונפרר סוברט לורם שבצק יהול, לכנוץ בעריר גק ליץ, ושבעגט. הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק",
  },
];
