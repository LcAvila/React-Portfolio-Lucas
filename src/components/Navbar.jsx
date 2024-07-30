import logo from "../assets/LucasAvilaLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (

        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-10 h-10" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/devlucasavila/" target="_blank" className="hover:text-blue-500"><FaLinkedin /></a>
                <a href="https://github.com/LcAvila" target="_blank" className="hover:text-gray-50"><FaGithub /></a>
                <a href="https://www.instagram.com/luc.avila_?igsh=cDh1YWRpOTcxdjk5&utm_source=qr" target="_blank" className="hover:text-pink-800"><FaInstagram /></a>
            </div>
        </nav>
    );
};

export default Navbar;
