import Link from "next/link";
const Section1 = () => {
  return (
    <div className="w-full bg-slate-100">
      <div className="w-[70rem] max-md:w-full m-auto grid grid-cols-2">
        <div className="py-10 flex justify-start">
          <img src="https://gramentheme.com/wp/rooftek/wp-content/uploads/2024/01/choose-2.jpg" />
        </div>
        <div className="flex flex-col py-10 justify-between">
          <div className="flex gap-2 items-center text-red-600 font-semibold text-balance uppercase text-lg">
            <div className="h-2 bg-red-600 w-5 rounded-2xl"></div> why choose us
          </div>
          <p className="text-slate-900 text-3xl font-medium">
            Few Reasons to Choose Our Company
          </p>
          <p className="text-slate-600 font-normal text-justify">
            It is a long established fact that a reader will be distracted the
            readable content of a page when looking at layout the point of using
            lorem the is Ipsum less normal distribution of letters.
          </p>
          <div className="grid grid-cols-2 gap-4 font-medium text-slate-800">
            <div className="flex bg-white shadow border-b hover:border-b-red-600 border-b-white cursor-pointer h-14 items-center justify-center">Quality Materials1</div>
            <div className="flex bg-white shadow border-b hover:border-b-red-600 border-b-white cursor-pointer h-14 items-center justify-center">Expert Engineer</div>
            <div className="flex bg-white shadow border-b hover:border-b-red-600 border-b-white cursor-pointer h-14 items-center justify-center">Roofing Warranty</div>
            <div className="flex bg-white shadow border-b hover:border-b-red-600 border-b-white cursor-pointer h-14 items-center justify-center">Award Winning</div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default Section1;
