import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Button from "../ui/myUI/Button";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div className="w-full pt-16 grid grid-cols-2 justify-center gap-10">
      <div className="flex justify-end">
        <img
          alt="foto1"
          className="rounded-lg shadow"
          src="https://gramentheme.com/wp/rooftek/wp-content/uploads/2023/12/about-5.jpg"
        />
      </div>
      <div className="items-start w-min ">
        <div className="flex gap-2 items-center py-3 text-red-600 font-semibold text-balance">
          <div className="h-2 bg-red-600 w-5 rounded-2xl"></div> ABOUT US
        </div>
        <div className="text-slate-900 text-3xl font-semibold py-3">
          Experienced & Quality Roofing Services Providers
        </div>
        <div className="text-slate-700 text-base py-3 text-justify">
          It is a long established fact that a reader will be distracted the
          readable content of a page when looking at layout the point of using
          lorem the is Ipsum less normal distribution of letters.
        </div>
        <div className="text-slate-900 text-base font-medium  pt-4  flex items-center gap-1 justify-between">
          <div className="flex items-center w-64">
            <IoCheckmarkCircleOutline className="size-5 text-red-600" />
            Accurate Testing Processes
          </div>
          <div className="flex items-center w-64">
            <IoCheckmarkCircleOutline className="size-5 text-red-600" />
            300+ Successful Projects done
          </div>
        </div>
        <div className="text-slate-900 text-base font-medium py-3 flex items-center gap-1 justify-between">
          <div className="flex items-center w-64">
            <IoCheckmarkCircleOutline className="size-5 text-red-600" />
            100% Satisfaction Guarantee
          </div>
          <div className="flex items-center w-64">
            <IoCheckmarkCircleOutline className="size-5 text-red-600" />
            Professional Engineers Provide
          </div>
        </div>
        <div className="flex items-center justify-between text-slate-900 text-base font-medium py-4">
          <div>Quality Services</div>
          <div>95%</div>
        </div>
        <div className="flex items-center">
          <div className=" bg-red-600 h-3 text-base font-medium  w-11/12"></div>
          <div className=" bg-slate-300 h-3 text-base font-medium  w-1/12"></div>
        </div>
        <div className="flex items-center py-4">
          <Button>ABOUT US <IoArrowForward /></Button>
        </div>
      </div>
    </div>
  );
};
export default About;
