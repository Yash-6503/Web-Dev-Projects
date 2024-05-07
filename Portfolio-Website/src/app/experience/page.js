import Link from 'next/link';
import '../style.css';

export default function experience() {
    return (
        <div className="text-black bg-white dark:bg-gray-900  h-[100%] pt-5 pb-1 sm:pt-[10%] w-[100%] px-[10%] sm:px-[15%]">
            <p className="text-[20px] sm:text-[25px] font-extrabold text-center dark:text-white">My Experience</p>
            <div className="sm:flex justify-between items-center sm:flex-wrap cursor-pointer">
                <div className="sec1 bg-yellow-400 hover:shadow-[0px_5px_10px_grey] dark:hover:shadow-[0px_5px_20px_aqua] w-[100%] sm:w-[30%] h-[100%] my-10 py-5 rounded-[20px]">
                    <p className="text-center text-[20px] font-bold">Internship</p>
                    <ul className="px-4 text-center mt-2 text-[17px]">
                        <p><span className="font-medium">FRONTEND DEVELOPER</span> at XYZ private limited, Dubai.</p>
                        <p className="font-medium mb-4">Jan 2024 to present</p>
                        <Link href="../contact" className="hire">Hire Me</Link>
                    </ul>
                </div>

                <div className="sec2 bg-gray-300 hover:shadow-[0px_5px_10px_grey] dark:hover:shadow-[0px_5px_20px_aqua] h-[100%] w-[100%] sm:w-[30%] my-10 py-5 rounded-[20px]">
                    <p className="text-center text-[18px] font-bold">Projects</p>
                    <ul className="px-4 text-center mt-2 text-[17px]">
                        <li>Clone Project</li>
                        <li>Personal Portfolio</li>
                        <li className='mb-4'>Calculator, Profile Cards</li>
                        <Link href="https://github.com/" className="hire">Details</Link>
                    </ul>
                </div>



                <div className="sec3 bg-blue-300 hover:shadow-[0px_5px_10px_grey] dark:hover:shadow-[0px_5px_20px_aqua] h-[100%] w-[100%] sm:w-[30%] my-10 py-5 rounded-[20px]">
                    <p className="text-center text-[18px] font-bold">Education</p>
                    <ul className="px-4 text-center mt-2 text-[17px]">
                        <li className='mb-4'>Graduated in <span className='font-medium'>Bachelors of Science [BSc]</span> from X.Y.Z College, UK.</li>
                        <Link href="../education" className="hire">Details</Link>

                    </ul>
                </div>

                <div className="sec3 bg-orange-300 hover:shadow-[0px_5px_10px_grey] dark:hover:shadow-[0px_5px_20px_aqua] h-[100%] w-[100%] sm:w-[45%] my-10 py-5 rounded-[20px]">
                    <p className="text-center text-[18px] font-bold">Skills</p>
                    <ul className="px-4 text-center mt-2 text-[16px]">
                        <li className='mb-4'>As a <span className='font-medium'>Frontend Developer</span>, I possess a diverse skill set encompassing HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, Also Frameworks as well ReactJs & NextJs.</li>
                        <Link href="../skills" className="hire">Details</Link>
                    </ul>
                </div>

                <div className="sec3 bg-green-400 hover:shadow-[0px_5px_10px_grey] dark:hover:shadow-[0px_5px_20px_aqua] h-[100%] w-[100%] sm:w-[45%] my-10 py-5 rounded-[20px]">
                    <p className="text-center text-[18px] font-bold">Courses</p>
                    <ul className="px-4 text-center mt-2 text-[16px]">
                        <li><span className='font-medium'>Fullstack Web Developement Course</span> in MERN and JAVA.</li>
                        <li><span className='font-medium'>Frontend Courses</span> are Website Designing and ReactJs.</li>
                        <li className='mb-2'>Courses Done at <span className='font-medium'>A.B.C Training and Solutions, UK.</span></li>
                        <Link href="../course" className="hire">Details</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}