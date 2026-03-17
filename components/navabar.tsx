'use client'
import Image from "next/image";
import { MapPin, MenuIcon } from 'lucide-react';
import NavHoverLoans from "./Navbar/LoansHover";
import NavHoverSave from "./Navbar/saveHover";
import SidebarMenu from "./Navbar/mobmenu";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
    const [showLoans, setShowLoans] = useState<boolean>(false);
    const [showSave, setShowSave] = useState<boolean>(false);
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
    const loansRef = useRef<HTMLDivElement>(null);
    const saveRef = useRef<HTMLDivElement>(null);

    // Handle click outside to close dropdowns
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (loansRef.current && !loansRef.current.contains(event.target as Node)) {
                setShowLoans(false);
            }
            if (saveRef.current && !saveRef.current.contains(event.target as Node)) {
                setShowSave(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleMobileMenuClick = () => {
        setShowMobileMenu(!showMobileMenu);
    }

    const handleLoansClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowLoans(!showLoans);
        // Close save dropdown when opening loans
        setShowSave(false);
    };

    const handleSaveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowSave(!showSave);
        // Close loans dropdown when opening save
        setShowLoans(false);
    };

    return (
        <nav className="h-30 sm:h-[142px]">
            <div className="sm:h-[124px] sm:top-[18px] ">
                <div className="h-[106px] opacity-100 flex flex-col gap-[18px]">
                    <div className="border-b border-[#E8E8E8] pt-2 pb-2">
                        <h1 className="text-[#353535] hidden lg:block font-poppins font-medium text-[16px] leading-[27px] tracking-normal text-center align-middle">
                            Get Fast Cash Today: Secure Payday Loans with Instant Approval and Same-Day Deposits. Apply Online in Minutes!
                        </h1>
                        <div className="flex justify-center lg:hidden">
                            <div className="h-[23px] w-auto mt-2 ">
                                <h1 className="text-[14px]">
                                    Fast Cash with Instant Payday Approval
                                </h1>
                            </div>
                        </div>
                    </div>

                    {/* <hr className="sm:border-t border-[#E8E8E8] w-[1440px] h-[1px]" /> */}

                    <div className="flex w-full h-[60%] items-center justify-between sm:hidden px-8">
                        <Image
                            src="/Logo.png"
                            alt="Clash In Flash"
                            width={148}
                            height={19}
                            className="w-28 h-auto"
                        />



                        {showMobileMenu ? (
                            <Image
                                src="/closemenu.svg"
                                alt="Close Menu"
                                width={28}
                                height={28}
                                onClick={handleMobileMenuClick}
                                className="cursor-pointer"
                            />
                        ) : (
                            <MenuIcon
                                size={28}
                                className="text-black cursor-pointer"
                                onClick={handleMobileMenuClick}
                            />
                        )}
                    </div>


                    <div className="hidden sm:flex sm:w-[1220px] mx-auto  items-end justify-between">
                        <div className="sm:w-[540px] h-[32px] flex flex-row gap-[71px]">
                            <Image
                                src="/Logo.png"
                                alt="Clash In Flash"
                                width={250}
                                height={32}
                                className="w-28 sm:w-40 md:w-52 h-auto mr-2"
                            />


                            <div className="hidden sm:flex flex-row gap-[30px] font-serif">
                                {/* Loans with Click Dropdown */}
                                <div className="relative" ref={loansRef}>
                                    <button
                                        onClick={handleLoansClick}
                                        className="text-[#353535] font-poppins font-medium text-[16px] leading-[27px] tracking-normal text-center align-middle cursor-pointer bg-transparent border-none"
                                    >
                                        Loans
                                    </button>
                                    {showLoans && (
                                        <div className="absolute left-0 top-full mt-2 z-50">
                                            <NavHoverLoans />
                                        </div>
                                    )}
                                </div>

                                {/* Locations - No hover, no dropdown */}
                                <span className="text-[#353535] font-poppins font-medium text-[16px] leading-[27px] tracking-normal text-center align-middle">
                                    Locations
                                </span>

                                {/* Save with Click Dropdown */}
                                <div className="relative" ref={saveRef}>
                                    <button
                                        onClick={handleSaveClick}
                                        className="text-[#353535] font-poppins font-medium text-[16px] leading-[27px] tracking-normal text-center align-middle cursor-pointer bg-transparent border-none"
                                    >
                                        Save
                                    </button>
                                    {showSave && (
                                        <div className="absolute left-0 top-full mt-2 z-50">
                                            <NavHoverSave />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="hidden sm:flex font-serif items-center h-[47px] w-[423px] gap-[35px]">
                                <span className="text-[#353535] font-poppins font-medium text-[16px] leading-[27px] tracking-normal text-center align-middle flex items-center gap-[8px]">
                                    <MapPin size={18} />
                                    Find a Store
                                </span>

                                <div className="flex items-center gap-[10px] w-[260px] h-[47px]">
                                    <button className="text-[#353535] font-poppins font-medium text-[16px] leading-[27px] tracking-normal text-center align-middle flex items-center justify-center w-[125px] h-[47px] bg-[linear-gradient(86.41deg,#15C15D_1.64%,#13EC6D_98.36%)] text-white rounded-[40px] cursor-pointer">
                                        Apply now
                                    </button>

                                    <button className="text-[#353535] font-poppins font-medium text-[16px] leading-[27px] tracking-normal text-center align-middle flex items-center justify-center w-[125px] h-[47px] border border-green-500 rounded-[40px] bg-transparent cursor-pointer">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showMobileMenu && (
                <div className="absolute top-[120px] left-0 w-full bg-white z-50 p-4">
                    <SidebarMenu />
                </div>
            )}
        </nav>
    );
}

export default Navbar;