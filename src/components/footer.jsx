import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; 

const Footer = () => {
    return (
        <footer id="contact" className="text-white bg-stone-900 p-6 rounded shadow-2xl shadow-yellow-300 mt-10">
            <div className="text-center mb-6">
                <p className="text-3xl font-bold">Contact Me</p>
                <div className="flex justify-center mt-4 space-x-4">
                    <a href="https://github.com/ip3ula" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-yellow-300">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/paula-emad-b565b4344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-yellow-300">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="mailto:ip3ula@hotmail.com" className="text-3xl hover:text-yellow-300">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </div>
            </div>

            <div className="text-center mt-6 border-t border-yellow-300 pt-4">
                <p>&copy; {new Date().getFullYear()} Paula. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
