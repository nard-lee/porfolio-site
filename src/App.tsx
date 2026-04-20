import { useEffect, useRef, useLayoutEffect, type JSX } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  title: string;
  type: string;
  year: string;
  stack: string;
}

interface Skill {
  name: string;
  index: number;
}

const App = (): JSX.Element => {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const workRef = useRef<HTMLElement>(null);
  const localTimeRef = useRef<HTMLSpanElement>(null);

  const projects: Project[] = [
    { id: "01", title: "Task Queue System", type: "Backend", year: "25", stack: "Go / Redis" },
    { id: "02", title: "Collab Editor", type: "Fullstack", year: "24", stack: "Node / React" },
    { id: "03", title: "HTTP Server", type: "Systems", year: "24", stack: "C" },
    { id: "04", title: "ML Pipeline", type: "DevTool", year: "24", stack: "Python / AWS" }
  ];

  const skills: Skill[] = [
    { name: "TypeScript & React", index: 1 },
    { name: "Node.js & Go", index: 2 },
    { name: "PostgreSQL & Redis", index: 3 },
    { name: "Docker & AWS", index: 4 },
    { name: "C & Systems", index: 5 }
  ];

  useEffect((): (() => void) => {
    const updateTime = (): void => {
      if (localTimeRef.current) {
        localTimeRef.current.textContent = new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          timeZoneName: 'short'
        }).toLowerCase();
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useLayoutEffect((): (() => void) => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-line', 
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out", delay: 0.2 }
      );

      gsap.fromTo('.fade-up',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: aboutRef.current, start: "top 80%" }
        }
      );

      gsap.fromTo('.project-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: workRef.current, start: "top 75%" }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-between items-start p-6 mix-blend-difference text-white">
        <div>
          <span className="text-xs tracking-widest uppercase opacity-60 block">CS Student</span>
          <span className="text-sm font-bold">Leenard Galad</span>
        </div>
        <div className="text-right">
          <span ref={localTimeRef} className="text-xs tracking-widest uppercase opacity-60 block">--:--</span>
          <span className="text-xs">Fullstack Dev</span>
        </div>
      </header>

      {/* Nav */}
      <nav className="fixed bottom-8 left-6 z-40 hidden md:block text-xs space-y-2">
        {['home', 'about', 'work', 'contact'].map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item)}
            className="block text-neutral-500 hover:text-neutral-900 transition-colors uppercase tracking-widest"
          >
            [{item}]
          </button>
        ))}
      </nav>

      {/* Hero */}
      <section id="home" ref={heroRef} className="min-h-screen flex flex-col justify-center px-6 md:px-16 pt-20">
        <div className="max-w-4xl">
          <p className="hero-line text-xs tracking-[0.2em] uppercase text-neutral-500 mb-6">
            Fullstack Developer / CS Student
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-8">
            <span className="hero-line block">Leenard</span>
            <span className="hero-line block text-neutral-400">Galad</span>
            <span className="hero-line block text-2xl md:text-3xl font-normal mt-4">Fullstack / Systems</span>
          </h1>

          <p className="hero-line max-w-xl text-neutral-600 leading-relaxed border-l-2 border-neutral-900 pl-4">
            I build things across the stack — from React frontends to Go microservices. 
            Currently studying CS and looking for Summer 2025 internships.
          </p>
        </div>
      </section>

      {/* About */}
      <section id="about" ref={aboutRef} className="py-32 px-6 md:px-16 bg-neutral-200/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="fade-up">
            <span className="text-xs tracking-widest uppercase text-neutral-500 block mb-4">[01] About</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-none mb-8">
              Student.<br/>Developer.<br/><span className="text-neutral-400">Builder.</span>
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              I'm a CS student who learns by shipping. I've built APIs that handle real load, 
              React apps that need to feel fast, and systems that need to stay up.
            </p>
            <p className="text-neutral-500">
              Looking for opportunities to work on hard problems with good people.
            </p>
          </div>

          <div className="fade-up">
            <h3 className="text-xs tracking-widest uppercase text-neutral-500 mb-6">Stack</h3>
            <ul className="space-y-3">
              {skills.map((skill) => (
                <li key={skill.index} className="flex items-baseline gap-3 text-lg font-medium">
                  <span className="text-neutral-400 text-sm">0{skill.index}</span>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" ref={workRef} className="py-32 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <span className="text-xs tracking-widest uppercase text-neutral-500">[02] Work</span>
            <h2 className="text-4xl md:text-5xl font-bold">Selected Projects</h2>
          </div>

          <div className="space-y-1 border-t border-neutral-300">
            {projects.map((project) => (
              <div
                key={project.id}
                className="project-card group border-b border-neutral-300 py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/50 transition-colors px-4 -mx-4"
              >
                <div className="flex items-baseline gap-6 md:gap-12">
                  <span className="text-xs text-neutral-400 font-mono">{project.id}</span>
                  <h3 className="text-2xl md:text-4xl font-bold tracking-tight group-hover:translate-x-2 transition-transform">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-8 text-sm text-neutral-500">
                  <span className="uppercase tracking-wider">{project.type}</span>
                  <span className="font-mono text-xs">{project.stack}</span>
                  <span>'{project.year}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="#" className="text-sm uppercase tracking-widest border border-neutral-900 px-8 py-4 hover:bg-neutral-900 hover:text-white transition-all">
              View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 md:px-16 bg-neutral-900 text-[#f4f1ea]">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs tracking-widest uppercase text-neutral-500 block mb-4">[03] Contact</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-12">Let's talk</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <span className="text-xs text-neutral-500 block mb-2">Email</span>
                <a href="mailto:leenard.galad@student.edu" className="text-xl hover:text-white transition-colors underline decoration-neutral-600 hover:decoration-white">
                  leenard.galad@student.edu
                </a>
              </div>
              <div className="flex gap-6 text-sm">
                <a href="#" className="hover:text-white transition-colors">GitHub</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Resume</a>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-transparent border border-neutral-700 p-4 text-white placeholder-neutral-600 focus:border-white focus:outline-none transition-colors"
              />
              <textarea
                rows={4}
                placeholder="What's up?"
                className="w-full bg-transparent border border-neutral-700 p-4 text-white placeholder-neutral-600 focus:border-white focus:outline-none transition-colors resize-none"
              />
              <button className="w-full bg-[#f4f1ea] text-neutral-900 py-4 font-semibold hover:bg-white transition-colors">
                Send message →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-16 border-t border-neutral-800 bg-neutral-900 text-[#f4f1ea] text-xs flex justify-between items-center">
        <span>© 2025 Leenard Galad</span>
        <span className="text-neutral-600">Built with React + Tailwind</span>
      </footer>
    </div>
  );
};

export default App;