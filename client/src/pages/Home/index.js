import { Link } from "react-router-dom";
import { getWidth } from "react-slick/lib/utils/innerSliderUtils";

export default function Home() {
    return (
        <main className="text-center">
            <div className="container bg-quaternary-500">
                <div className="min-h-[720px] bg-hero-pattern bg-cover bg-center bg-fixed bg-no-repeat flex-center flex-col gap-y-4">
                    <h2 className="font-extrabold text-quaternary-500 text-shadow-yellow text-7xl">Power up with coffee</h2>
                    <p className="text-tertiary-500 text-2xl">Start your exciting day with a cup of Brew Coffee</p>
                    <Link to="/drinks" className="block px-8 py-3 bg-secondary-500 shadow-md rounded-md shadow-secondary-400 text-white font-medium text-xl hover:bg-secondary-400 transition-all active:bg-secondary-600">
                        Get your life
                    </Link>
                </div>
            </div>
            <div style={{background: "#FFFADA"}}>
                <div className="bg-cf-right bg-no-repeat h-60 bg-right">
                    <div className="bg-cf-left bg-no-repeat h-60 bg-left">
                        <div class="flex flex-col space-y-2">
                            <p class="mt-16 italic">Once coffee is in vogue, </p>
                            <p class="italic">the spirit is awakened,</p>
                            <p class="italic">everyone tries to become more civilized</p>
                            <p class="italic">Carlo Goldoni (1707 - 1793).</p>
                        </div>
                    </div>
                </div>
                <div class="divide-y divide-slate-700">
                    <p class="text-[#4b1b09] font-bold">Explore the Coffee World</p>
                </div>
                
                <div class=" grid grid-cols-6 gap-4">
                    <div className="col-start-2" style={{background: "#C08267"}}>
                        <img className="bg-cf-0 bg-no-repeat h-60" alt="" srcset=""></img>
                        <p className="text-2xl text-white">Capuchino</p>
                        <button style={{background: "#A0583C"}} class="text-white rounded-full box-border h-12 w-3.9 p-4 border-4 text-center 
                        hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">Oder now</button>
                    </div>
                    <div className="col-start-3" style={{background: "#C08267"}}>
                        <img className="bg-cf-1 bg-no-repeat h-60" alt="" srcset=""></img>
                        <p className="text-2xl text-white">Mocha</p>
                        <button style={{background: "#A0583C"}} class="text-white rounded-full box-border h-12 w-3.9 p-4 border-4 text-center 
                        text-white rounded-full box-border h-12 w-3.9 p-4 border-4 text-center hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">Oder now</button>
                    </div>
                    <div className="col-start-4" style={{background: "#C08267"}}>
                        <img className="bg-cf-2 bg-no-repeat h-60" alt="" srcset=""></img>
                        <p className="text-2xl text-white">Latte</p>
                        <button style={{background: "#A0583C"}} class="text-white rounded-full box-border h-12 w-3.9 p-4 border-4 text-center
                        text-white rounded-full box-border h-12 w-3.9 p-4 border-4 text-center hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">Oder now</button>
                    </div>
                    <div className="col-start-5" style={{background: "#C08267"}}>
                        <img className="bg-cf-3 bg-no-repeat h-60" alt="" srcset=""></img>
                        <p className="text-2xl text-white">Cold Java</p>
                        <button style={{background: "#A0583C"}} class="text-white rounded-full box-border h-12 w-3.9 p-4 border-4 text-center
                        text-white rounded-full box-border h-12 w-3.9 p-4 border-4 text-center hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">Oder now</button>
                    </div>
                </div>
                
                <div>
                    <p className="text-[#4b1b09] font-bold">Brands We Work With</p>
                    <div class=" grid grid-cols-6 gap-4 h-40">
                        <img className="bg-br-0 bg-no-repeat bg-center bg-contain col-start-2" alt="" srcset=""></img>
                        <img className="bg-br-1 bg-no-repeat bg-center bg-contain col-start-3" alt="" srcset=""></img>
                        <img className="bg-br-2 bg-no-repeat bg-center bg-contain col-start-4" alt="" srcset=""></img>
                        <img className="bg-br-3 bg-no-repeat bg-center bg-contain col-start-5" alt="" srcset=""></img>
                    </div>
                </div>
            </div>
        </main>
    );
}
