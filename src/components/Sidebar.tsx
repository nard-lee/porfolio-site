import Favicon from '../../public/favicon.png';
import { House, User, FolderOpen, Zap, Mail } from 'lucide-react';

const CYAN = '#00fff0';

const navItems = [
    { icon: House, label: "Home", id: "home" },
    { icon: User, label: "About", id: "about" },
    { icon: FolderOpen, label: "Projects", id: "projects" },
    { icon: Zap, label: "Skill", id: "skill" },
    { icon: Mail, label: "Contact", id: "contact" },
];

interface SidebarProps {
    active: string;
    expanded: boolean;
    setExpanded: (v: boolean) => void;
    scrollTo: (id: string) => void;
}

export default function Sidebar({ active, expanded, setExpanded, scrollTo }: SidebarProps) {
    return (
        <div
            className={`fixed top-0 left-0 h-full z-50 flex flex-col justify-between bg-black transition-all duration-300 ease-in-out lg:w-60 ${expanded ? 'w-60' : 'w-20'}`}
            style={{ borderRight: `1px solid ${CYAN}22` }}
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)}
        >
            {/* Logo */}
            <div className="flex flex-col items-center justify-center py-8">
                <span className="inline-block transform rotate-24">
                    <img src={Favicon} width={190} alt="Favicon" />
                </span>
                <span
                    className={`font-Poppins font-semibold mt-3 text-md whitespace-nowrap overflow-hidden transition-all duration-300 lg:opacity-100 lg:max-h-6 ${expanded ? 'opacity-100 max-h-6' : 'opacity-0 max-h-0'}`}
                    style={{ color: CYAN }}
                >
                    Leenard Galad
                </span>
            </div>

            {/* Nav */}
            <nav className="flex flex-col gap-2 flex-1 justify-center px-3">
                {navItems.map(({ icon: Icon, label, id }) => (
                    <button
                        key={id}
                        onClick={() => scrollTo(id)}
                        className="flex items-center gap-4 px-4 py-3.5 rounded-xl w-full text-left transition-all duration-150"
                        style={
                            active === id
                                ? { background: `${CYAN}18`, color: CYAN }
                                : { color: '#6b7280' }
                        }
                        onMouseEnter={e => {
                            if (active !== id) {
                                (e.currentTarget as HTMLButtonElement).style.color = CYAN;
                                (e.currentTarget as HTMLButtonElement).style.background = `${CYAN}10`;
                            }
                        }}
                        onMouseLeave={e => {
                            if (active !== id) {
                                (e.currentTarget as HTMLButtonElement).style.color = '#6b7280';
                                (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                            }
                        }}
                    >
                        <Icon size={22} className="shrink-0" />
                        <span className={`text-[15px] font-semibold whitespace-nowrap overflow-hidden transition-all duration-300 lg:opacity-100 lg:w-auto ${expanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`}>
                            {label}
                        </span>
                    </button>
                ))}
            </nav>

            {/* Footer */}
            <div className="px-3 pb-5 pt-4" style={{ borderTop: `1px solid ${CYAN}22` }}>
                <div className="flex items-center gap-3 px-4 py-3">
                    <div className="relative shrink-0">
                        <img src={Favicon} alt="avatar" width={32} className="rounded-full" />
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-black" style={{ background: CYAN }} />
                    </div>
                    <div className={`flex flex-col overflow-hidden transition-all duration-300 lg:opacity-100 lg:w-auto ${expanded ? 'opacity-100 w-auto' : 'opacity-0 w-0'}`}>
                        <span className="text-[14px] font-semibold text-white whitespace-nowrap">Eenard</span>
                        <span className="text-[12px] whitespace-nowrap" style={{ color: CYAN }}>Available for work</span>
                    </div>
                </div>
            </div>
        </div>
    );
}