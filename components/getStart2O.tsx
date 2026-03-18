"use client";

import Image from "next/image";

const PhoneMockup = ({ className, blurred = false }: { className?: string; blurred?: boolean }) => (
    <div className={`relative ${className} ${blurred ? "blur-[2px] opacity-70" : ""}`}>
        <svg width="268" height="230" viewBox="0 0 268 230" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="w-full h-auto drop-shadow-2xl">
            <path d="M72.4135 18C72.4135 8.05888 80.4723 0 90.4135 0H194.304C204.245 0 212.304 8.05887 212.304 18V229.183H72.4135V18Z" fill="url(#pattern0_498_3275)" />
            <g filter="url(#filter0_d_498_3275)">
                <rect x="29" y="149.423" width="210" height="30.2885" rx="15.1442" fill="white" shapeRendering="crispEdges" />
                <path d="M103.325 167.295H98.8765L98.1405 169.423H95.7885L99.8045 158.239H102.413L106.429 169.423H104.061L103.325 167.295ZM102.717 165.503L101.101 160.831L99.4845 165.503H102.717ZM109.53 161.839C109.818 161.434 110.212 161.098 110.714 160.831C111.226 160.554 111.807 160.415 112.458 160.415C113.215 160.415 113.898 160.602 114.506 160.975C115.124 161.348 115.61 161.882 115.962 162.575C116.324 163.258 116.506 164.052 116.506 164.959C116.506 165.866 116.324 166.671 115.962 167.375C115.61 168.068 115.124 168.607 114.506 168.991C113.898 169.375 113.215 169.567 112.458 169.567C111.807 169.567 111.231 169.434 110.73 169.167C110.239 168.9 109.839 168.564 109.53 168.159V173.647H107.29V160.559H109.53V161.839ZM114.218 164.959C114.218 164.426 114.106 163.967 113.882 163.583C113.668 163.188 113.38 162.89 113.018 162.687C112.666 162.484 112.282 162.383 111.866 162.383C111.46 162.383 111.076 162.49 110.714 162.703C110.362 162.906 110.074 163.204 109.85 163.599C109.636 163.994 109.53 164.458 109.53 164.991C109.53 165.524 109.636 165.988 109.85 166.383C110.074 166.778 110.362 167.082 110.714 167.295C111.076 167.498 111.46 167.599 111.866 167.599C112.282 167.599 112.666 167.492 113.018 167.279C113.38 167.066 113.668 166.762 113.882 166.367C114.106 165.972 114.218 165.503 114.218 164.959ZM119.733 161.839C120.021 161.434 120.416 161.098 120.917 160.831C121.429 160.554 122.011 160.415 122.661 160.415C123.419 160.415 124.101 160.602 124.709 160.975C125.328 161.348 125.813 161.882 126.165 162.575C126.528 163.258 126.709 164.052 126.709 164.959C126.709 165.866 126.528 166.671 126.165 167.375C125.813 168.068 125.328 168.607 124.709 168.991C124.101 169.375 123.419 169.567 122.661 169.567C122.011 169.567 121.435 169.434 120.933 169.167C120.443 168.9 120.043 168.564 119.733 168.159V173.647H117.493V160.559H119.733V161.839ZM124.421 164.959C124.421 164.426 124.309 163.967 124.085 163.583C123.872 163.188 123.584 162.89 123.221 162.687C122.869 162.484 122.485 162.383 122.069 162.383C121.664 162.383 121.28 162.49 120.917 162.703C120.565 162.906 120.277 163.204 120.053 163.599C119.84 163.994 119.733 164.458 119.733 164.991C119.733 165.524 119.84 165.988 120.053 166.383C120.277 166.778 120.565 167.082 120.917 167.295C121.28 167.498 121.664 167.599 122.069 167.599C122.485 167.599 122.869 167.492 123.221 167.279C123.584 167.066 123.872 166.762 124.085 166.367C124.309 165.972 124.421 165.503 124.421 164.959ZM129.937 157.583V169.423H127.697V157.583H129.937ZM139.99 160.559L134.502 173.615H132.118L134.038 169.199L130.486 160.559H132.998L135.286 166.751L137.606 160.559H139.99ZM148.642 160.431C149.698 160.431 150.552 160.767 151.202 161.439C151.853 162.1 152.178 163.028 152.178 164.223V169.423H149.938V164.527C149.938 163.823 149.762 163.284 149.41 162.911C149.058 162.527 148.578 162.335 147.97 162.335C147.352 162.335 146.861 162.527 146.498 162.911C146.146 163.284 145.97 163.823 145.97 164.527V169.423H143.73V160.559H145.97V161.663C146.269 161.279 146.648 160.98 147.106 160.767C147.576 160.543 148.088 160.431 148.642 160.431ZM157.604 169.567C156.751 169.567 155.983 169.38 155.3 169.007C154.618 168.623 154.079 168.084 153.684 167.391C153.3 166.698 153.108 165.898 153.108 164.991C153.108 164.084 153.306 163.284 153.7 162.591C154.106 161.898 154.655 161.364 155.348 160.991C156.042 160.607 156.815 160.415 157.668 160.415C158.522 160.415 159.295 160.607 159.988 160.991C160.682 161.364 161.226 161.898 161.620 162.591C162.026 163.284 162.228 164.084 162.228 164.991C162.228 165.898 162.02 166.698 161.604 167.391C161.199 168.084 160.644 168.623 159.940 169.007C159.247 169.38 158.468 169.567 157.604 169.567ZM157.604 167.615C158.01 167.615 158.388 167.519 158.740 167.327C159.103 167.124 159.391 166.826 159.604 166.431C159.818 166.036 159.924 165.556 159.924 164.991C159.924 164.148 159.700 163.503 159.252 163.055C158.815 162.596 158.276 162.367 157.636 162.367C156.996 162.367 156.458 162.596 156.020 163.055C155.594 163.503 155.380 164.148 155.380 164.991C155.380 165.834 155.588 166.484 156.004 166.943C156.431 167.391 156.964 167.615 157.604 167.615ZM175.520 160.559L172.928 169.423H170.512L168.896 163.231L167.280 169.423H164.848L162.240 160.559H164.512L166.080 167.311L167.776 160.559H170.144L171.808 167.295L173.376 160.559H175.520Z" fill="#20BA58" />
            </g>
            <defs>
                <pattern id="pattern0_498_3275" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_498_3275" transform="matrix(0.00256787 0 0 0.0015674 -0.000733676 0)" />
                </pattern>
                <filter id="filter0_d_498_3275" x="0" y="124.423" width="268" height="88.2886" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="14.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_498_3275" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_498_3275" result="shape" />
                </filter>
                <image id="image0_498_3275" width="390" height="812" preserveAspectRatio="none" xlinkHref="/images/Logo/icon.png" />
            </defs>
        </svg>
    </div>
);

