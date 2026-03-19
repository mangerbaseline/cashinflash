import Image from "next/image";

const CashSection = () => {
  return (
    <section className="w-full bg-white">
      
        <div className="max-w-7xl py-10 px-7.5 mx-auto flex flex-col md:flex-row place-items-center gap-10 md:gap-8 lg:gap-10 lg:px-30 lg:py-23">
          
          {/* Left images */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative max-w-[423px] w-full">
              <div className="flex flex-col gap-6">
                <Image 
                  src="/couple.jpg" 
                  width={423} 
                  height={200} 
                  alt="image" 
                  className="rounded-xl w-full h-auto object-cover"
                />
                <Image 
                  src="/laptop.jpg" 
                  width={423} 
                  height={200} 
                  alt="image" 
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
              
              {/* Rating Badge */}
              <div className="absolute -bottom-4 right-4 md:bottom-10 md:right-[-20px] lg:right-10 bg-white shadow-lg rounded-xl px-4 py-2">
                <Image 
                  src="/rating.svg" 
                  width={200.78} 
                  height={50.37} 
                  alt="rating"
                  className="w-auto h-auto"
                />
              </div>
            </div>
          </div>

          {/* Right content */}
          <div className="w-full md:w-1/2 text-gray-900">
            <h2 className="text-4xl lg:text-5xl font-tilt-warp font-normal">
              Cash Advances For <br />
              <span className="relative text-green-500">
                Whatever {" "}
                <Image
                  src="/underline.svg"
                  alt=""
                  width={233}
                  height={0}
                  className="absolute left-0 bottom-[-6px] w-full"
                />
              </span>
              Comes Next
            </h2>

            <p className="text-lg text-[#676F7E] mt-3 md:mt-4">
              Fast online applications, quick approvals, and flexible repayment options so you can access your funds without delay
            </p>

            <div className="flex flex-col md:flex-row gap-4 md:gap-3 lg:gap-[17px] mt-6 md:mt-8">
              <div className="flex-1 p-6 rounded-[20px] border border-[#E2E4E954] shadow-sm">
                <b className="text-[#353535] block">From $100 to <br className="hidden md:block" /> $255</b>
                <p className="text-[#353535] mt-1">quick deposits</p>
              </div>

              <div className="flex-1 p-6 rounded-[20px] border border-[#E2E4E954] shadow-sm">
                <b className="text-[#353535] block">Fast funding</b>
                <p className="text-[#353535] mt-1">simple approval</p>
              </div>

              <div className="flex-1 p-6 rounded-[20px] border border-[#E2E4E954] shadow-sm">
                <b className="text-[#353535] block">Payments you control</b>
                <p className="text-[#353535] mt-1">budget friendly</p>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <button className="bg-gradient-to-r from-[#15C15D] to-[#13EC6D] text-white px-4 py-2 lg:px-5 lg:py-3  rounded-full font-semibold hover:opacity-90 transition-opacity">
                Apply now
              </button>
              <button className="text-gray-600 font-medium hover:text-gray-900 transition-colors">
                Learn more →
              </button>
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default CashSection;