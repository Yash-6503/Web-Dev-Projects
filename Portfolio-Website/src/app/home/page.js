'use client'
import '../style.css';
import Image from 'next/image';
import yash1 from '../assets/dev.jpg'

import Link from 'next/link';

import { useEffect, useState } from 'react';


const home = () => {

    const [text, setText] = useState('');
    const messages = ['FRONTEND DEVELOPER', 'WEBSITE DESIGNER', 'REACT.JS | NEXT.JS DEVELOPER'];

    useEffect(() => {
        let currentIndex = 0;
        let currentText = '';
        let intervalId;

        const typeText = () => {
            if (currentIndex >= messages.length) {
                currentIndex = 0; // Restart loop if end of messages array is reached
            }
            const currentMessage = messages[currentIndex];
            if (currentText.length < currentMessage.length) {
                currentText += currentMessage[currentText.length];
                setText(currentText);
            } else {
                setTimeout(() => {
                    currentText = ''; // Clear text after displaying full message
                    setText('');
                }, 100); // Delay before clearing text
                currentIndex++; // Move to next message
            }
        };

        intervalId = setInterval(typeText, 150); // Typing speed: 150 milliseconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);


    const handleDownload = () => {
        // Assuming 'Resume.pdf' is located in the public directory
        const downloadUrl = '/Resume.pdf';
        fetch(downloadUrl)
            .then(response => response.blob())
            .then(blob => {

                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'Resume.pdf');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => {
                console.error('Error downloading file:', error);
            });
    };


    return (
        <div className="tracking-tight dark:bg-gray-900 light:bg-white text-black dark:text-white pb-1 h-[100%] pt-[20%] lg:pt-[13%] lg:pb-[2%] w-[100%] px-5 sm:px-20 sm:items-center sm:flex sm:justify-evenly">
            <div className="intro w-[100%] sm:w-[50%] text-gray-500 dark:text-gray-300 ">

                <div className="img w-[100%] h-[50%] px-14 py-5 cursor-pointer sm:hidden">
                    <Image src={yash1} alt="" className='hover:scale-x-105 rounded-[50%] object-cover aspect-square ' />
                </div>

                <p className="text-[18px] font-semibold text-center sm:text-left">HELLO!</p>
                <p className='text-[30px] sm:text-[40px] text-black dark:text-white font-bold text-center sm:text-left'>I'm <span className='text-[red] dark:text-green-500' >John Smith</span></p>
                <p id="fdev" className="text-[20px] sm:text-[25px] font-bold text-black dark:text-white">And I am a <span className='text-[red] dark:text-green-500'>{text}</span>|</p>

                <p className='sm:text-left text-[14px] sm:text-[16px] w-[100%] sm:w-[80%] text-center'>I am a Passionate Front End Developer with a knack for creating innovative and user-friendly web applications. Experienced in both frontend and backend development, I thrive on tackling complex challenges and delivering high-quality solutions. Skilled in HTML, CSS, JavaScript React.js, Next.js, and more. Let's connect and collaborate on exciting projects!</p>
                <Link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></Link>
                <div className="social sm:w-[50%] h-[50px] sm:mt-3 flex items-center justify-center sm:justify-start gap-5 sm:gap-10 sm:px-2 text-black dark:text-white">
                    <Link href="https://www.linkedin.com/" className='sm:text-[30px] text-[20px] hover:text-blue-800'>
                        <i class="bi bi-linkedin"></i>
                    </Link>
                    <Link href="https://github.com/" className='sm:text-[30px] text-[20px] hover:text-purple-800'>
                        <i class="bi bi-github"></i>
                    </Link>
                    <Link href="https://www.instagram.com/" className='sm:text-[30px] text-[20px] hover:text-red-600'>
                        <i class="bi bi-instagram"></i>
                    </Link>
                    <Link href="https://wa.link/" className='sm:text-[30px] text-[20px] hover:text-green-600'>
                        <i class="bi bi-whatsapp"></i>
                    </Link>
                </div>

                <div className="btn sm:flex justify-center px-5 sm:px-0 gap-3 sm:justify-start h-[100%] items-center mb-2 sm:mt-3">
                    <button onClick={handleDownload} class="py-2 sm:ms-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Download CV</button>
                    <Link href="../contact" class="py-2 px-4 ms-3 sm:ms-0 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Contact Me</Link>
                </div>
            </div>


            <div className="img w-[40%] p-10 cursor-pointer hidden sm:inline-flex ">
                <Image src={yash1} alt="" className='hover:scale-x-105' />
            </div>

        </div>
    );
};

export default home;
