import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
    const [visible, setVisible] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setShowNav(true);
            } else if (window.scrollY > lastScrollY) {
                setShowNav(false);
                setVisible(false);
            } else {
                setShowNav(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <>
            {/* Navbar for Large Screens */}
            <div className="hidden lg:flex fixed top-0 w-full bg-stone-950 text-white shadow-md py-4 px-10 justify-between items-center z-10">
                <h1 className="text-2xl font-bold">Paula Emad</h1>
                <div className="flex gap-8 text-lg">
                    <a href="#home" className="hover:text-yellow-300 transition">Home</a>
                    <a href="#skills" className="hover:text-yellow-300 transition">Skills</a>
                    <a href="#about" className="hover:text-yellow-300 transition">About</a>
                    <a href="#projects" className="hover:text-yellow-300 transition">Projects</a>
                    <a href="#certificates" className="hover:text-yellow-300 transition">Certificates</a>
                    <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
                </div>
            </div>

            {/* Mobile Navbar */}
            <div
                className={`z-10 lg:hidden bg-white flex justify-between items-center px-6 min-h-[60px] text-3xl font-bold fixed top-0 w-screen transition-transform transform ${
                    showNav ? "translate-y-0" : "-translate-y-full"
                } shadow-md`}
            >
                <h1>Paula Emad</h1>
                <button
                    onClick={() => setVisible(!visible)}
                    className="bg-gray-300 rounded size-10"
                >
                    <FontAwesomeIcon icon={visible ? faXmark : faBars} />
                </button>
            </div>

            {/* Mobile Menu */}
            {visible && (
                <div className="lg:hidden fixed top-15 left-0 w-full bg-white shadow-md p-5 z-1">
                    <nav className="flex flex-col gap-4 text-lg font-semibold">
                        <a href="#home" className="hover:text-yellow-300 transition">Home</a>
                        <a href="#skills" className="hover:text-yellow-300 transition">Skills</a>
                        <a href="#about" className="hover:text-yellow-300 transition">About</a>
                        <a href="#projects" className="hover:text-yellow-300 transition">Projects</a>
                        <a href="#certificates" className="hover:text-yellow-300 transition">Certificates</a>
                        <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
                    </nav>
                </div>
            )}
        </>
    );
};

export default Nav;
