import React, { useEffect } from 'react';
import RotatingText from './components/rotatingText';
import { motion, useAnimation  } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home = () => {

    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
    });

    const animation = useAnimation();
    const animationSubtitle = useAnimation();
    const animationText = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                y: 0,
                opacity: 1,
                transition: {
                    type: 'spring', duration: 2, delay: 2
                }
            });
            animationSubtitle.start({
                y: 0,
                opacity: 1,
                transition: {
                    type: 'spring', duration: 2, delay: 2.1
                }
            });
            animationText.start({
                y: 0,
                opacity: 1,
                transition: {
                    type: 'spring', duration: 2, delay: 2.2
                }
            });
            
        }
        if (!inView) {
            animation.start({
                y: '30vh',
                opacity: 0,
            });
            animationSubtitle.start({
                y: '30vh',
                opacity: 0,
            });
            animationText.start({
                y: '30vh',
                opacity: 0,
            });
        }
    },[inView]);

    return ( 
        <>
        <div id='Home' ref={ref} className='w-full h-screen bg-Background z-0'>
            <div className='h-screen grid content-center'>
                <div>
                    <div 
                    className='flex justify-center'
                    >
                        <div className=''>
                            <motion.h1 className='text-white font-roboto font-bold text-4xl sm:text-8xl
                                                opacity-0'
                                animate={animation}
                            >
                                    Hello, I'm&nbsp; 
                                <font
                                    className='text-transparent bg-clip-text bg-gradient-to-r
                                        from-Color-Text-H3 via-Color-Text-H1 to-Color-Text-H2
                                        font-roboto font-bold text-4xl sm:text-8xl'
                                >
                                    Angel Ramirez
                                </font>

                            </motion.h1>
                            <motion.h2 className='text-Color-Text-H1 font-roboto font-light text-3xl
                                                sm:text-6xl opacity-0'
                                animate={animationSubtitle}
                            >
                                I build things for the web.
                            </motion.h2>
                            <motion.h3 className='text-white pt-5 font-roboto opacity-0'
                                animate={animationText}
                            >
                                I'm a software developer specializing in creating exceptional<br/> 
                                products and digital experiences. I am currently focused on<br/> 
                                creating <font className='text-Color-Text-H3'>Web3</font> technology products.
                                <RotatingText/>
                            </motion.h3>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        </>
     );
}
 
export default Home;