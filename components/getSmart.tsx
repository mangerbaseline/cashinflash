import Image from "next/image";

const FinancialEducation = () => {
  return (
    <section className="w-full py-12 lg:py-24 bg-[#F4F7F6] overflow-hidden">
      <div className=" max-w-7xl mx-auto px-6 text-center">

        {/* heading */}
        <h2 className="text-4xl md:text-5xl font-tilt-warp font-normal text-black">
          Get{" "}
          <span className="relative inline-block text-green-500">
            Smarter

            <Image
              src="/underline.svg"
              alt=""
              width={187}
              height={20}
              className="absolute left-0 bottom-[-6px] w-full"
            />
          </span>{" "}
          With
          <br />
          Your Money.
        </h2>


        <p className="text-gray-500 mt-4  mx-auto">
          Stop guessing with your money and start <br className="block md:hidden" /> making it work harder
          through smart,<br className="block md:hidden" /> actionable strategies.
        </p>

        {/* cards */}
        <div className="flex md:flex-row justify-around md:p-15">

          <div className="hidden md:block text-left">
            <div className="rounded-xl">
              <Image
                src="/finance1.jpg"
                width={350}
                height={176}
                alt=""
                className="object-cover  max-w-[330px] md:w-[360px] md:h-[176px]"
              />
            </div>
            <p className="text-sm text-gray-700 mt-3">
              Secured loans: What they are, how they work,<br /> and when to use them
            </p>
          </div>

          <div className="text-left">
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/finance2.jpg"
                width={350}
                height={200}
                alt=""
                className="object-cover  max-w-[330px] md:w-[360px] md:h-[176px]"
              />
            </div>
            <p className="text-sm text-gray-700 mt-3">
              How to pay off a loan early: 7 smart ways <br className="block md:hidden" /> to save on interest
            </p>
          </div>

          <div className="hidden md:block text-left">
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/finance3.jpg"
                width={350}
                height={200}
                alt=""
                className="object-cover max-w-[330px] md:w-[360px] md:h-[176px]"
              />
            </div>
            <p className="text-sm text-gray-700 mt-3">
              How to get a personal loan
            </p>
          </div>

        </div>

        {/* dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-4 h-2 bg-green-500 rounded-xl"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>

        {/* button */}
        <button className="mt-8 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600">
          Explore financial education
        </button>

      </div>

      {/* background shapes */}
      {/* <div className="absolute w-60 h-60 bg-green-100 rounded-full opacity-40 blur-2xl left-20 bottom-20"></div> */}
      {/* <div className="absolute w-72 h-72 bg-green-100 rounded-full opacity-30 blur-2xl top-32 left-1/2 -translate-x-1/2"></div> */}

    </section>
  );
};

export default FinancialEducation;