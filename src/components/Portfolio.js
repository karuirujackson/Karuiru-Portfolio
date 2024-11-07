import React, { useState } from 'react';
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
import { FiMonitor } from "react-icons/fi";
import { GrServerCluster } from "react-icons/gr";
import { FaDatabase } from "react-icons/fa";
import { SiAzuredevops } from "react-icons/si";
import { TiMessages } from "react-icons/ti";
import { IoMdHappy } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { GoProjectSymlink } from "react-icons/go";
import ContactForm from '../assets/ContactForm.png'
import { SlLayers } from "react-icons/sl";

function Portfolio() {
    const [result, setResult] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult('Sending...');
        const formData = new FormData(event.target);
        formData.append('access_key', 'd2adfc0c-870a-4f4b-866b-84f4f60edbeb');

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult('Form Submitted Successfully')
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message)
        }
    };
   
  return (
    <main className=' bg-gradient-to-tr from-slate-500 to-slate-800 w-full min-h-screen'>
        <header>
            <div className="relative">
                <nav className="fixed mx-auto w-full top-4 bg-slate-600 shadow-md shadow-cyan-200">
                    <div className="flex md:flex sm:w-full items-center justify-center border border-slate-400 rounded h-14 p-3 space-x-8">
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
                                <button className="flex items-center justify-center border border-slate-400 rounded px-1 py-1 space-x-1.5 text-black bg-cyan-400">
                                    <div className=""><CiCalendarDate /></div>
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
                    <div className='text-xl text-cyan-400 animate-bounce'><FaRegHandPaper /></div>
                    <span className="text-white text-2xl">Hello, I am</span>
                </div>
                <div className="flex items-center justify-center">
                    <h2 className="text-cyan-400 text-2xl underline">Jackson Karuiru</h2>
                </div>
                <span className="flex items-center justify-center text-white text-xl pt-3 font-bold">FrontEnd Software Engineer</span>
                <p className="flex items-center justify-center text-md text-gray-100 pt-1 ">
                    A tech enthusiastic and a Freelancer providing Software Development and Design services. 
                </p>
                <div className="flex items-center justify-center space-x-2 text-cyan-400">
                    <CiLocationOn />
                    <span className='text-white  font-bold py-3'>Nairobi, Kenya</span>
                </div>  
                <div className="flex items-center justify-center">
                    <button className="flex items-center justify-center text-2xl text-white border rounded-3xl  shadow-md shadow-cyan-200 py-3 px-6 space-x-4 cursor-pointer">
                        <FaGithub />
                        <FaLinkedin />
                        <FaXTwitter />
                    </button>
                </div>   
            </div>
        </header>
        <section className=" relative pt-36 flex-cols">
            <div className="flex items-center justify-center space-x-1">
                <div className="text-cyan-400 text-2xl">
                    <CiFaceMeh className='font-bold'/>
                </div>
                <h2 className="text-cyan-400 text-xl">About Me</h2>
            </div>
            <div className="mx-auto w-2/3 pt-3 ">
                <p className="flex items-center justify-center border border-cyan-300 rounded-xl py-5 shadow shadow-cyan-50 text-center text-slate-100">
                    Innovative FrontEnd Software Engineer with a keen eye for detail and a commitment to continuous learning. Armed with a solid foundation in both front-end and some back-end development, I thrive on tackling complex challenges and delivering elegant and interactive solutions within the web2 and web3 space.
                </p>
            </div>
        </section>
        <section className="relative pt-20 flex-cols">
            <div className="flex items-center justify-center space-x-1 pb-3">
                <div className="text-cyan-400 text-2xl font-bold">
                    <FaGraduationCap />
                </div>
                <h2 className="text-cyan-400 text-xl">Education and Work Experience</h2>
            </div>
            <div className="flex-col space-y-10">
                <div className="mx-auto w-2/3 px-3 pt-3 shadow-md shadow-cyan-50  border rounded-lg border-cyan-300">
                    <h3 className="text-xl  text-cyan-300">Frontend Software Engineer</h3>
                    <h4 className="text-cyan-400">Freelancer</h4>
                    <ul className="text-white px-3">
                        <li>
                            Currently working on a Frontend and Backend code of an E-commerce application.
                        </li>
                        <li>
                            Collaborated with the friends to quickly and efficiently build front-end apps using ReactJS.
                        </li>
                    </ul>
                    <h4 className="text-cyan-400">2024-present</h4>
                </div>
                <div className="mx-auto w-2/3 px-3 pt-3 shadow-md shadow-cyan-50  border rounded-lg border-cyan-300">
                    <h3 className="text-xl  text-cyan-300">Frontend Software Engineer</h3>
                    <h4 className="text-cyan-400">Freelancer</h4>
                    <ul className="text-white px-3">
                        <li>
                            Currently working on a Frontend and Backend code of an E-commerce application.
                        </li>
                        <li>
                            Collaborated with the friends to quickly and efficiently build front-end apps using ReactJS.
                        </li>
                    </ul>
                    <h4 className="text-cyan-400">2024-present</h4>
                </div>
            </div>
        </section>
        <section className="relative pt-10 flex-col">
            <div className="mx-auto w-2/3 px-3 pt-3 shadow-md shadow-cyan-50  border rounded-lg border-cyan-300">
                <h3 className="text-xl  text-cyan-300">Bachelor of Science in Geospatial Engineering</h3>
                <h4 className="text-cyan-400">University of Nairobi</h4>
                <ul className="text-white px-3">
                    <li>Collaboration and Communication Skills.</li>
                    <li>Introduction to Programming Langauges and Emerging Technologies.</li>
                    <li>Problem Solving and Innovation.</li>
                    <li>In-demand Skills.</li>
                </ul>
                <h4 className="text-cyan-400">2011 - 2016</h4>
            </div>
        </section>
        
        <section className="relative pt-20">
            <div className='pb-5 mx-auto w-3/4'>
                <div className="flex items-center justify-center space-x-2 pb-1">
                    <SlLayers className='text-cyan-400 text-2xl font-bold' />
                    <h3 className='text-cyan-400 text-xl'>Tools of Trade</h3>
                </div>
                <div className="flex items-center justify-center space-x-2 pb-3">
                    <span className="text-gray-100">I regularly sharpen my skills to fit the market requirments and align with emerging technologies.</span>
                </div>
            </div>
            <div className="mx-auto w-2/3 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex-col p-2 border rounded-lg shadow-md shadow-slate-50 border-cyan-100">
                    <div className="flex items-center justify-start space-x-2 pb-3">
                        <FiMonitor className='text-cyan-400 text-xl font-bold' />
                        <span className="text-white uppercase">Front-end</span>
                    </div>
                    <div className="flex-col">
                        <div className="text-white">
                            <span className="">React.Js</span>
                        </div>
                        <div className="flex items-center justify-start space-x-2 pb-2">
                            <div className="w-4/5 border-slate-600 border-2">
                                <div className="w-11/12 border-green-600 border-2"></div>
                            </div>
                        </div>
                        <div className="text-white">
                            <span>JavaScript/TypeScript</span>
                        </div>
                        <div className="flex items-center justify-start space-x-2 pb-2">
                            <div className="w-4/5 border-slate-600 border-2">
                                <div className="w-11/12 border-green-600 border-2"></div>
                            </div>
                        </div>
                        <div className="text-white">
                            <span>NextJS</span>
                        </div>
                        <div className="flex items-center justify-start space-x-2 pb-2">
                            <div className="w-4/5 border-slate-600 border-2">
                                <div className="w-4/5 border-green-600 border-2"></div>
                            </div>
                        </div>
                        <div className="text-white">
                            <span>Component-Libraries</span>
                        </div>
                        <div className="flex items-center justify-start space-x-2 pb-2">
                            <div className="w-4/5 border-slate-600 border-2">
                                <div className="w-4/5 border-green-600 border-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-col p-2 border rounded-lg shadow-md shadow-slate-50 border-cyan-100 ">
                    <div className="flex items-center justify-start space-x-2 pb-3">
                        <GrServerCluster className='text-cyan-400 text-xl font-bold' />
                        <span className="text-white uppercase">Back-end</span>
                    </div>
                    <div className="flex-col">
                        <div className="text-white">
                            <span className="">Node.Js</span>
                        </div>
                        <div className="flex items-center justify-start space-x-2 pb-2">
                            <div className="w-4/5 border-slate-600 border-2">
                                <div className="w-11/12 border-green-600 border-2"></div>
                            </div>
                        </div>
                        <div className="text-white">
                            <span>NextJS/Express.Js</span>
                        </div>
                        <div className="flex items-center justify-start space-x-2 pb-2">
                            <div className="w-4/5 border-slate-600 border-2">
                                <div className="w-4/5 border-green-600 border-2"></div>
                            </div>
                        </div>
                        <div className="text-white">
                            <span>Python -Django</span>
                        </div>
                        <div className="flex items-center justify-start space-x-2 pb-2">
                            <div className="w-4/5 border-slate-600 border-2">
                                <div className="w-4/5 border-green-600 border-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-col p-2 border rounded-lg shadow-md shadow-slate-50 border-slate-100 ">
                    <div className="flex items-center justify-start space-x-2 pb-3">
                        <FaDatabase className='text-cyan-400 text-xl font-bold' />
                        <span className="text-white uppercase">Databases</span>
                    </div>
                    <div className="flex-col">
                        <div className="text-white">
                            <span className="">Amazon RDS</span>
                        </div>
                        <div className="flex items-center justify-start space-x-2 pb-2">
                            <div className="w-4/5 border-slate-600 border-2">
                                <div className="w-4/5 border-green-600 border-2"></div>
                            </div>
                        </div>
                        <div className="text-white">
                            <span>Amazon DynamoDB</span>
                        </div>
                        <div className="flex items-center justify-start space-x-2 pb-2">
                            <div className="w-4/5 border-slate-600 border-2">
                                <div className="w-4/5 border-green-600 border-2"></div>
                            </div>
                        </div>
                        <div className="text-white">
                            <span>PostgreSQL</span>
                        </div>
                        <div className="flex items-center justify-start space-x-2 pb-2">
                            <div className="w-4/5 border-slate-600 border-2">
                                <div className="w-4/5 border-green-600 border-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-col p-2 border rounded-lg shadow-md shadow-slate-50 border-slate-100 ">
                    <div className="flex items-center justify-start space-x-2 pb-3">
                        <SiAzuredevops className='text-cyan-400 text-xl font-bold' />
                        <span className="text-white uppercase">DevOps / ci-cd</span>
                    </div>
                    <div className="flex-col">
                        <div className="text-white">
                            <span className="">Git/Github Actions</span>
                        </div>
                        <div className="flex items-center justify-start space-x-2 pb-2">
                            <div className="w-4/5 border-slate-600 border-2">
                                <div className="w-11/12 border-green-600 border-2"></div>
                            </div>
                        </div>
                        <div className="text-white">
                            <span>Kubernetes</span>
                        </div>
                        <div className="flex items-center justify-start space-x-2 pb-2">
                            <div className="w-4/5 border-slate-600 border-2">
                                <div className="w-4/5 border-green-600 border-2"></div>
                            </div>
                        </div>
                        <div className="text-white">
                            <span>Docker</span>
                        </div>
                        <div className="flex items-center justify-start space-x-2 pb-2">
                            <div className="w-4/5 border-slate-600 border-2">
                                <div className="w-4/5 border-green-600 border-2"></div>
                            </div>
                        </div>
                        <div className="text-white">
                            <span>Jenkins</span>
                        </div>
                        <div className="flex items-center justify-start space-x-2 pb-2">
                            <div className="w-4/5 border-slate-600 border-2">
                                <div className="w-4/5 border-green-600 border-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="pt-20">
            <div className="flex items-center justify-center space-x-2 pb-1">
                <GoProjectSymlink className='text-cyan-400 text-2xl font-bold' />
                <h3 className='text-cyan-400 text-xl'>Featured Projects</h3>
            </div>
            <div className="flex items-center justify-center space-x-2 pb-3">
                <span className="text-gray-100">Here are some of my projects. For a full list, please check out my <a href="" className="text-cyan-400 underline">Github</a> profile!</span>
            </div>
            <div className="pt-10">
               <div className="flex flex-col-2 space-x-2 mx-auto w-2/3">
                    <div className="flex items-center justify-center">
                        <img src={ContactForm} alt="" className="border border-slate-400 rounded-lg h-72 " />
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-10">
                        <div className="border border-slate-400 rounded-lg bg-gradient-to-l from-slate-400 to-slate-500 p-1">
                            <span className="text-white">An interactive Form using web3Forms and sweetAlert2 API</span>
                        </div>
                        <div className="flex items-start justify-center space-x-2">
                            <span className="text-cyan-400 border border-slate-400 rounded-lg p-1">React.js</span>
                            <span className="text-cyan-400 border border-slate-400 rounded-lg p-1">TailwindCSS</span>
                            <span className="text-cyan-400 border border-slate-400 rounded-lg p-1">Jest</span>
                        </div>
                        <div className="text-cyan-400">
                            <button className="border border-slate-400 rounded-lg p-1">Source Code</button>
                        </div>
                    </div>
               </div>
            </div>
            <div className="pt-10">
               <div className="flex flex-col-2 space-x-2 mx-auto w-2/3">
                    <div className="flex items-center justify-center">
                        <img src={ContactForm} alt="" className="border border-slate-400 rounded-lg h-72 " />
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-10">
                        <div className="border border-slate-400 rounded-lg bg-gradient-to-l from-slate-400 to-slate-500 p-1">
                            <span className="text-white">An interactive Form using web3Forms and sweetAlert2 API</span>
                        </div>
                        <div className="flex items-start justify-center space-x-2">
                            <span className="text-cyan-400 border border-slate-400 rounded-lg p-1">React.js</span>
                            <span className="text-cyan-400 border border-slate-400 rounded-lg p-1">TailwindCSS</span>
                            <span className="text-cyan-400 border border-slate-400 rounded-lg p-1">Jest</span>
                        </div>
                        <div className="text-cyan-400">
                            <button className="border border-slate-400 rounded-lg p-1">Source Code</button>
                        </div>
                    </div>
               </div>
            </div>
            <div className="pt-10">
               <div className="flex flex-col-2 space-x-2 mx-auto w-2/3">
                    <div className="flex items-center justify-center">
                        <img src={ContactForm} alt="" className="border border-slate-400 rounded-lg h-72 " />
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-10">
                        <div className="border border-slate-400 rounded-lg bg-gradient-to-l from-slate-400 to-slate-500 p-1">
                            <span className="text-white">An interactive Form using web3Forms and sweetAlert2 API</span>
                        </div>
                        <div className="flex items-start justify-center space-x-2">
                            <span className="text-cyan-400 border border-slate-400 rounded-lg p-1">React.js</span>
                            <span className="text-cyan-400 border border-slate-400 rounded-lg p-1">TailwindCSS</span>
                            <span className="text-cyan-400 border border-slate-400 rounded-lg p-1">Jest</span>
                        </div>
                        <div className="text-cyan-400">
                            <button className="border border-slate-400 rounded-lg p-1">Source Code</button>
                        </div>
                    </div>
               </div>
            </div>
        </section>
        <section className="flex-col pt-20 pb-10">
            <div className="flex items-center justify-center space-x-2 pb-1">
                <TiMessages className='text-cyan-400 text-xl font-bold' />
                <h3 className='text-cyan-400 text-xl'>Contact Me</h3>
            </div>
            <div className="flex items-center justify-center space-x-2 pb-3">
                <span className="text-gray-100">Glad you are here, do not hesitate to contact me!</span>
                <IoMdHappy className='text-cyan-400 text-xl' />
            </div>
            <div className="flex items-center justify-center pt-2 space-x-8">
                <button className="flex items-center justify-center uppercase border border-slate-400 rounded-md px-1 py-1 space-x-1.5 sm:text text-black bg-cyan-400">
                    <div className="py-1">
                        <FaRegEnvelope className='text-xl' />
                    </div>
                    <span className='text-sm'>Email Me</span>
                </button>
                <button className="flex items-center justify-center uppercase border border-slate-400 rounded-md px-1 py-1 space-x-1.5 sm:text text-black bg-cyan-400">
                    <div className="py-1">
                        <CiCalendarDate className='text-xl' />
                    </div>
                    <span className='text-sm'>Schedule Call</span>
                </button>
            </div>
            <div className="flex items-center justify-center mx-auto w-2/3 space-x-2 pt-10 pb-10">
                <div className="w-1/2 border-slate-300 border-2"></div>
                <span className='text-slate-300'>OR</span>
                <div className="w-1/2 border-slate-300 border-2"></div>
            </div>
            <form action="" onSubmit={onSubmit}>
                <div className="md:flex-row md:w-4/5 flex flex-col items-center justify-center mx-auto w-4/5 space-x-10">
                    <div className="flex-col space-x-2">
                        <div className="md:grid grid-cols-2 gap-1 text-white space-x-2 pb-3">
                            <div className="pb-3">
                                <input type="text" placeholder='Name' className="border border-slate-400 rounded-lg p-2 bg-slate-600 md" />
                            </div>
                            <div>
                                <input type="text" placeholder='Email' className="border border-slate-400 rounded-lg p-2 bg-slate-600" />
                            </div>
                        </div>
                        <div className='pb-2'>
                            <textarea name="" id="" placeholder='Write Your Message' className='border border-slate-400 text-white bg-slate-600 w-full h-32 rounded-lg p-2'></textarea>
                        </div>
                        <div className="flex items-center justify-center pb-3">
                            <button className="bg-slate-600 border text-cyan-400 rounded-lg py-2 px-20  border-slate-400 shadow-md shadow-cyan-200">Send Message</button>
                        </div>
                    </div>
                    <div className="grid grid-rows-4 gap-2">
                        <div className="flex pb-3">
                            <button className="flex items-center justify-start space-x-8 text-white border rounded-lg px-6 py-3 border-slate-400 shadow-md shadow-cyan-100">
                                <div className="flex space-x-2">
                                    <FaGithub className='text-cyan-400 text-xl' />
                                    <span>Github</span>
                                </div>
                                <div className="flex">
                                    <IoIosArrowForward className='text-cyan-400 text-xl animate-pulse' />
                                </div>
                            </button>
                        </div>
                        <div className="flex pb-3">
                            <button className="flex items-center justify-start space-x-8 text-white border rounded-lg px-6 py-3  border-slate-400 shadow-md shadow-cyan-100">
                                <div className="flex space-x-2">
                                    <FaLinkedin className='text-cyan-400 text-xl' />
                                    <span>LinkedIn</span>
                                </div>
                                <div className="flex">
                                    <IoIosArrowForward className='text-cyan-400 text-xl animate-pulse' />
                                </div>
                            </button>
                        </div>
                        <div className="flex pb-3">
                            <button className="flex items-center justify-start space-x-8 text-white border rounded-lg px-6 py-3  border-slate-400 shadow-md shadow-cyan-100">
                                <div className="flex space-x-2">
                                    <FaXTwitter className='text-cyan-400 text-xl' />
                                    <span>XTwitter</span>
                                </div>
                                <div className="flex">
                                    <IoIosArrowForward className='text-cyan-400 text-xl animate-pulse' />
                                </div>
                            </button>
                        </div>
                        
                    </div>
                </div>
            </form>
            <span>{result}</span>
        </section>
    </main>
  )
}

export default Portfolio;