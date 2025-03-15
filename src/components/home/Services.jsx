"use client";
import Link from "next/link";
import { useState } from "react";
import { IoArrowForward, IoCheckmarkCircleOutline } from "react-icons/io5";

const Services = () => {
  const [tab, setTab] = useState([true, false, false, false]);
  const handlerState = (state) => {
    setTab(tab.map((_, index) => index === state));
  };
  return (
    <div className="bg-slate-800 w-full">
      <div className="w-[70rem] max-md:w-full m-auto flex flex-col">
        <div className="flex items-center gap-2 w-full py-2">
          <div className="h-2 bg-red-600 w-5 rounded-2xl"></div>
          <label className="text-red-600 font-medium text-base">
            WHAT WE DO
          </label>
        </div>
        <div className="flex w-full py-2 justify-between">
          <label className="text-3xl text-slate-100 font-bold uppercase">
            WHAT WE DO
            <br />
            Delivering High Quality
          </label>
          <Link
            href="/services"
            className="border border-slate-100 flex items-center justify-center h-10 text-slate-100 font-medium p-2 gap-2 hover:bg-red-500"
          >
            SERVICES <IoArrowForward />
          </Link>
        </div>
        <div className="flex w-full py-10 gap-24 ">
          <div className="flex flex-col justify-between">
            <div
              onClick={() => handlerState(0)}
              className={` h-20 w-72 relative flex items-center cursor-pointer ${
                tab[0]
                  ? "bg-red-600 text-slate-100"
                  : "bg-slate-100 text-sky-900"
              }`}
            >
              <div
                className={`absolute size-14  rotate-45 top-3 -right-4 ${
                  tab[0] ? "bg-red-600" : "bg-slate-100"
                }`}
              ></div>
              <label className="font-medium text-xl pl-5">
                Modified Roofing
              </label>
            </div>
            <div
              onClick={() => handlerState(1)}
              className={` h-20 w-72 relative flex items-center cursor-pointer ${
                tab[1]
                  ? "bg-red-600 text-slate-100"
                  : "bg-slate-100 text-sky-900"
              }`}
            >
              <div
                className={`absolute size-14  rotate-45 top-3 -right-4 ${
                  tab[1] ? "bg-red-600" : "bg-slate-100"
                }`}
              ></div>
              <label className="font-medium text-xl pl-5">
                Roof Installation
              </label>
            </div>
            <div
              onClick={() => handlerState(2)}
              className={` h-20 w-72 relative flex items-center cursor-pointer ${
                tab[2]
                  ? "bg-red-600 text-slate-100"
                  : "bg-slate-100 text-sky-900"
              }`}
            >
              <div
                className={`absolute size-14  rotate-45 top-3 -right-4 ${
                  tab[2] ? "bg-red-600" : "bg-slate-100"
                }`}
              ></div>
              <label className="font-medium text-xl pl-5">Roof Cornering</label>
            </div>
            <div
              onClick={() => handlerState(3)}
              className={` h-20 w-72 relative flex items-center cursor-pointer ${
                tab[3]
                  ? "bg-red-600 text-slate-100"
                  : "bg-slate-100 text-sky-900"
              }`}
            >
              <div
                className={`absolute size-14  rotate-45 top-3 -right-4 ${
                  tab[3] ? "bg-red-600" : "bg-slate-100"
                }`}
              ></div>
              <label className="font-medium text-xl pl-5">
                Roof Renovation
              </label>
            </div>
          </div>
          <div className=" w-full h-96">
            <div
              className={`w-full bg-slate-100 h-full ${
                tab[0] ? " " : "hidden"
              } grid grid-cols-2`}
            >
              <div>
                <img
                  alt="ima"
                  className="p-5 object-cover h-96"
                  src="https://gramentheme.com/wp/rooftek/wp-content/uploads/2024/01/service-tab-1.jpg"
                />
              </div>
              <div className="flex flex-col p-5 justify-between">
                <p className="text-xl font-medium">Modified Roofing</p>
                <p className="text-justify text-slate-500 font-normal">
                  It is a long established fact that a reader will content of a
                  page when looking at layout the point of using lorem.
                </p>
                <p className="text-slate-900 font-medium flex gap-2 items-center"><IoCheckmarkCircleOutline className="size-5 text-red-600"/> Accurate Testing Processes</p>
                <p className="text-slate-900 font-medium flex gap-2 items-center"><IoCheckmarkCircleOutline className="size-5 text-red-600"/> 100% Satisfaction Guarantee</p>
                <p className="text-slate-900 font-medium flex gap-2 items-center"><IoCheckmarkCircleOutline className="size-5 text-red-600"/> Award Winning Company</p>
                <div>
                  <Link href={'/services'} className="flex items-center justify-center text-slate-100 gap-2 p-2 bg-red-600  w-36 hover:bg-slate-800 font-medium">READ MORE <IoArrowForward />  </Link>
                </div>
              </div>
            </div>
            <div
              className={`w-full bg-slate-100 h-full ${
                tab[1] ? " " : "hidden"
              } grid grid-cols-2`}
            >
              <div>
                <img
                  alt="ima"
                  className="p-5 object-cover h-96"
                  src="https://gramentheme.com/wp/rooftek/wp-content/uploads/2024/01/service-tab-1.jpg"
                />
              </div>
              <div className="flex flex-col p-5 justify-between">
                <p className="text-xl font-medium">Roof Installation</p>
                <p className="text-justify text-slate-500 font-normal">
                  It is a long established fact that a reader will content of a
                  page when looking at layout the point of using lorem.
                </p>
                <p className="text-slate-900 font-medium flex gap-2 items-center"><IoCheckmarkCircleOutline className="size-5 text-red-600"/> Accurate Testing Processes</p>
                <p className="text-slate-900 font-medium flex gap-2 items-center"><IoCheckmarkCircleOutline className="size-5 text-red-600"/> 100% Satisfaction Guarantee</p>
                <p className="text-slate-900 font-medium flex gap-2 items-center"><IoCheckmarkCircleOutline className="size-5 text-red-600"/> Award Winning Company</p>
                <div>
                  <Link href={'/services'} className="flex items-center justify-center text-slate-100 gap-2 p-2 bg-red-600  w-36 hover:bg-slate-800 font-medium">READ MORE <IoArrowForward />  </Link>
                </div>
              </div>
            </div>
            <div
              className={`w-full bg-slate-100 h-full ${
                tab[2] ? " " : "hidden"
              } grid grid-cols-2`}
            >
              <div>
                <img
                  alt="ima"
                  className="p-5 object-cover h-96"
                  src="https://gramentheme.com/wp/rooftek/wp-content/uploads/2024/01/service-tab-1.jpg"
                />
              </div>
              <div className="flex flex-col p-5 justify-between">
                <p className="text-xl font-medium">Roof Cornering</p>
                <p className="text-justify text-slate-500 font-normal">
                  It is a long established fact that a reader will content of a
                  page when looking at layout the point of using lorem.
                </p>
                <p className="text-slate-900 font-medium flex gap-2 items-center"><IoCheckmarkCircleOutline className="size-5 text-red-600"/> Accurate Testing Processes</p>
                <p className="text-slate-900 font-medium flex gap-2 items-center"><IoCheckmarkCircleOutline className="size-5 text-red-600"/> 100% Satisfaction Guarantee</p>
                <p className="text-slate-900 font-medium flex gap-2 items-center"><IoCheckmarkCircleOutline className="size-5 text-red-600"/> Award Winning Company</p>
                <div>
                  <Link href={'/services'} className="flex items-center justify-center text-slate-100 gap-2 p-2 bg-red-600  w-36 hover:bg-slate-800 font-medium">READ MORE <IoArrowForward />  </Link>
                </div>
              </div>
            </div>
            <div
              className={`w-full bg-slate-100 h-full ${
                tab[3] ? " " : "hidden"
              } grid grid-cols-2`}
            >
              <div>
                <img
                  alt="ima"
                  className="p-5 object-cover h-96"
                  src="https://gramentheme.com/wp/rooftek/wp-content/uploads/2024/01/service-tab-1.jpg"
                />
              </div>
              <div className="flex flex-col p-5 justify-between">
                <p className="text-xl font-medium">Roof Renovation</p>
                <p className="text-justify text-slate-500 font-normal">
                  It is a long established fact that a reader will content of a
                  page when looking at layout the point of using lorem.
                </p>
                <p className="text-slate-900 font-medium flex gap-2 items-center"><IoCheckmarkCircleOutline className="size-5 text-red-600"/> Accurate Testing Processes</p>
                <p className="text-slate-900 font-medium flex gap-2 items-center"><IoCheckmarkCircleOutline className="size-5 text-red-600"/> 100% Satisfaction Guarantee</p>
                <p className="text-slate-900 font-medium flex gap-2 items-center"><IoCheckmarkCircleOutline className="size-5 text-red-600"/> Award Winning Company</p>
                <div>
                  <Link href={'/services'} className="flex items-center justify-center text-slate-100 gap-2 p-2 bg-red-600  w-36 hover:bg-slate-800 font-medium">READ MORE <IoArrowForward />  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
