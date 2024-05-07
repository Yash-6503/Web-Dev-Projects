import React from 'react';

import Link from 'next/link';

const education = () => {
    return (
        <div className='text-black px-[10%] bg-white dark:bg-gray-900 dark:text-white h-screen pb-5 pt-[12%] w-[100%]'>
            <p className='text-[25px] font-extrabold text-center'>My Education</p>

            <div className="box my-8 flex justify-around items-center ">
                <div class="w-[30%] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-[0px_5px_9px_gray] dark:hover:shadow-[0px_5px_10px_aqua]">
                    <Link href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Graduation</h5>
                    </Link>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet magni, temporibus doloremque quaerat harum maiores tempora modi delectus voluptatum quas.</p>

                </div>

                <div class="w-[30%] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-[0px_5px_9px_gray] dark:hover:shadow-[0px_5px_10px_aqua]">
                    <Link href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">12th HSC</h5>
                    </Link>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolor tenetur ad debitis sapiente unde necessitatibus esse quisquam officiis tempora!</p>

                </div>

                <div class="w-[30%] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:shadow-[0px_5px_9px_gray] dark:hover:shadow-[0px_5px_10px_aqua]">
                    <Link href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">10th SSC</h5>
                    </Link>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa temporibus sequi quidem cupiditate! Nam molestiae itaque rem facilis cumque.</p>

                </div>


            </div>

        </div>
    )
}

export default education;
