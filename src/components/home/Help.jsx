const Help = () => {
  return (
    <div className="relative  ">
      <div className="bg-slate-100 w-full h-48"></div>
      <div className="bg-slate-800 w-full h-48"></div>
      <div className="absolute w-full h-full top-0 flex items-center justify-center">
        <div className="w-[70rem] max-md:w-full h-60 bg-red-600">
          <p className="text-4xl p-10 text-center text-white font-medium">Need Any Roofling Help?</p>
          <form className="w-full flex items-center justify-evenly">
            <input type="text" placeholder="Your name" className="border border-slate-100 rounded-full p-5 text-slate-100 focus:outline-none font-medium w-52" />
            <input type="text" placeholder="Your Phone"  className="border border-slate-100 rounded-full p-5 text-slate-100 focus:outline-none font-medium  w-52" />
            <input type="text" placeholder="Your Message" className="border border-slate-100 rounded-full p-5 text-slate-100 focus:outline-none font-medium  w-52" />
            <button type="submit" className=" rounded-full font-medium bg-slate-100 p-5  w-52 cursor-pointer hover:bg-slate-800 hover:text-slate-100 shadow-lg " >SUBMIT REQUES</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Help