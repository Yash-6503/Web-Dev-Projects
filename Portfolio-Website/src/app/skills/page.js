import Image from 'next/image';
import Link from 'next/link';
import '../style.css';
import img1 from '../assets/skills/html.png';
import img2 from '../assets/skills/CSS1.png';
import img3 from '../assets/skills/Js.png';
import img4 from '../assets/skills/Bootstrap.png';
import img5 from '../assets/skills/Tailwind.png';
import img6 from '../assets/skills/React.webp';
import img7 from '../assets/skills/Next.jpg';
import img8 from '../assets/skills/Github1.png';
import img9 from '../assets/skills/Git.png';
import img10 from '../assets/skills/node.png';
import img11 from '../assets/skills/mongo.png';
import img12 from '../assets/skills/GPT.png';

export default function Skills() {
    return (
        <div className="text-black bg-white dark:bg-gray-900  dark:text-white h-[100%] pt-[25%] sm:pt-[10%] w-[100%] px-5 sm:px-[20%] pb-5">
            <p className="text-[20px] sm:text-[25px] tracking-tight font-extrabold text-center dark:text-white text-black">My ALL Skills</p>

            <div className="sec1  sm:flex sm:h-[250px] h-[100%] w-[100%] items-center justify-center aspect-square">
                <div className="imgage1 w-[100%] sm:flex-col justify-center items-center cursor-pointer ">
                    <Link href="https://www.w3schools.com/html/" className='flex-col sm:flex pt-2'>
                        <p className='text-center text-[20px] font-semibold hover:underline hover:text-[red] mt-3 sm:mt-0'>HTML</p>
                        <Image src={img1} alt="" className='w-[100%] sm:w-[100%] px-16 sm:px-[41px] object-contain' />
                    </Link>
                </div> 
                <div className=" imgage1 w-[100%] sm:flex-col justify-center items-center cursor-pointer" >
                    <Link href="https://www.w3schools.com/css/" className='flex-col pt-2'>
                        <p className='text-center pt-2 text-[20px] font-semibold hover:underline hover:text-[red]'>CSS</p>
                        <Image src={img2} alt="" className='w-[100%] sm:w-[100%] px-20 sm:px-[40px] object-contain' />
                    </Link>

                </div>
                <div className="imgage1 cursor-pointer sm:flex-col justify-center items-center">
                    <Link href="https://www.w3schools.com/js/" className='flex-col p-2'>
                        <p className='text-center sm:px-1 text-[20px] font-semibold hover:underline hover:text-[red]'>JavaScript</p>
                        <Image src={img3} alt="" className='w-[100%] sm:w-[100%] px-20 sm:px-[50px] object-contain' />
                    </Link>

                </div>
                <div className="imgage1 cursor-pointer sm:flex-col justify-center items-center">
                    <Link href="https://getbootstrap.com/" className='flex-col pt-2'>
                        <p className='text-center text-[20px] font-semibold hover:underline hover:text-[red]'>Bootstrap</p>
                        <Image src={img4} alt="" className='w-[100%] sm:w-[100%] px-[70px] sm:px-[30px] object-contain' />
                    </Link>

                </div>
            </div>

            <div className="sec2 sm:mt-5  sm:flex sm:h-[250px] h-[100%] w-[100%] items-center justify-center aspect-square">
                <div className="imgage1 w-[100%] cursor-pointer sm:flex-col justify-center items-center ">
                    <Link href="https://tailwindcss.com/" className='flex-col pt-2'>
                        <p className='text-center sm:pl-1 pt-5 text-[20px] font-semibold hover:underline hover:text-[red]'>Tailwind CSS</p>
                        <Image src={img5} alt="" className='w-[100%] sm:w-[100%] px-[90px] sm:px-[40px] py-3 sm:py-5 object-contain' />
                    </Link>
                </div>
                <div className="imgage1 w-[100%] cursor-pointer sm:flex-col justify-center items-center">
                    <Link href="https://react.dev/" className='flex-col pt-4'>
                        <p className='text-center pt-5 text-[20px] font-semibold hover:underline hover:text-[red]'>ReactJs</p>
                        <Image src={img6} alt="" className='w-[100%] sm:w-[100%] px-[80px] sm:px-[40px] object-contain' />
                    </Link>

                </div>
                <div className="imgage1 w-[100%] cursor-pointer sm:flex-col justify-center items-center">
                    <Link href="https://nextjs.org/" className='flex-col'>
                        <p className='text-center sm:px-5 text-[20px] pt-5 font-semibold hover:underline hover:text-[red]'>NextJs</p>
                        <Image src={img7} alt="" className='sm:w-[100%] rounded-[50%] w-[100%] px-20 sm:px-[40px] object-contain' />
                    </Link>

                </div>
                <div className="imgage1 w-[100%] cursor-pointer sm:flex-col justify-center items-center">
                    <Link href="https://github.com/" className='flex-col pt-2'>
                        <p className='text-center pt-5 text-[20px] font-semibold hover:underline hover:text-[red]'>GitHub</p>
                        <Image src={img8} alt="" className=' w-[100%] sm:w-[100%] px-16 sm:px-[40px] rounded-[50%] object-contain' />
                    </Link>

                </div>
            </div>

            <div className="sec3 sm:mt-5  sm:flex sm:h-[250px] h-[100%] w-[100%] items-center justify-center aspect-square">
                <div className="imgage1 w-[100%] cursor-pointer sm:flex-col justify-center items-center">
                    <Link href="https://git-scm.com/" className='flex-col pt-2'>
                        <p className='text-center text-[20px] font-semibold hover:underline hover:text-[red] sm:mt-5'>Git</p>
                        <Image src={img9} alt="" className='sm:w-[100%] rounded-[50%] sm:p-5 w-[100%] px-[90px] pt-2 sm:pt-0 sm:px-[50px] object-contain' />
                    </Link>
                </div>
                <div className="imgage1 w-[100%] cursor-pointer sm:flex-col justify-center items-center">
                    <Link href="https://nodejs.org/" className='flex-col pt-2'>
                        <p className='text-center pt-5 text-[20px] font-semibold hover:underline hover:text-[red]'>NodeJs</p>
                        <Image src={img10} alt="" className='sm:py-5 w-[100%] sm:w-[100%] px-[80px] pt-2 sm:px-[30px] object-contain' />
                    </Link>

                </div>
                <div className="imgage1 w-[100%] cursor-pointer sm:flex-col justify-center items-center">
                    <Link href="https://www.mongodb.com/" className='flex-col pt-2'>
                        <p className='text-center pt-5 sm:pt-0 sm:px-2 text-[20px] font-semibold hover:underline hover:text-[red]'>MongoDB</p>
                        <Image src={img11} alt="" className='sm:w-[100%] w-[100%] px-[80px] pt-2 sm:pt-1 sm:px-[50px] object-contain' />
                    </Link>

                </div>
                <div className="imgage1 w-[100%] cursor-pointer sm:flex-col justify-center items-center">
                    <Link href="https://chat.openai.com/" className='flex-col pt-2'>
                        <p className='text-center pt-5 sm:pt-0 text-[20px] font-semibold hover:underline hover:text-[red]'>ChatGPT</p>
                        <Image src={img12} alt="" className=' rounded-[50%] sm:mt-1 w-[100%] sm:w-[100%] px-[90px] sm:px-[50px] pt-2 sm:pt-1 object-contain' />
                    </Link>

                </div>
            </div>
            
        
            <div className="sec4 h-[100%] px-[20px] border-2 border-black rounded-xl mt-5 py-5 sm:px-20 bg-gray-800 dark:bg-gray-400 dark:text-black text-white">
                <p className='text-center text-[20px] sm:text-[25px] font-bold'>Overview of Skills</p>
                <div className="skill1 w-[100%] sm:flex items-center justify-evenly pb-2 pt-5">
                    <p className='text-[17px] sm:text-[22px] font-semibold'>HTML</p>

                    <div class="w-[100%] sm:w-[60%] bg-gray-200 dark:bg-gray-900 rounded-full light:bg-gray-700">
                        <div class="Progress bg-blue-600 text-xs font-medium text-blue-100 text-center sm:p-0.5 leading-none rounded-full"> 90%</div>
                    </div>
                </div>
                <div className="skill1 w-[100%] sm:flex items-center justify-evenly pb-2">
                    <p className='text-[17px] sm:text-[22px] font-semibold'>CSS</p>

                    <div class="w-[100%] sm:w-[60%] bg-gray-200 dark:bg-gray-900 rounded-full light:bg-gray-700">
                        <div class="CSS bg-blue-600 text-xs font-medium text-blue-100 text-center sm:p-0.5 leading-none rounded-full"> 85%</div>
                    </div>
                </div>
                <div className="skill1 w-[100%] sm:flex items-center justify-evenly pb-2">
                    <p className='text-[17px] sm:text-[22px] font-semibold'>JavaScript</p>

                    <div class="w-[100%] sm:w-[60%] bg-gray-200 dark:bg-gray-900 rounded-full light:bg-gray-700">
                        <div class="JS bg-blue-600 text-xs font-medium text-blue-100 text-center sm:p-0.5 leading-none rounded-full"> 75%</div>
                    </div>
                </div>
                <div className="skill1 w-[100%] sm:flex items-center justify-evenly pb-2">
                    <p className='text-[17px] sm:text-[22px] font-semibold'>ReactJs</p>

                    <div class="w-[100%] sm:w-[60%] bg-gray-200 dark:bg-gray-900 rounded-full light:bg-gray-700">
                        <div class="REACT bg-blue-600 text-xs font-medium text-blue-100 text-center sm:p-0.5 leading-none rounded-full"> 70%</div>
                    </div>
                </div>
                <div className="skill1 w-[100%] sm:flex items-center justify-evenly">
                    <p className='text-[17px] sm:text-[22px] font-semibold'>FRONT-END</p>

                    <div class="w-[100%] sm:w-[60%] bg-gray-200 dark:bg-gray-900 rounded-full light:bg-gray-700">
                        <div class="FEND bg-blue-600 text-xs font-medium text-blue-100 text-center sm:p-0.5 leading-none rounded-full"> 68%</div>
                    </div>
                </div>
            </div>
        </div>
    );
}