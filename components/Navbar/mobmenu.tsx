import { MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function SidebarMenu() {
    return (
        <div className="block md:hidden max-w-[390px] h-[965px] top-[104px] text-white pt-7 pl-5 pr-5 flex flex-col 
      bg-gradient-to-b from-[#0f2d23] to-[#071a14] bg-cover bg-no-repeat bg-bottom">

            <div className="space-y-6">

                {/* LOANS */}
                <div className="text-base mb-3 ml-5 max-w-[237px] h-[169px] gap-5 ">
                    <p className="text-[#13EC6D] text-base mb-3 mt-7">LOANS</p>

                    <ul className="space-y-3 text-sm w-[237px] h-[123px] gap-3 ">


                        <li className="flex gap-1 items-center cursor-pointer w-full">
                            Cash Advance <ArrowRight className="h-4 w-4 text-white" />
                        </li>

                        <li className="flex gap-1 items-center cursor-pointer w-full">
                            Contact Us <ArrowRight size={14} />
                        </li>

                        <li className="flex gap-1 items-center cursor-pointer w-full">
                            Make a Payment <ArrowRight size={14} />
                        </li>

                        <li className="flex gap-1 items-center cursor-pointer w-full">
                            Locations <ArrowRight size={14} />
                        </li>
                    </ul>
                </div>

                {/* TOOLS */}
                <div className="text-base mb-3 ml-5 max-w-[237px] h-[169px] gap-5">
                    <p className="text-[11px] text-green-400 mb-3">TOOLS</p>

                    <ul className="space-y-3 text-sm">
                        <li className="flex gap-1 items-center cursor-pointer w-full">
                            FAQ <ArrowRight size={14} />
                        </li>

                        <li className="flex gap-1 items-center cursor-pointer w-full">
                            Glossary of financial terms <ArrowRight size={14} />
                        </li>
                    </ul>
                    <p className="text-[16px] w-[222px] text-[#13EC6D] mt-7  ">MARKET PULSE OUT</p>
                </div>

                {/* MARKET */}
                <div className="ml-5 max-w-[201px] h-[127px] gap-18">


                    <div className="text-xs text-gray-300 space-y-2">
                        <Image
                            src="/sidebar/logo.svg"
                            alt="CashInFlash Logo"
                            width={148}
                            height={19}
                        />

                        <p className="max-w-[201px] h-90px">
                            Get fast Cash Transfers.<br /> Secure Payday Loans with <br />
                            Instant Approval and <br />
                            Same Day Deposits. Apply <br /> Online in Minutes.
                        </p>

                        <div className="flex gap-2 pt-2 h-[41.07px] w-[250px] mt-5">
                            <img src="/applestore.svg" className="h-[41.07px] w-[123px]" />
                            <img src="/googleplay.svg" className="h-[41.07px] w-[123px]" />
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <div className="ml-5 mt-20">
                <hr className="border-0 h-[1px] bg-white/17 w-72 my-2" />
                <div className="text-sm text-gray-300 mt-3 ">                    
                    <div className="flex justify-between ">Location <ArrowRight size={14} /></div>
                </div>
                <hr className="border-0 h-[1px] bg-white/17 w-72 my-2 mt-3" />
                <div className="text-sm text-gray-300 ">
                    <div className="flex justify-between">State <ArrowRight size={14} /></div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-300 mt-6">
                    <MapPin size={16} /> Find a Store
                </div>

                <div className="flex gap-3 mt-10">
                    <button className="bg-green-500 text-black text-sm px-4 py-2 rounded-full font-semibold">
                        Apply now
                    </button>

                    <button className="bg-white text-black text-sm px-4 py-2 rounded-full">
                        Log in
                    </button>
                </div>

            </div>
        </div>
    );
}