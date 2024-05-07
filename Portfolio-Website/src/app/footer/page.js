import Link from 'next/link'

export default function footer() {
    return (
        <div className="dark:bg-black bg-gray-200 text-black dark:text-white h-[100%]">
            <div className="box px-[10%] sm:py-[3%] py-[5%] sm:flex justify-around items-center">
                <div className="d1 sm:w-[40%]">

                    <p className="font-extrabold text-[25px] sm:text-[30px]">Get in Touch</p>
                    <p className="text-[12px] sm:text-[14px] dark:text-gray-400">As a <span className="font-medium">Frontend Developer</span>, I'm always excited to connect with fellow developers, clients, and collaborators. Whether you have a project idea, want to discuss the latest trends in web development, or simply want to say hello, Feel free to reach out to me via Social Media preferred communication channel.</p>


                </div>

                <div className="social sm:w-[20%] h-[100%] py-2">
                    <div className="follow flex justify-center items-center font-medium">
                        <p>Follow us on</p>
                    </div>
                    <div className="media  h-[50px] flex items-center justify-start sm:justify-center gap-5 sm:gap-5 text-black dark:text-white">
                        <Link href="https://www.linkedin.com/" className='sm:text-[22px] text-[18px] hover:text-blue-800'>
                            <i class="bi bi-linkedin"></i>
                        </Link>
                        <Link href="https://github.com/" className='sm:text-[22px] text-[18px] hover:text-purple-800'>
                            <i class="bi bi-github"></i>
                        </Link>
                        <Link href="https://www.instagram.com/" className='sm:text-[22px] text-[18px] hover:text-red-600'>
                            <i class="bi bi-instagram"></i>
                        </Link>
                        <Link href="https://wa.link/" className='sm:text-[22px] text-[18px] hover:text-green-600'>
                            <i class="bi bi-whatsapp"></i>
                        </Link>
                    </div>
                </div>

                <div className="d2 h-[100%] sm:h-[150px] dark:hover:bg-gray-900 hover:bg-gray-300 w-[45%] sm:w-[20%] rounded-tl-[20px] rounded-br-[20px] sm:flex justify-center items-center">
                    <Link href="../message" className="contact cursor-pointer sm:flex-col h-[] flex items-center justify-between">
                        <p className='text-center text-[25px] sm:text-[30px] hover:text-red-500'><i class="bi bi-envelope"></i></p>
                        <p className='dark:text-gray-400 dark:hover:text-white hover:text-gray-800 font-medium text-[14px] sm:text-[16px]'>Contact Me</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}