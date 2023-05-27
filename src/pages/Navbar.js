import Link from "next/link";
// import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { motion, useCycle, useScroll, useMotionValueEvent } from "framer-motion";
import { Quicksand } from "next/font/google";
import { Tilt_Neon } from "next/font/google";


const tiltNeon = Tilt_Neon({
    weight: '400',
    subsets: [],
});

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const Path = (props) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        // stroke="hsl(0, 0%, 18%)"
        stroke="#012970"
        strokeLinecap="round"
        {...props}
    />
);

const navVariants = {
    open: {
        opacity: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "25px",
        position: "absolute",
        top: "-16px",
        left: 0,
        width: "100%",
        height: "101vh",
        zIndex: 9998,
        backgroundColor: "white",
        transition: {
            opacity: { duration: 0.3 },
            staggerChildren: 0.07,
            delayChildren: 0.2,
            // type: 'spring'
        }
    },
    closed: {
        transition: {
            opacity: { duration: 0.3 },
            staggerChildren: 0.05,
            staggerDirection: -1,
            // type: 'spring'
        },
        opacity: 0,
        display: "none"
    }
};

// const colors = ["#fef6e4", "#f582ae", "#8bd3dd", "#b8c1ec", "#ff8906"];

const itemsVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

const MenuItem = ({ id, text, link, toggle }) => {
    // const style = { border: `3px solid ${colors[id]}` };
    return (
        <motion.li
            variants={itemsVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`${tiltNeon.className} nav-toggle-li`}
        >
            {/* <div className="navTextPlaceholder" style={style}> */}
            <Link href={link} scroll={false} className="nav-toggle-link" onClick={toggle}>
                <div className="nav-text-placeholder">
                    <span className={`${tiltNeon.className} nav-text`}>{text}</span>
                </div>
            </Link>
        </motion.li>
    );
};

const Items = [
    // { id: "0", text: "Home", link: "#home" },
    // { id: "1", text: "Services", link: "#services" },
    // { id: "2", text: "Projects", link: "#projects" },
    // { id: "4", text: "Contact", link: "#contact" },
    // { id: "3", text: "About", link: "#about" }
];

const quicksand = Quicksand({
    weight: '600',
    subsets: ['latin'],
});


