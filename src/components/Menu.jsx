const Menu = () => {
  return (
    <div className="h-auto w-full flex max-md:flex-col max-md:px-2 items-center justify-between sticky top-0 bg-slate-100 z-10 shadow-lg">
      <div className=" w-80 flex justify-center">
        <img
          alt="logo"
          className="w-44"
          src="https://res.cloudinary.com/ddgqhpvjd/image/upload/v1741983965/KONIG_Electric/sapgcscsmr5tgfxzorlf.png"
        />
      </div>
      <div className="text-slate-800 font-semibold flex items-center justify-evenly  max-sm:text-sm text-xl w-full pr-56 max-sm:pr-0">
        <a href="#" className="hover:text-red-500">
          Home
        </a>
        <a href="#" className="hover:text-red-500 flex">
          About Us
        </a>
        <a href="#" className="hover:text-red-500">
          Our Services
        </a>
        <a href="#" className="hover:text-red-500">
          Our Projects
        </a>
        <a href="#" className="hover:text-red-500">
          Team Members
        </a>
        <a href="#" className="hover:text-red-500">
          Contact Us
        </a>
      </div>
    </div>
  );
};
export default Menu;
