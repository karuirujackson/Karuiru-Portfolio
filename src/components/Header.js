import React from 'react';
import { IoHome } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { GoDotFill } from 'react-icons/go';
import { FaRegHandPaper } from "react-icons/fa";
import { CiLocationOn } from 'react-icons/ci';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import Profile from '../assets/Profile.jpeg';
import { CiFaceMeh } from "react-icons/ci";
import { FaGraduationCap } from "react-icons/fa6";

function Header() {
  return (
    <main className='bg-gradient-to-br from-slate-800 to-slate-200 w-full min-h-screen'>
        <header >
            <div className="relative">
                <nav className="absolute w-full top-4 bg-slate-600 shadow-md shadow-cyan-200">
                    <div className=" flex md:flex items-center justify-center border border-slate-400 rounded h-14 p-3 space-x-8">
                        <div className="flex items-center justify-center space-x-5">
                            <div className="text-white text-2xl"><IoHome /></div>
                            <div className="flex uppercase space-x-5">
                                <a href="about" className="text-white">About</a>
                                <a href="about" className="text-white">Stacks</a>
                                <a href="about" className="text-white">Projects</a>
                                <a href="about" className="text-white">Contact</a>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="text-green-500 animate-ping"><GoDotFill /></div>
                            <div className="flex items-center justify-center space-x-5">
                                <span className="text-white text-sm">Available for Work</span>
                                <button className="flex items-center justify-center border border-slate-400 rounded px-1 py-1 space-x-1.5 text-black bg-cyan-600">
                                    <div className="text-2xl"><CiCalendarDate /></div>
                                    <span>SCHEDULE CALL</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="relative top-20 sm:flex-cols md:flex-cols">
                <div className='flex items-center justify-center'>
                    <img src={Profile} alt='Profile' className='w-40 h-36 rounded-full scale-75'/>
                </div>
                <div className="flex items-center justify-center space-x-1">
                    <div className='text-2xl text-cyan-300 animate-bounce'><FaRegHandPaper /></div>
                    <span className="text-white text-2xl">Hello, I am</span>
                </div>
                <div className="flex items-center justify-center">
                    <h2 className="text-cyan-400 font-bold text-3xl underline">Jackson Karuiru</h2>
                </div>
                <span className="flex items-center justify-center text-white text-xl pt-3 font-bold">FrontEnd Software Engineer</span>
                <p className="flex items-center justify-center text-md text-gray-300 pt-1 ">
                    A tech enthusiastic and a Freelancer providing Software Development and Design services. 
                </p>
                <div className="flex items-center justify-center space-x-2 text-cyan-400">
                    <CiLocationOn />
                    <span className='text-white  font-bold py-3'>Nairobi, Kenya</span>
                </div>  
                <div className="flex items-center justify-center">
                    <button className="flex items-center justify-center text-2xl text-white border rounded-3xl  shadow-md shadow-cyan-200 py-3 px-6 space-x-4">
                        <FaGithub />
                        <FaLinkedin />
                        <FaXTwitter />
                    </button>
                </div>   
            </div>
        </header>
        <section className=" relative pt-32 flex-cols">
            <div className="flex items-center justify-center space-x-1">
                <div className="text-cyan-300 text-2xl font-bold">
                    <CiFaceMeh />
                </div>
                <h2 className="text-white text-2xl font-bold">About Me</h2>
            </div>
            <div className="mx-auto w-4/5 pt-3">
                <p className="flex items-center justify-center border border-cyan-300 rounded-xl py-5 text-center text-slate-100">
                    Innovative FrontEnd Software Engineer with a keen eye for detail and a commitment to continuous learning. Armed with a solid foundation in both front-end and some back-end development, I thrive on tackling complex challenges and delivering elegant and interactive solutions within the web2 and web3 space.
                </p>
            </div>
        </section>
        <section className="relative pt-20 flex-cols">
            <div className="flex items-center justify-center space-x-1 pb-3">
                <div className="text-cyan-300 text-2xl font-bold">
                    <FaGraduationCap />
                </div>
                <h2 className="text-white text-2xl font-bold">Education and Work Experience</h2>
            </div>
            <div className=" mx-auto w-4/5 pt-3 border rounded-lg border-cyan-300">
                <h3 className="text-xl text-cyan-300">FrontEnd Software Engineer</h3>
                <h4 className="text-cyan-500">Freelancer</h4>
                 <span className="text-white">Currently working on a Frontend and Backend code of an E-commerce application </span>
            </div>
        </section>
    </main>
  )
}

export default Header;