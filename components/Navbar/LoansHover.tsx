import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function NavHoverLoans() {
  return (
    <div
      className="absolute top-full left-0 w-[891px] h-[339px] text-white  shadow-xl z-20 relative overflow-hidden"
      style={{
        background: "linear-gradient(118.99deg,#1B3229 0%,#0C1D17 100%)",
      }}
    >

      {/* Green blur circle */}
      <div className="absolute w-[384px] h-[384px] top-[-125px] left-[467px] rounded-full bg-[#0EA46D1A] blur-[64px] " />

      {/* LOANS + TOOLS container */}
      <div className="flex items-start justify-center w-full h-full p-14">

        {/* LOANS */}
        <div className="w-full">
          <p className="text-[#13EC6D] mb-6 font-[Orenza_Bold_Demo] text-[13px] leading-[100%] uppercase">
            LOANS
          </p>

          <ul className="flex flex-col gap-2">
            <li className="hover:text-green-400 cursor-pointer font-poppins font-medium text-[13px] leading-[27px] flex gap-1 items-center">
              Cash Advance <ArrowRight className="h-4 w-4" />
            </li>
            <li className="hover:text-green-400 cursor-pointer font-poppins font-medium text-[13px] leading-[27px] flex gap-1 items-center">
              Contact Us <ArrowRight className="h-4 w-4" />
            </li>
            <li className="hover:text-green-400 cursor-pointer font-poppins font-medium text-[13px] leading-[27px] flex gap-1 items-center">
              Make a Payment <ArrowRight className="h-4 w-4" />
            </li>
            <li className="hover:text-green-400 cursor-pointer font-poppins font-medium text-[13px] leading-[27px] flex gap-1 items-center">
              Locations <ArrowRight className="h-4 w-4" />
            </li>
          </ul>
        </div>

        {/* TOOLS */}
        <div className="w-full">
          <p className="text-[#13EC6D] mb-6 font-[Orenza_Bold_Demo] text-[13px] leading-[100%] uppercase">
            TOOLS
          </p>

          <ul className="flex flex-col gap-2">
            <li className="hover:text-green-400 cursor-pointer font-poppins font-medium text-[13px] leading-[27px]">
              FAQs →
            </li>
            <li className="hover:text-green-400 cursor-pointer font-poppins font-medium text-[13px] leading-[27px]">
              Glossary of financial terms →
            </li>
          </ul>

          <p className="text-[#13EC6D] mt-10 font-[Orenza_Bold_Demo] text-[13px] leading-[100%] uppercase">
            MONEY. FIGURED OUT
          </p>
        </div>

        <div className="w-full flex flex-col gap-6 items-start justify-between">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Cash in <span className="text-green-400 italic">Flash</span>
            </h3>

            <p className="text-gray-300 mb-6 font-poppins font-medium text-[13px] leading-[27px]">
              Get Fast Cash Today: Secure Payday Loans with Instant Approval
              and Same-Day Deposits. Apply Online in Minutes!
            </p>
          </div>

          {/* APPLE + PLAY STORE */}
          <div className="flex items-center justify-center gap-3 w-full">
            <Image src="/applestore.svg" alt="playstore" width={123.21} height={41.07} />


            <Image src="/googleplay.svg" alt="playstore" width={123.21} height={41.07} />
          </div>

        </div>

      </div>



    </div>
  );
}