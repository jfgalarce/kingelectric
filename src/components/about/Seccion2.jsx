const Seccion2 = () => {
  return (
    <div className="w-full py-10 grid grid-cols-2 justify-center  gap-10 max-sm:grid-cols-1 max-sm:p-2 max-md:grid-cols-1 max-md:p-2 px-2">
      <div className="flex justify-end max-sm:hidden max-md:hidden">
        <div
          className="bg-cover bg-no-repeat bg-center w-[33rem] "
          style={{
            backgroundImage: `url('https://scontent-lga3-3.xx.fbcdn.net/v/t39.30808-6/473254995_1270817784086882_155952115943141325_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Z0nam46Y9joQ7kNvgFshLK9&_nc_oc=Adigg9OA8KmfJUL8Nt0cwTK6Hjq1dL1R2pYr0N7E8rVSTaDXavb21DVluQ-pTIx2mGM&_nc_zt=23&_nc_ht=scontent-lga3-3.xx&_nc_gid=QIO4I8sOAweNZ30uMfY0Kg&oh=00_AYEbSQEsNujKj-9URO-4WkpO5sZQRqbnF6Q3CP2c5qcMxA&oe=67DE333F')`,
          }}
        ></div>
      </div>
      <div className="items-start w-[33rem] max-sm:w-full max-md:w-full max-lg:w-full gap-6 flex flex-col">
        <p className="flex gap-2 items-center  text-red-600 font-semibold text-balance">
          <div className="h-2 bg-red-600 w-5 rounded-2xl"></div> ABOUT US
        </p>
        <p className="text-slate-900 text-3xl font-semibold">
          Committed to Excellence in Electrical Services
        </p>
        <p className="text-slate-700 text-base  text-justify">
          At KONIG Electric, we are dedicated to providing top-quality
          electrical solutions for homes, apartments, and commercial buildings.
          Our certified electricians ensure safe, efficient, and reliable
          installations and renovations that meet the highest industry
          standards.
        </p>
        <div>
          <p className="text-slate-900 text-base font-medium pb-2">
            Residential & Commercial Electrical Services
          </p>
          <p className=" text-slate-700 text-base pb-6 text-justify">
            We specialize in expert electrical installations and renovations,
            enhancing safety, energy efficiency, and functionality for all types
            of properties.
          </p>
          <p className="text-slate-900 text-base font-medium pb-2">
            Trusted & Reliable Workmanship
          </p>
          <p className="text-slate-700 text-base text-justify">
            With years of experience, we guarantee high-quality materials,
            precision workmanship, and long-lasting electrical solutions backed
            by industry-leading standards.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Seccion2;
