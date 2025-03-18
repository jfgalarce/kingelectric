import { VscCircuitBoard } from "react-icons/vsc";
import { LuCable } from "react-icons/lu";
import { FaHandsHelping } from "react-icons/fa";
const Seccion3 = () => {
  return (
    <div className="bg-slate-800 w-full py-10 grid grid-cols-2 justify-center px-2 gap-10 max-sm:grid-cols-1 max-sm:p-2 max-md:grid-cols-1 max-md:p-2">
      <div className="max-sm:w-full max-md:w-full max-lg:w-full flex justify-end">
        <div className="items-start w-[33rem] max-sm:w-full max-md:w-full max-lg:w-full gap-6 flex flex-col ">
          <p className="flex gap-2 items-center  text-red-500 font-bold text-balance">
            <div className="h-2 bg-red-500 w-5 rounded-2xl "></div> WHY CHOOSE
            US
          </p>
          <p className="text-slate-100 text-3xl font-semibold">
            What's Make Us Different
          </p>
          <div className="grid grid-cols-1 gap-3">
            <div className="flex w-full">
              <div className="bg-slate-100 size-24 flex items-center justify-center cursor-pointer hover:bg-red-600 group ">
                <VscCircuitBoard className="size-14 group-hover:text-slate-100" />
              </div>
              <div className="w-full flex flex-col justify-between pl-2">
                <p className="text-slate-200 text-lg font-semibold ">
                  Expert Electrical Installations & Renovations
                </p>
                <p className=" text-slate-100 text-base text-justify">
                  We provide high-quality electrical solutions using top-grade
                  materials, ensuring safety, reliability, and full code
                  compliance for homes and businesses.
                </p>
              </div>
            </div>
            <hr className="text-slate-500" />
            <div className="flex w-full">
              <div className="bg-slate-100 size-24 flex items-center justify-center cursor-pointer hover:bg-red-600 group ">
                <LuCable className="size-14 group-hover:text-slate-100" />
              </div>
              <div className="w-full flex flex-col justify-between pl-2">
                <p className="text-slate-200 text-lg font-semibold ">
                  High-Quality Materials & Workmanship
                </p>
                <p className=" text-slate-100 text-base text-justify">
                  We use premium materials and expert craftsmanship to deliver
                  durable, efficient, and safe electrical solutions for every
                  project.
                </p>
              </div>
            </div>
            <hr className="text-slate-500" />
            <div className="flex w-full">
              <div className="bg-slate-100 size-24 flex items-center justify-center cursor-pointer hover:bg-red-600 group ">
                <FaHandsHelping className="size-14 group-hover:text-slate-100" />
              </div>
              <div className="w-full flex flex-col justify-between pl-2">
                <p className="text-slate-200 text-lg font-semibold ">
                  Reliable, Safe, and Code-Compliant Solutions
                </p>
                <p className=" text-slate-100 text-base text-justify">
                  Our electrical services meet the highest safety standards,
                  ensuring reliability and full compliance with industry codes
                  for your peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start max-sm:hidden max-md:hidden">
        <div
          className="bg-cover bg-no-repeat bg-center w-[33rem] "
          style={{
            backgroundImage: `url('https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/470179412_1251668999335094_8774962525697309374_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=c85gCh7hr-oQ7kNvgEEYkW6&_nc_oc=Adjk_bQ0FNQXMBwayQYKwaOcFg8GyQxOKikU_XPUFNmRkJ6wOPWYWgWyxi0Bqjz_2J0&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=CwHK2dx2aVV9YTVT8d5Htw&oh=00_AYFDQjTUUThMq-jiNfThanJjiEos45-QiNrlAy4XkY1vNA&oe=67DE6264')`,
          }}
        ></div>
      </div>
    </div>
  );
};
export default Seccion3;
