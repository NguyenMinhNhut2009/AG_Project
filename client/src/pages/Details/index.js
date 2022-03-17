import { Link } from "react-router-dom";

export default function Details() {
  return (
    <section>
      <div className="container bg-quaternary-500">
        <div className=" text-center min-h-[720px] bg-hero-pattern-details bg-cover bg-center bg-fixed bg-no-repeat flex-center flex-col gap-y-4"></div>

        <div className="relative h-[1200px] w-[100%]">
          <div className="bg-capuchino h-[700px] w-[100%] bg-contain bg-center bg-no-repeat absolute inset-y-28 left-0 w-[50%] ...">
            {/* <div className="bg-vec-left bg-left"></div>
            <div className="bg-vec-right bg-right"></div> */}

            <div className="bg-capuchino bg-contain bg-center bg-no-repeat absolute h-[90px] w-[90px] top-[760px] left-[240px] w-[100%] ..."></div>
            <div className="bg-capuchino bg-contain bg-center bg-no-repeat absolute h-[90px] w-[90px] top-[760px] left-[340px] w-[100%] ..."></div>
            <div className="bg-capuchino bg-contain bg-center bg-no-repeat absolute h-[90px] w-[90px] top-[760px] left-[440px] w-[100%] ..."></div>
          </div>

          <div className="info  float-right bg-center relative inset-y-28 left-0 w-[50%] ...">
            <p className="text-center text-black font-bold text-6xl bottom-6">
              Capuchino
            </p>

            <div className="absolute w-[100%] flex mt-10 ">
              <p className="align-middle text-black font-bold text-5xl w-[32%]">
                Size
              </p>
              <div className="grid grid-cols-3 text-center">
                <button className="bg-gradient-to-r from-[#A0583C] to-[#C08267]  rounded-3xl font-bold text-2xl w-20 h-20 p-[28px] m-1">
                  S
                </button>
                <button className="bg-gradient-to-r from-[#A0583C] to-[#C08267]  rounded-3xl font-bold text-2xl w-20 h-20 p-[28px] m-1">
                  M
                </button>
                <button className="bg-gradient-to-r from-[#A0583C] to-[#C08267]  rounded-3xl font-bold text-2xl w-20 h-20 p-[28px] m-1">
                  L
                </button>
              </div>
            </div>

            <div className="absolute w-[100%] flex mt-40 ">
              <p className="align-middle text-black font-bold text-5xl w-[32%]">
                Quantity
              </p>
              <div className="grid grid-cols-3 text-center">
                <button className="bg-gradient-to-r from-[#A0583C] to-[#C08267]  rounded-l-3xl font-bold text-2xl w-[88px] h-20 p-[28px]">
                  +
                </button>
                <p className="bg-gradient-to-r from-[#A0583C] to-[#C08267] font-bold text-2xl w-[88px] h-20 p-[28px]">
                  1
                </p>
                <button className="bg-gradient-to-r from-[#A0583C] to-[#C08267]  rounded-r-3xl font-bold text-2xl w-[88px] h-20 p-[28px]">
                  -
                </button>
              </div>
            </div>
            
            <div className="absolute w-[100%] flex mt-[17.5rem] ">
              <p className="align-middle text-black font-bold text-5xl w-[32%]">
                Milk
              </p>
            <p>_______________________________________</p>
            </div>

            <div className="absolute w-[100%] flex mt-[25rem] ">
              <p className="align-middle text-black font-bold text-5xl w-[32%]">
              Sweetnees 
              </p>
            <p>_______________________________________</p>
            </div>

            <div className="absolute w-[100%] flex mt-[45rem] grid grid-cols-2">
              <button className="align-middle text-black w-[92%] bg-gradient-to-r from-[#A0583C] to-[#C08267]  rounded-3xl font-bold text-2xl h-20">
              Add to Cart 
              </button>
              <button className="align-middle text-black w-[92%] bg-gradient-to-r from-[#A0583C] to-[#C08267]  rounded-3xl font-bold text-2xl h-20">
              Order Now 
              </button>
            
            </div>


            

          </div>
        </div>
      </div>
    </section>
  );
}
