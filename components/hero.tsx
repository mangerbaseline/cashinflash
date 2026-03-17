import Image from "next/image";
import { CircleCheck, Star } from 'lucide-react';

const Hero = () => {
    return (
        <section className="w-full min-h-[999px] md:min-h-[670px] md:py-15  bg-[url('/hero.svg')] md:bg-[url('/hero-desk.svg')] bg-no-repeat bg-cover bg-bottom relative overflow-x-hidden">
            {/* Desktop Layout - Visible on md and up */}
            <div className="hidden md:flex max-w-7xl px-6 mx-auto h-full items-center">
                {/* Left Content */}
                <div className="flex flex-col">
                    <div className="flex flex-col gap-[18px] lg:gap-[24px]">
                        <div className="relative">
                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-tilt-warp font-normal text-black">
                                Fast Cash
                                <span className="block text-3xl lg:text-4xl xl:text-5xl text-black">
                                    When You <span className="relative bg-gradient-to-r from-[#15C15D] to-[#13EC6D] bg-clip-text text-transparent">
                                        Need It 
                                        <Image
                                            src="/underline.svg"
                                            alt=""
                                            width={195}
                                            height={20}
                                            className="absolute left-0 bottom-[-6px] w-full"
                                        />
                                    </span>
                                </span>
                            </h1>
                        </div>

                        <p className="max-w-[435px] text-base lg:text-lg xl:text-xl text-gray-600">
                            Affordable loans from $100 to $255. Start moving forward.
                        </p>
                    </div>

                    {/* Features List */}
                    <div className="flex flex-col lg:flex-row max-w-[674px] mt-4 lg:mt-6 gap-2 lg:gap-4">
                        <div className="flex items-center gap-1">
                            <div className="bg-green-100 rounded-full p-1">
                                <CircleCheck className="w-5 h-5 text-green-600" />
                            </div>
                            <span className="text-gray-700 text-sm lg:text-base">Approved in minutes</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="bg-green-100 rounded-full p-1">
                                <CircleCheck className="w-5 h-5 text-green-600" />
                            </div>
                            <span className="text-gray-700 text-sm lg:text-base">Money same day</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="bg-green-100 rounded-full p-1">
                                <CircleCheck className="w-5 h-5 text-green-600" />
                            </div>
                            <span className="text-gray-700 text-sm lg:text-base">Good credit not needed</span>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center mt-6 lg:mt-8 max-w-[457px] gap-4 sm:gap-[8px]">
                        <a
                            href="#"
                            className="inline-block bg-[linear-gradient(86.41deg,#15C15D_1.64%,#13EC6D_98.36%)] w-[125px] h-[47px] text-white font-semibold px-2 py-3 rounded-full hover:opacity-90 transition-opacity text-base text-center"
                        >
                            Apply now
                        </a>
                        <p className="max-w-[314px] text-gray-500 italic text-sm lg:text-base">
                            Visit a store or apply online in minutes.
                        </p>
                    </div>

                    {/* Review Badges */}
                    <div className="flex flex-row  gap-3 pt-4 max-w-[370px] mt-6 lg:mt-8 flex-wrap">
                        <Image src='/googleReview.svg' alt="Google Reviews" width={89} height={36.04} className=" lg:h-[36px]" />
                        <Image src='/buisness.svg' alt="Acceredited Buisness" width={89} height={36.04} className="lg:h-[36px]" />
                        <Image src='/consumer.svg' alt="Consumer Affairs" width={153} height={23} className="  lg:h-[23px]" />
                    </div>
                </div>

                {/* Right Image/Illustration */}
                <div className="flex-1 flex justify-center max-w-[429.75px] ml-auto mr-4 lg:mr-8 xl:mr-[93px]">
                    <div className="relative w-full aspect-square max-w-[400px]">
                        <Image
                            src="/hero.png"
                            alt="Fast Cash Hero"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Mobile/Tablet Layout - Visible below md */}
            <div className="flex md:hidden flex-col items-center min-h-[999px] px-4 py-8">
                {/* LEFT CONTENT */}
                <div className="w-full max-w-[330px] flex flex-col gap-6">
                    <div className="w-full">
                        <div className="relative">
                            <h1 className="text-4xl font-tilt-warp font-normal text-gray-900">
                                Fast Cash When
                                <br />
                                You
                                <span className="font-semibold bg-gradient-to-r from-[#15C15D] to-[#13EC6D] bg-clip-text text-transparent"> Need It</span>
                            </h1>
                            <Image 
                                src={'/underline.svg'} 
                                alt="" 
                                width={120} 
                                height={1} 
                                className="ml-18 mt-1" 
                            />

                            <p className="font-poppins font-medium text-gray-600 mt-3 text-base">
                                Affordable loans from $100 to $255. Start moving forward.
                            </p>
                        </div>

                        <div className="mt-4 space-y-2">
                            <div className="flex items-center gap-1">
                                <CircleCheck className="text-green-600 w-4 h-4" />
                                <span className="text-sm">Approved in minutes</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <CircleCheck className="text-green-600 w-4 h-4" />
                                <span className="text-sm">Money same day</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <CircleCheck className="text-green-600 w-4 h-4" />
                                <span className="text-sm">Good credit not needed</span>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-[314px]">
                        <button className="mt-6 bg-[linear-gradient(86.41deg,#15C15D_1.64%,#13EC6D_98.36%)] text-white px-8 py-3 rounded-full font-semibold">
                            Apply now
                        </button>
                        <p className="text-gray-500 text-sm mt-2 italic">
                            Visit a store or apply online in minutes.
                        </p>
                    </div>

                    <div className="flex items-center gap-1 md:gap-5 mt-7">
                        <Image src="/googleReview.svg" width={80} height={32} alt="google" className="max-w-[153px] h-6" />
                        <Image src="/buisness.svg" width={80} height={20} alt="bbb" className="max-w-[153px] h-6" />
                        <Image src="/consumer.svg" width={80} height={23} alt="consumer" className="max-w-[153px] h-6" />
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="w-full max-w-[480px] mt-5 relative" style={{ height: '345px' }}>
                    <Image
                        src="/hero.png"
                        alt="Fast Cash Hero"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;