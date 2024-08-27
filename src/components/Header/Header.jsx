import React from 'react';
import './header.css';
import Navbar from '../nabar/Navbar';


const Header = () => {



    return (
        <>
            <header className=" bg-image mb-20 " >
                <Navbar></Navbar>
                <section>
                    <p className="text-black text-6xl font-extrabold pl-20 mt-20">EMPOWER YOUR BUSINESS</p>
                    <p className="text-lg pt-4 pb-3 pl-20">We know how Startups  scale from one  Desk to a thousands of Desks</p>
                    <button className="ml-20 px-9  rounded-full border-transparent text-white btn bg-orange-600">Get Quote Now</button>
                    <button className="ml-2 px-9 mb-8 rounded-full border-cyan-500 text-cyan-500 btn btn-outline">Learn More</button>
                </section>

                <section className="flex">
                    <div className="bg-white ml-20 mr-8 p-8 shadow-lg mt-12">
                        <i className="fa fa-briefcase py-1 fa-2x text-gray-500" aria-hidden="true"></i>
                        <h1 className="text-black text-xl font-bold py-1">Digital Marketing</h1>
                        <p className="text-current text-xs py-1 ">
                            We focus on ergonomics and <br />meeting you where you work.
                        </p>
                    </div>
                    <div className="bg-white mr-8  p-8 shadow-lg mt-12">
                        <i className="fa fa-university fa-2x text-gray-500" aria-hidden="true" ></i>
                        <h1 className="text-black text-xl font-bold py-1">National top 50 firms</h1>
                        <p className="text-current text-xs py-1 ">
                            Just type what's on your mind <br />and we'll get you there.
                        </p>
                    </div>
                    <div className="bg-cyan-500 text-white  p-8 shadow-lg mt-12">
                        <i className="fa fa-list-alt fa-2x text-white" aria-hidden="true"></i>
                        <h1 className="text-xl font-bold py-1 ">Digital Marketing</h1>
                        <p className="text-xs py-1 ">
                            the quick fox jumps over the <br />lazy dog
                        </p>
                    </div>
                </section>
            </header>

        </>
    );
};

export default Header;