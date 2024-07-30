import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contatos = () => {
    return <footer> 
    <div>
        <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="my-10 text-center text-4xl">Contatos</motion.h2>
        <div className="text-center tracking-tighter">
            <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="my-4">{CONTACT.address}</motion.p>
            <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="my-4">{CONTACT.phoneNo}</motion.p>
            <a href="#" className="border-b">{CONTACT.email}</a>
        </div>
        <div className="m-6 flex items-center justify-center space-x-8 text-4xl">
                <a href="https://www.linkedin.com/in/devlucasavila/" target="_blank" className="hover:text-blue-500"><FaLinkedin /></a>
                <a href="https://github.com/LcAvila" target="_blank" className="hover:text-gray-50"><FaGithub /></a>
                <a href="https://www.instagram.com/luc.avila_?igsh=cDh1YWRpOTcxdjk5&utm_source=qr" target="_blank" className="hover:text-pink-800"><FaInstagram /></a>
            </div>
    </div>
    
            <p className="text-center bg-gradient-to-r from-pink-300 via-slate-500
                    to-purple-500 bg-clip-text text-1xl tracking-tight text-transparent">
                        Direitos autorais © 2024 Lucas Ávila</p>
    </footer>
};

export default Contatos;
