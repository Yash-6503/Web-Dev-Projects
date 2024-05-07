import Link from 'next/link';
import Image from 'next/image';
import img1 from '../assets/projects/swiggy.jpg';
import img2 from '../assets/projects/portfolio.jpg';
import img3 from '../assets/projects/calculator.jpg';
import img4 from '../assets/projects/grocery.jpg';
import img5 from '../assets/projects/car.jpg';

export default function Projects() {

    return (
        <div className="text-black bg-white dark:bg-gray-900 dark:text-white h-[100%] pb-5 pt-[10%] w-[100%] px-[10%]">
            <p className="text-center font-extrabold text-[20px] sm:text-[25px]">My Projects</p>

            <div className="box mt-7 sm:flex justify-between items-center sm:gap-10 ">
                <div class=" w-[100%] hover:bg-gray-300 dark:hover:bg-gray-800 sm:w-[40%] mb-5 sm:mb-0  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-[0px_5px_15px_gray] dark:hover:shadow-[0px_5px_15px_aqua]">
                    <Link href="#">
                        <Image className="rounded-t-lg w-[100%] object-contain aspect-square" src={img1} alt="" />
                    </Link>
                    <div class="px-5">
                        <Link href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Clone Project</h5>
                        </Link>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">I have recently completed a project where I have developed a Clone using HTML, CSS, Tailwind CSS, JavaScript, and Next.js.</p>
                        <Link href="https://github.com/" class="inline-flex items-center px-3 py-2 mb-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                    </div>
                </div>

                <div class=" w-[100%] hover:bg-gray-300 dark:hover:bg-gray-800 sm:w-[40%] mb-5 sm:mb-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-[0px_5px_15px_gray] dark:hover:shadow-[0px_5px_15px_aqua]">
                    <Link href="#">
                        <Image className="rounded-t-lg w-[100%] object-contain aspect-square" src={img2} alt="" />
                    </Link>
                    <div class="px-5">
                        <Link href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Personal Portfolio Website</h5>
                        </Link>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">I have recently completed a project where I have developed a Personal Portfolio Website using HTML, CSS, Tailwind CSS, JavaScript, and Next.js.</p>
                        <Link href="#" class="inline-flex items-center px-3 py-2 mb-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                    </div>
                </div>

                <div class=" w-[100%] hover:bg-gray-300 dark:hover:bg-gray-800 sm:w-[40%] mb-3 sm:mb-0  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-[0px_5px_15px_gray] dark:hover:shadow-[0px_5px_15px_aqua]">
                    <Link href="#">
                        <Image className="rounded-t-lg w-[100%] object-contain aspect-square" src={img3} alt="" />
                    </Link>
                    <div class="px-5">
                        <Link href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Calculator Project</h5>
                        </Link>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">I have recently completed a project where I have developed a Personal Calculator Project on WEB using HTML, CSS, Tailwind CSS, JavaScript, and React.js.</p>
                        <Link href="https://github.com/" class="inline-flex items-center px-3 py-2 mb-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                    </div>
                </div>


            </div>

            <div className="box2 mt-10 sm:flex justify-center items-center sm:gap-10 ">
                <div class=" w-[100%] hover:bg-gray-300 dark:hover:bg-gray-800 sm:w-[40%] mb-5 sm:mb-0 sm:flex justify-around items-center px- py-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-[0px_5px_15px_gray] dark:hover:shadow-[0px_5px_15px_aqua]">
                    <Link href="#">
                        <Image className="rounded-t-lg w-[100%] sm:ml-2 object-contain aspect-square" src={img4} alt="" />
                    </Link>
                    <div class="px-5">
                        <Link href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Online Grocery Shopping Project</h5>
                        </Link>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">I have completed project where I have developed a Online Grocery Shopping Project using HTML, CSS, JavaScript, PHP and MySQL.</p>
                        <Link href="https://github.com/" class="inline-flex items-center px-3 py-2 mb-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                    </div>

                </div>


                <div class=" w-[100%] hover:bg-gray-300 dark:hover:bg-gray-800 sm:w-[50%] sm:flex justify-center items-center sm:px-2 py-1 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-[0px_5px_15px_gray] dark:hover:shadow-[0px_5px_15px_aqua]">
                    <Link href="#">
                        <Image className="rounded-t-lg w-[100%] sm:w-[80%] object-contain aspect-square sm:ml-5" src={img5} alt="" />
                    </Link>
                    <div class="px-5">
                        <Link href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Online Car Booking Project</h5>
                        </Link>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">I have completed Online Car Booking project where I have developed a Online Grocery Shopping Project using HTML, CSS, JavaScript, PHP and MySQL.</p>
                        <Link href="https://github.com/" class="inline-flex items-center px-3 py-2 mb-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    );
}