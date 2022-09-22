import React, { useEffect } from 'react'
import DevelopmentIcons from './components/developmentIcons';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    })
    const animationTitle = useAnimation();
    const animationText = useAnimation();

    useEffect(() => {
        if (inView) {
            animationTitle.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring', duration: 2, delay: .02
                }
            });
            animationText.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring', duration: 2, delay: .06
                }
            });
        }
        if (!inView) {
            animationTitle.start({
                opacity: 0,
                y: '5vw',
            });
        }
        if (!inView) {
            animationText.start({
                opacity: 0,
                y: '5vw',
            });
        }
    },[inView]);

    return ( 
        <>
            <div id='About' ref={ref} className='w-full flex justify-center bg-Background text-white'>
                <div className="max-w-240 grid content-center mx-10 my-10">
                    <motion.h1 
                        animate={ animationTitle }
                        className='opacity-0 text-center text-4xl font-roboto font-bold mb-10'
                    >
                        About&nbsp; 
                        <font className="text-transparent bg-clip-text bg-gradient-to-r
                                            from-Color-Text-H3 via-Color-Text-H1 to-Color-Text-H2
                                            font-roboto font-bold text-4xl"
                        >
                            Me
                        </font>
                    </motion.h1>
                    <motion.div
                        animate={ animationText }
                        className='opacity-0 font-roboto text-Color-Text-H4'
                    >
                        <h1 className='text-center mb-5'>
                           <font className="font-bold">Hello!</font> My name is <font className="font-bold">Ángel</font> and I like technology, I enjoy 
                            creating web applications and developing software. I started 
                            programming in 2014 during high school, in 2017 I started with 
                            web development during professional projects at university, 
                            I liked it so much that I continue to implement new technologies 
                            in my developments. 
                        </h1>
                        <h1 className='text-center mb-5'>
                            I continue my path in development learning new technologies and I had 
                            the privilege of working with some giant Mexican companies and some web 
                            development agencies, where I have learned new technologies and ways of working..
                        </h1>
                        <h1 className='text-center mb-5'>
                            My main focus these days is to create accessible and inclusive products 
                            with <font className="text-Color-Text-H3 font-bold">Web3</font> and <font className="text-Color-Text-H3 font-bold">Blockchain</font> technology for SMEs.
                        </h1>
                        <h1 className='text-center mb-5'>
                            I'm thinking of launching a web development course for beginners because I like to 
                            teach, although it will be in the near future.
                        </h1>
                        <h1 className='text-center mb-5 font-bold'>
                            Here are some technologies I've been working with recently:
                        </h1>
                    </motion.div>
                    <div className='mt-5'>
                        <DevelopmentIcons />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default About;