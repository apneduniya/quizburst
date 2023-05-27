import { motion } from "framer-motion";
import { Tilt_Neon, Varela_Round } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";


const varelaRound = Varela_Round({
    weight: '400',
    subsets: ['latin'],
});

const tiltNeon = Tilt_Neon({
    weight: '400',
    subsets: [],
});

const divVariants = {
    hidden: {
        transition: {
            staggerChildren: .2, // delay between animating children
            staggerDirection: -1, // animating children in reverse order
        },
    },
    visible: {
        transition: {
            staggerChildren: .2,
            staggerDirection: 1, // animating children in normal order,
            type: "spring"
        },
    },
};

const childVariants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .22, // duration of the animation
            ease: "easeOut", // easing function
        },
    }
};


const Card = (props) => {
    return (
        <>
            <Link href={props.buttonLink} style={{ textDecoration: "none", margin: 0, padding: 0 }} scroll={false}>
                <div className="card-container">
                    <h2 className={tiltNeon.className} >{props.text}</h2>
                </div>
            </Link>

        </>
    )
}

const Box = (props) => {
    return (
        <>
            <div className="question-box-container" {...props}>
                <h3 className={varelaRound.className}>{props.text}</h3>
            </div>
        </>
    )
}

export default Card;
export { Box };
