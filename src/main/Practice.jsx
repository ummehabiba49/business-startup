import React from 'react';
import img1 from "../assets/girl.jpg";
import img2 from "../assets/two.jpg";
import img3 from "../assets/note.jpg";
import img4 from "../assets/desk.jpg";

const Practice = () => {
    return (
        <>
            <section className="bg-white px-40 pt-0 pb-28  ">
                <h3 className="text-3xl font-extrabold text-center text-black">Practice Advice</h3>
                <p className="text-current py-2 text-center ">Problems trying to resolve the conflict between <br />
                    the two major realms of Classical physics: Newtonian mechanics </p>

                <div className="flex pt-10 items-center justify-center">
                    <div className="h-full w-full mx-4 mb-4 mt-8">
                        <h4 className="text-xl font-extrabold text-left text-black mt-2 pr-4">A single source <br /> of truth</h4>
                        <p className="text-current py-2 text-left text-sm">Newton thought that <br />
                            light was made up of <br />
                            particles, but then it <br />
                            was discovered </p>
                        <img src={img1} alt="girl" className="w-56 h-32" />
                    </div>
                    <div className=" h-full w-full m-4">

                        <h4 className="text-xl font-extrabold text-left text-black mt-2 pr-4">Fastest way to <br />
                            organize</h4>
                        <p className="text-current py-2 text-left  text-sm">“Quantum mechanics” <br />
                            is the description of the <br />
                            behaviour of matter</p>
                        <img src={img2} alt="girl" className="w-56 h-32" />
                    </div>
                    <div className="h-full w-full m-4">

                        <h4 className="text-xl font-extrabold text-left text-black mt-2 pr-4">Fastest way to <br />
                            take action</h4>
                        <p className="text-current py-2 text-left text-sm">They describe a <br />
                            universe consisting of <br />
                            bodies moving</p>
                        <img src={img3} alt="girl" className="w-56 h-32" />
                    </div>
                    <div className=" h-full w-full m-4">

                        <h4 className="text-xl font-extrabold text-left text-black mt-2 pr-4">Work better <br />
                            together</h4>
                        <p className="text-current py-2 text-left  text-sm">They finally obtained <br />
                            a consistent description <br />
                            of the behaviour </p>
                        <img src={img4} alt="girl" className="w-56 h-32" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Practice;