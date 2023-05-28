import { motion } from "framer-motion";
import { Tilt_Neon, Varela_Round } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';


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

const Router = () => {
    const router = useRouter();
  
    return router;
  }

const Home = () => {
    const [isMobile, setIsMobile] = useState(false);

    const { user, error, isLoading } = useUser();

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1200px)');
        setIsMobile(mediaQuery.matches);

        // const listener = () => setIsMobile(mediaQuery.matches);

    }, []);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>

    if (user) {

        const router = Router();

        router.push("/dashboard");
    }
    return (
        <>
            <div
                className="home-container"
                id="home"
                style={{ margin: 0, padding: 0, position: "relative", height: "100vh", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}
            >
                
                <div
                    className="home-intro-container"
                    style={{ margin: 0, paddingLeft: "2.4em", width: "50%" }}
                >
                    <motion.div
                        className={varelaRound.className}
                        variants={divVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                    >

                        <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0 }} >Unlock</motion.p>
                        <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0 }} >Your</motion.p>
                        <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0 }} >Knowledge</motion.p>
                        <motion.p variants={childVariants} style={{ margin: 0, marginRight: 10, padding: 0 }} >Potential</motion.p>
                        <motion.p variants={childVariants} style={{ margin: 0, padding: 0 }} >with QuizBurst</motion.p>
                    </motion.div>
                    <motion.p
                        className={tiltNeon.className}
                        style={{ color: "#444444", margin: 0, marginTop: 24, marginBottom: 36, padding: 0, fontSize: "1.2em" }}
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, type: "spring" }}
                    >
                        Where Learning Meets Fun!</motion.p>
                    <a href="https://discord.com/api/oauth2/authorize?client_id=1112272330798923847&permissions=8&scope=bot" target="_blank" style={{ margin: 0, padding: 0, textDecoration: "none" }} >
                        <motion.button
                            className={tiltNeon.className}
                            style={{ color: "#ffffff", margin: 0, marginTop: 34, padding: "12px 44px", fontSize: "1.1em", backgroundColor: "#4154F1", border: "0 solid transparent", cursor: "pointer", borderRadius: 10, boxShadow: "0px 5px 30px rgba(65, 84, 241, 0.4)", userSelect: "none" }}
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false }}
                            transition={{ duration: 2, type: "spring", stiffness: 120 }}
                            whileHover={{ y: -10, boxShadow: "0 7px 32px rgba(36, 56, 237, 0.4)" }}
                            whileTap={{ scale: .88 }}
                        >
                            QuizBurst Bot 😊
                        </motion.button>
                    </a>
                </div>

                {isMobile ? (
                    <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_uMzzwhCG6N.json" background="transparent" speed="1" style={{ height: 290, width: 290 }} loop autoplay></lottie-player>
                ) : (
                    <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_uMzzwhCG6N.json" background="transparent" speed="1" style={{ height: 500, width: 500 }} loop autoplay></lottie-player>
                )}

            </div>
        </>
    )
}

export default Home;