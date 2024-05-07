import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import img1 from '../assets/dev.jpg';

const page = () => {
  return (


    <div className="text-black bg-white dark:bg-gray-900 dark:text-white h-[100%] sm:pt-[10%] w-[100%] sm:pb-10 px-8 sm:px-[20%] ">
      <p className='text-[25px] text-center tracking-tight font-extrabold text-gray-900 dark:text-white'>Contact Me</p>

      <div className="box mt-2 flex justify-center py-5">



        <div class="w-[100%] sm:w-[50%] rounded-lg shadow bg-gray-300  hover:shadow-[0px_5px_20px_gray] dark:hover:shadow-[0px_5px_10px_aqua]">


          <div class="flex flex-col items-center py-5 sm:py-10 dark:bg-gray-800 dark:text-white">
            <Image class="w-24 h-24 mb-3 rounded-full object-cover shadow-lg" src={img1} alt="Bonnie image" />
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">John Smith</h5>
            <span class="text-sm font-medium text-gray-500 dark:text-gray-300">Front-End Developer</span>

            <div className="social sm:w-[50%] sm:h-[50px] my-2 flex items-center justify-center text-black dark:text-white gap-5">
              <Link href="https://www.linkedin.com/" className='text-[20px] sm:text-[25px]  hover:text-blue-800'>
                <i class="bi bi-linkedin"></i>
              </Link>
              <Link href="https://github.com/" className='text-[20px] sm:text-[25px]  hover:text-purple-800'>
                <i class="bi bi-github"></i>
              </Link>
              <Link href="https://www.instagram.com/" className='text-[20px] sm:text-[25px] hover:text-red-600'>
                <i class="bi bi-instagram"></i>
              </Link>
              <Link href="https://wa.link/" className='text-[20px] sm:text-[25px] hover:text-green-600'>
                <i class="bi bi-whatsapp"></i>
              </Link>
            </div>

            <div className="contact text-[14px] sm:text-[16px] font-medium dark:text-white">
              <p className='flex justify-center gap-2 items-center'><i class="bi bi-telephone-fill text-[14px]"></i>Phone : <span>9991019190</span></p>
              <p className='flex justify-center gap-1 items-center'><i class="bi bi-envelope-fill "></i>Mail : <span>abc@gmail.com</span></p>
            </div>

            <div class="flex mt-4 md:mt-3">
              <Link href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Hire Me</Link>
              <Link href="../message" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message Me</Link>
            </div>
          </div>
        </div>


      </div>

    </div>



  );
}

export default page;
