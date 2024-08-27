import React from 'react';
import mobile from '../assets/mbl.png';
import loc from '../assets/loc.png';
import send from '../assets/send.png';

const GetTouch = () => {
    return (
        <>
            <section class="bg-slate-200 p-40 pt-16">
                <h3 class="text-3xl font-extrabold text-center text-black">Get In Touch</h3>
                <p class="text-current py-2 text-center text-gray-400">Problems trying to resolve the conflict between <br />
                    the two major realms of Classical physics: Newtonian mechanics</p>
                <div class="flex pt-10 items-center justify-center space-x-0">
                    <div class="h-64 w-72 bg-white">
                        <img src={mobile} alt="icon" class="h-12 w-10 mx-auto mt-6" />
                        <p class="text-current py-2 text-center text-sm text-gray-400">georgia.young@example.com</p>
                        <p class="text-current py-2 text-center text-sm text-gray-400">georgia.young@ple.com</p>
                        <h4 class="text-xl font-extrabold text-center text-black my-2">Get Support</h4>
                        <button class="px-6 mx-auto block rounded border-orange-400 text-orange-400 btn btn-outline">Submit
                            Request</button>
                    </div>
                    <div class="h-80 w-72 bg-sky-950">
                        <img src={loc} alt="icon" class="h-12 w-10 mx-auto mt-6" />
                        <p class="text-current py-2 text-center text-sm text-white">georgia.young@example.com</p>
                        <p class="text-current py-2 text-center text-sm text-white">georgia.young@ple.com</p>
                        <h4 class="text-xl font-extrabold text-center text-black my-2">Get Support</h4>
                        <button class="px-6 mx-auto block rounded border-inherit text-white btn btn-outline">Submit Request</button>
                    </div>
                    <div class="h-64 w-72 bg-white">
                        <img src={send} alt="icon" class="h-12 w-10 mx-auto mt-6" />
                        <p class="text-current py-2 text-center text-sm text-gray-400">georgia.young@example.com</p>
                        <p class="text-current py-2 text-center text-sm text-gray-400">georgia.young@ple.com</p>
                        <h4 class="text-xl font-extrabold text-center text-black my-2">Get Support</h4>
                        <button class="px-6 mx-auto block rounded border-orange-400 text-orange-400 btn btn-outline">Submit
                            Request</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GetTouch;