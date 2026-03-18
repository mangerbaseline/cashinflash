import Image from "next/image";
import { Users, Smile, CreditCard } from "lucide-react";

const TrustSection = () => {
  return (
    <section
      className="relative w-full  bg-cover bg-center h-[624px] text-white py-8 lg:py-15"
      style={{
          backgroundImage: "url('/trustpage.jpg')",
        }}

    >

      {/* green overlay */}
        <div className="absolute inset-0 bg-radial from-[#1B3229] to-[#0C1D17] opacity-80"></div>

      <div className="relative max-w-7xl mx-auto"
        
      >
        

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          {/* heading */}
          <div className="relative text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-tilt-warp font-normal">
              <span className="relative text-green-400">Trusted <Image
                src={'/underline.svg'}
                alt=""
                width={187}
                height={0}
                className="absolute left-0  w-full "
              /></span> By Thousands. Built
              <br className="" />
              On Relationships.
            </h2>

          </div>

          {/* cards */}
          <div className="flex flex-col gap-4 lg:flex-row lg:mx-9 lg:gap-6">

            <div className="flex items-center justify-center gap-7 lg:flex-col p-4 lg:gap-0 lg:px-7 lg:py-16 backdrop-blur-lg bg-white/8 border border-white/10 rounded-2xl">
              <Users className="h-[37px] w-[37px] self-start lg:h-[55px] lg:w-[55px] lg:self-center" />
              <div className="lg:w-[269px] lg:mt-11 lg:text-center">
                <h3 className="font-semibold text-xl sm:text-2xl">9 of 10 Members</h3>
                <p className="text-sm sm:text-base text-[#B8B8B8] lg:text-center">
                  would recommend Cash in
                  <br className="hidden lg:block" />
                  Flash to friends
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-7  lg:flex-col p-4 lg:gap-0 lg:px-7 lg:py-16 backdrop-blur-lg bg-white/8 border border-white/10 rounded-2xl">
              <Smile className="h-[37px] w-[37px] self-start lg:h-[55px] lg:w-[55px] lg:self-center" />
              <div className="max-w-[269px] lg:mt-11 lg:text-center">
                <h3 className="font-semibold text-xl sm:text-2xl">Get Approved Quickly</h3>
                <p className="text-sm sm:text-base text-[#B8B8B8]  lg:text-center">
                  Our team reviews your info <br className="hidden lg:block" /> and gives you an instant <br className="hidden lg:block" /> decision.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-7  lg:flex-col p-4 lg:gap-0 lg:px-7 lg:py-16 backdrop-blur-lg bg-white/8 border border-white/10 rounded-2xl">
              <CreditCard className="h-[37px] w-[37px] self-start lg:h-[55px] lg:w-[55px] lg:self-center" />
              <div className="max-w-[269px] lg:mt-11 lg:text-center">
                <h3 className="font-semibold text-xl sm:text-2xl">Testimonial</h3>
                <p className="text-sm sm:text-base text-[#B8B8B8]  lg:text-center">
                  Team reviewed my info, instant decision!
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;