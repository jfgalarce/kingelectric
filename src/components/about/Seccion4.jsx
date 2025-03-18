import { TbMapDollar, TbHomeBolt } from "react-icons/tb";
import { MdEngineering } from "react-icons/md";

const Seccion4 = () => {
  return (
    <div className="w-full bg-slate-100 py-16 max-sm:py-5 max-md:py-5">
      <p className="flex gap-2 items-center justify-center  text-red-600 font-semibold text-lg w-full">
        <div className="h-2 bg-red-600 w-5 rounded-2xl"></div> WORKING PROCESS
      </p>
      <p className="flex items-center justify-center  py-2 text-slate-800 font-bold text-4xl w-full">
        Standard Work Process
      </p>
      <div className="grid grid-cols-3 gap-20 pt-14 px-64 items-start max-sm:grid-cols-1 max-sm:px-2 max-sm:gap-10 max-md:grid-cols-1 max-md:px-2 max-md:gap-10 max-lg:px-2 ">
        <div className="flex items-center justify-center flex-col">
          <div className="group relative size-24 bg-white shadow-lg rounded-full hover:bg-red-600 cursor-pointer flex items-center justify-center">
            <TbMapDollar className="size-10 text-red-600 group-hover:text-slate-100 " />
            <div className="absolute top-0 left-0 size-7 bg-white shadow-lg rounded-full flex items-center justify-center text-red-600 font-medium">
              1
            </div>
          </div>
          <div>
            <p className="text-center py-6 font-semibold text-2xl">
              Electrical Planning
            </p>
            <p className="text-justify text-slate-800 text-base">
              Expert planning to ensure safe, efficient, and code-compliant
              electrical systems for homes and businesses.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className="group relative size-24 bg-white shadow-lg rounded-full hover:bg-red-600 cursor-pointer flex items-center justify-center">
            <MdEngineering className="size-10 text-red-600 group-hover:text-slate-100 " />
            <div className="absolute top-0 left-0 size-7 bg-white shadow-lg rounded-full flex items-center justify-center text-red-600 font-medium">
              2
            </div>
          </div>
          <div>
            <p className="text-center py-6 font-semibold text-2xl">
              Electrical Installation
            </p>
            <p className="text-justify text-slate-800 text-base">
              Professional installation of wiring, panels, and outlets using
              high-quality materials and expert craftsmanship.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className="group relative size-24 bg-white shadow-lg rounded-full hover:bg-red-600 cursor-pointer flex items-center justify-center">
            <TbHomeBolt className="size-10 text-red-600 group-hover:text-slate-100 " />
            <div className="absolute top-0 left-0 size-7 bg-white shadow-lg rounded-full flex items-center justify-center text-red-600 font-medium">
              3
            </div>
          </div>
          <div>
            <p className="text-center py-6 font-semibold text-2xl">
              Project Completion
            </p>
            <p className="text-justify text-slate-800 text-base">
              Reliable and precise finishing, ensuring your electrical system is
              fully functional, safe, and up to industry standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Seccion4;
