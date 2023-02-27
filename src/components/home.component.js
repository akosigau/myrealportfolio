/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Particle from '../helpers/particles.config';



class HomePage extends React.Component {

    state = {
        currentIndex: 0,
        heading: "Hello! I'm James",
    };


    typingRef = React.createRef();
    observer = null;

    componentDidMount() {
        this.observer = new IntersectionObserver(entries => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                this.startTypingHead();
            } else {
                this.resetTyping();
            }
        });
        this.observer.observe(this.typingRef.current);
    }

    componentWillUnmount() {
        this.observer.disconnect();
    }

    startTypingHead = () => {
        this.interval = setInterval(() => {
            this.setState(prevState => ({ currentIndex: prevState.currentIndex + 1 }));
        }, 100);
    };

    resetTyping = () => {
        clearInterval(this.interval);
        this.setState({ currentIndex: 0 });
    };

    render() {
        const { currentIndex, heading } = this.state;
        return (

            <main>
                <Particle />
                <section
                    className="relative flex h-screen min-h-full items-start justify-center overflow-y-hidden z-50">

                    {/*  Sidenav  */}
                    <nav
                        id="sidenav"
                        className="fixed top-0 left-0  h-screen w-32 p-5  mt-10 text-gray-50 z-40">
                        <ul
                            className="relative m-0 list-none px-[0.2rem] text-[0.5rem] md:text-[0.6rem] lg:text-base"
                            data-te-sidenav-menu-ref>

                            <li className="relative items-center p-2 hover:text-cyan-400">
                                <a href="#Profile">Profile</a>
                            </li>
                            <li className='border-l-2 h-8 border-gray-600 ml-4'></li>
                            <li className="relative items-center p-2 hover:text-cyan-400">
                                <a href="#Education">Education</a>
                            </li>
                            <li className='border-l-2 h-8 border-gray-600 ml-4'></li>
                            <li className="relative items-center p-2 hover:text-cyan-400">
                                <a href="#Work">Experience</a>
                            </li>
                            <li className='border-l-2 h-8 border-gray-600 ml-4'></li>
                            <li className="relative items-center p-2 hover:text-cyan-400">
                                <a href="#Skills">Skills</a>
                            </li>
                            <li className='border-l-2 h-8 border-gray-600 ml-4'></li>
                            <li className="relative items-center p-2 hover:text-cyan-400">
                                <a href="#Projects">Projects</a>
                            </li>
                        </ul>
                    </nav>
                    <header className='pt-72 lg:pt-62 text-center' ref={this.typingRef}>
                        <h1 className="text-5xl text-white font-semibold hidden lg:block pb-8">{heading.slice(0, currentIndex)}</h1>
                        <h1 className="text-lg md:text-2xl text-white font-semibold text-center block lg:hidden pb-6">{heading.slice(0, currentIndex)}</h1>
                        {currentIndex >= heading.length && (
                            <span className="text-[0.60rem] lg:text-lg md:text-base text-white font-semibold animate-blink">a WebDev and Graphic Designer</span>
                        )}
                    </header>
                    <div className="text-3xl text-white bottom-5 absolute text-center">
                        <p className="text-[0.5rem] pb-2">View Profle</p>
                        <div className="arrow-bounce">
                            <a href="#Profile">
                                <ion-icon name="arrow-down-outline"></ion-icon>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Profile */}
                <section id='Profile' className="bg-gradient-to-b from-black via-[#022451] to-[#042d6b] h-full lg:h-screen min-h-full items-start justify-center overflow-y-hidden p-20 lg:p-40">
                    <h2 className='text-white uppercase text-lg lg:text-3xl mb-5 text-center'>Profile</h2>
                    <div class="py-24 sm:py-32">
                        <div class="mx-auto max-w-7xl px-6 lg:px-8">
                            <dl class="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2 md:grid-cols-2">
                                <div class="mx-auto flex max-w-lg flex-col gap-y-4">
                                    <dd class="text-sm lg:text-lg font-semibold tracking-tight text-gray-50">About Me</dd>
                                    <dt class="text-sm lg:text-base md:text-xs leading-normal  text-gray-300 text-left">I am a skilled and versatile professional who can provide  high-quality web development and graphic design services. I possess the technical expertise and good attitude that makes me work effectively and collaboratively in a team environment.</dt>
                                </div>

                                <div class="mx-auto flex max-w-md flex-col gap-y-4">
                                    <dd class="text-sm lg:text-lg font-semibold tracking-tight text-gray-50 text-left">Relevant Info</dd>
                                    <dt class="text-base leading-7 text-gray-300 flex items-center">
                                        <div className="text-2xl">
                                            <ion-icon name="call"></ion-icon>
                                        </div>
                                        <p className='ml-2 text-xs lg:text-base'>+639352994701</p>
                                    </dt>
                                    <dt class="text-base leading-7 text-gray-300 flex items-center">
                                        <div className="text-2xl">
                                            <ion-icon name="mail"></ion-icon>
                                        </div>
                                        <p className='ml-2 text-[0.5rem] lg:text-base md:text-[0.65rem]'>james.dabalus.nz@gmail.com</p>
                                    </dt>
                                    <dt class="text-base leading-7 text-gray-300 flex items-center">
                                        <div className="text-2xl">
                                            <ion-icon name="logo-linkedin"></ion-icon>
                                        </div>
                                        <p className='ml-2 hover:text-cyan-400 text-[0.5rem] lg:text-base md:text-[0.65rem]'><a target="_blank" href="https://www.linkedin.com/in/james-dabalus-3a98bb138/">james-dabalus-3a98bb138</a></p>
                                    </dt>
                                    <dt class="text-base leading-7 text-gray-300 flex items-center">
                                        <div className="text-2xl">
                                            <ion-icon name="logo-github"></ion-icon>
                                        </div>
                                        <p className='ml-2 hover:text-cyan-400 text-xs lg:text-base'><a target="_blank" href="https://github.com/akosigau">akosigau</a></p>
                                    </dt>
                                </div>


                            </dl>
                        </div>
                    </div>

                    <div>
                        <img className="w-32 satellite-bounceSide float-right" src={window.location.origin + '/images/space-satellite.png'} alt="satellite" />
                    </div>
                </section>

                {/* Education */}
                <section id='Education' className="bg-gradient-to-b from-[#042d6b] via-[#014495] to-[#0361c3] h-full lg:h-screen min-h-full items-start justify-center overflow-hidden p-20 lg:p-40">
                    <h2 className='text-white uppercase text-lg lg:text-3xl mb-5 text-center'>Education</h2>

                    <div className="relative w-screen h-32">
                        <img className="w-32 push-animation" src={window.location.origin + '/images/airplane.png'} alt="airplane" />
                    </div>

                    <div class=" py-0 ">
                        <div class="mx-auto max-w-7xl px-6 lg:px-8">
                            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-y-4 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">

                                <article class="flex max-w-xl flex-col items-start justify-between border-4 border-cyan-400 p-5 mx-auto lg:mx-0">
                                    <div class="flex items-center gap-x-4 text-xs">
                                        <p class="text-gray-200">Oct 2022 to Feb 2023</p>
                                    </div>
                                    <div class="group relative">
                                        <h3 class="mt-3 text-base font-semibold leading-6 text-gray-200 group-hover:text-cyan-400">
                                            <a href="https://kodego.ph/" target="_blank">
                                                <span class="absolute inset-0"></span>
                                                KodeGo Bootcamp
                                            </a>
                                        </h3>
                                        <p class="mt-5 text-sm leading-6 text-gray-200 line-clamp-3">Bootcamp Certificate</p>
                                        <p class="mt-5 text-sm leading-6 text-gray-200 line-clamp-3">Full Stack Web Development</p>
                                    </div>
                                    <div class="relative mt-8 flex items-center gap-x-4">

                                        <div class="text-sm leading-6">
                                            <p class="font-semibold text-gray-300">

                                                <span class="absolute inset-0"></span>
                                                Manila, Philippines

                                            </p>
                                        </div>
                                    </div>
                                </article>
                                <article class="flex max-w-xl flex-col items-start justify-between border-4 border-cyan-400 p-5 mx-auto lg:mx-0">
                                    <div class="flex items-center gap-x-4 text-xs">
                                        <p class="text-gray-200">Sept 2019 to Aug 2020</p>
                                    </div>
                                    <div class="group relative">
                                        <h3 class="mt-3 text-base font-semibold leading-6 text-gray-200 group-hover:text-cyan-400">
                                            <a href="https://www.jeduka.com/new-zealand/universities/cornell-institute-of-business-and-technology" target="_blank">
                                                <span class="absolute inset-0"></span>
                                                Cornell Institute of Business and Technology
                                            </a>
                                        </h3>
                                        <p class="mt-5 text-sm leading-6 text-gray-200 line-clamp-3">Diploma in Infromation Technology</p>
                                        <p class="mt-5 text-sm leading-6 text-gray-200 line-clamp-3">Level 7 Network Management</p>
                                    </div>
                                    <div class="relative mt-8 flex items-center gap-x-4">

                                        <div class="text-sm leading-6">
                                            <p class="font-semibold text-gray-300">

                                                <span class="absolute inset-0"></span>
                                                Auckland, New Zealand

                                            </p>
                                        </div>
                                    </div>
                                </article>

                                <article class="flex max-w-xl flex-col items-start justify-between border-4 border-cyan-400 p-5 mx-auto lg:mx-0">
                                    <div class="flex items-center gap-x-4 text-xs">
                                        <p class="text-gray-200">July 2013 to April 2015</p>
                                    </div>
                                    <div class="group relative">
                                        <h3 class="mt-3 text-base font-semibold leading-6 text-gray-200 group-hover:text-cyan-400">
                                            <a href="https://informatics.edu.ph/" target="_blank">
                                                <span class="absolute inset-0"></span>
                                                Informatics Filinvest Alabang
                                            </a>
                                        </h3>
                                        <p class="mt-5 text-sm leading-6 text-gray-200 line-clamp-3">Advance Diploma</p>
                                        <p class="mt-5 text-sm leading-6 text-gray-200 line-clamp-3">Gaming Animation and Technology</p>
                                    </div>
                                    <div class="relative mt-8 flex items-center gap-x-4">

                                        <div class="text-sm leading-6">
                                            <p class="font-semibold text-gray-300">

                                                <span class="absolute inset-0"></span>
                                                Muntinlupa, Philippines

                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20">
                        <img className="w-screen" src={window.location.origin + '/images/clouds.png'} alt="satellite" />
                    </div>
                </section>

                {/* Work */}
                <section id='Work' className="bg-gradient-to-b from-[#0361c3] via-[#5e89fa] to-[#8094ea] h-full min-h-full items-start justify-center overflow-hidden p-20 lg:p-40">

                    <h2 className='text-white uppercase text-lg lg:text-3xl mb-5 text-center'>Work Experience</h2>

                    <div class=" py-10">
                        <div class="mx-auto max-w-7xl px-6 lg:px-8">
                            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-y-4 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                <div class="p-2 bg-gray-200 rounded-lg">
                                    <article class="flex max-w-xl flex-col items-start justify-between border-4 border-gray-700 p-5 mx-auto lg:mx-0 bg-gray-200">
                                        <h3 class=" text-base font-semibold leading-6 text-gray-500 hover:text-cyan-400 mb-2">
                                            <a href="https://www.upwork.com/" target="_blank">
                                                <span class="absolute inset-0"></span>
                                                Upwork
                                            </a>
                                        </h3>
                                        <p class="text-[0.7rem] font-semibold text-gray-500" >Manila, Philippines</p>
                                        <div class="group relative">
                                            <div class="flex items-center gap-x-4 text-xs">
                                                <p class="text-gray-500">Oct 2022 - Present</p>
                                            </div>
                                            <p class="mt-5 text-sm leading-6 text-gray-500 line-clamp-3">Freelance WebDev and Graphic Designer</p>
                                        </div>
                                        <div class="border-t-2 border-gray-500 w-full my-2"></div>
                                        <div class="relative mt-0 flex items-center gap-x-4">
                                            <div class="leading-6">
                                                <p class="text-[0.6rem] font-semibold text-gray-500">
                                                    Creating engaging tutorial videos to teach the foundation and basics for learners. Delivered quality contents and proactively updates progress.
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div class="p-2 bg-gray-200 rounded-lg">
                                    <article class="flex max-w-xl flex-col items-start justify-between border-4 border-gray-700 p-5 mx-auto lg:mx-0 bg-gray-200">
                                        <h3 class=" text-base font-semibold leading-6 text-gray-500 hover:text-cyan-400 mb-2">
                                            <a href="https://pc-soft.co.nz/" target="_blank">
                                                <span class="absolute inset-0"></span>
                                                PC Soft Limited
                                            </a>
                                        </h3>
                                        <p class="text-[0.7rem] font-semibold text-gray-500" >Auckland, New Zealand</p>
                                        <div class="group relative">
                                            <div class="flex items-center gap-x-4 text-xs">
                                                <p class="text-gray-500">Dec 2020 - Sept 2022</p>
                                            </div>
                                            <p class="mt-5 text-sm leading-6 text-gray-500 line-clamp-3">ICT Support Technician</p>
                                        </div>
                                        <div class="border-t-2 border-gray-500 w-full my-2"></div>
                                        <div class="relative mt-0 flex items-center gap-x-4">
                                            <div class="leading-6">
                                                <p class="text-[0.6rem] font-semibold text-gray-500">
                                                    Solves System and ICT issue of Clients Remotely ,In-house or On-site. Also develops website with the use of Wordpress. Builds relationship with clients and works effectively with team.
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div class="p-2 bg-gray-200 rounded-lg">
                                    <article class="flex max-w-xl flex-col items-start justify-between border-4 border-gray-700 p-5 mx-auto lg:mx-0 bg-gray-200">
                                        <h3 class=" text-base font-semibold leading-6 text-gray-500 hover:text-cyan-400 mb-2">
                                            <a href="https://www.paknsave.co.nz/" target="_blank">
                                                <span class="absolute inset-0"></span>
                                                Pak'n Save Lincoln Rd.
                                            </a>
                                        </h3>
                                        <p class="text-[0.7rem] font-semibold text-gray-500" >Auckland, New Zealand</p>
                                        <div class="group relative">
                                            <div class="flex items-center gap-x-4 text-xs">
                                                <p class="text-gray-500">Dec 2019 - June 2020</p>
                                            </div>
                                            <p class="mt-5 text-sm leading-6 text-gray-500 line-clamp-3">Grocery Assistant</p>
                                        </div>
                                        <div class="border-t-2 border-gray-500 w-full my-2"></div>
                                        <div class="relative mt-0 flex items-center gap-x-4">
                                            <div class="leading-6">
                                                <p class="text-[0.6rem] font-semibold text-gray-500">
                                                    My responsibilites are to help in day to day operation such as stocking and tidying the shelves. Provided exceptional support to customers.
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div class="p-2 bg-gray-200 rounded-lg">
                                    <article class="flex max-w-xl flex-col items-start justify-between border-4 border-gray-700 p-5 mx-auto lg:mx-0 bg-gray-200">
                                        <h3 class=" text-base font-semibold leading-6 text-gray-500 hover:text-cyan-400 mb-2">
                                            <a href="#" target="_blank">
                                                <span class="absolute inset-0"></span>
                                                Genghis Khan Monggolian Grill
                                            </a>
                                        </h3>
                                        <p class="text-[0.7rem] font-semibold text-gray-500" >Auckland, New Zealand</p>
                                        <div class="group relative">
                                            <div class="flex items-center gap-x-4 text-xs">
                                                <p class="text-gray-500">June 2020 - Nov 2020</p>
                                            </div>
                                            <p class="mt-5 text-sm leading-6 text-gray-500 line-clamp-3">Kitchen Staff</p>
                                        </div>
                                        <div class="border-t-2 border-gray-500 w-full my-2"></div>
                                        <div class="relative mt-0 flex items-center gap-x-4">
                                            <div class="leading-6">
                                                <p class="text-[0.6rem] font-semibold text-gray-500">
                                                    Assisting in a very busy buffet setup restaurant, my main role is to help the kitchen and cook on the grill. Provides assistance to newly hired staffs.
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div class="p-2 bg-gray-200 rounded-lg">
                                    <article class="flex max-w-xl flex-col items-start justify-between border-4 border-gray-700 p-5 mx-auto lg:mx-0 bg-gray-200">
                                        <h3 class=" text-base font-semibold leading-6 text-gray-500 hover:text-cyan-400 mb-2">
                                            <a href="https://www.aclangroup.com/" target="_blank">
                                                <span class="absolute inset-0"></span>
                                                Aclan Group
                                            </a>
                                        </h3>
                                        <p class="text-[0.7rem] font-semibold text-gray-500" >Muntinlupa, Philippines</p>
                                        <div class="group relative">
                                            <div class="flex items-center gap-x-4 text-xs">
                                                <p class="text-gray-500">April 2016 - May 2019</p>
                                            </div>
                                            <p class="mt-5 text-sm leading-6 text-gray-500 line-clamp-3">Head of Tech Ops</p>
                                        </div>
                                        <div class="border-t-2 border-gray-500 w-full my-2"></div>
                                        <div class="relative mt-0 flex items-center gap-x-4">
                                            <div class="leading-6">
                                                <p class="text-[0.6rem] font-semibold text-gray-500">
                                                    My role involves Creating and Designing websites as per client and internal company requirements. In addition, i am also in charge of Graphics designing.
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div class="p-2 bg-gray-200 rounded-lg">
                                    <article class="flex max-w-xl flex-col items-start justify-between border-4 border-gray-700 p-5 mx-auto lg:mx-0 bg-gray-200">
                                        <h3 class=" text-base font-semibold leading-6 text-gray-500 hover:text-cyan-400 mb-2">
                                            <a href="https://informatics.edu.ph/" target="_blank">
                                                <span class="absolute inset-0"></span>
                                                Informatics Filinvest Alabang
                                            </a>
                                        </h3>
                                        <p class="text-[0.7rem] font-semibold text-gray-500" >Muntinlipa, Philippines</p>
                                        <div class="group relative">
                                            <div class="flex items-center gap-x-4 text-xs">
                                                <p class="text-gray-500">July 2015 - April 2016</p>
                                            </div>
                                            <p class="mt-5 text-sm leading-6 text-gray-500 line-clamp-3">Part-time Instructor</p>
                                        </div>
                                        <div class="border-t-2 border-gray-500 w-full my-2"></div>
                                        <div class="relative mt-0 flex items-center gap-x-4">
                                            <div class="leading-6">
                                                <p class="text-[0.6rem] font-semibold text-gray-500">
                                                    As an Instructor i teach Graphic Design and Web Development to enrollees under multimedia arts program. Renders quality education to students.
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div class="p-2 bg-gray-200 rounded-lg">
                                    <article class="flex max-w-xl flex-col items-start justify-between border-4 border-gray-700 p-5 mx-auto lg:mx-0 bg-gray-200">
                                        <h3 class=" text-base font-semibold leading-6 text-gray-500 hover:text-cyan-400 mb-2">
                                            <a href="https://www.alorica.com/" target="_blank">
                                                <span class="absolute inset-0"></span>
                                                West Contact Services Inc. An Alorica Company
                                            </a>
                                        </h3>
                                        <p class="text-[0.7rem] font-semibold text-gray-500" >Makati, Philippines</p>
                                        <div class="group relative">
                                            <div class="flex items-center gap-x-4 text-xs">
                                                <p class="text-gray-500">July 2013 - August 2015</p>
                                            </div>
                                            <p class="mt-5 text-sm leading-6 text-gray-500 line-clamp-3">Operations CSR</p>
                                        </div>
                                        <div class="border-t-2 border-gray-500 w-full my-2"></div>
                                        <div class="relative mt-0 flex items-center gap-x-4">
                                            <div class="leading-6">
                                                <p class="text-[0.6rem] font-semibold text-gray-500">
                                                    Troubleshoots Comcast related issues such as TV, Internet and Voice over the phone. Renders professional knowledge to solve issues while providing empathy which gives customer's a sense of security and assurance.
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div class="p-2 bg-gray-200 rounded-lg">
                                    <article class="flex max-w-xl flex-col items-start justify-between border-4 border-gray-700 p-5 mx-auto lg:mx-0 bg-gray-200">
                                        <h3 class=" text-base font-semibold leading-6 text-gray-500 hover:text-cyan-400 mb-2">
                                            <a href="https://www.teleperformance.com/" target="_blank">
                                                <span class="absolute inset-0"></span>
                                                Teleperformance
                                            </a>
                                        </h3>
                                        <p class="text-[0.7rem] font-semibold text-gray-500" >Makati, Philippines</p>
                                        <div class="group relative">
                                            <div class="flex items-center gap-x-4 text-xs">
                                                <p class="text-gray-500">July 2012 - March 2013</p>
                                            </div>
                                            <p class="mt-5 text-sm leading-6 text-gray-500 line-clamp-3">Customer Service Representative</p>
                                        </div>
                                        <div class="border-t-2 border-gray-500 w-full my-2"></div>
                                        <div class="relative mt-0 flex items-center gap-x-4">
                                            <div class="leading-6">
                                                <p class="text-[0.6rem] font-semibold text-gray-500">
                                                    As HSBC Representative we offer solution to credit card holders with on going balances. Conversed professionally while building rapport to create good relationships with customers that creates trusts in the services provided by the company.
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills */}
                <section id='Skills' className="bg-gradient-to-b from-[#8094ea] via-[#8892d7] to-[#ffd2c3] h-screen lg:h-screen min-h-full items-start justify-center overflow-hidden p-20 lg:pt-40">

                    <h2 className='text-white uppercase text-lg lg:text-3xl mb-5 text-center'>Skills</h2>

                    <div class="py-10">
                        <div class="mx-auto max-w-7xl px-6 lg:px-8">

                            <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
                                <dl class="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-4 lg:gap-y-16">
                                    <div class="relative pl-16">
                                        <dt class="text-base font-semibold leading-7 text-gray-900 ">
                                            <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-2xl text-white">
                                                <ion-icon name="logo-html5"></ion-icon>
                                            </div>
                                            HTML5
                                        </dt>
                                    </div>

                                    <div class="relative pl-16">
                                        <dt class="text-base font-semibold leading-7 text-gray-900 ">
                                            <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-2xl text-white">
                                                <ion-icon name="logo-css3"></ion-icon>
                                            </div>
                                            CSS3
                                        </dt>
                                    </div>

                                    <div class="relative pl-16">
                                        <dt class="text-base font-semibold leading-7 text-gray-900 ">
                                            <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-2xl text-white">
                                                <ion-icon name="logo-javascript"></ion-icon>
                                            </div>
                                            JAVASCRIPT
                                        </dt>
                                    </div>

                                    <div class="relative pl-16">
                                        <dt class="text-base font-semibold leading-7 text-gray-900 ">
                                            <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-xl text-white">
                                                B
                                            </div>
                                            BOOTSTRAP
                                        </dt>
                                    </div>

                                    <div class="relative pl-16">
                                        <dt class="text-base font-semibold leading-7 text-gray-900 ">
                                            <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-2xl text-white">
                                                <ion-icon name="logo-wordpress"></ion-icon>
                                            </div>
                                            WORDPRESS
                                        </dt>
                                    </div>

                                    <div class="relative pl-16">
                                        <dt class="text-base font-semibold leading-7 text-gray-900 ">
                                            <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-base text-white">
                                                TW
                                            </div>
                                            TAILWIND
                                        </dt>
                                    </div>

                                    <div class="relative pl-16">
                                        <dt class="text-base font-semibold leading-7 text-gray-900 ">
                                            <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-base text-white">
                                                JQ
                                            </div>
                                            JQUERY
                                        </dt>
                                    </div>

                                    <div class="relative pl-16">
                                        <dt class="text-base font-semibold leading-7 text-gray-900 ">
                                            <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-2xl text-white">
                                                <ion-icon name="logo-react"></ion-icon>
                                            </div>
                                            REACT JS
                                        </dt>
                                    </div>

                                    <div class="relative pl-16">
                                        <dt class="text-base font-semibold leading-7 text-gray-900 ">
                                            <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-xl text-white">
                                                E
                                            </div>
                                            EXPRESS JS
                                        </dt>
                                    </div>

                                    <div class="relative pl-16">
                                        <dt class="text-base font-semibold leading-7 text-gray-900 ">
                                            <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-2xl text-white">
                                                <ion-icon name="logo-nodejs"></ion-icon>
                                            </div>
                                            NODE JS
                                        </dt>
                                    </div>

                                    <div class="relative pl-16">
                                        <dt class="text-base font-semibold leading-7 text-gray-900 ">
                                            <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-base text-white">
                                                MS
                                            </div>
                                            MYSQL
                                        </dt>
                                    </div>

                                    <div class="relative pl-16">
                                        <dt class="text-base font-semibold leading-7 text-gray-900 ">
                                            <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-2xl text-white">
                                                <ion-icon name="logo-github"></ion-icon>
                                            </div>
                                            GITHUB
                                        </dt>
                                    </div>

                                    <div class="relative pl-16">
                                        <dt class="text-base font-semibold leading-7 text-gray-900 ">
                                            <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-2xl text-white">
                                                <ion-icon name="logo-microsoft"></ion-icon>
                                            </div>
                                            MICROSOFT OFFICES
                                        </dt>
                                    </div>

                                    <div class="relative pl-16">
                                        <dt class="text-base font-semibold leading-7 text-gray-900 ">
                                            <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-2xl text-white">
                                                <ion-icon name="logo-figma"></ion-icon>
                                            </div>
                                            FIGMA
                                        </dt>
                                    </div>

                                    <div class="relative pl-16">
                                        <dt class="text-base font-semibold leading-7 text-gray-900 ">
                                            <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-2xl text-white">
                                                <ion-icon name="logo-bitcoin"></ion-icon>
                                            </div>
                                            CRYPTO
                                        </dt>
                                    </div>

                                    <div class="relative pl-16">
                                        <dt class="text-base font-semibold leading-7 text-gray-900 ">
                                            <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-base text-white">
                                                AC
                                            </div>
                                            ADOBE SUITE
                                        </dt>
                                    </div>
                                </dl>
                            </div>
                            <div className="relative w-screen h-32 mt-20">
                                <img className="w-32 fly-animation" src={window.location.origin + '/images/helicopter.gif'} alt="helicopter" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects */}

                <section id='Projects' className="bg-gradient-to-b from-[#ffd2c3] via-[#fbc19b] to-[#fefefc] h-screen lg:h-full min-h-full items-start justify-center overflow-hidden py-20 lg:pt-40 pb-0">

                    <h2 className='text-white uppercase text-lg lg:text-3xl mb-5 text-center'>Projects</h2>

                    <div className=" py-10">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-4 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                <div className="p-2 bg-amber-400 rounded-lg drop-shadow-lg">
                                    <article className="flex max-w-xl flex-col items-start justify-between border-4 border-gray-700 p-5 mx-auto lg:mx-0 bg-gray-200">
                                        <h3 className=" text-base font-semibold leading-6 text-gray-500 hover:text-cyan-400 mb-2 mx-auto">
                                            <a href="#" target="_blank">
                                                <span className="absolute inset-0"></span>
                                                WEB PORTFOLIO
                                            </a>
                                        </h3>
                                        <img className="w-screen border-4 border-black" src={window.location.origin + '/images/portfolios/webportfolio.png'} alt="portfolio1" />
                                        <div className="mx-auto mt-2 bg-amber-400 p-2 ">
                                            <p className="text-[0.7rem] font-semibold text-gray-500 text-center">HTML5,CSS3, TAILWIND, REACT and JAVASCRIPT</p>
                                        </div>
                                        <div className="border-t-2 border-gray-500 w-full my-2"></div>
                                        <div className="relative mt-0 flex items-center gap-x-4">
                                            <div className="leading-6">
                                                <p className="text-[0.6rem] font-semibold text-gray-500">
                                                    Frontend uses react with html5 utilizing tailwind components with the help of css3 to add aesthetics using keyframes for moving elements. fully responsive to different screen sizes.
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="p-2 bg-amber-400 rounded-lg drop-shadow-lg">
                                    <article className="flex max-w-xl flex-col items-start justify-between border-4 border-gray-700 p-5 mx-auto lg:mx-0 bg-gray-200">
                                        <h3 className=" text-base font-semibold leading-6 text-gray-500 hover:text-cyan-400 mb-2 mx-auto">
                                            <a href="#" target="_blank">
                                                <span className="absolute inset-0"></span>
                                                STHENOS
                                            </a>
                                        </h3>
                                        <img className="w-screen border-4 border-black" src={window.location.origin + '/images/portfolios/sthenos.png'} alt="portfolio1" />
                                        <div className="mx-auto mt-2 bg-amber-400 p-2 ">
                                            <p className="text-[0.7rem] font-semibold text-gray-500 text-center" >REACT, TAILWIND, JS, NODEJS, EXPRESSJS and MYSQL</p>
                                        </div>
                                        <div className="border-t-2 border-gray-500 w-full my-2"></div>
                                        <div className="relative mt-0 flex items-center gap-x-4">
                                            <div className="leading-6">
                                                <p className="text-[0.6rem] font-semibold text-gray-500">
                                                    A Bootcamp project by KodeGo philippines. Sthenos is a fitness tracker that let's set workout goals and diet plan. It also calculates your BMI and Ideal Calorie Intake.
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="p-2 bg-amber-400 rounded-lg drop-shadow-lg">
                                    <article className="flex max-w-xl flex-col items-start justify-between border-4 border-gray-700 p-5 mx-auto lg:mx-0 bg-gray-200">
                                        <h3 className=" text-base font-semibold leading-6 text-gray-500 hover:text-cyan-400 mb-2 mx-auto">
                                            <a href="https://ammonmotors.co.nz/" target="_blank">
                                                <span className="absolute inset-0"></span>
                                                Ammon Motors NZ
                                            </a>
                                        </h3>
                                        <img className="w-screen border-4 border-black" src={window.location.origin + '/images/portfolios/ammon.png'} alt="portfolio1" />
                                        <div className="mx-auto mt-2 bg-amber-400 p-2 ">
                                            <p className="text-[0.7rem] font-semibold text-gray-500" >WORDPRESS</p>
                                        </div>
                                        <div className="border-t-2 border-gray-500 w-full my-2"></div>
                                        <div className="relative mt-0 flex items-center gap-x-4">
                                            <div className="leading-6">
                                                <p className="text-[0.6rem] font-semibold text-gray-500">
                                                    An automotive website made for client in New Zealand. It is powered by Wordpress and ulilizes a website builder called beaver builder. It is fully responsive and uses plugins from wordpress such as ninja forms etc.
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="p-2 bg-amber-400 rounded-lg drop-shadow-lg">
                                    <article className="flex max-w-xl flex-col items-start justify-between border-4 border-gray-700 p-5 mx-auto lg:mx-0 bg-gray-200">
                                        <h3 className=" text-base font-semibold leading-6 text-gray-500 hover:text-cyan-400 mb-2 mx-auto">
                                            <a href="https://generalauto.co.nz/" target="_blank">
                                                <span className="absolute inset-0"></span>
                                                General Auto NZ
                                            </a>
                                        </h3>
                                        <img className="w-screen border-4 border-black" src={window.location.origin + '/images/portfolios/genauto.png'} alt="portfolio1" />
                                        <div className="mx-auto mt-2 bg-amber-400 p-2 ">
                                            <p className="text-[0.7rem] font-semibold text-gray-500" >WORDPRESS</p>
                                        </div>
                                        <div className="border-t-2 border-gray-500 w-full my-2"></div>
                                        <div className="relative mt-0 flex items-center gap-x-4">
                                            <div className="leading-6">
                                                <p className="text-[0.6rem] font-semibold text-gray-500">
                                                An automotive website made for client in New Zealand. It is powered by Wordpress and ulilizes a website builder called beaver builder. It is fully responsive and uses plugins from wordpress such as ninja forms etc.
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                                <div className="p-2 bg-amber-400 rounded-lg drop-shadow-lg">
                                    <article className="flex max-w-xl flex-col items-start justify-between border-4 border-gray-700 p-5 mx-auto lg:mx-0 bg-gray-200">
                                        <h3 className=" text-base font-semibold leading-6 text-gray-500 hover:text-cyan-400 mb-2 mx-auto">
                                            <a href="https://www.winiata.co.nz/" target="_blank">
                                                <span className="absolute inset-0"></span>
                                                PROPERTY VALUER NZ
                                            </a>
                                        </h3>
                                        <img className="w-screen border-4 border-black" src={window.location.origin + '/images/portfolios/winiata.png'} alt="portfolio1" />
                                        <div className="mx-auto mt-2 bg-amber-400 p-2 ">
                                            <p className="text-[0.7rem] font-semibold text-gray-500" >WORDPRESS</p>
                                        </div>
                                        <div className="border-t-2 border-gray-500 w-full my-2"></div>
                                        <div className="relative mt-0 flex items-center gap-x-4">
                                            <div className="leading-6">
                                                <p className="text-[0.6rem] font-semibold text-gray-500">
                                                An Property valuer website made for client in New Zealand. It is powered by Wordpress and ulilizes a website builder called beaver builder. It is fully responsive and uses plugins from wordpress such as ninja forms etc.
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>


                                <div className="p-2 bg-amber-400 rounded-lg drop-shadow-lg">
                                    <article className="flex max-w-xl flex-col items-start justify-between border-4 border-gray-700 p-5 mx-auto lg:mx-0 bg-gray-200">
                                        <h3 className=" text-base font-semibold leading-6 text-gray-500 hover:text-cyan-400 mb-2 mx-auto">
                                            <a href="#" target="_blank">
                                                <span className="absolute inset-0"></span>
                                                My LifeCapp
                                            </a>
                                        </h3>
                                        <img className="w-screen border-4 border-black" src={window.location.origin + '/images/portfolios/lifecapp.jpg'} alt="portfolio1" />
                                        <div className="mx-auto mt-2 bg-amber-400 p-2 ">
                                            <p className="text-[0.7rem] font-semibold text-gray-500" >PROJECT MANAGER</p>
                                        </div>
                                        <div className="border-t-2 border-gray-500 w-full my-2"></div>
                                        <div className="relative mt-0 flex items-center gap-x-4">
                                            <div className="leading-6">
                                                <p className="text-[0.6rem] font-semibold text-gray-500">
                                                This is the 1st project i completed under Aclan Group of Companies, where my role was to work closely with clients and developers and monitor it's software development lifecycle for mobile and web.
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                </div>

                            
                            </div>
                        </div>
                    </div>
                    <img className="w-full" src={window.location.origin + '/images/cityscape.png'} alt="cityscape" />
                </section>
                
                <footer className="bg-[#0e1525] p-5 text-center text-white text-base w-screen flex">
                <div className="mx-auto">
                    <p className='mb-4'>MyPortfolio Website is powered by</p>
                    <div className="text-2xl grid grid-cols-4 gap-x-4 ml-4">
                        <ion-icon name="logo-react"></ion-icon>
                        <ion-icon name="logo-javascript"></ion-icon>
                        <ion-icon name="logo-html5"></ion-icon>
                        <ion-icon name="logo-css3"></ion-icon>
                    </div>
                </div>
                </footer>
                
            </main>
        );
    }
}



export default HomePage;