import { IoLocationSharp,IoCallOutline,IoMailOutline,IoArrowForward } from "react-icons/io5";
const page = () => {
  return (
    <div className="w-full bg-slate-100 grid grid-cols-2 gap-10 py-10">
      <div className="grid items-start justify-end gap-5 ">
        <div className="bg-white shadow-lg h-40  flex items-center px-5">
          <div className="size-16 bg-red-600 rounded-full flex items-center justify-center">
            <IoLocationSharp className="size-10 text-white" />
          </div>
          <div className="pl-4">
            <p className="text-red-600 text-balance">location</p>
            <p className="text-slate-800 text-2xl font-medium">Moncton</p>
          </div>
        </div>
        <div className="bg-white shadow-lg h-40  flex items-center px-5">
          <div className="size-16 bg-red-600 rounded-full flex items-center justify-center">
            <IoCallOutline className="size-10 text-white" />
          </div>
          <div className="pl-4">
            <p className="text-red-600 text-balance">Call Us 7/24</p>
            <p className="text-slate-800 text-2xl font-medium">+1 (506) 227-9125</p>
          </div>
        </div>
        <div className="bg-white shadow-lg h-40  flex items-center px-5">
          <div className="size-16 bg-red-600 rounded-full flex items-center justify-center">
            <IoMailOutline className="size-10 text-white" />
          </div>
          <div className="pl-4">
            <p className="text-red-600 text-balance">Make A quote</p>
            <p className="text-slate-800 text-2xl font-medium">konigelectric.nb@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-start">
        <div className="bg-white shadow-lg p-10">
          <p className="flex gap-2 items-center text-red-600 text-balance font-medium"><div className="h-2 bg-red-600 w-5 rounded-2xl"></div>LET'S TALK</p>
          <p className="text-4xl text-slate-800 font-semibold pb-4">Let’s Get in Touch</p>
          <div className="w-full grid grid-cols-2 gap-4">
            <div>
              <p className="font-medium pb-2">Your Name</p>
              <input type="text" className="bg-slate-100 w-64 h-10" />
            </div>
            <div>
              <p className="font-medium pb-2">Your Email</p>
              <input type="email" className="bg-slate-100 w-64 h-10" />
            </div>
            <div>
              <p className="font-medium pb-2">Your Phone</p>
              <input type="text" className="bg-slate-100 w-64 h-10" />
            </div>
            <div>
              <p className="font-medium pb-2">Subject</p>
              <input type="text" className="bg-slate-100 w-64 h-10" />
            </div>
            <div className="col-span-2">
              <p className="font-medium pb-2">Your Messager</p>
              <textarea className="bg-slate-100 w-full h-36 resize-none" />
            </div>
            <div className="col-span-2">
            <button className="flex items-center justify-center text-slate-100 gap-2 p-2 bg-red-600  w-36 hover:bg-slate-800 font-medium cursor-pointer">ABOUT <IoArrowForward />  </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default page