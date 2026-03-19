import Image from "next/image";


const GetStartedTwo = () => {
  return (
    <section className="w-full bg-[#F4F7F6] py-12 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto  px-4 py-11.2 sm:px-6 lg:px-8 text-gray-900">

        {/* top section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-10 mb-12 lg:mb-16">
          
          {/* heading */}
          <div className="max-w-xl w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-tilt-warp font-normal text-gray-900">
              Three Simple Ways To <br className="hidden sm:block" />
              <span className="text-green-500 relative">
                Get Started
                <Image 
                  src={'/underline.svg'} 
                  alt="" 
                  width={239} 
                  height={1} 
                  className="absolute left-0 -bottom-2 w-[180px] sm:w-[200px] md:max-w-[239px]" 
                />
              </span>
            </h2>

            <p className="text-[#676F7E] mt-4 text-base sm:text-lg">
              Apply online today for fast approval and flexible repayment
              options. Our streamlined process helps you access your funds
              quickly.
            </p>
          </div>

          {/* testimonial */}
          <div className="flex items-start sm:items-center justify-start gap-4 bg-[#E7EFEA] rounded-xl p-4 w-full lg:max-w-md">
            
            <div className="relative flex-shrink-0 w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] rounded-full overflow-hidden">
              <Image
                src="/GirlProfile.jpg"
                fill
                alt="Maria R."
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-base sm:text-xl font-semibold">
                — Maria R.
                <span className="text-orange-400 text-sm sm:text-base">★★★★★</span>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                “Fast, easy, and stress-free. Cash in Flash really came
                through when I needed it.”
              </p>
            </div>
          </div>
        </div>

        {/* steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          
          {/* Step 1 */}
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <Image 
                src={'/getStart/map.svg'} 
                width={80} 
                height={80} 
                alt="In Person" 
                className="w-16 h-16 sm:w-20 sm:h-20"
              />
            </div>
            <div>
              <h3 className="font-semibold text-xl sm:text-2xl text-gray-900 flex items-center gap-2 flex-wrap">
                <span className="bg-[#172136] text-white text-xs rounded-full px-3 py-1.5">01</span> 
                In Person
              </h3>
              <p className="text-sm sm:text-base text-gray-500 mt-2">
                Complete our simple online application in just 5 minutes
                no hassle.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <Image 
                src={'/getStart/phone.svg'} 
                width={80} 
                height={80} 
                alt="By Phone" 
                className="w-16 h-16 sm:w-20 sm:h-20"
              />
            </div>
            <div>
              <h3 className="font-semibold text-xl sm:text-2xl text-gray-900 flex items-center gap-2 flex-wrap">
                <span className="bg-[#172136] text-white text-xs rounded-full px-3 py-1.5">02</span> 
                By Phone
              </h3>
              <p className="text-sm sm:text-base text-gray-500 mt-2">
                Get an instant decision. Most applications are approved
                within minutes.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4 items-start md:col-span-2 lg:col-span-1">
            <div className="flex-shrink-0">
              <Image 
                src={'/getStart/online.svg'} 
                width={80} 
                height={80} 
                alt="Online" 
                className="w-16 h-16 sm:w-20 sm:h-20"
              />
            </div>
            <div>
              <h3 className="font-semibold text-xl sm:text-2xl text-gray-900 flex items-center gap-2 flex-wrap">
                <span className="bg-[#172136] text-white text-xs rounded-full px-3 py-1.5">03</span> 
                Online
              </h3>
              <p className="text-sm sm:text-base text-gray-500 mt-2">
                Get your funds are deposited directly and quickly.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GetStartedTwo;