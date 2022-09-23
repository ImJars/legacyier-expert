import React, { useEffect } from 'react'
import { SiTwitter, SiInstagram } from 'react-icons/si'
import { FaCodepen, FaLinkedinIn } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { motion, useAnimation  } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';


const Section = styled.div`
  width: 80vw;
  @media (min-width: 640px) {
    width: 100vh;
  }
  .line {
    width: 90px;
  height: 0.5px;
  background-color: #A4A4A4;
  border-color: #A4A4A4;
}
`

const Information = () => {

    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true,
        delay: 0,
    });

    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                opacity: 1,
                transition: {
                    type: 'spring', duration: 2, delay: 4
                }
            });
        }
        if (!inView) {
            animation.start({
                opacity: 0,
            });
        }
    },[inView]);

    return ( 
        <>
            <motion.div ref={ref}>
                <motion.div
                    animate={animation}
                    className='opacity-0 delay-0'
                >
                    <Section
                        className="fixed flex justify-end transform left-auto 
                                rotate-90 -translate-y-3 translate-x-14 origin-left invisible sm:visible"
                    >
                        <div className='grid grid-cols-5 gap-x-6'>
                            <a 
                                href="https://twitter.com/Im_Jars"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SiTwitter 
                                    className='h-5 w-5 -rotate-90 transition 
                                    ease-in-out hover:-translate-x-1 hover:text-Color-Text-H3 
                                    duration-200 text-icon-color'
                                />
                            </a>
                            <a 
                                href="https://www.instagram.com/jars.little/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <SiInstagram 
                                    className='h-5 w-5 -rotate-90 transition 
                                    ease-in-out hover:-translate-x-1 hover:text-Color-Text-H3 
                                    duration-200 text-icon-color'
                                />
                            </a>
                            <a 
                                href="https://github.com/ImJars"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FiGithub 
                                    className='h-5 w-5 -rotate-90 transition 
                                    ease-in-out hover:-translate-x-1 hover:text-Color-Text-H3 
                                    duration-200 text-icon-color'
                                />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/angel-ramirez-08468212b/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn 
                                    className='h-5 w-5 -rotate-90 transition 
                                    ease-in-out hover:-translate-x-1 hover:text-Color-Text-H3 
                                    duration-200 text-icon-color'
                                />
                            </a>
                            <a 
                                href="https://codepen.io/Im_Jars"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaCodepen 
                                    className='h-5 w-5 -rotate-90 transition 
                                    ease-in-out hover:-translate-x-1 hover:text-Color-Text-H3 
                                    duration-200 text-icon-color'
                                />
                            </a>
                        </div>
                        <div className='grid content-center ml-5' >
                            <hr className='line'/>
                        </div>
                    </Section>
                    <Section
                        className="fixed justify-end flex rotate-90 -translate-y-1/2 translate-x-1/5
                        right-0 top-1/2 z-50 left-auto invisible sm:visible"
                    >
                        <div 
                            className='font-open-sans text-xs transition
                                    ease-in-out hover:-translate-x-1 hover:text-Color-Text-H3 
                                    duration-200 text-icon-color tracking-widest'
                        >
                            <a href="mailto:hi.legacyier@gmail.com">
                                hi.legacyier@gmail.com
                            </a>
                        </div>
                        <div className='grid content-center ml-5' >
                            <hr className='line'/>
                        </div>
                    </Section>
                </motion.div>
            </motion.div>
        </>
     );
}
 
export default Information;