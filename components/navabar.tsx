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
        <nav className=" px-2 bg-white relative z-50">
            <div className="h-[106px] sm:h-[142px] w-full">
                <div className="h-full flex flex-col">
                    {/* Top Banner */}
                    <div className="border-b border-[#E8E8E8] py-2 px-4 sm:px-0">
                        <h1 className="max-w-7xl text-[#353535] hidden lg:block font-poppins font-medium text-[16px] leading-[27px] tracking-normal text-center align-middle max-w-[1440px] mx-auto">
                            Get Fast Cash Today: Secure Payday Loans with Instant Approval and Same-Day Deposits. Apply Online in Minutes!
                        </h1>
                        <div className="flex justify-center lg:hidden">
                            <div className="h-[23px] w-auto mt-1">
                                <h1 className="text-[12px] sm:text-[14px] text-center whitespace-nowrap sm:whitespace-normal px-2">
                                    Fast Cash with Instant Payday Approval
                                </h1>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Section */}
                    <div className="flex w-full h-[60%] items-center justify-between sm:hidden px-6">
                        <Image
                            src="/Logo.png"
                            alt="Clash In Flash"
                            width={148}
                            height={19}
                            className="w-28 h-auto"
                            priority
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

                    {/* Desktop Menu Section */}
                    <div className="max-w-7xl hidden sm:flex w-full mx-auto p-2 justify-between h-full pb-4">
                        <div className="flex flex-row gap-[30px] lg:gap-[71px] items-center">
                            <Image
                                src="/Logo.png"
                                alt="Clash In Flash"
                                width={250}
                                height={32}
                                className="w-32 md:w-43"
                                priority
                            />

                            <div className="flex flex-row gap-[20px] lg:gap-[30px] font-serif">
                                {/* Loans with Click Dropdown */}
                                <div className="relative" ref={loansRef}>
                                    <button
                                        onClick={handleLoansClick}
                                        className="text-[#353535] font-poppins font-medium text-[14px] lg:text-[16px] leading-[27px] tracking-normal text-center align-middle cursor-pointer bg-transparent border-none hover:text-green-600 transition-colors whitespace-nowrap"
                                    >
                                        Loans
                                    </button>
                                    {showLoans && (
                                        <div className="absolute left-0 top-full mt-2 z-[100]">
                                            <NavHoverLoans />
                                        </div>
                                    )}
                                </div>

                                {/* Locations - No hover, no dropdown */}
                                <span className="text-[#353535] font-poppins font-medium text-[14px] lg:text-[16px] leading-[27px] tracking-normal text-center align-middle whitespace-nowrap">
                                    Locations
                                </span>

                                {/* Save with Click Dropdown */}
                                <div className="relative" ref={saveRef}>
                                    <button
                                        onClick={handleSaveClick}
                                        className="text-[#353535] font-poppins font-medium text-[14px] lg:text-[16px] leading-[27px] tracking-normal text-center align-middle cursor-pointer bg-transparent border-none hover:text-green-600 transition-colors whitespace-nowrap"
                                    >
                                        Save
                                    </button>
                                    {showSave && (
                                        <div className="absolute left-0 top-full mt-2 z-[100]">
                                            <NavHoverSave />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex-shrink-0 ">
                            <div className="flex font-poppins items-center h-[47px] gap-[15px] lg:gap-[35px] p-2">
                                <span className="text-[#353535] font-poppins font-medium text-[14px] lg:text-[16px] leading-[27px] tracking-normal text-center align-middle flex items-center gap-[8px] whitespace-nowrap hover:text-green-600 transition-colors cursor-pointer">
                                    <MapPin size={18} className="flex-shrink-0" />
                                    <span className="hidden lg:inline font-poppins">Find a Store</span>
                                    <span className="lg:hidden">Store</span>
                                </span>

                                <div className="flex items-center gap-[10px]">
                                    <button className="text-white font-poppins font-medium text-[14px] lg:text-[16px] leading-[27px] tracking-normal text-center align-middle flex items-center justify-center w-[100px] lg:w-[125px] h-[47px] bg-[linear-gradient(86.41deg,#15C15D_1.64%,#13EC6D_98.36%)] rounded-[40px] cursor-pointer whitespace-nowrap hover:opacity-90 transition-opacity">
                                        Apply now
                                    </button>

                                    <button className="text-[#353535] font-poppins font-medium text-[14px] lg:text-[16px] leading-[27px] tracking-normal text-center align-middle flex items-center justify-center w-[80px] lg:w-[125px] h-[47px] border border-green-500 rounded-[40px] bg-transparent cursor-pointer whitespace-nowrap hover:bg-green-50 transition-colors">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {showMobileMenu && (
                <div className="absolute top-[106px] left-0 w-full bg-white z-[100] p-4 shadow-lg">
                    <SidebarMenu />
                </div>
            )}
        </nav>
    );
}

export default Navbar;