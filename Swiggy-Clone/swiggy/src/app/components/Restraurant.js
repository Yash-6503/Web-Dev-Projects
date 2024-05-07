"use client";
import Image from 'next/image';
import { useRef } from 'react';
import './style.css';
import Logo from '../assets/SwiggyLogo.png';
import star from '../assets/star.png';

export default function Restraurant() {

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
        <div className="start bg-white w-[100%] h-[450px] sm:px-[15%]">
            <div className="res flex text-black font-bold text-[25px] w-[100%] justify-between">
                <p className='font-bold text-[25px]'>Top restaurant chains in Nashik</p>

                <div className="btn flex justify-between w-[10%]  text-center items-center">

                    <button onClick={handleScrollLeft} className='border-[1px] w-[40px] bg-[#E2E2E7] text-gray-700 rounded-[50%]'><i class="bi bi-arrow-left-short"></i></button>
                    <button onClick={handleScrollRight} className='border-[1px] w-[40px] bg-[#E2E2E7] text-gray-700 rounded-[50%]'><i class="bi bi-arrow-right-short"></i></button>
                </div>
            </div>
            
            <div id="Scroll" ref={scrollRef} style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }} className="Scroll space-x-10 overflow-x-scroll inline-flex whitespace-nowrap overflow-auto scrollbar-hide h-[350px] w-[100%] mt-5 pl-[70%] justify-around">
                    
                    <div className="img2 h-[100%]">
                        <Image src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rfcfoudtda1n7qqgbi4c"
                            width="300"
                            height="200"
                            alt="Image 1"
                            className=" object-cover aspect-video h-[60%] w-[100%] rounded-[30px]"
                        />
                        <div className="star px-10 mt-2">
                        <p className='font-medium text-[19px] text-black'> Kokni Darbar</p>
                        <p className='font-medium text-[17px] text-black flex gap-3 items-center' ><Image src={star} className="w-[20px] h-[20px]" alt="" />4.3 • 20-25 mins</p>
                            <p className='font-normal text-gray-500 text-[16px]'>
                            Biryani, North Indian<br/>
                            Doodhbazaar
                        </p>
                
                        </div>
                    </div>
                    <div className="img2 h-[100%]">
                    <Image src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/v29seuyjzfrt2qe6oibx"
                            width="300"
                            height="200"
                            alt="Image 1"
                            className=" object-cover aspect-video h-[60%] rounded-[30px]"
                        />
                        <div className="star px-10 mt-2">
                            <p className='font-medium text-[19px] text-black'>Kaka Ka Dhaba</p>
                        <p className='font-medium text-[17px] text-black flex gap-3 items-center' ><Image src={star} className="w-[20px] h-[20px]" alt="" />4.3 • 30-35 mins</p>
                            <p className='font-normal text-gray-500 text-[16px]'>
                            Biryani, Chinese<br/>
                            Lekha Nagar
                        </p>

        
                        </div>
                    </div>
                    <div className="img2 h-[100%]">
                    <Image src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vnzk4u45y387bpzjdm7n"
                            width="300"
                            height="200"
                            alt="Image 1"
                            className=" object-cover aspect-video h-[60%] rounded-[30px]"
                        />
                        <div className="star px-10 mt-2">
                        <p className='font-medium text-[19px] text-black'>Udupi Tadka's Gokul</p>
                        <p className='font-medium text-[17px] text-black flex gap-3 items-center' ><Image src={star} className="w-[20px] h-[20px]" alt="" />4.4 • 25-30 mins</p>
                            <p className='font-normal text-gray-500 text-[16px]'>
                            South Indian, Biryani<br/>
                            Mumbai Naka
                            </p>
                        
    
                        </div>
                    </div>
                    <div className="img2 h-[100%] ">
                    <Image src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/85ccae4e3576f9330af102c46ca85395"
                            width="300"
                            height="200"
                            alt="Image 1"
                            className=" object-cover aspect-video h-[60%] rounded-[30px]"
                        />
                        <div className="star px-10 mt-2">
                        <p className='font-medium text-[19px] text-black'>Robbins Ice Cream</p>
                        <p className='font-medium text-[17px] text-black flex gap-3 items-center' ><Image src={star} className="w-[20px] h-[20px]" alt="" />4.7 • 25-30 mins</p>
                            <p className='font-normal text-gray-500 text-[16px]'>
                            Desserts, Ice Cream<br/>
                            College Road
                        </p>
                       
                        </div>
                    </div>
                    <div className="img2 h-[100%] ">
                    <Image src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xwtt102lwlpl8nvtjjxq"
                            width="300"
                            height="200"
                            alt="Image 1"
                            className=" object-cover aspect-video h-[60%] rounded-[30px]"
                        />
                        <div className="star px-10 mt-2">
                        <p className='font-medium text-[19px] text-black'>Bagga Sweets</p>
                        <p className='font-medium text-[17px] text-black flex gap-3 items-center' ><Image src={star} className="w-[20px] h-[20px]" alt="" />4.5 • 15-20 mins</p>
                            <p className='font-normal text-gray-500 text-[16px]'>
                            Sweets, Fast Food<br/>
                            Singada Talao
                        </p>
                       
                        </div>
                    </div>
                    <div className="img2 h-[100%] ">
                    <Image src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wdaaudlho9rduhenjs8c"
                            width="300"
                            height="200"
                            alt="Image 1"
                            className=" object-cover aspect-video h-[60%] rounded-[30px]"
                        />
                        <div className="star px-10 mt-2">
                        <p className='font-medium text-[19px] text-black'>Hotel Yahoo</p>
                        <p className='font-medium text-[17px] text-black flex gap-3 items-center' ><Image src={star} className="w-[20px] h-[20px]" alt="" /> 4.5 • 30-35 mins</p>
                            <p className='font-normal text-gray-500 text-[16px]'>
                            Seafood, Hyderabadi<br/>
                            Sharanpur
                        </p>
                    
                        </div>
                    </div>
                    
            </div>     
            <hr />
        
        </div>  
    );
}