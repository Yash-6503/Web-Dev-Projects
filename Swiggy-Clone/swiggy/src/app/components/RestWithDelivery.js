import Image from 'next/image';
import star from '../assets/star.png';
import './style.css';

export default function RestraurantWithDelivery() {
    return (
        <div className="start bg-white text-black w-[100%] h-[1500px] px-[15%]">
            <div className="head">
                <p className="font-bold text-[25px]">Restaurants with online food delivery in Nashik</p>
            </div>    
            <div className="slideNav w-[100%] mt-5 h-[50px] flex-wrap items-center py-1 cursor-pointer">
                <ul className="flex justify-around items-center text-center ">
                    <li className="border-[1px] h-[40px] rounded-[20px] py-1 text-gray-600 font-normal hover:shadow-[0px_5px_10px_grey] w-[50px]">Filter</li>
                    <li className="border-[1px] h-[40px] rounded-[20px] py-1 text-gray-600 font-normal hover:shadow-[0px_5px_10px_grey] w-[100px]">Sort By
                        <select name="" id="" className='w-[10px] outline-none px-3'>
                            <option value="" name="sel"></option>
                            <option value="" name="sel">Delivery Time</option>
                            <option value="" name="sel">Rating</option>
                        </select>
                    </li>
                    <li className="border-[1px] h-[40px] rounded-[20px] py-1 text-gray-600 font-normal hover:shadow-[0px_5px_10px_grey] w-[120px]">Fast Delivery</li>
                    <li className="border-[1px] h-[40px] rounded-[20px] py-1 text-gray-600 font-normal hover:shadow-[0px_5px_10px_grey] w-[130px]">New on Swiggy</li>
                    <li className="border-[1px] h-[40px] rounded-[20px] py-1 text-gray-600 font-normal hover:shadow-[0px_5px_10px_grey] w-[120px]">Ratings 4.0+</li>
                    <li className="border-[1px] h-[40px] rounded-[20px] py-1 text-gray-600 font-normal hover:shadow-[0px_5px_10px_grey] w-[100px]">Pure Veg</li>
                    <li className="border-[1px] h-[40px] rounded-[20px] py-1 text-gray-600 font-normal hover:shadow-[0px_5px_10px_grey] w-[80px]">Offers</li>
                    <li className="border-[1px] h-[40px] rounded-[20px] py-1 text-gray-600 font-normal hover:shadow-[0px_5px_10px_grey] w-[130px]">Rs. 300-Rs. 600</li>
                </ul>
            </div>

            <div className="menu mt-7 flex  justify-around flex-wrap gap-10 h-[1350px]">
                <div className="item1 w-[200px] h-[290px] flex-col flex  hover:scale-95 cursor-pointer">
                    <div className="img1 w-[100%]">
                        <Image
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"
                            alt="/"
                            height="200"
                            width="200"
                            className='object-cover rounded-[20px] absolute'
                        />
                    </div>
                    <div className="txt1 px-4 w-[100%] mt-2">
                        <p className='font-medium text-[19px]'>Burger King </p>
                        <p className='font-medium text-[17px] flex justify-between items-center' ><Image src={star} className="w-[20px] h-[20px]" alt="" />4.3 • 25-30 mins</p>
                        <p className='font-normal text-gray-500 text-[16px]'>
                            Burgers, American<br />
                            Ramdas Colony
                        </p>
                    </div>
                </div>
                <div className="item1 w-[180px] flex-col flex h-[290px] hover:scale-95 cursor-pointer">
                    <div className="img1 w-[100%]">
                        <Image
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/03501c33ecb3a3105124441e541e6fe4"
                            alt="/"
                            height="200"
                            width="200"
                            className='absolute aspect-square  shadow-[inset_3px_4px_5px_rgba(0,0,0,1)] object-cover rounded-[20px]'
                        />

                    </div>
                    <div className="txt1 px-2 w-[100%] mt-2">
                        <p className='font-medium text-[19px]'>McDonald's</p>
                        <p className='font-medium text-[17px] flex justify-between items-center' ><Image src={star} className="w-[20px] h-[20px]" alt="" />4.4 • 20-25 mins</p>
                        <p className='font-normal text-gray-500 text-[16px]'>
                            Burgers, Beverages, Cafe,
                            Upnagar
                        </p>

                        
                       
                        
                    </div>
                </div>
                <div className="item1 w-[180px] flex-col flex h-[290px] hover:scale-95 cursor-pointer">
                    <div className="img1">
                        <Image
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63dd75492c47fcec191132b8eb299ea5"
                            alt="/"
                            height="200"
                            width="200"
                            className='absolute aspect-square object-cover rounded-[20px]'
                        />
                    </div>
                    <div className="txt1 px-2 w-[100%] ">
                        <p className='font-medium text-[19px]'>Theobroma</p>
                        <p className='font-medium text-[17px] flex justify-between items-center' ><Image src={star} className="w-[20px] h-[20px]" alt="" />4.6 • 15-20 mins</p>
                        <p className='font-normal text-gray-500 text-[16px]'>
                            Bakery<br/>
                            Dwarka
                        </p>
                        
                    </div>
                </div>
                <div className="item1 w-[180px] flex-col flex h-[280px] hover:scale-95 cursor-pointer">
                    <div className="img1">
                        <Image
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f01666ac73626461d7455d9c24005cd4"
                            alt="/"
                            height="200"
                            width="200"
                            className=' aspect-square object-cover rounded-[20px]'
                        />
                        
                    </div>
                    <div className="txt1 px-2 w-[100%] mt-2">
                        <p className='font-medium text-[19px]'>KFC</p>
                        <p className='font-medium text-[17px] flex justify-between items-center' ><Image src={star} className="w-[20px] h-[20px]" alt="" />4.2 • 20-25 mins</p>
                        <p className='font-normal text-gray-500 text-[16px]'>
                            Burgers, Biryani....<br/> College Road
                        </p>
                    </div>
                </div>
                <div className="item1 w-[180px] flex-col flex h-[280px] hover:scale-95 cursor-pointer">
                    <div className="img1">
                        <Image
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jvuhbo6nvyt8tsiwkll6"
                            alt="/"
                            height="200"
                            width="200"
                            className=' aspect-square object-cover rounded-[20px]'
                        />
                        
                    </div>
                    <div className="txt1 px-2 w-[100%] mt-2">
                        <p className='font-medium text-[19px]'>Hotel Inayat Cafe</p>
                        <p className='font-medium text-[17px] flex justify-between items-center' ><Image src={star} className="w-[20px] h-[20px]" alt="" />4.4 • 25-30 mins</p>
                        <p className='font-normal text-gray-500 text-[16px]'>
                            Biryani, Chinese <br/>
                            Indira Nagar
                        </p>
        

                    </div>
                </div>
                <div className="item1 w-[180px] flex-col flex h-[280px] hover:scale-95 cursor-pointer">
                    <div className="img1">
                        <Image
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/63178e3e64d503a479f2a2048a474552"
                            alt="/"
                            height="200"
                            width="200"
                            className=' aspect-square object-cover rounded-[20px]'
                        />
                        
                    </div>
                    <div className="txt1 px-3 w-[100%] mt-2">
                        <p className='font-medium text-[19px]'>Subway</p>
                        <p className='font-medium text-[17px] flex justify-between items-center' ><Image src={star} className="w-[20px] h-[20px]" alt="" />4.1 • 20-25 mins</p>
                        <p className='font-normal text-gray-500 text-[16px]'>
                            Salads, Snacks...
                            Nas_College Road
                        </p>
                    
                    </div>
                </div>
                <div className="item1 w-[180px] flex-col flex h-[280px] hover:scale-95 cursor-pointer">
                    <div className="img1">
                        <Image
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7"
                            alt="/"
                            height="200"
                            width="200"
                            className=' aspect-square object-cover rounded-[20px]'
                        />
                        
                    </div>
                    <div className="txt1 px-2 w-[100%] mt-2">
                        <p className='font-medium text-[19px]'>Pizza Hut</p>
                        <p className='font-medium text-[17px] flex justify-between items-center' ><Image src={star} className="w-[20px] h-[20px]" alt="" /> 4.2 • 25-30 mins</p>
                        <p className='font-normal text-gray-500 text-[16px]'>
                            Pizzas <br/>
                            Pathardi Phata
                        </p>
                    
                    </div>
                </div>
                <div className="item1 w-[180px] flex-col flex h-[280px] hover:scale-95 cursor-pointer">
                    <div className="img1">
                        <Image
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c0p061znvm9uoi9itbhp"
                            alt="/"
                            height="200"
                            width="200"
                            className=' aspect-square object-cover rounded-[20px]'
                        />
                        
                    </div>
                    <div className="txt1 px-2 w-[100%] mt-2">
                        <p className='font-medium text-[19px]'>La Pino'z Pizza</p>
                        <p className='font-medium text-[17px] flex justify-between items-center' ><Image src={star} className="w-[20px] h-[20px]" alt="" />4.2 • 20-25 mins</p>
                        <p className='font-normal text-gray-500 text-[16px]'>
                            Pizzas, Pastas...
                            Lavate Nagar
                        </p>

                    </div>
                </div>
                <div className="item1 w-[180px] flex-col flex h-[280px] hover:scale-95 cursor-pointer">
                    <div className="img1">
                        <Image
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/v29seuyjzfrt2qe6oibx"
                            alt="/"
                            height="200"
                            width="200"
                            className=' aspect-square object-cover rounded-[20px]'
                        />
                        
                    </div>
                    <div className="txt1 px-2 w-[100%] mt-2">
                        <p className='font-medium text-[19px]'>Kaka Ka Dhaba</p>
                        <p className='font-medium text-[17px] flex justify-between items-center' ><Image src={star} className="w-[20px] h-[20px]" alt="" />4.3 • 25-30 mins</p>
                        <p className='font-normal text-gray-500 text-[16px]'>
                            Biryani, Punjabi..
                            Lekha Nagar
                        </p>
                   
                    </div>
                </div>
                <div className="item1 w-[180px] flex-col flex h-[280px] hover:scale-95 cursor-pointer">
                    <div className="img1">
                        <Image
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mghlzwgwfafedadkvuhm"
                            alt="/"
                            height="200"
                            width="200"
                            className=' aspect-square object-cover rounded-[20px]'
                        />
                        
                    </div>
                    <div className="txt1 px-2 w-[100%] mt-2">
                        <p className='font-medium text-[19px]'>Veg Aroma</p>
                        <p className='font-medium text-[17px] flex justify-between items-center' ><Image src={star} className="w-[20px] h-[20px]" alt="" />4.2 • 25-30 mins</p>
                        <p className='font-normal text-gray-500 text-[16px]'>
                            South Indian...
                            Bhujbal Farm
                        </p>
                       
                       
                    </div>
                </div>
                <div className="item1 w-[180px] flex-col flex h-[280px] hover:scale-95 cursor-pointer">
                    <div className="img1">
                        <Image
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rrasdidblyglozoumzwy"
                            alt="/"
                            height="200"
                            width="200"
                            className=' aspect-square object-cover rounded-[20px]'
                        />
                        
                    </div>
                    <div className="txt1 px-2 w-[100%] mt-2">
                        <p className='font-medium text-[19px]'>Campus Choice</p>
                        <p className='font-medium text-[17px] flex justify-between items-center' ><Image src={star} className="w-[20px] h-[20px]" alt="" />4.1 • 25-30 mins</p>
                        <p className='font-normal text-gray-500 text-[16px]'>
                            Fast Food, Pizzas...
                            College Road
                        </p>
                        
                        
                    </div>
                </div>
                <div className="item1 w-[180px] flex-col flex h-[280px] hover:scale-95 cursor-pointer">
                    <div className="img1">
                        <Image
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/092e58460657922e098a8afd5db838fe"
                            alt="/"
                            height="200"
                            width="200"
                            className=' aspect-square object-cover rounded-[20px]'
                        />
                        
                    </div>
                    <div className="txt1 px-2 w-[100%] mt-2">
                        <p className='font-medium text-[19px]'>Domino's Pizza</p>
                        <p className='font-medium text-[17px] flex justify-between items-center' ><Image src={star} className="w-[20px] h-[20px]" alt="" />4.4 • 25-30 mins</p>
                        <p className='font-normal text-gray-500 text-[16px]'>
                            Pizzas, Italian...
                            General Vaidya Nagar
                        </p>
                    </div>
                </div>
                <div className="item1 w-[180px] flex-col flex h-[280px] hover:scale-95 cursor-pointer">
                    <div className="img1">
                        <Image
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/k1idfvvdmurgszv34x62"
                            alt="/"
                            height="200"
                            width="200"
                            className=' aspect-square object-cover rounded-[20px]'
                        />
                        
                    </div>
                    <div className="txt1 w-[100%] mt-2">
                        <p className='font-medium text-[19px]'>Shawarma Junction</p>
                        <p className='font-medium text-[17px] flex justify-between items-center px-2' ><Image src={star} className="w-[20px] h-[20px]" alt="" />4.1 • 15-20 mins</p>
                        <p className='font-normal text-gray-500 text-[16px]'>
                            Fast Food, Chinese...
                            Gangapur Road
                        </p>
                        
                    </div>
                </div>
                <div className="item1 w-[180px] flex-col flex h-[280px] hover:scale-95 cursor-pointer">
                    <div className="img1">
                        <Image
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nbv8znptnzikyjzxkyx4"
                            alt="/"
                            height="200"
                            width="200"
                            className=' aspect-square object-cover rounded-[20px]'
                        />
                        
                    </div>
                    <div className="txt1 px-2 w-[100%] mt-2">
                        <p className='font-medium text-[19px]'>Sagar Sweet</p>
                        <p className='font-medium text-[17px] flex justify-between items-center' ><Image src={star} className="w-[20px] h-[20px]" alt="" />4.4 • 20-25 mins</p>
                        <p className='font-normal text-gray-500 text-[16px]'>
                            Sweets, Fast Food...
                            Upnagar
                        </p>
        
                    </div>
                </div>
                <div className="item1 w-[180px] flex-col flex h-[280px] hover:scale-95 cursor-pointer">
                    <div className="img1">
                        <Image
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yeyodjnwamhveva9anyz"
                            alt="/"
                            height="200"
                            width="200"
                            className=' aspect-square object-cover rounded-[20px]'
                        />
                        
                    </div>
                    <div className="txt1 px-2 w-[100%] mt-2">
                        <p className='font-medium text-[19px]'>Luscious Layers</p>
                        <p className='font-medium text-[17px] flex justify-between items-center' ><Image src={star} className="w-[20px] h-[20px]" alt="" />4.4 • 35-40 mins</p>
                        <p className='font-normal text-gray-500 text-[16px]'>
                            Pastas, Chinese...
                            College Road
                        </p>
            
                    </div>
                </div>
                <div className="item1 w-[180px] flex-col flex h-[280px] hover:scale-95 cursor-pointer">
                    <div className="img1">
                        <Image
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qkcp39fdxnxglcfiux1m"
                            alt="/"
                            height="200"
                            width="200"
                            className=' aspect-square object-cover rounded-[20px]'
                        />
                        
                    </div>
                    <div className="txt1 px-2 w-[100%] mt-2">
                        <p className='font-medium text-[19px]'>Hotel Durga</p>
                        <p className='font-medium text-[17px] flex justify-between items-center' ><Image src={star} className="w-[20px] h-[20px]" alt="" />4.5 • 20-25 mins</p>
                        <p className='font-normal text-gray-500 text-[16px]'>
                            Snacks, South Indian..
                            College Road
                        </p>
                    
                    </div>
                </div>
            </div>

            <hr />
        </div>  
    );
}