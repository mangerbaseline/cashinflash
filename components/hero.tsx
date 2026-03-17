import Image from "next/image";
import { CircleCheck, Star } from 'lucide-react';

const Hero = () => {
    return (
        <section className="w-full  h-[999px] md:h-[670px] pl-5 pr-5 bg-[url('/hero.svg')] pt-6 pl-5 pr-5  sm:max-w-[1440px] mx-auto sm:px-4 sm:px-50  md:py-15 sm:bg-[url('/hero-desk.svg')] bg-no-repeat bg-cover bg-bottom relative">
            <div className="hidden sm:flex max-w-[1248.4px]  sm:top-[89px] left-[] sm:flex-row md:mt-2 md:mb-9">
                {/* Left Content */}
                <div className=" flex flex-col max-w-[330px] mt-[80px] ml-[30px] m-5 sm:max-w-[608px]  sm:top-[56px] " >
                    <div className="sm:max-w-[608px]  sm:gap-[24px]">
                        <div className="flex flex-col max-w-[490px]  gap-[18px] ">
                            <h1 className="max-w-[490px] sm:block hidden md:text-5xl lg:text-6xl font-tilt-warp font-normal text-gray-900">
                                Fast Cash
                                <span className="block text-3xl md:text-4xl lg:text-5xl text-gray-900 ">
                                    When You <span className="bg-gradient-to-r from-[#15C15D] to-[#13EC6D] bg-clip-text text-transparent">Need It </span>
                                </span>
                            </h1>
                            <Image src={'/underline.svg'} alt="" width={187} height={0} className="absolute left-116 top-65" />

                            <p className="max-w-[435px] md:text-xl text-gray-600 w-lg">
                                Affordable loans from $100 to $255. Start moving forward.
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="flex flex-col sm:flex-row max-w-[674px] mt-4">
                            <div className="flex  items-center gap-3">
                                <div className="bg-green-100 rounded-full p-1">
                                    <CircleCheck className="max-w-5 h-5 text-green-600" />
                                </div>
                                <span className="text-gray-700">Approved in minutes</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-green-100 rounded-full p-1">
                                    <CircleCheck className="max-w-5 h-5 text-green-600" />
                                </div>
                                <span className="text-gray-700">Money same day</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-green-100 rounded-full p-1">
                                    <CircleCheck className="max-w-5 h-5 text-green-600" />
                                </div>
                                <span className="text-gray-700">Good credit not needed</span>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="flex flex-row sm:flex-row justify-content items-center mt-8 max-w-[457px] h-[47px] gap-[8px]">
                        <a
                            href="#"
                            className="inline-block bg-[linear-gradient(86.41deg,#15C15D.64%,#13EC6D_98.36%)] text-white font-semibold py-3 px-8 rounded-2xl hover:opacity-90 transition-opacity text-[16px] mr-4"
                        >
                            Apply now
                        </a>
                        <p className="max-w-[314px] h-[27px] text-gray-500 italic text-lg">
                            Visit a store or apply online in minutes.
                        </p>
                    </div>

                    {/* Review Badges */}
                    <div className="flex items-center gap-[20px] pt-4 max-w-[370px] h-[36.04px] mt-8">
                        <Image src='/googlereview.svg' alt="Google Reviews" width={89} height={36.04} />
                        <Image src='/buisness.svg' alt="Acceredited Buisness" width={89} height={36.04} />
                        <Image src='/consumer.svg' alt="Consumer Affairs" width={89} height={36.04} />
                    </div>
                </div>

                {/* Right Image/Illustration */}
                <div className="flex-1 flex justify-center max-w-[429.75px] h-[423px] top-[50px] left-[93px] gap-[16px]">
                    <div className="relative max-w-full max-max-w-md aspect-square">
                        <Image
                            src="/hero.png" // Replace with your actual image
                            alt="Fast Cash Hero"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className="sm:hidden max-w-[330px] ml-5 mr-5 flex flex-col lg:flex-row items-center gap-[30px]">

                <div></div>

                {/* LEFT */}
                <div className="flex-1 gap-6">
                    <div className="max-w-[330px] h-[243PX] gap-6">
                        <div className="w-[315px] h-[141px] gap-4">
                            <h1 className="text-4xl font-tilt-warp font-normal text-gray-900 w-[315px]">
                                Fast Cash When
                                <br />
                                You
                                <span className="font-semibold bg-gradient-to-r from-[#15C15D] to-[#13EC6D] bg-clip-text text-transparent"> Need It</span>
                            </h1>
                            <Image src={'/underline.svg'} alt="" width={187} height={1} className="w-[120px] ml-18 md:[187px] md:ml-60" />


                            <p className="font-poppins font-medium text-gray-600 mt-3 w-[315px] text-base">
                                Affordable loans from $100 to $255. Start moving forward.
                            </p>
                        </div>

                        <div className="max-w-[229px] h-[78px] mt-4 gap-2">
                            <div className="flex items-center gap-2">
                                <CircleCheck className="text-green-600 w-4 h-4" />
                                <span>Approved in minutes</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CircleCheck className="text-green-600 w-4 h-4" />
                                <span>Money same day</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CircleCheck className="text-green-600 w-4 h-4" />
                                <span>Good credit not needed</span>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-[314px] h-[71px] gap-2">
                        <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded-full">
                            Apply now
                        </button>
                        <p className="text-gray-500 text-sm mt-2 italic">
                            Visit a store or apply online in minutes.
                        </p>
                    </div>

                    <div className="flex max-w-[330px] h-[32px] gap-[20px] mt-11">
                        <Image src="/googlereview.svg" width={80} height={32} alt="google" />
                        <Image src="/buisness.svg" width={80} height={20} alt="bbb" />
                        <Image src="/consumer.svg" width={80} height={20} alt="consumer" />
                    </div>
                </div>

                {/* RIGHT */}

                <Image
                    src="/hero.png"
                    alt="Fast Cash Hero"
                    fill
                    className="object-contain max-w-[480px] h-[345px] mt-[140px]"
                />


            </div>
        </section>
    );
}


export default Hero;