import React, { useEffect } from 'react';
import { DiReact, DiNodejs, DiJavascript1, DiAngularSimple } from 'react-icons/di';
import { SiSolidity, SiTailwindcss, SiFirebase, SiRust } from 'react-icons/si';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DevelopmentIcons = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });
    const animationIcon1 = useAnimation();
    const animationIcon2 = useAnimation();
    const animationIcon3 = useAnimation();
    const animationIcon4 = useAnimation();
    const animationIcon5 = useAnimation();
    const animationIcon6 = useAnimation();
    const animationIcon7 = useAnimation();
    const animationIcon8 = useAnimation();

    useEffect(() => {
        if (inView) {
            animationIcon1.start({
                y: 0,
                opacity: 1,
                transition: {
                    type: 'spring', duration: 2, delay: .2
                }
            });
            animationIcon2.start({
                y: 0,
                opacity: 1,
                transition: {
                    type: 'spring', duration: 2,delay: .4
                }
            });
            animationIcon3.start({
                y: 0,
                opacity: 1,
                transition: {
                    type: 'spring', duration: 2,delay: .6
                }
            });
            animationIcon4.start({
                y: 0,
                opacity: 1,
                transition: {
                    type: 'spring', duration: 2,delay: .8
                }
            });
            animationIcon5.start({
                y: 0,
                opacity: 1,
                transition: {
                    type: 'spring', duration: 2,delay: 1
                }
            });
            animationIcon6.start({
                y: 0,
                opacity: 1,
                transition: {
                    type: 'spring', duration: 2,delay: 1.2
                }
            });
            animationIcon7.start({
                y: 0,
                opacity: 1,
                transition: {
                    type: 'spring', duration: 2,delay: 1.4
                }
            });
            animationIcon8.start({
                y: 0,
                opacity: 1,
                transition: {
                    type: 'spring', duration: 2,delay: 1.6
                }
            });
        }
        if (!inView) {
            animationIcon1.start({
                y: '10vh',
                opacity: 0,
            });
            animationIcon2.start({
                y: '10vh',
                opacity: 0,
            });
            animationIcon3.start({
                y: '10vh',
                opacity: 0,
            });
            animationIcon4.start({
                y: '10vh',
                opacity: 0,
            });
            animationIcon5.start({
                y: '10vh',
                opacity: 0,
            });
            animationIcon6.start({
                y: '10vh',
                opacity: 0,
            });
            animationIcon7.start({
                y: '10vh',
                opacity: 0,
            });
            animationIcon8.start({
                y: '10vh',
                opacity: 0,
            });
        }
    },[inView]);
    return ( 
        <>
            <div ref={ref} className='grid grid-cols-4 sm:grid-cols-8'>
                <motion.a
                    animate={ animationIcon1 }
                    className='opacity-0 flex justify-center my-2 sm:my-0' 
                    href="https://es.reactjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <DiReact 
                        className='h-20 w-20 text-icon-color transition 
                                    ease-in-out hover:scale-125 duration-200' 
                    />
                </motion.a>
                <motion.a 
                    animate={ animationIcon2 }
                    className='opacity-0 flex justify-center my-2 sm:my-0' 
                    href="https://angular.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <DiAngularSimple 
                        className='h-20 w-20 text-icon-color transition 
                                    ease-in-out hover:scale-125 duration-200' 
                    />
                </motion.a>
                <motion.a
                    animate={ animationIcon3 } 
                    className='opacity-0 flex justify-center my-2 sm:my-0'
                    href="https://www.javascript.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <DiJavascript1 
                        className='h-20 w-20 text-icon-color transition 
                                    ease-in-out hover:scale-125 duration-200' 
                    />
                </motion.a>
                <motion.a
                    animate={ animationIcon4 } 
                    className='opacity-0 flex justify-center my-2 sm:my-0' 
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SiTailwindcss 
                        className='h-20 w-20 text-icon-color transition 
                                    ease-in-out hover:scale-125 duration-200º' 
                    />
                </motion.a>
                <motion.a 
                    animate={ animationIcon5 }
                    className='opacity-0 flex justify-center my-2 sm:my-0' 
                    href="https://nodejs.org/es/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <DiNodejs 
                        className='h-20 w-20 text-icon-color transition 
                                    ease-in-out hover:scale-125 duration-200' 
                    />
                </motion.a>
                <motion.a 
                    animate={ animationIcon6 }
                    className='opacity-0 flex justify-center my-2 sm:my-0' 
                    href="https://firebase.google.com/?hl=es/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SiFirebase 
                        className='h-20 w-20 text-icon-color transition 
                                    ease-in-out hover:scale-125 duration-200' 
                    />
                </motion.a>
                <motion.a 
                    animate={ animationIcon7 }
                    className='opacity-0 flex justify-center my-2 sm:my-0' 
                    href="https://docs.soliditylang.org/en/v0.8.16/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SiSolidity 
                        className='h-20 w-20 text-icon-color transition 
                                    ease-in-out hover:scale-125 duration-200º' 
                    />
                </motion.a>
                <motion.a
                    animate={ animationIcon8 } 
                    className='opacity-0 flex justify-center my-2 sm:my-0' 
                    href="https://www.rust-lang.org/es"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SiRust 
                        className='h-20 w-20 text-icon-color transition 
                                    ease-in-out hover:scale-125 duration-200º' 
                    />
                </motion.a>
            </div>
        </>
     );
}
 
export default DevelopmentIcons;