const Navbar = (props) => {
    // const router = useRouter();

    const [isOpen, setIsOpen] = useCycle(false, true);
    const [isMobile, setIsMobile] = useState(false);
    const [latestScroll, setLatestScroll] = useState(null);

    const { scrollY } = useScroll();

    const MenuToggle = ({ toggle }) => (
        <button onClick={toggle} className="nav-toggle-button" style={{ backgroundColor: "transparent", border: "0 solid transparent" }}>
            {/* <svg width="23" height="23" viewBox="0 0 23 23" style={{ color: "#012970" }}>
                <Path
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" }
                    }}
                />
                <Path
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 }
                    }}
                    transition={{ duration: 0.1 }}
                />
                <Path
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" }
                    }}
                />
            </svg> */}
            <svg
                viewBox="0 0 100 100"
                height="50"
                width="50"
                style={isOpen? { transform: "rotate(45deg)" }: {}}
            >
                <path
                    strokeLinecap="round"
                    style={isOpen ? { strokeWidth: 4, fill: "none", transition: "stroke-dasharray 400ms, stroke-dashoffset 400ms", stroke: "#012970", strokeDasharray: "25 160", strokeDashoffset: -64 } : { strokeWidth: 4, fill: "none", transition: "stroke-dasharray 400ms, stroke-dashoffset 400ms", stroke: "#012970", strokeDasharray: "25 160" }}
                    d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
                />
                <path
                    strokeLinecap="round"
                    style={isOpen ? { strokeWidth: 4, fill: "none", transition: "stroke-dasharray 400ms, stroke-dashoffset 400ms", stroke: "#012970", strokeDasharray: "60 142", transformOrigin: "50%", transition: "transform 400ms", transform: "rotate(90deg)" } : { strokeWidth: 4, fill: "none", transition: "stroke-dasharray 400ms, stroke-dashoffset 400ms", stroke: "#012970", strokeDasharray: "60 142", transformOrigin: "50%", transition: "transform 400ms" }}
                    d="m 30,50 h 40"
                />
                <path
                    strokeLinecap="round"
                    style={isOpen ? { strokeWidth: 4, fill: "none", transition: "stroke-dasharray 400ms, stroke-dashoffset 400ms", stroke: "#012970", strokeDasharray: "25 85", transformOrigin: "50%", strokeDashoffset: -64 } : { strokeWidth: 4, fill: "none", transition: "stroke-dasharray 400ms, stroke-dashoffset 400ms", stroke: "#012970", strokeDasharray: "25 85", transformOrigin: "50%" }}
                    d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
                />
            </svg>
        </button>
    );

    const Navigation = () => (
        // <motion.ul variants={navVariants} className={isOpen? "navToggleUl": "navToggleUlRemove"}>
        <motion.ul
            style={{ display: "flex" }}
            variants={navVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
        >
            {Items.map((item) => (
                <MenuItem id={item.id} key={item.id} text={item.text} link={item.link} toggle={() => setIsOpen()} />
            ))}
            <a href="https://forms.gle/LdNrQWjWkxVznMey7" target="_blank" style={{ textDecoration: "none", margin: 0, padding: 0 }}>

                <motion.button
                    className={`${tiltNeon.className}`}
                    style={{ color: "#ffffff", margin: 0, marginTop: 80, padding: "12px 44px", fontSize: "1.1em", backgroundColor: "#4154F1", border: "0 solid transparent", cursor: "pointer", borderRadius: 10, boxShadow: "0px 5px 30px rgba(65, 84, 241, 0.4)", userSelect: "none" }}
                    transition={{ duration: 2, type: "spring", stiffness: 120 }}
                    whileHover={{ y: -10, boxShadow: "0 7px 32px rgba(36, 56, 237, 0.4)" }}
                    whileTap={{ scale: .88 }}
                >
                    Contact Form 🙂
                </motion.button>
            </a>
        </motion.ul>
    );

    useMotionValueEvent(scrollY, "change", (latest) => {
        setLatestScroll(latest);
    })

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1200px)');
        setIsMobile(mediaQuery.matches);

        // const listener = () => setIsMobile(mediaQuery.matches);

    }, []);

    return (
        <>
            <nav
                className="navbar"
                style={
                    (latestScroll > 50 || props.isBackground === true) ? { backgroundColor: "rgb(255, 255, 255)", boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }
                        :
                        { }
                }
            >
                <div className="navbar-name-container">
                    <Link href="/" scroll={false} style={{ textDecoration: "none" }}><span className={quicksand.className}>QuizBurst</span></Link>
                </div>
                {isMobile ? (
                    <motion.nav
                        initial={false}
                        animate={isOpen ? "open" : "closed"}
                        custom="100%"
                    >
                        <motion.div className="navbar" variants={sidebar} />
                        <Navigation />
                        <MenuToggle toggle={() => setIsOpen()} />
                    </motion.nav>
                ) : (
                    ""
                )}
                <ul className={`${tiltNeon.className} nav-links-container`}>
                    {/* <li><Link href="#home" className="nav-links" scroll={false} >Home</Link></li> */}
                    {/* <li><Link href="#services" className="nav-links" scroll={false} >Services</Link></li> */}
                    {/* <li><Link href="#projects" className="nav-links" scroll={false}>Projects</Link></li> */}
                    {/* <li><Link href="#contact" className="nav-links" scroll={false} >Contact</Link></li> */}
                    {/* <li><Link href="#about" className="nav-links" scroll={false} >About</Link></li> */}
                    <div className='nav-indicator-container' style={{ userSelect: "none" }}>
                        <div className="nav-indicator"></div>
                    </div>
                    <a href={props.buttonLink} style={{ textDecoration: "none", margin: 0, padding: 0 }}>
                        <motion.button
                            className={`${tiltNeon.className} navbar-contact-button`}
                            style={{ color: "#ffffff", margin: "auto", marginTop: 7, marginLeft: 120, padding: "12px 44px", fontSize: "1.1em", backgroundColor: "#4154F1", border: "0 solid transparent", cursor: "pointer", borderRadius: 10, boxShadow: "0px 5px 30px rgba(65, 84, 241, 0.4)", userSelect: "none", width: "max-content" }}
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 2, type: "spring", stiffness: 120 }}
                            whileHover={{ y: -10, boxShadow: "0 7px 32px rgba(36, 56, 237, 0.4)" }}
                            whileTap={{ scale: .88 }}
                        >
                            {props.buttonText}
                        </motion.button>
                    </a>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;