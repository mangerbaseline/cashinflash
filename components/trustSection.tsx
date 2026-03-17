import Image from "next/image";
import { User, Smile, CreditCard } from "lucide-react";

const TrustSection = () => {
  return (
    <section
      className="relative w-full py-16 sm:py-20 lg:py-24 text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('/trustpage.jpg')",
      }}
    >
      {/* green overlay */}
      <div className="absolute inset-0 bg-[#0e3b2f]/70"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* heading */}
        <div className="relative text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-tilt-warp font-normal">
            <span className="text-green-400">Trusted</span> By Thousands. Built
            <br className="hidden sm:block" />
            On Relationships.
          </h2>
          <Image 
            src={'/underline.svg'} 
            alt="" 
            width={187} 
            height={0} 
            className="absolute w-[100px] sm:w-[133px] md:w-[187px] left-1/2 -translate-x-1/2 -bottom-4 sm:bottom-0 sm:left-7 sm:translate-x-0 md:left-16 lg:left-24" 
          />
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          
          <div className="flex flex-row sm:flex-col items-start sm:items-center backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4 sm:p-6 lg:p-8 sm:pt-8 lg:pt-14 h-auto sm:h-[280px] lg:h-[308px]">
            <User className="flex-shrink-0 sm:mx-auto mr-4 sm:mr-0" size={46} />
            <div className="sm:mt-4 lg:mt-7 sm:text-center">
              <h3 className="font-semibold text-xl sm:text-2xl">9 of 10 Members</h3>
              <p className="text-sm sm:text-base text-[#B8B8B8]">
                would recommend Cash in Flash to friends
              </p>
            </div>
          </div>

          <div className="flex flex-row sm:flex-col items-start sm:items-center backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4 sm:p-6 lg:p-8 sm:pt-8 lg:pt-14 h-auto sm:h-[280px] lg:h-[308px]">
            <Smile className="flex-shrink-0 sm:mx-auto mr-4 sm:mr-0" size={46} />
            <div className="sm:mt-4 lg:mt-7 sm:text-center">
              <h3 className="font-semibold text-xl sm:text-2xl">Get Approved Quickly</h3>
              <p className="text-sm sm:text-base text-[#B8B8B8]">
                Our team reviews your info and gives you an instant decision.
              </p>
            </div>
          </div>

          <div className="flex flex-row sm:flex-col items-start sm:items-center backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4 sm:p-6 lg:p-8 sm:pt-8 lg:pt-14 h-auto sm:h-[280px] lg:h-[308px] sm:col-span-2 lg:col-span-1">
            <CreditCard className="flex-shrink-0 sm:mx-auto mr-4 sm:mr-0" size={46} />
            <div className="sm:mt-4 lg:mt-7 sm:text-center">
              <h3 className="font-semibold text-xl sm:text-2xl">Testimonial</h3>
              <p className="text-sm sm:text-base text-[#B8B8B8]">
                Team reviewed my info, instant decision!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustSection;