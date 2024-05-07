import Image from "next/image";

import logo from '../assets/SwiggyLogo.png'
import icon1 from '../assets/icons/discount.png'
import icon2 from '../assets/icons/support.png'
import icon3 from '../assets/icons/signin.png'
import icon4 from '../assets/icons/cart.png'

export default function Navbar() {
    return (
        <div class="start w-[100%] flex h-[80px] bg-white text-black justify-between items-center border-2 shadow-[0px_10px_10px_black]">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
            <div className="sec1 flex w-[30%] justify-around items-center cursor-pointer">
                <div className="logo">
                    <Image src={logo} alt="" className="w-[40px] h-[50px]" />
                </div>
                <div className="info flex gap-2 ">
                    <p className="text-[14px] text-gray-800 font-bold underline underline-offset-4 hover:text-orange-400">Other</p>
                    <p className="text-[14px] text-gray-500 font-medium">Nashik, Maharashtra, India</p>
                </div>
            </div>
            <div className="sec2 flex justify-around w-[60%] cursor-pointer">
                <div className="search flex items-center gap-2 hover:text-orange-400">
                    <i className="bi bi-search font-bold text-[16px] "></i>
                    <p className="font-medium text-gray-500 hover:text-orange-400">Search</p>
                </div>
                <div className="offer flex justify-center gap-2 items-center">
                    <Image src={icon1} alt="" className="w-[20%]"/>
                    <p className="font-medium text-gray-500 hover:text-orange-400">Offers <sup className="text-orange-500 font-bold">New</sup></p>
                </div>
                <div className="help flex justify-center gap-2 items-center">
                    <Image src={icon2} alt="" className="w-[35%]" />
                    <p className="font-medium text-gray-500 hover:text-orange-400">Help</p>
                </div>
                <div className="signin flex justify-center gap-2 items-center">
                    <Image src={icon3} alt="" className="w-[30%]" />
                    <p className="font-medium text-gray-500 hover:text-orange-400">Sign In</p>
                </div>
                <div className="cart flex justify-center gap-2 items-center gap-1">
                    <Image src={icon4} alt="" className="w-[40%]" />
                    <p className="font-medium text-gray-500 hover:text-orange-400">Cart</p>
                </div>
           </div>
      </div>  
    );
}