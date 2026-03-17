import Image from "next/image";
import { User, Smile, CreditCard } from "lucide-react";

const TrustSection = () => {
  return (
    <section
      className="relative w-full  py-16 sm:py-20 lg:py-24 text-white bg-cover bg-center sm:bg-[position:0%_25%]"
      style={{
        backgroundImage: "url('/trustpage.jpg')",
      }}
    >
      {/* green overlay */}
      <div className="absolute inset-0 bg-[#0e3b2f]/70"></div>

     

      <div className="relative max-w-6xl mx-auto lg:text-center px-6">
        {/* heading */}
        <h2 className="text-4xl md:text-5xl font-tilt-warp font-normal mb-16 ">
          <span className="text-green-400">Trusted</span> By Thousands. Built
          <br />
          On Relationships.
        </h2>
         <Image src={'/underline.svg'} alt="" width={187} height={0} className="absolute w-[133px] left-7 top-10 md:left-67 md:top-12 md:w-[187px]" />

        {/* cards */}
        <div className="grid md:grid-cols-3 gap-8 sm:max-w-[1020px] ">

          <div className="flex flex-row lg:block backdrop-blur-md bg-white/10 sm:pt-14 border border-white/20 rounded-2xl p-6 sm:p-8 sm:w-[324px] sm:h-[308px]">
            <User className="hidden sm:block mx-auto" size={55} />
            <User className="block sm:hidden mr-5" size={46} />
            <div className="sm:mt-7 sm:text-lg ">
              <h3 className="font-semibold text-2xl">9 of 10 Members</h3>
              <p className=" text-[#B8B8B8]">
                would recommend Cash in Flash to friends
              </p>
            </div>

          </div>

          <div className="flex flex-row lg:block backdrop-blur-md bg-white/10 sm:pt-14 border border-white/20 rounded-2xl p-8 sm:w-[324px] sm:h-[308px]">
            <Smile className="hidden sm:block mx-auto" size={55} />
            <Smile className="block sm:hidden mr-5" size={46} />
            <div className="sm:mt-7 sm:text-lg">
              <h3 className="font-semibold text-2xl w-[212px] md:w-[269px]">Get Approved Quickly</h3>
              <p className="text-[#B8B8B8]">
                Our team reviews your info and gives you an instant decision.
              </p>
            </div>

          </div>

          <div className="flex flex-row lg:block backdrop-blur-md bg-white/10 sm:pt-14 border border-white/20 rounded-2xl p-8 sm:w-[324px] sm:h-[308px]">
            <CreditCard className="hidden sm:block mx-auto" size={55} />
            <CreditCard className="block sm:hidden mr-5" size={46} />
            <div className="sm:mt-7 sm:text-lg">
              <h3 className="font-semibold text-2xl">Testimonial</h3>
              <p className="text-[#B8B8B8]">
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