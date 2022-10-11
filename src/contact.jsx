import React, { useEffect } from 'react'
import { FiGitBranch } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    const animate = useAnimation();
    const animateTwo = useAnimation();
    const animateThree = useAnimation();
    const animateFour = useAnimation();

    useEffect(() => {
        if (inView) {
            animate.start({
                opacity: 1,
            transition: {
                type: 'spring', duration: 2, delay: .1
            }
            })
        }
        if (inView) {
            animateTwo.start({
                opacity: 1,
            transition: {
                type: 'spring', duration: 2, delay: .3
            }
            })
        }
        if (inView) {
            animateThree.start({
                opacity: 1,
            transition: {
                type: 'spring', duration: 2, delay: .5
            }
            })
        }
        if (inView) {
            animateFour.start({
                opacity: 1,
            transition: {
                type: 'spring', duration: 2, delay: .6
            }
            })
        }
        if (!inView) {
            animate.start({
                opacity: 0,
            })
        }
        if (!inView) {
            animateTwo.start({
                opacity: 0,
            })
        }
        if (!inView) {
            animateThree.start({
                opacity: 0,
            })
        }
        if (!inView) {
            animateFour.start({
                opacity: 0,
            })
        }
        
    }, [inView, animate, animateTwo, animateThree, animateFour])
    

    return ( 
        <>
            <div
                ref={ ref }
                className="w-full min-h-750 bg-Background 
                        text-white flex flex-col justify-center items-center"
            >
                <div
                    className='flex flex-col mx-5'
                >
                    <div
                    className='text-center'
                    >
                        <motion.h2
                            animate = { animate }
                            className='font-open-sans text-sm tracking-widest
                                    text-Color-Text-H1 mb-2'
                        >
                            What’s Next?
                        </motion.h2>
                        <motion.h1
                            animate = { animateTwo }
                            className='text-Color-Text-H4 font-open-sans
                                    font-bold text-2xl sm:text-4xl'
                        >
                            Get In Touch
                        </motion.h1>
                        <motion.p
                            animate = { animateThree }
                            className='text-text-mini font-open-sans
                                    mb-14 mt-6 max-w-lg'
                        >
                        I am always looking for new opportunities to 
                        further develop my skills. My inbox is always open. 
                        Whether you have a question or just want to say hi, 
                        I’ll try my best to get back to you!
                        </motion.p>
                        <motion.a
                            animate = { animateFour } 
                            href="mailto:hi.legacyier@gmail.com"
                            
                        >
                            <button 
                                className='border border-Color-Text-H3 px-8 py-3
                                rounded-lg text-Color-Text-H3 font-open-sans
                                hover:bg-Color-Text-H3 hover:text-white transition
                                duration-500 ease-in-out'
                            >
                                Say Hello!
                            </button>
                        </motion.a>
                    </div>
                </div>
            </div>
            <footer 
                className='w-full h-10 font-open-sans bg-Background text-text-mini
                        flex justify-center items-center text-xs tracking-wider'
            >
                    <a
                        href='https://github.com/ImJars'
                        target='_blank'
                        rel='noreferrer'
                        className='mb-14 hover:text-Color-Text-H1 transition
                                duration-500 ease-in-out'
                    >
                        <h1>
                            Designed & Built by Angel Ramirez
                        </h1>
                        <h2
                            className='flex justify-center items-center mt-2 space-x-1'
                        >
                            <AiOutlineStar 
                                className='w-3 h-3'
                            />
                            <FiGitBranch 
                                className='w-3 h-3'
                            />
                            <font>
                                ImJars
                            </font>
                        </h2>
                    </a>
            </footer>
        </>
     );
}
 
export default Contact;