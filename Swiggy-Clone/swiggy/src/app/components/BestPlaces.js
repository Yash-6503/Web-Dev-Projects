import Link from 'next/link'


export default function BestPlaces() {
    return (
        <div className="start bg-white w-[100%] px-[7%] h-[400px] text-black">
            <div className="head pt-10">
                <p className="font-bold text-[25px]">Best Places to Eat Across Cities</p>
            </div>

            <div className="box w-[100%] flex flex-wrap gap-5 justify-around items-center mt-5 text-gray-600 font-medium">
                <div className="txt1 border-[1.5px] h-[60px] w-[220px] flex items-center px-[25px] rounded-[15px]  hover:shadow-[0px_1px_10px_blue] ">
                    <Link href="https://www.swiggy.com/city/bangalore/best-restaurants" className='text-center font-medium'>Best Restaurants in...</Link>
                </div>
                <div className="txt2 border-[1.5px] h-[60px] w-[240px] flex items-center px-[20px] rounded-[15px]  hover:shadow-[0px_1px_10px_blue]">
                    <Link href="https://www.swiggy.com/city/pune/best-restaurants">Best Restaurants in Pune</Link>
                </div>
                <div className="txt3 border-[1.5px] h-[60px] w-[240px] flex items-center px-[19px] rounded-[15px]  hover:shadow-[0px_1px_10px_blue]">
                    <Link href="https://www.swiggy.com/city/mumbai/best-restaurants">Best Restaurants Mumbai</Link>
                </div>
                <div className="txt4 border-[1.5px] h-[60px] w-[220px] flex items-center px-[20px] rounded-[15px]  hover:shadow-[0px_1px_10px_blue]">
                    <Link href="https://www.swiggy.com/city/delhi/best-restaurants">Best Restaurants Delhi</Link>
                </div>
                <div className="txt5 border-[1.5px] h-[60px] w-[220px] flex items-center px-[25px] rounded-[15px]  hover:shadow-[0px_1px_10px_blue]">
                    <Link href="https://www.swiggy.com/city/hyderabad/best-restaurants" className='font-medium'>Best Restaurants in...</Link>
                </div>
                <div className="txt6 border-[1.5px] h-[60px] w-[240px] flex items-center px-[20px] rounded-[15px]  hover:shadow-[0px_1px_10px_blue]">
                    <Link href="https://www.swiggy.com/city/kolkata/best-restaurants">Best Restaurants Kolkata</Link>
                </div>
                <div className="txt7 border-[1.5px] h-[60px] w-[240px] flex items-center px-[20px] rounded-[15px]  hover:shadow-[0px_1px_10px_blue]">
                    <Link href="https://www.swiggy.com/city/chennai/best-restaurants">Best Restaurants Chennai</Link>
                </div>
                <div className="txt8 border-[1.5px] h-[60px] w-[220px] flex items-center px-[20px] rounded-[15px]  hover:shadow-[0px_1px_10px_blue]">
                    <Link href="https://www.swiggy.com/city/chandigarh/best-restaurants" className='font-medium'>Best Restaurants in...</Link>
                </div>
                <div className="txt9 border-[1.5px] h-[60px] w-[220px] flex items-center px-[25px] rounded-[15px]  hover:shadow-[0px_1px_10px_blue]">
                    <Link href="https://www.swiggy.com/city/ahmedabad/best-restaurants" className='font-medium'>Best Restaurants in...</Link>
                </div>
                <div className="txt10 border-[1.5px] h-[60px] w-[240px] flex items-center px-[20px] rounded-[15px]  hover:shadow-[0px_1px_10px_blue]">
                    <Link href="https://www.swiggy.com/city/jaipur/best-restaurants">Best Restaurants Jaipur</Link>
                </div>
                <div className="txt11 border-[1.5px] h-[60px] w-[240px] flex items-center px-[20px] rounded-[15px]  hover:shadow-[0px_1px_10px_blue]">
                    <Link href="https://www.swiggy.com/city/nagpur/best-restaurants">Best Restaurants Nagpur</Link>
                </div>
                <div className="txt1 border-[1.5px] h-[60px] w-[220px] flex items-center px-16 rounded-[15px]  hover:shadow-[0px_1px_10px_blue]">
                    <p className='text-center' onclick="ShowMore()" >Show More</p>
                </div>
            </div>
        </div>  
    );
}