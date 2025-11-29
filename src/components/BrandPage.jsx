import React, { useState, useEffect } from "react";
import "./BrandPage.css";
import logo from "../images/logo-f (1).png"; 
import { FaInstagram, FaFacebookF, FaTiktok, FaWhatsapp, FaGlobe } from "react-icons/fa";

export default function BrandPage() {
    const words = ["Styrode"]; 
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(120);

    useEffect(() => {
        const currentWord = words[wordIndex];
        let typingSpeed = isDeleting ? speed / 2 : speed;

        const timeout = setTimeout(() => {
            setText(prev =>
                isDeleting
                    ? currentWord.substring(0, prev.length - 1)
                    : currentWord.substring(0, prev.length + 1)
            );

            if (!isDeleting && text === currentWord) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setWordIndex(prev => (prev + 1) % words.length);
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting]);

    return (
        <div className="brand-page">
            <div className="brand-box">

                <img className="brand-logo animate-item" src={logo} alt="logo" />

                <h1 className="brand-title animate-item">
                    Welcome to <span className="typing">{text}</span>
                </h1>

                <p className="brand-sub animate-item">Thanks for scanning — follow us:</p>

                <div className="social-links">

                    <a href="https://www.instagram.com/styrodebrand" target="_blank" rel="noreferrer" className="animate-item">
                        <FaInstagram className="icon" /> Instagram
                    </a>

                    <a href="https://www.facebook.com/share/1ACB2Jxn7D/" target="_blank" rel="noreferrer" className="animate-item">
                        <FaFacebookF className="icon" /> Facebook
                    </a>

                    <a href="https://www.tiktok.com/@styrode" target="_blank" rel="noreferrer" className="animate-item">
                        <FaTiktok className="icon" /> TikTok
                    </a>

                    <a href="https://wa.me/message/Q6DUVUXUI3JVO1" target="_blank" rel="noreferrer" className="animate-item">
                        <FaWhatsapp className="icon" /> WhatsApp
                    </a>

                    <a href="http://styrode.wuiltstore.com" target="_blank" rel="noreferrer" className="animate-item">
                        <FaGlobe className="icon" /> Website
                    </a>

                </div>

                <p className="small-note">© {new Date().getFullYear()} Styrode</p>
            </div>
        </div>
    );
}
