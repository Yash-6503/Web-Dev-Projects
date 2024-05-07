
import Image from "next/image";
import './style.css';

export default function Footer() {
    return (
        <div className="start bg-white w-[100%] text-black h-[500px]">
            <div className="store flex w-[100%] justify-between items-center px-[10%] bg-[#F0F0F5] h-[104px]">
                <p className="font-bold text-[25px] w-[50%] text-[#02060CBF]">For better experience,download <br/> the Swiggy app now</p>
                <div className="img flex w-[50%] gap-6">
                    <Image
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
                        alt=""
                        height="200"
                        width="200"
                        className=""
                    />
                    <Image
                        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
                        alt=""
                        height="200"
                        width="200"
                        className=""
                    />
                </div>
            </div>
            
            <div className="Footer bg-black text-white flex justify-around items-start py-10 h-[400px] w-[100%] px-[15%] list-none">
                <div className="Logo text-[#FFFFFF99]">
                    <img
                        src="data:image/png;base64,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"
                        alt="/"
                        height="200"
                        width="170"
                        className="object-contain aspect-auto "
                    />
                    <p className="px-7">© 2023 Bundl <br/> Technologies Pvt. Ltd</p>
                </div>
                
                <div className="company text-[#FFFFFF99] ">
                    <p className="text-white font-bold text-[18px] ">Company</p>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Team</li>
                    <li>Swiggy One</li>
                    <li>Swiggy Instamart</li>
                    <li>Swiggy Genie</li>
                </div>

                <div className="contact text-[#FFFFFF99]">
                    <p className="text-white font-bold text-[18px] ">Contact us</p>
                    <li>Help & Support</li>
                    <li>Pertner with us</li>
                    <li>Ride with us</li>

                    <div className="Legal text-[#FFFFFF99] mt-10">
                        <p className="text-white font-bold text-[18px] ">Legal</p>
                        <li>Terms & Conditions</li>
                        <li>Cookie Policy</li>
                        <li>Privacy Policy</li>
                    </div>
                </div>

                <div className="Delivery text-[#FFFFFF99]" >
                    <p className="text-white font-bold text-[18px] ">We Deliver to:</p>
                    <li>Banglore</li>
                    <li>Gurgaon</li>
                    <li>Hyderabad</li>
                    <li>Delhi</li>
                    <li>Mumbai</li>
                    <li>Pune</li>
                    <select name="" id="" className="text-[#FFFFFF99] bg-black border-[0.5px] rounded-[8px] w-[120px] h-[30px] px-2 outline-none mt-4 border-[grey]">
                        <option value="" selected>589 cities </option>
                    </select>
                </div>
            </div>

        </div>   
    );
}