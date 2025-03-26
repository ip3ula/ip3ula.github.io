import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <div id="home" className="font-bold p-6 bg-stone-900 min-h-screen flex flex-col justify-center items-center text-center">
            <p className="text-yellow-300 font-extrabold text-5xl md:text-6xl lg:text-7xl font-serif leading-tight">
                Hi, I'm Paula
            </p>
            <p className="text-gray-200 text-xl md:text-2xl lg:text-3xl max-w-2xl mt-5">
                A passionate full-stack web developer who loves solving problems with code.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-5 mt-10">
                <button
                    onClick={() => window.location.href = 'mailto:ip3ula@hotmail.com'}
                    className="bg-yellow-300 hover:bg-yellow-400 py-3 px-6 text-lg font-bold rounded-lg shadow-md transition-all"
                >
                    Send Me A Mail
                </button>
                <div className="flex items-center gap-3 text-white text-lg font-bold cursor-pointer hover:underline">
                    <button onClick={() => window.open('https://github.com/ip3ula', '_blank')}>Go To Github</button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </div>
            </div>

            <div className="mt-20 text-5xl text-yellow-300">
                <FontAwesomeIcon icon={faTerminal} />
            </div>
        </div>
    );
};

export default Home;
