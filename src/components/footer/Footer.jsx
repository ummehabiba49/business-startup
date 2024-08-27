import React from 'react';
import fb from '../../assets/fb.png';
import instagram from '../../assets/ins.png';
import twitter from '../../assets/twi.png';
import youTube from '../../assets/yt.png';

const Footer = () => {
    return (
        <>
            <footer className="bg-white w-full h-[440px]">
                <div className="w-full h-[105px] bg-white"></div>
                <div className="w-full h-[272px] bg-cyan-700 px-[30px] flex justify-between">
                    <div className="flex flex-col justify-between h-full w-[20%] px-4">
                        <h1 className="text-white mt-14 mb-6 font-bold ">Company Info</h1>
                        <ul className="text-white flex-1 ">
                            <li>About Us</li>
                            <li>Career</li>
                            <li>We are hiring</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-between h-full w-[20%] px-4">
                        <h1 className="text-white mt-14 mb-6 font-bold ">Legal</h1>
                        <ul className="text-white flex-1">
                            <li>About Us</li>
                            <li>Career</li>
                            <li>We are hiring</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-between h-full w-[20%] px-4">
                        <h1 className="text-white mt-14 mb-6 font-bold">Features</h1>
                        <ul className="text-white flex-1">
                            <li>Business Marketing</li>
                            <li>User Analytic</li>
                            <li>Live Chat</li>
                            <li>Unlimited Support</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-between h-full w-[20%] px-4">
                        <h1 className="text-white mt-14 mb-6 font-bold">Resources</h1>
                        <ul className="text-white flex-1">
                            <li>IOS & Android</li>
                            <li>Watch a Demo</li>
                            <li>Customers</li>
                            <li>API</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-between h-full w-[20%] px-4">
                        <h1 className="text-white mt-14 mb-6 font-bold">Get In Touch</h1>
                        <ul className="text-white flex-1">
                            <li className="flex items-center"><img src="../../assets/mbl.png" className="h-4 w-4 mr-2" alt="Phone Icon" />(480)
                                555-0103</li>
                            <li className="flex items-center"><img src="./images/loc.png" className="h-4 w-4 mr-2" alt="Address Icon" />4517
                                Washington Ave.</li>
                            <li className="flex items-center"><img src="./images/send.png" className="h-4 w-4 mr-2"
                                alt="Send Icon" />debra.holt@example.com</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full h-[63px] bg-white flex items-center justify-center">
                    <div className="flex items-center justify-between w-full max-w-screen-lg px-4">
                        <span className="font-bold text-sm text-inherit">Made With Love By Figmaland All Right Reserved</span>
                        <div className="flex items-center space-x-2">
                            <img src={fb} alt="Image 1" className="h-[24px] w-[24px]" />
                            <img src={instagram} alt="Image 2" className="h-[24px] w-[24px]" />
                            <img src={twitter} alt="Image 3" className="h-[24px] w-[24px]" />
                            <img src={youTube} alt="Image 4" className="h-[24px] w-[24px]" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;