import React from 'react';
import card from '../assets/card.png';
import people from '../assets/vector1.png';
import watch from '../assets/f.png';

const Business = () => {
    return (
        <>
            <section className="bg-white w-10/12 mx-auto">
                <h3 className="text-3xl font-extrabold text-center text-black">We are providing best
                    business service.</h3>
                <p className="text-current py-2 text-center ">Problems trying to resolve the conflict between the two major realms <br />
                    of Classical physics: Newtonian mechanics </p>

                <div className="grid grid-cols-1 items-center md:grid-cols-2 pt-10 gap-20">
                    <div className="">
                        <img src={card} alt="" className="" />
                    </div>
                    <div className="">

                        <div className="mt-10">
                            <h4 className="text-3xl font-extrabold text-left text-black mt-2">Most trusted in
                                our field</h4>
                            <p className="text-current py-2 text-left  text-sm pb-4">Most calendars are designed for teams. Slate
                                is designed for freelancers who want a <br />
                                simple way to plan their schedule.</p>
                        </div>
                        <div className=" flex gap-3">
                            <div className="">
                                <img src={people} alt="" className=" mt-4" />
                            </div>
                            <div className="">
                                <h4 className="text-base font-extrabold text-left text-black mt-2 ">the quick fox jumps over the lazy
                                    dog</h4>
                                <p className="text-current py-2 text-left text-sm">Things on a very small scale ...</p>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <div>
                                <img src={watch} alt="" className=" mt-4" />
                            </div>
                            <div className="">
                                <h4 className="text-base font-extrabold text-left text-black mt-2">the quick fox jumps over the lazy
                                    dog</h4>
                                <p className="text-current py-2 text-left text-sm">Things on a very small scale ...</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default Business;