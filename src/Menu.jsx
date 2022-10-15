import React, { useEffect } from 'react';
import Link from './components/LinkHeader';
import { motion, useAnimation  } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Menu = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
        delay: 1000
    });
    
    const animationHome = useAnimation();
    const animationAbout = useAnimation();
    const animationExperience = useAnimation();
    const animationWork = useAnimation();
    const animationContact = useAnimation();


    useEffect(() => {
        if (inView) {
            animationHome.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring', duration: 1, delay: 1
                }
            });
            animationAbout.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring', duration: 1, delay: 1.1
                }
            });
            animationExperience.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring', duration: 1, delay: 1.2
                }
            });
            animationWork.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring', duration: 1, delay: 1.3
                }
            });
            animationContact.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring', duration: 1, delay: 1.4
                }
            });
        }
        if (!inView) {
            animationHome.start({
                opacity: 0,
                y: '-5vh',
            });
            animationAbout.start({
                opacity: 0,
                y: '-5vh',
            });
            animationExperience.start({
                opacity: 0,
                y: '-5vh',
            });
            animationWork.start({
                opacity: 0,
                y: '-5vh',
            });
            animationContact.start({
                opacity: 0,
                y: '-5vh',
            });
        }
    },[inView, animationHome, animationAbout, animationExperience, animationWork, animationContact]);
    return ( 
        <>
            <div ref={ref} className='bg-Background w-full fixed z-10 shadow-xl'>
                <div className='flex justify-between'>
                    
                    <div
                        className='invisible sm:visible h-20 text-white grid grid-cols-5 
                                content-center mr-20'
                    >
                        <motion.div
                            className={'opacity-0'}
                            animate={animationHome}
                        >
                            <Link
                                textLink={'Home'}
                                link={'#Home'}
                            />
                        </motion.div>
                        <motion.div
                            className={'opacity-0'}
                            animate={animationAbout}
                        >
                            <Link
                                textLink={'About'}
                                link={'#About'}
                            />
                        </motion.div>
                        <motion.div
                            className={'opacity-0'}
                            animate={animationExperience}
                        >
                            <Link
                                textLink={'Experience'}
                                link={'#Experience'}
                            />
                        </motion.div>
                        <motion.div
                            className={'opacity-0'}
                            animate={animationWork}
                        >
                            <Link
                                textLink={'Work'}
                                link={'#Work'}
                            />
                        </motion.div>
                        <motion.div
                            className={'opacity-0'}
                            animate={animationContact}
                        >
                            <Link
                                textLink={'Contact'}
                                link={'#Contact'}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Menu;