import { BiConversation } from "react-icons/bi";
import { GrNext } from "react-icons/gr";
import { PiNumberOneThin } from "react-icons/pi";
import { PiNumberTwoThin } from "react-icons/pi";
import { PiNumberThreeThin } from "react-icons/pi";
import { BsChevronDoubleLeft } from "react-icons/bs";

function Steps() {
  return (
    <div className="lg:border-r-[.1px] lg:border-gray-400 w-11/12 mx-auto lg:w-full lg:px-4 ">
      <h2 className="text-3xl lg:text-4xl mr-5 md:mr-64 lg:mr-0">
        אז איך זה עובד?
      </h2>
      <ul className="my-6 flex gap-4 flex-col lg:flex-row lg:gap-0 items-center mr-1 sm:mr-5 lg:mr-0">
        {steps.map((step, i) => (
          <Step key={i} index={i + 1} {...step} />
        ))}
      </ul>
    </div>
  );
}

export default Steps;

function Step({ name, icon, p, index, number }) {
  return (
    <li className="flex relative ">
      <div
        className={`border-2 rounded-lg p-2 flex items-center text-center flex-col relative max-w-xs lg:max-w-full bg-theme-light-dark  `}
      >
        {icon}
        {name}
        <p className="text-sm  ">{p}</p>
      </div>
      <div className="h-fit my-auto left-10 overflow-hidden text-theme-light-dark lg:hidden ">
        <div className="w-30  relative left-6">{number}</div>
      </div>

      {index < steps.length && (
        <div className={`hidden lg:block my-auto mx-2 text-theme-light-dark`}>
          <BsChevronDoubleLeft size={50} />
        </div>
      )}
    </li>
  );
}

const steps = [
  {
    name: "איפיון ראשוני",
    icon: <BiConversation size={50} />,
    number: <PiNumberOneThin size={100} />,
    p: "ראשית ניפגש לשיחת איפיון ראשונית, נבין את הציפיות שלך מהפרוייקט, תקציב ועוד",
  },
  {
    name: "איפיון ראשוני",
    icon: <BiConversation size={50} />,
    number: <PiNumberTwoThin size={100} />,
    p: "ראשית ניפגש לשיחת איפיון ראשונית, נבין את הציפיות שלך מהפרוייקט, תקציב ועוד",
  },
  {
    name: "איפיון ראשוני",
    icon: <BiConversation size={50} />,
    number: <PiNumberThreeThin size={100} />,
    p: "ראשית ניפגש לשיחת איפיון ראשונית, נבין את הציפיות שלך מהפרוייקט, תקציב ועוד",
  },
];
