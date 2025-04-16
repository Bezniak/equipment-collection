import {useEffect, useState} from "react";
import {ArrowUp} from "lucide-react";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-4 right-3 md:bottom-10 md:right-10 z-50 backdrop-blur-md bg-orange-500 text-white shadow-2xl rounded-full p-3 md:p-5 border border-gray-300 transition-all duration-300 hover:scale-110 hover:bg-white hover:text-orange-500 ${
                isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll to top"
        >
            <ArrowUp className="w-7 h-7 transition-transform duration-300 group-hover:-translate-y-1"/>
        </button>
    );
};

export default ScrollToTopButton;
