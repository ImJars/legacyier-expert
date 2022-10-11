import React, { useEffect } from 'react'
import LegacyierPic from '../images/legacyier-react.png';
import { AiOutlineLink } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WorkComponent = () => {
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
                className='max-w-250 relative mx-5 sm:mx-20 sm:pb-8'
            >
                <motion.div
                    animate={ animation }
                    className='opacity-0 static'
                >
                    <img
                        className='sm:w-2/3 rounded-xl grayscale-50 sm:grayscale-90 hover:filter 
                                hover:grayscale-0 transition duration-500 
                                ease-in-out blur-sm hover:blur-none opacity-70' 
                        src={ LegacyierPic } 
                        alt="" 
                    />
                    <div
                        className='absolute bottom-0 top-0 md:left-1/4 
                                grid content-center ml-6 mr-2 md:mx-0'
                    >
                        <h1
                            className='text-xs text-Color-Text-H3
                                    sm:justify-end flex'
                        >
                            Latest Project
                        </h1>
                        <h2
                            className='flex sm:justify-end text-white'
                        >
                            <a
                                className='text-xl md:text-2xl font-bold hover:text-Color-Text-H3
                                        transition duration-500 ease-in-out'
                                href='https://github.com/ImJars/legacyier-expert'
                                target='_blank'
                                rel='noreferrer'
                            >
                                Legacyier Expert
                            </a>
                        </h2>
                        <div
                            className='font-semibold font-open-sans sm:text-end my-2 md:my-4
                                     rounded-xl text-text-mini text-xs sm:text-sm
                                     sm:bg-bg-example sm:py-5 sm:px-4'
                        >
                            <p>
                                Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Nam eveniet, ad mollitia 
                                facere fugit saepe laudantium. Consequatur
                                debitis fugiat assumenda. Corporis reprehenderit 
                                nulla libero illo laudantium atque, culpa sint 
                            </p>

                        </div>
                        <div
                            className='font-open-sans flex sm:justify-end text-xs 
                                sm:space-x-4 space-x-3 text-Color-Text-H5 font-semibold'
                        >
                            <p>
                                VS Code
                            </p>
                            <p>
                                ReactJS
                            </p>
                            <p>
                                TailwindCSS
                            </p>
                            <p>
                                Styled Components
                            </p>
                        </div>
                        <div
                            className='flex sm:justify-end space-x-4 
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
                </motion.div>
            </div>
        </>
     );
}
 
export default WorkComponent;