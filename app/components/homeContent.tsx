function HomeContent() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="absolute inset-0 backmy"></div>
      <div className="relative min-h-screen mt-10 w-full flex flex-col lg:flex-row items-center lg:items-start">
        <div className="p-6 lg:p-12 w-full lg:w-1/2">
          <h1 className="text-4xl lg:text-6xl font-bold text-[#044e83]">
            Governor Sindh
          </h1>
          <h2 className="text-2xl lg:text-4xl text-[#044e83] mt-4">
            Kamran Khan Tessori
          </h2>
          <h3 className="text-2xl lg:text-3xl font-bold text-[#2eb6e8] mt-6">
            Certified Cloud <br className="hidden lg:block" />
            Applied Generative AI <br className="hidden lg:block" />
            Engineer (GenEng)
          </h3>
          <h2 className="text-xl lg:text-2xl font-extrabold text-[#044e83] mt-8">
            Earn up to $5,000 / month <br />
            <br />
            Now admissions are open in <br />
            Hyderabad
          </h2>

     
          <div className="flex flex-col lg:flex-row lg:justify-center items-center w-[330px] gap-6 mt-8">
            <button className="bg-[#044e83] text-white h-12 w-full lg:w-44 rounded-lg">
              APPLY NOW
            </button>

            <div className="text-center">
              <p className="text-2xl lg:text-3xl font-extrabold text-[#044e93]">
                562,143
              </p>
              <p className="text-sm lg:text-base text-[#044e83]">Accepted Applications</p>
            </div>
          </div>
        </div>

     
        <div className="flex justify-center w-full lg:w-1/2 mt-10 lg:mt-0 ">
          <img
            className="h-74 lg:h-[700px] w-auto"
            src="/images/kamran.png"
            alt="Kamran Khan Tessori"
          />
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
