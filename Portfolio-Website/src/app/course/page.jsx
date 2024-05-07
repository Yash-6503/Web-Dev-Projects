import React from 'react'
import Link from 'next/link';

const page = () => {
    return (

        <div className='text-black bg-white dark:bg-gray-900 dark:text-white h-[100%] pt-[10%] px-[10%] w-[100%] sm:pb-1 pb-1'>
            <p className='text-center tracking-tight font-extrabold text-[20px] sm:text-[25px]'>My Courses</p>

            <div className="box my-7 sm:flex justify-around items-center sm:gap-10 py-5 flex-wrap">


                <div class="w-[100%] sm:w-[30%] mb-5 sm:mb-0 p-6 bg-white border hover:bg-gray-300 dark:hover:bg-gray-800 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-[0px_5px_9px_gray] dark:hover:shadow-[0px_5px_10px_aqua]">
                    <Link href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">WEBSITE DESIGNING</h5>
                    </Link>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nisi, nobis accusantium veniam fugit ab architecto exercitationem soluta voluptatibus sunt?</p>

                </div>
                <div class="w-[100%] hover:bg-gray-300 dark:hover:bg-gray-800 sm:w-[30%] p-6 mb-5 sm:mb-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-[0px_5px_9px_gray] dark:hover:shadow-[0px_5px_10px_aqua]">
                    <Link href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">MERN Stack Web Development</h5>
                    </Link>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident architecto est odio veniam a necessitatibus asperiores autem magnam saepe vitae.</p>

                </div>
                <div class="w-[100%] hover:bg-gray-300 dark:hover:bg-gray-800 sm:w-[30%] p-6 mb-5 sm:mb-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-[0px_5px_9px_gray] dark:hover:shadow-[0px_5px_10px_aqua]">
                    <Link href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Fullstack Web Development in Java</h5>
                    </Link>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quibusdam iusto tempora deleniti consectetur eius odit a labore repudiandae aperiam?</p>

                </div>
                <div class="w-[100%] hover:bg-gray-300 dark:hover:bg-gray-800 sm:w-[30%] p-6 mb-5 sm:mb-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-[0px_5px_9px_gray] dark:hover:shadow-[0px_5px_10px_aqua]">
                    <Link href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">REACT.JS</h5>
                    </Link>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptate culpa eaque aspernatur dolorum nesciunt mollitia cupiditate illum veritatis et!</p>

                </div>
                <div class="w-[100%] hover:bg-gray-300 dark:hover:bg-gray-800 sm:w-[30%] p-6 mb-5 sm:mb-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-[0px_5px_9px_gray] dark:hover:shadow-[0px_5px_10px_aqua]">
                    <Link href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">NODE.JS</h5>
                    </Link>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laborum sapiente a totam temporibus quae laudantium, maxime impedit architecto mollitia?</p>

                </div>
                <div class="w-[100%] hover:bg-gray-300 dark:hover:bg-gray-800 sm:w-[30%] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-[0px_5px_9px_gray] dark:hover:shadow-[0px_5px_10px_aqua]">
                    <Link href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">C and C++ Programming</h5>
                    </Link>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsam assumenda neque sint placeat nemo animi doloremque quibusdam magnam praesentium?</p>

                </div>

            </div>
        </div>





    )
}

export default page
