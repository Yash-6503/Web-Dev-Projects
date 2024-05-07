import Link from 'next/link';
import './style.css';

export default function BestCusines() {
    return (
        <div className="start bg-white h-[550px] w-[100%] px-[7%] text-black ">

            <div className="head font-bold text-[25px]">
                Best Cuisines Near Me
            </div>   
            
            <div className="box w-[100%] flex flex-wrap gap-5 justify-around items-center mt-5 text-gray-600 font-medium">
                <div className="txt1 border-[1.5px] h-[60px] w-[250px] flex items-center px-[10px] rounded-[15px] hover:shadow-[0px_1px_10px_blue] ">
                    <Link href="https://www.swiggy.com/chinese-restaurants-near-me" className='text-center font-medium'>Chinese Restaurant Near Me</Link>
                </div>
                <div className="txt2 border-[1.5px] h-[60px] w-[250px] flex items-center px-[20px] rounded-[15px] hover:shadow-[0px_1px_10px_blue]">
                    <Link href="https://www.swiggy.com/south-indian-restaurants-near-me">South Indian Restaurant...</Link>
                </div>
                <div className="txt3 border-[1.5px] h-[60px] w-[250px] flex items-center px-[19px] rounded-[15px] hover:shadow-[0px_1px_10px_blue]">
                    <Link href="https://www.swiggy.com/indian-restaurants-near-me">Indian Restaurant Near Me</Link>
                </div>
                <div className="txt4 border-[1.5px] h-[60px] w-[240px] flex items-center px-[15px] rounded-[15px] hover:shadow-[0px_1px_10px_blue]">
                    <Link href="https://www.swiggy.com/kerala-restaurants-near-me">Kerala Restaurant Near Me</Link>
                </div>
                <div className="txt5 border-[1.5px] h-[60px] w-[250px] flex items-center px-[15px] rounded-[15px] hover:shadow-[0px_1px_10px_blue]">
                    <Link href="https://www.swiggy.com/korean-restaurants-near-me" className='font-medium'>Korean Restaurant Near Me</Link>
                </div>
                <div className="txt6 border-[1.5px] h-[60px] w-[250px] flex items-center px-[10px] rounded-[15px] hover:shadow-[0px_1px_10px_blue]">
                    <Link href="https://www.swiggy.com/north-indian-restaurants-near-me">North Indian Restaurant Ne...</Link>
                </div>
                <div className="txt7 border-[1.5px] h-[60px] w-[250px] flex items-center px-[10px] rounded-[15px] hover:shadow-[0px_1px_10px_blue]">
                    <Link href="https://www.swiggy.com/seafood-restaurants-near-me">SeaFood Restaurant Near Me</Link>
                </div>
                <div className="txt8 border-[1.5px] h-[60px] w-[240px] flex items-center px-[10px] rounded-[15px] hover:shadow-[0px_1px_10px_blue]">
                    <Link href="https://www.swiggy.com/bengali-restaurants-near-me" className='font-medium'>Bengali Restaurant Near Me</Link>
                </div>
                <div className="txt9 border-[1.5px] h-[60px] w-[250px] flex items-center px-[15px] rounded-[15px] hover:shadow-[0px_1px_10px_blue]">
                    <Link href="https://www.swiggy.com/punjabi-restaurants-near-me" className='font-medium'>Punjabi Restaurant Near Me</Link>
                </div>
                <div className="txt10 border-[1.5px] h-[60px] w-[250px] flex items-center px-[15px] rounded-[15px] hover:shadow-[0px_1px_10px_blue]">
                    <Link href="https://www.swiggy.com/italian-restaurants-near-me">Italian Restaurant Near Me</Link>
                </div>
                <div className="txt11 border-[1.5px] h-[60px] w-[250px] flex items-center px-[15px] rounded-[15px] hover:shadow-[0px_1px_10px_blue]">
                    <Link href="https://www.swiggy.com/andhra-restaurants-near-me">Andhra Restaurant Near Me</Link>
                </div>
                <div className="txt12 border-[1.5px] h-[60px] w-[240px] flex items-center px-16 rounded-[15px] hover:shadow-[0px_1px_10px_blue]">
                    <p className='text-center' onclick="ShowMore()" >Show More</p>
                </div>
            </div>

            
            <div className="head2 mt-20">
                <p className='font-bold text-[25px]'>Explore Every Restaurants Near Me</p>
            </div>
            <div className="explore mt-5 flex justify-between gap-10 items-center text-gray-600 font-medium ">

                <div className="txt1 border-[1.5px] h-[60px] w-[50%] flex items-center px-28 rounded-[15px] hover:shadow-[0px_1px_10px_blue]">
                    <Link href="https://www.swiggy.com/restaurants-near-me">Explore Restaurants Near Me</Link>
                </div>
                <div className="txt2 border-[1.5px] h-[60px] w-[50%] flex items-center px-28 rounded-[15px] hover:shadow-[0px_1px_10px_blue]">
                    <Link href="https://www.swiggy.com/best-restaurants-near-me">Explore Top Rated Restaurant Near Me</Link>
                </div>
            </div>
        </div>  
    );
}