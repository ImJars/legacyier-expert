import React, { useEffect } from 'react';
import DesignPage from '../images/design-page.jpeg';
import { AiOutlineLink } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WorkComponentTwo = () => {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    })
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring', duration: 2, delay: .02
                }
            })
        }
        if (!inView) {
            animation.start({
                opacity: 0,
                y: '5vw',
            })
        }
    }, [inView, animation])
    
    return ( 
        <>
            <div
                ref={ ref }
                className='max-w-workTarjet relative mx-5 sm:mx-20'
            >
                <motion.div
                    animate={ animation } 
                    className='opacity-0 static flex justify-end'
                >
                    <div 
                        className='absolute bottom-0 top-0 left-0 right-0 md:right-1/4 
                                grid content-center ml-6 mr-2 md:mx-0 z-10'
                    >
                        <h1
                            className='text-xs text-Color-Text-H3
                                    flex'
                        >
                            Latest Project
                        </h1>
                        <h2
                            className='flex text-white'
                        >
                            <a
                                className='text-xl md:text-2xl font-bold hover:text-Color-Text-H3
                                transition duration-500 ease-in-out'
                                href='https://github.com/ImJars/legacyier-expert'
                                target='_blank'
                                rel='noreferrer'
                            >
                                Legacyier Express
                            </a>
                        </h2>
                        <div
                            className='font-semibold font-open-sans my-2 md:my-4
                            rounded-xl text-Color-Text-H4 text-xs sm:text-sm mr-4'
                        >
                            <p>
                                Lorem ipsum dolor sit amet consectetur, 
                                adipisicing elit. Optio odio earum sit, 
                                numquam obcaecati a corrupti neque, impedit 
                                rerum magnam amet, provident eveniet explicabo 
                                ipsam quibusdam maxime porro nam eum?
                            </p>
                        </div>
                        <div
                            className='font-open-sans flex text-xs 
                            sm:space-x-4 space-x-2 text-Color-Text-H5 font-semibold'
                        >
                            <p>
                                Styled Components
                            </p>
                            <p>
                                VS Code
                            </p>
                            <p>
                                TailwindCSS
                            </p>
                            <p>
                                ReactJS
                            </p>
                            <p>
                                GatsbyJS
                            </p>
                        </div>
                        <div
                            className='flex space-x-4 
                            text-icon-color mt-4'
                        >
                            <a
                                href="https://github.com/ImJars/legacyier-expert"
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FiGithub 
                                    className='text-xl hover:text-Color-Text-H3
                                    transition duration-500 ease-in-out'
                                />
                            </a>
                            <a
                                href="https://github.com/ImJars/legacyier-expert"
                                target='_blank'
                                rel='noreferrer'
                            >
                                <AiOutlineLink 
                                    className='text-xl hover:text-Color-Text-H3
                                    transition duration-500 ease-in-out'
                                />
                            </a>
                        </div>
                    </div>
                    <img 
                        className='sm:w-2/3 rounded-xl grayscale-50 sm:grayscale-90 hover:filter 
                                    hover:grayscale-0 transition duration-500 
                                    ease-in-out blur-sm hover:blur-none opacity-70 z-0'
                        src={ DesignPage } 
                        alt="" 
                    />
                </motion.div>
            </div>
        </>
     );
}
 
export default WorkComponentTwo;