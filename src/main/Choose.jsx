import React from 'react';
import ppl from "../assets/ppl.png";
import vector from "../assets/vector.png";
import bdg from "../assets/bdg.png";
import bag from "../assets/bag.png";

const Choose = () => {
    return (
        <section className="bg-white px-40 pb-20 pt-20 ">
            <h3 className="text-3xl font-extrabold text-center text-black">WHY CHOOSE US</h3>
            <p className="text-current py-2 text-center ">Problems trying to resolve the conflict between the two major realms <br />
                of Classical physics: Newtonian mechanics </p>

            <div className="flex pt-10 items-center justify-center">
                <div className="h-48 w-52 m-4">
                    <img src={ppl} alt="ppl" className="h-10 w-10 mx-20 mt-6 " />
                    <h4 className="text-3xl font-extrabold text-center text-black mt-2 pr-4">5K</h4>
                    <p className="text-current py-2 text-center font-bold  text-gray-500">CASES DONE</p>
                </div>
                <div className=" h-48 w-52 m-4">
                    <img src={vector} alt="ppl" className="h-9 w-10 mx-20 mt-6 " />
                    <h4 className="text-3xl font-extrabold text-center text-black mt-2 pr-4">45</h4>
                    <p className="text-current py-2 text-center font-bold  text-gray-500">HAPPY CUSTOMERS</p>
                </div>
                <div className="h-48 w-52 m-4">
                    <img src={bdg} alt="ppl" className="h-10 w-9 mx-20 mt-6 " />
                    <h4 className="text-3xl font-extrabold text-center text-black mt-2 pr-4">12+</h4>
                    <p className="text-current py-2 text-center font-bold  text-gray-500">AWARD WINNING</p>
                </div>
                <div className=" h-48 w-52 m-4">
                    <img src={bag} alt="ppl" className="h-10 w-10 mx-20 mt-6 " />
                    <h4 className="text-3xl font-extrabold text-center text-black mt-2 pr-4">1.5K</h4>
                    <p className="text-current py-2 text-center font-bold text-gray-500">CASES DONE</p>
                </div>
            </div>
        </section>
    );
};

export default Choose;