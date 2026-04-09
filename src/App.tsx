import './App.css';
import { useState } from 'react';
import Favicon from '../public/favicon.png';
import Sidebar from './components/Sidebar';

const lgTag = "text-1xl font-studynight tracking-[4px] text-gray-800";
const ACCENT = '#ff3f4a';
const CYAN = '#00fff0';

const GigglyText = ({ text, className = "" }: { text: string; className?: string }) => {
    const giggle = (e: React.MouseEvent<HTMLSpanElement>) => {
        const el = e.currentTarget;
        el.classList.add('giggle');
        setTimeout(() => el.classList.remove('giggle'), 1200);
    };

    return (
        <div className={`flex flex-row flex-wrap gap-2 ${className}`}>
            {text.split('').map((c, i) => (
                <span key={i} onMouseEnter={giggle} className="cursor-default" style={{ color: CYAN }}>
                    {c === ' ' ? '\u00A0' : c}
                </span>
            ))}
        </div>
    );
};

const Divider = () => (
    <div style={{
        height: '1px',
        background: `linear-gradient(to right, transparent, ${CYAN}, transparent)`,
        margin: '0 2rem',
        opacity: 0.3
    }} />
);

export default function App() {
    const [active, setActive] = useState("home");
    const [expanded, setExpanded] = useState(false);
    const [hovered, setHovered] = useState(false);
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);

    const giggle = (e: React.MouseEvent<HTMLSpanElement>) => {
        const el = e.currentTarget;
        el.classList.add('giggle');
        setTimeout(() => el.classList.remove('giggle'), 1200);
    };

    const scrollTo = (id: string) => {
        setActive(id);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="flex h-screen bg-black text-white font-poppins overflow-hidden">

            <Sidebar
                active={active}
                expanded={expanded}
                setExpanded={setExpanded}
                scrollTo={scrollTo}
            />

            <div className="flex-1 ml-20 lg:ml-60 h-screen overflow-y-scroll scroll-smooth">

                {/* HOME */}
                <section id="home" className="min-h-screen flex flex-col px-8 pl-8">
                    <div className="flex flex-col gap-2 pt-8">
                        <span className={lgTag}>{"const app =()=> {"}</span>
                        <span className={lgTag}>{"return ("}</span>
                        <span className={`${lgTag} pl-8`}>{"<>"}</span>
                    </div>

                    <div className="flex-1 flex flex-col gap-12 justify-center pl-10 text-white overflow-hidden">
                        <span className={`${lgTag} pl-2`}>{" <h1> "}</span>

                        <div className='flex flex-col justify-center leading-[2rem]'>
                            <div className="flex flex-row gap-2 font-thisappeal text-[80px] xl:text-[100px]">
                                <span onMouseEnter={giggle} className="cursor-default">H</span>
                                <span onMouseEnter={giggle} className="cursor-default">i</span>
                                <span onMouseEnter={giggle} className="cursor-default">,</span>
                            </div>

                            <div className="flex flex-row gap-2 font-thisappeal text-[80px] xl:text-[100px] items-center">
                                <span onMouseEnter={giggle} className="cursor-default">I</span>
                                <span onMouseEnter={giggle} className="cursor-default">'</span>
                                <span onMouseEnter={giggle} className="cursor-default">m</span>
                                <span className="inline-block transform rotate-24">
                                    <img src={Favicon} width={190} alt="Favicon" />
                                </span>
                                <span onMouseEnter={giggle} className="cursor-default">e</span>
                                <span onMouseEnter={giggle} className="cursor-default">e</span>
                                <span onMouseEnter={giggle} className="cursor-default">n</span>
                                <span onMouseEnter={giggle} className="cursor-default">a</span>
                                <span onMouseEnter={giggle} className="cursor-default">r</span>
                                <span onMouseEnter={giggle} className="cursor-default">d</span>
                                <span onMouseEnter={giggle} className="cursor-default">.</span>
                            </div>

                            <div className="flex flex-row gap-2 font-thisappeal text-[80px] xl:text-[100px] items-end">
                                <span onMouseEnter={giggle} className="cursor-default">C</span>
                                <span onMouseEnter={giggle} className="cursor-default">S</span>
                                <span onMouseEnter={giggle} className="font-pacifico text-sm text-gray-800 cursor-default">{"</>"}</span>
                                <span onMouseEnter={giggle} className="cursor-default">S</span>
                                <span onMouseEnter={giggle} className="cursor-default">t</span>
                                <span onMouseEnter={giggle} className="cursor-default">u</span>
                                <span onMouseEnter={giggle} className="cursor-default">d</span>
                                <span onMouseEnter={giggle} className="cursor-default">e</span>
                                <span onMouseEnter={giggle} className="cursor-default">n</span>
                                <span onMouseEnter={giggle} className="cursor-default">t</span>
                            </div>
                            <span className={`${lgTag} self-end mb-4`}>{" </h1> "}</span>
                            <p className="flex flex-row gap-2 text-2xl tracking-[.5rem] pt-2 text-gray-700">
                                <span className={`${lgTag} self-start`}>{" <p> "}</span>
                                <span> University Student </span>
                                <span className={`${lgTag} self-end`}>{" </p> "}</span>
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            <button
                                onClick={() => scrollTo('contact')}
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                                className="self-start px-8 py-3 text-sm font-poppins tracking-[3px] uppercase"
                                style={{
                                    background: hovered ? ACCENT : 'transparent',
                                    color: hovered ? '#000' : CYAN,
                                    border: `1px solid`,
                                    borderColor: hovered ? ACCENT : `${CYAN}`,
                                    borderLeft: `3px solid ${ACCENT}`,
                                    transition: 'all 0.15s ease',
                                }}
                            >
                                Get in touch
                            </button>
                        </div>
                    </div>
                </section>

                <Divider />

                {/* ABOUT */}
                <section id="about" className="min-h-screen flex flex-col px-16 py-24 justify-center">
                    <span className={lgTag}>{" <h2> "}</span>
                    <GigglyText text="About Me." className="font-thisappeal text-[70px] xl:text-[50px] mb-12" />
                    <span className={`${lgTag} self-end mb-12`}>{" </h2> "}</span>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pl-2">
                        <div className="flex flex-col gap-6">
                            <p className="text-gray-400 text-lg leading-relaxed tracking-wide">
                                I'm a Computer Science student who got hooked on web development and never looked back. I started with plain HTML and CSS, broke a lot of things, and kept going. Now I build full-stack web apps and occasionally mobile apps when I'm feeling brave.
                            </p>
                            <p className="text-gray-400 text-lg leading-relaxed tracking-wide">
                                I learn by doing — spinning up projects, hitting walls, and figuring it out. Most of my growth happened outside the classroom. Still a student, always building.
                            </p>
                            <p className="text-gray-500 text-sm tracking-[2px] uppercase mt-4"
                                style={{ borderLeft: `2px solid ${ACCENT}`, paddingLeft: '1rem' }}>
                                Open to internships &amp; collabs
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex flex-row gap-4 items-start border-b border-gray-900 pb-4">
                                <span className="text-gray-600 text-xs tracking-[2px] uppercase w-48 shrink-0">Degree</span>
                                <span className="text-sm tracking-wide" style={{ color: CYAN }}>BS Computer Science</span>
                            </div>
                            <div className="flex flex-row gap-4 items-start border-b border-gray-900 pb-4">
                                <span className="text-gray-600 text-xs tracking-[2px] uppercase w-48 shrink-0">Focus</span>
                                <span className="text-sm tracking-wide" style={{ color: CYAN }}>Full Stack Web Development</span>
                            </div>
                            <div className="flex flex-row gap-4 items-start border-b border-gray-900 pb-4">
                                <span className="text-gray-600 text-xs tracking-[2px] uppercase w-48 shrink-0">Currently into</span>
                                <span className="text-sm tracking-wide" style={{ color: CYAN }}>React, Laravel & mobile dev</span>
                            </div>
                            <div className="flex flex-row gap-4 items-start border-b border-gray-900 pb-4">
                                <span className="text-gray-600 text-xs tracking-[2px] uppercase w-48 shrink-0">When not coding</span>
                                <span className="text-sm tracking-wide" style={{ color: CYAN }}>Gaming, music, overthinking</span>
                            </div>
                            <div className="flex flex-row gap-4 items-start border-b border-gray-900 pb-4">
                                <span className="text-gray-600 text-xs tracking-[2px] uppercase w-48 shrink-0">Status</span>
                                <span className="text-sm tracking-wide flex items-center gap-2">
                                    <span style={{
                                        display: 'inline-block',
                                        width: 8,
                                        height: 8,
                                        borderRadius: '50%',
                                        background: '#22c55e',
                                        boxShadow: '0 0 6px #22c55e'
                                    }} />
                                    <span style={{ color: '#22c55e' }}>Available for work</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                <Divider />

                {/* PROJECTS */}
                <section id="projects" className="min-h-screen flex flex-col px-16 py-24">
                    <span className={lgTag}>{" <h2> "}</span>
                    <GigglyText text="Projects." className="font-thisappeal text-[70px] xl:text-[50px] mb-4" />
                    <span className={`${lgTag} self-end mb-12`}>{" </h2> "}</span>
                    <p className="text-gray-600 text-sm tracking-[2px] uppercase mb-12">things i actually built</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        <div
                            className="flex flex-col gap-4 p-6 transition-all duration-300 cursor-pointer"
                            style={{
                                border: `1px solid ${hoveredProject === 0 ? CYAN + '44' : '#ffffff0a'}`,
                                borderLeft: `2px solid ${ACCENT}`,
                                background: hoveredProject === 0 ? `${CYAN}05` : 'transparent',
                            }}
                            onMouseEnter={() => setHoveredProject(0)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <div className="flex flex-row justify-between items-start">
                                <span className="text-white font-poppins tracking-[2px] uppercase text-sm">ByteChat</span>
                                <a href="#" style={{ color: CYAN }} className="text-xs tracking-widest uppercase hover:underline">view →</a>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed">Real-time chat app with rooms and private messaging. One of the first projects where things actually felt alive on screen.</p>
                            <div className="flex flex-row flex-wrap gap-2 mt-auto pt-2">
                                <span className="text-xs tracking-widest px-3 py-1" style={{ border: `1px solid ${CYAN}33`, color: CYAN, opacity: 0.7 }}>Node.js</span>
                                <span className="text-xs tracking-widest px-3 py-1" style={{ border: `1px solid ${CYAN}33`, color: CYAN, opacity: 0.7 }}>Express</span>
                                <span className="text-xs tracking-widest px-3 py-1" style={{ border: `1px solid ${CYAN}33`, color: CYAN, opacity: 0.7 }}>MySQL</span>
                            </div>
                        </div>

                        <div
                            className="flex flex-col gap-4 p-6 transition-all duration-300 cursor-pointer"
                            style={{
                                border: `1px solid ${hoveredProject === 1 ? CYAN + '44' : '#ffffff0a'}`,
                                borderLeft: `2px solid ${ACCENT}`,
                                background: hoveredProject === 1 ? `${CYAN}05` : 'transparent',
                            }}
                            onMouseEnter={() => setHoveredProject(1)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <div className="flex flex-row justify-between items-start">
                                <span className="text-white font-poppins tracking-[2px] uppercase text-sm">ShopEasy</span>
                                <a href="#" style={{ color: CYAN }} className="text-xs tracking-widest uppercase hover:underline">view →</a>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed">E-commerce web app with product listings, cart, and order management. Built with Laravel on the backend and vanilla JS on the front.</p>
                            <div className="flex flex-row flex-wrap gap-2 mt-auto pt-2">
                                <span className="text-xs tracking-widest px-3 py-1" style={{ border: `1px solid ${CYAN}33`, color: CYAN, opacity: 0.7 }}>Laravel</span>
                                <span className="text-xs tracking-widest px-3 py-1" style={{ border: `1px solid ${CYAN}33`, color: CYAN, opacity: 0.7 }}>PHP</span>
                                <span className="text-xs tracking-widest px-3 py-1" style={{ border: `1px solid ${CYAN}33`, color: CYAN, opacity: 0.7 }}>MySQL</span>
                                <span className="text-xs tracking-widest px-3 py-1" style={{ border: `1px solid ${CYAN}33`, color: CYAN, opacity: 0.7 }}>JS</span>
                            </div>
                        </div>

                        <div
                            className="flex flex-col gap-4 p-6 transition-all duration-300 cursor-pointer"
                            style={{
                                border: `1px solid ${hoveredProject === 2 ? CYAN + '44' : '#ffffff0a'}`,
                                borderLeft: `2px solid ${ACCENT}`,
                                background: hoveredProject === 2 ? `${CYAN}05` : 'transparent',
                            }}
                            onMouseEnter={() => setHoveredProject(2)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <div className="flex flex-row justify-between items-start">
                                <span className="text-white font-poppins tracking-[2px] uppercase text-sm">TaskFlow</span>
                                <a href="#" style={{ color: CYAN }} className="text-xs tracking-widest uppercase hover:underline">view →</a>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed">Simple project management app. Create boards, assign tasks, track status. Built to learn React properly — and it worked.</p>
                            <div className="flex flex-row flex-wrap gap-2 mt-auto pt-2">
                                <span className="text-xs tracking-widest px-3 py-1" style={{ border: `1px solid ${CYAN}33`, color: CYAN, opacity: 0.7 }}>React</span>
                                <span className="text-xs tracking-widest px-3 py-1" style={{ border: `1px solid ${CYAN}33`, color: CYAN, opacity: 0.7 }}>Supabase</span>
                                <span className="text-xs tracking-widest px-3 py-1" style={{ border: `1px solid ${CYAN}33`, color: CYAN, opacity: 0.7 }}>CSS</span>
                            </div>
                        </div>

                        <div
                            className="flex flex-col gap-4 p-6 transition-all duration-300 cursor-pointer"
                            style={{
                                border: `1px solid ${hoveredProject === 3 ? CYAN + '44' : '#ffffff0a'}`,
                                borderLeft: `2px solid ${ACCENT}`,
                                background: hoveredProject === 3 ? `${CYAN}05` : 'transparent',
                            }}
                            onMouseEnter={() => setHoveredProject(3)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <div className="flex flex-row justify-between items-start">
                                <span className="text-white font-poppins tracking-[2px] uppercase text-sm">NativeTrack</span>
                                <a href="#" style={{ color: CYAN }} className="text-xs tracking-widest uppercase hover:underline">view →</a>
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed">Mobile habit tracker built with React Native. My first dive into mobile dev — screens, navigation, local storage, the works.</p>
                            <div className="flex flex-row flex-wrap gap-2 mt-auto pt-2">
                                <span className="text-xs tracking-widest px-3 py-1" style={{ border: `1px solid ${CYAN}33`, color: CYAN, opacity: 0.7 }}>React Native</span>
                                <span className="text-xs tracking-widest px-3 py-1" style={{ border: `1px solid ${CYAN}33`, color: CYAN, opacity: 0.7 }}>Supabase</span>
                            </div>
                        </div>

                    </div>
                </section>

                <Divider />

                {/* STACK */}
                <section id="stack" className="min-h-screen flex flex-col px-16 py-24">
                    <GigglyText text="Tech Stack." className="font-thisappeal text-[70px] xl:text-[50px] mb-4" />
                    <p className="text-gray-600 text-sm tracking-[2px] uppercase mb-16">what i actually use</p>

                    <div className="flex flex-col gap-12">

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4 mb-2">
                                <span className="text-gray-600 text-xs tracking-[4px] uppercase">Frontend</span>
                                <div style={{ flex: 1, height: '1px', background: '#ffffff0a' }} />
                            </div>
                            <div className="flex flex-row flex-wrap gap-3">
                                <span className="px-4 py-2 text-sm tracking-widest" style={{ border: `1px solid ${CYAN}22`, color: CYAN, background: `${CYAN}08` }}>HTML</span>
                                <span className="px-4 py-2 text-sm tracking-widest" style={{ border: `1px solid ${CYAN}22`, color: CYAN, background: `${CYAN}08` }}>CSS</span>
                                <span className="px-4 py-2 text-sm tracking-widest" style={{ border: `1px solid ${CYAN}22`, color: CYAN, background: `${CYAN}08` }}>JavaScript</span>
                                <span className="px-4 py-2 text-sm tracking-widest" style={{ border: `1px solid ${CYAN}22`, color: CYAN, background: `${CYAN}08` }}>React</span>
                                <span className="px-4 py-2 text-sm tracking-widest" style={{ border: `1px solid ${CYAN}22`, color: CYAN, background: `${CYAN}08` }}>React Native</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4 mb-2">
                                <span className="text-gray-600 text-xs tracking-[4px] uppercase">Backend</span>
                                <div style={{ flex: 1, height: '1px', background: '#ffffff0a' }} />
                            </div>
                            <div className="flex flex-row flex-wrap gap-3">
                                <span className="px-4 py-2 text-sm tracking-widest" style={{ border: `1px solid ${CYAN}22`, color: CYAN, background: `${CYAN}08` }}>Node.js</span>
                                <span className="px-4 py-2 text-sm tracking-widest" style={{ border: `1px solid ${CYAN}22`, color: CYAN, background: `${CYAN}08` }}>Express</span>
                                <span className="px-4 py-2 text-sm tracking-widest" style={{ border: `1px solid ${CYAN}22`, color: CYAN, background: `${CYAN}08` }}>PHP</span>
                                <span className="px-4 py-2 text-sm tracking-widest" style={{ border: `1px solid ${CYAN}22`, color: CYAN, background: `${CYAN}08` }}>Laravel</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4 mb-2">
                                <span className="text-gray-600 text-xs tracking-[4px] uppercase">Database</span>
                                <div style={{ flex: 1, height: '1px', background: '#ffffff0a' }} />
                            </div>
                            <div className="flex flex-row flex-wrap gap-3">
                                <span className="px-4 py-2 text-sm tracking-widest" style={{ border: `1px solid ${CYAN}22`, color: CYAN, background: `${CYAN}08` }}>MySQL</span>
                                <span className="px-4 py-2 text-sm tracking-widest" style={{ border: `1px solid ${CYAN}22`, color: CYAN, background: `${CYAN}08` }}>Supabase</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4 mb-2">
                                <span className="text-gray-600 text-xs tracking-[4px] uppercase">Tools</span>
                                <div style={{ flex: 1, height: '1px', background: '#ffffff0a' }} />
                            </div>
                            <div className="flex flex-row flex-wrap gap-3">
                                <span className="px-4 py-2 text-sm tracking-widest" style={{ border: `1px solid ${CYAN}22`, color: CYAN, background: `${CYAN}08` }}>Git</span>
                                <span className="px-4 py-2 text-sm tracking-widest" style={{ border: `1px solid ${CYAN}22`, color: CYAN, background: `${CYAN}08` }}>GitHub</span>
                                <span className="px-4 py-2 text-sm tracking-widest" style={{ border: `1px solid ${CYAN}22`, color: CYAN, background: `${CYAN}08` }}>VS Code</span>
                                <span className="px-4 py-2 text-sm tracking-widest" style={{ border: `1px solid ${CYAN}22`, color: CYAN, background: `${CYAN}08` }}>Figma</span>
                                <span className="px-4 py-2 text-sm tracking-widest" style={{ border: `1px solid ${CYAN}22`, color: CYAN, background: `${CYAN}08` }}>Postman</span>
                            </div>
                        </div>

                    </div>
                </section>

                <Divider />

                {/* CONTACT */}
                <section id="contact" className="min-h-screen flex flex-col px-16 py-24 justify-center">
                    <GigglyText text="Contact." className="font-thisappeal text-[70px] xl:text-[50px] mb-4" />
                    <p className="text-gray-600 text-sm tracking-[2px] uppercase mb-16">let's build something</p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div className="flex flex-col gap-6">
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Whether you want to collaborate, have an opportunity, or just want to talk code — my inbox is open. I reply.
                            </p>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Based in the Philippines. Open to remote work and online collabs anywhere.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            <a href="mailto:eenard@email.com" className="flex flex-row gap-6 items-center group p-4 transition-all duration-200"
                                style={{ border: `1px solid #ffffff0a`, borderLeft: `2px solid ${ACCENT}` }}
                            >
                                <div className="flex flex-col gap-1">
                                    <span className="text-gray-600 text-xs tracking-[4px] uppercase">Email</span>
                                    <span className="text-sm tracking-wide group-hover:underline transition-all" style={{ color: CYAN }}>eenard@email.com</span>
                                </div>
                            </a>
                            <a href="#" className="flex flex-row gap-6 items-center group p-4 transition-all duration-200"
                                style={{ border: `1px solid #ffffff0a`, borderLeft: `2px solid ${ACCENT}` }}
                            >
                                <div className="flex flex-col gap-1">
                                    <span className="text-gray-600 text-xs tracking-[4px] uppercase">GitHub</span>
                                    <span className="text-sm tracking-wide group-hover:underline transition-all" style={{ color: CYAN }}>github.com/eenard</span>
                                </div>
                            </a>
                            <a href="#" className="flex flex-row gap-6 items-center group p-4 transition-all duration-200"
                                style={{ border: `1px solid #ffffff0a`, borderLeft: `2px solid ${ACCENT}` }}
                            >
                                <div className="flex flex-col gap-1">
                                    <span className="text-gray-600 text-xs tracking-[4px] uppercase">LinkedIn</span>
                                    <span className="text-sm tracking-wide group-hover:underline transition-all" style={{ color: CYAN }}>linkedin.com/in/eenard</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

                <div className="flex flex-col gap-2 mt-auto pt-6 pl-8 pb-8">
                    <span className={`${lgTag} pl-0`}>{" </> "}</span>
                    <span className={`${lgTag} pl-0`}>{" )} "}</span>
                    <span className={`${lgTag} pt-12`}>{"export default app;"}</span>
                </div>
            </div>
        </div>
    );
}