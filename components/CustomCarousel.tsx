import {useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import lady from "@/public/lady.jpg"
import man1 from "@/public/man1.jpg"
import man2 from "@/public/man2.jpg"

const CustomCarousel = () => {
    const images = [
        lady, man1, man2
    ]
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    useEffect(() => {
        const id = setInterval(() =>
                setCurrentIndex((oldCount) => (oldCount + 1) % images.length),
            5000);

        return () => {
            clearInterval(id);
        };
    }, []);

    const slideVariants = {
        hiddenRight: {
            x: "100%",
            opacity: 0,
        },
        hiddenLeft: {
            x: "-100%",
            opacity: 0,
        },
        visible: {
            x: "0",
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: {
                duration: 0.5,
            },
        },
    };
    const slidersVariants = {
        hover: {
            scale: 1.2,
            backgroundColor: "#ff00008e",
        },
    };
    const dotsVariants = {
        initial: {
            y: 0,
        },
        animate: {
            y: -10,
            scale: 1.2,
            transition: {type: "spring", stiffness: 1000, damping: "10"},
        },
        hover: {
            scale: 1.1,
            transition: {duration: 0.2},
        },
    };
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
    };
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
        );
    };
    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carousel w-full">
            <div className="carousel-images">
                <AnimatePresence>
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex].src}
                        // src={images[currentIndex]}
                        initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                        animate="visible"
                        exit="exit"
                        width="1000px"
                        height="1000px"
                        variants={slideVariants}
                    />
                </AnimatePresence>

            </div>
        </div>
    )
}

export default CustomCarousel