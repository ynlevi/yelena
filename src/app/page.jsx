import HeaderBg from "@/components/HeaderBg";
import Intro from "@/components/Intro";
import MainImage from "@/components/MainImage";
import Services from "@/components/Services";
import Steps from "@/components/Steps";
import SomeProjects from "@/components/SomeProjects";
import Recommendation from "@/components/Recommendation";
export default function Home() {
  return (
    <div className="">
      <HeaderBg />
      <MainImage />
      <Intro />
      {/* <SomeProjects /> */}
      <Services />
      <Recommendation />
      <Steps />
    </div>
  );
}