export default function AppPromotion() {
    return (
        <section className="w-full bg-[#052116] md:py-24 py-10 overflow-hidden relative">

            <div className="max-w-[1240px] mx-auto px-6 flex flex-col items-center relative z-10">

                {/* Top Mockup Area - Refined Layered Approach */}
                <div className="hidden md:block relative w-full max-w-[1000px] h-[350px] mb-8 flex items-center justify-center ">

                    {/* Central White Pill Background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[85%] h-[140px] bg-white rounded-full z-0 shadow-[0_0_100px_rgba(255,255,255,0.1)]" />

                    {/* Mockups Grid Container */}
                    <div className="relative z-10 flex items-center justify-center gap-4 md:gap-20 w-full overflow-visible">
                        {/* Left Phone (Blurred) */}
                        <img src="/getstart.svg" alt="photo" />
                    </div>
                </div>

                {/* Text Content */}
                <div className="hidden md:block text-center  relative z-20">
                    <div className="w-[633px]">

                        <h2 className="text-white font-tilt-warp font-normal text-5xl">
                            Smart <span className="relative text-[#13EC6D]">Financial Solutions,<Image src={'/getStart/underline.svg'} alt="" width={468} height={0} className="absolute left-0" /></span> Right At Your Fingertips.
                        </h2>
                        

                        <p className="mt-2 text-white text-lg font-normal">
                            The Cash in Flash app helps you set goals and save automatically.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <button className="mt-7 bg-[#15C15D] text-[#FFFFFF] px-10 py-5 rounded-full font-bold text-lg hover:bg-[#13EC6D] transition-all flex items-center gap-3 mx-auto hover:scale-105 active:scale-95 shadow-xl shadow-green-900/20">
                        Get the Cash in Flash app
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>

                    <p className="text-sm mt-2 font-medium italic text-white">
                        Standard data charges may apply
                    </p>
                </div>
                <div>
                    <Image
                        src="/mobComp2.svg"
                        alt="Mobile App Promotion"
                        width={324}
                        height={224}
                        className="object-contain w-full h-auto block md:hidden h-full"
                        priority
                    />
                </div>

                <div className="block md:hidden md:mt-30 relative w-full max-w-[1000px] h-[280px] md:mb-8 flex items-center justify-center ">

                    {/* Central White Pill Background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[85%] h-[140px] bg-white rounded-full z-0 shadow-[0_0_100px_rgba(255,255,255,0.1)]" />

                    {/* Mockups Grid Container */}
                    <div className="relative z-10 flex items-center justify-center gap-4 md:gap-20 w-full overflow-visible">
                        {/* Left Phone (Blurred) */}
                        <PhoneMockup className="hidden md:block w-[180px] shrink-0" blurred />

                        {/* Center Area (Main Phone + Man) */}
                        <div className="relative flex items-center justify-center min-w-[280px]">
                            {/* Center Phone */}
                            <div className="z-10 w-[240px] md:w-[280px]">
                                <PhoneMockup />
                            </div>

                            {/* Man Overlay - image7.png */}
                            <div className="absolute z-20 bottom-8 right-[20px] md:right-[-100px] w-[300px] md:w-[450px]">
                                <Image
                                    src="/mobview.svg"
                                    alt="User Visual"
                                    width={324}
                                    height={0}
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Right Phone (Blurred) */}
                        <PhoneMockup className="hidden md:block w-[180px] shrink-0" blurred />
                    </div>
                </div>
            </div>

            {/* Decorative Blobs */}
            <div className="absolute top-0 left-[-10%] w-[400px] h-[400px] bg-green-900/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-green-900/10 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
}
