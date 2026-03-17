import Image from "next/image";

//removed py-16
const CashSection = () => {
  return (

    <section className="p-9 md:p-20 mb-14 flex md:flex-row flex-col justify-center items-center ">

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left images */}

        <div className="sm:h-[423px] sm:w-[423px] flex flex-col gap-6 relative">
          {/* <Image src="/couple.jpg" width={330} height={173.19} alt="image" className="rounded-xl md:hidden" /> */}
          <Image src="/couple.jpg" width={300} height={100} alt="image" className="rounded-xl " />
          {/* <Image src="/laptop.jpg" width={330} height={144} alt="image" className="md:hidden" /> */}
          <Image src="/laptop.jpg" width={300} height={100} alt="image" className=" rounded-xl " />

          <div className="absolute bottom-7 right-10 bg-white shadow-lg md:bottom-14 md:right-40 rounded-xl px-4 py-2 text-sm">
            <Image src="/rating.svg" width={200.78} height={50.37} alt="rating" />
          </div>
        </div>
      </div>



      {/* Right content */}
      <div className="w-auto md:ml-3 gap-60">



        <h2 className="text-4xl md:text-6xl font-tilt-warp font-normal">
          Cash Advances For <br />
          <span className="relative text-green-500">Whatever <Image
            src="/underline.svg"
            alt=""
            width={187}
            height={20}
            className="absolute left-0 bottom-[-6px] w-full"
          /></span>
          Comes Next
        </h2>

        <p className="text-lg text-[#676F7E] md:mt-3">
          Fast online applications, quick approvals, and flexible repayment options so you can access your funds without delay
        </p>

        <div className="flex flex-col mt-2 md:flex-row md:gap-[17px] md:mt-[19px]">
          <div className="mt-3 p-6  box-border rounded-[20px] border border-[#E2E4E954] shadow-sm">
            <b className="text-[#353535]">From $100 to <br className="hidden md:block" /> $255</b>
            <p className="text-[#353535]">quick deposits</p>
          </div>

          <div className="mt-3 p-6  box-border rounded-[20px] border border-[#E2E4E954] shadow-sm">
            <b className="text-[#353535]">Fast funding</b>
            <p className="text-[#353535]">simple approval</p>
          </div>

          <div className="mt-3 p-6  box-border rounded-[20px] border border-[#E2E4E954] shadow-sm">
            <b className="text-[#353535]">Payments you control</b>
            <p className="text-[#353535]">budget friendly</p>
          </div>
        </div>

        <div className="mt-6 flex gap-4">
          <button className="bg-gradient-to-r from-[#15C15D] to-[#13EC6D] text-white px-6 py-2 rounded-full">
            Apply now
          </button>
          <button className="text-gray-600">Learn more</button>
        </div>
      </div>

    </section>
  );
};

export default CashSection;

