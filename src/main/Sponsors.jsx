import React from 'react';
import hooli from '../assets/hooli.png';
import lya from '../assets/lya.png';
import leaf from '../assets/leaf.png';
import stripe from '../assets/stripe.png';
import aws from '../assets/aws.png';
import alien from '../assets/alien.png';

const Sponsors = () => {
    return (
        <>
            <section>
                <div class="bg-white flex justify-center items-center h-72 ">
                    <div class=" flex justify-around h-44 w-3/4">
                        <div class="flex justify-center items-center">
                            <img src={hooli} alt="" />
                        </div>
                        <div class="flex justify-center items-center">
                            <img src={lya} alt="" />
                        </div>
                        <div class="flex justify-center items-center">
                            <img src={leaf} alt="" />
                        </div>
                        <div class="flex justify-center items-center">
                            <img src={stripe} alt="" />
                        </div>
                        <div class="flex justify-center items-center">
                            <img src={aws} alt="" />
                        </div>
                        <div class="flex justify-center items-center">
                            <img src={alien} alt="" />
                        </div>
                    </div>
                </div>
                <div class="bg-slate-950 h-20 w-full">

                </div>
            </section>
        </>
    );
};

export default Sponsors;