import React, { useEffect } from 'react';
import WorkComponent from './components/workComponent';
import WorkComponentTwo from './components/workComponentTwo';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Work = () => {

    const { ref, inView } = useInView({
        threshold: 0,
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
            <div ref={ ref } className='bg-Background text-white w-full pb-20 sm:pb-32'>
                <motion.div className='opacity-0' animate={ animation }>
                    <h1 
                        className='bg-Background text-center text-2xl sm:text-4xl font-open-sans 
                            font-bold mb-10 text-white'
                    >
                        Some Things I’ve&nbsp; 
                    <font className="text-transparent bg-clip-text bg-gradient-to-r
                            from-Color-Text-H3 via-Color-Text-H1 to-Color-Text-H2
                            font-bold font-open-sans"
                    >
                        Built
                    </font>
                </h1>
                </motion.div>
                <div className='flex flex-col space-y-8'>
                    <div className='flex justify-center'>
                        <WorkComponent />
                    </div>
                    <div className='flex justify-center'>
                        <WorkComponentTwo />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Work;