// ImageScrollPage.js
"use client";

import React from 'react';
import { useRef } from 'react';
import Image from 'next/image';
import Logo from '../assets/SwiggyLogo.png';
import data from './images';
import './style.css';






export default function Mind() {



    const scrollRef = useRef(null);

    const handleScrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += 100;
        }
    };
    const handleScrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= 100;
        }
    };

    return (
        <div className='start w-[100%] h-[350px] sm:px-[15%] pt-5 bg-white '>
            <div className="mind bg-white text-black font-bold text-[25px] w-[100%] flex justify-between">
                <p>Whats on your Mind?</p> 
                <div className="btn flex justify-between w-[10%]  text-center items-center">
                    
                    <button onClick={handleScrollLeft} className='border-[1px] w-[40px] bg-[#E2E2E7] text-gray-700 rounded-[50%]'><i class="bi bi-arrow-left-short"></i></button>
                    <button onClick={handleScrollRight} className='border-[1px] w-[40px] bg-[#E2E2E7] text-gray-700 rounded-[50%]'><i class="bi bi-arrow-right-short"></i></button>
                </div>

            </div>
            <div id="Scroll" ref={scrollRef} style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }} className="Scroll bg-white whitespace-nowrap overflow-auto scrollbar-hide h-[250px]">
                <div className="flex space-x-5 p-4 sm:gap w-[100%]">
                    
                    <Image src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png"
                        width="150"
                        height="200"
                        alt="Image 1"
                        className=" object-contain"
                    />
                    <Image src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png"
                        width="150"
                        height="200"
                        alt="Image 1"
                        className=" object-contain"
                    />
                    <Image src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"
                        width="150"
                        height="200"
                        alt="Image 1"
                        className=" object-contain"
                    />
                    <Image src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Kachori.png"
                        width="150"
                        height="200"
                        alt="Image 1"
                        className=" object-contain"
                    />
                    <Image src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png"
                        width="150"
                        height="200"
                        alt="Image 1"
                        className=" object-contain"
                    />
                    <Image src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png"
                        width="150"
                        height="200"
                        alt="Image 1"
                        className=" object-contain"
                    />
                    <Image src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png"
                        width="150"
                        height="200"
                        alt="Image 1"
                        className=" object-contain"
                    />
                    <Image src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png"
                        width="150"
                        height="200"
                        alt="Image 1"
                        className=" object-contain"
                    />
                    <Image src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png"
                        width="150"
                        height="200"
                        alt="Image 1"
                        className=" object-contain"
                    />
                    <Image src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png"
                        width="150"
                        height="200"
                        alt="Image 1"
                        className=" object-contain"
                    />
                    <Image src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png"
                        width="150"
                        height="200"
                        alt="Image 1"
                        className=" object-contain"
                    />
                    <Image src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Juice.png"
                        width="150"
                        height="200"
                        alt="Image 1"
                        className=" object-contain"
                    />
                    <Image src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Coffee.png"
                        width="150"
                        height="200"
                        alt="Image 1"
                        className=" object-contain"
                    />
                    <Image src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png"
                        width="150"
                        height="200"
                        alt="Image 1"
                        className=" object-contain"
                    />
                    <Image src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Khichdi.png"
                        width="150"
                        height="200"
                        alt="Image 1"
                        className=" object-contain"
                    />
                    <Image src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029842/PC_Creative%20refresh/3D_bau/banners_new/Vada.png"
                        width="150"
                        height="200"
                        alt="Image 1"
                        className=" object-contain"
                    />
                    <Image src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Dhokla.png"
                        width="150"
                        height="200"
                        alt="Image 1"
                        className=" object-contain"
                    />
                    <Image src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/rng/md/carousel/production/cbb85a3c1684891105294d11f8359996"
                        width="150"
                        height="200"
                        alt="Image 1"
                        className=" object-contain"
                    />
                    <Image src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png"
                        width="150"
                        height="200"
                        alt="Image 1"
                        className=" object-contain"
                    />
                    


                </div>
            </div>

            <hr />
        </div>
    );
};
