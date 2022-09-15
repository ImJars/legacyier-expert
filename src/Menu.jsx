import React, { useEffect } from 'react';
import Header from './components/headerMenu';
import Link from './components/LinkHeader';
import { motion, useAnimation  } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Menu = ({ animation }) => {
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
                    type: 'spring', duration: 1, delay: 1.5
                }
            });
            animationExperience.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring', duration: 1, delay: 2
                }
            });
            animationWork.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring', duration: 1, delay: 2.5
                }
            });
            animationContact.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring', duration: 1, delay: 3
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
    },[inView]);
    return ( 
        <>
            <motion.div ref={ref} className='bg-Background w-full fixed z-10'
                animate={ animation }
            >
                <div className='flex justify-between'>
                    <div className='sm:invisible visible'>
                        <Header />
                    </div>
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
            </motion.div>
        </>
     );
}
 
export default Menu;