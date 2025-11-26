import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "./NavLink";
import { HelpcheckLogo } from "./HelpcheckLogo";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        { name: "Ablauf", path: "/ablauf" },
        { name: "Über uns", path: "/ueber-uns" },
        { name: "Erfahrungen", path: "/erfahrungen" },
        { name: "Häufige Fragen", path: "/faq" },
        { name: "Kontakt", path: "/kontakt" },
    ];

    return (
        <nav className="w-full bg-white py-4 md:py-6 relative z-50">
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-1 group">
                    <HelpcheckLogo />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className="text-sm font-medium text-gray-600 hover:text-brand-text transition-colors relative py-1"
                            activeClassName="text-brand-text font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-brand-text"
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-600"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col p-4 gap-4 animate-in slide-in-from-top-5">
                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className="text-base font-medium text-gray-600 hover:text-brand-text py-2"
                            activeClassName="text-brand-text font-semibold"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
