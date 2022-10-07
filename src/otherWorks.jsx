import React, { useEffect } from 'react'
import CardProject from './components/cardProject';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const OtherWorks = () => {

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    })

    const animation = useAnimation();
    const animationcard = useAnimation();
    const animationcardTwo = useAnimation();
    const animationcardThree = useAnimation();

    useEffect(() => {
      if (inView) {
        animation.start({
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring', duration: 2, delay: .02
          }
        });
      }
      if (inView) {
        animationcard.start({
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring', duration: 2, delay: 0.6
          }
        });
      }
      if (inView) {
        animationcardTwo.start({
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring', duration: 2, delay: 0.8
          }
        });
      }
      if (inView) {
        animationcardThree.start({
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring', duration: 2, delay: 1
          }
        });
      }
    if (!inView) {
        animation.start({
            opacity: 0,
            y: '5vw',
        });
    }
    if (!inView) {
        animationcard.start({
            opacity: 0,
            y: '5vw',
        });
    }
    if (!inView) {
        animationcardTwo.start({
            opacity: 0,
            y: '5vw',
        });
    }
    if (!inView) {
        animationcardThree.start({
            opacity: 0,
            y: '5vw',
        });
    }
    }, [inView, animation, animationcard, animationcardTwo, animationcardThree]);
    
    return ( 
        <>
            <div
                ref={ ref }
                className='bg-Background text-white w-full h-full flex justify-center pb-20'
            >
                <div className='max-w-240 flex flex-col mx-5 sm:mx-20'>
                    <div className='mb-14 sm:mb-36'>
                        <motion.h1
                            animate= { animation }
                            className='text-center text-2xl sm:text-4xl font-open-sans 
                                    font-bold'
                        >
                            Other Noteworthy&nbsp;
                            <font
                                className="text-transparent bg-clip-text bg-gradient-to-r
                                        from-Color-Text-H3 via-Color-Text-H1 to-Color-Text-H2
                                        font-bold font-open-sans"
                            >
                                Projects
                            </font>
                        </motion.h1>
                    </div>
                    <div>
                        <div 
                            className='grid md:grid-cols-2 lg:grid-cols-3'
                        >
                            <CardProject
                                animation={ animationcard }
                                classNameGit={ 'hidden' }
                                title={ 'Project CMO' }
                                content={
                                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum optio mollitia nemo dolorem. Exercitationem cupiditate reprehenderit sunt amet maxime iure pariatur'
                                }
                                technology={ 'React' }
                                technologyTwo={ 'Next.js' }
                                technologyThree={ 'TailwindCSS' }
                                technologyFour={ 'Firebase' }
                            />
                            <CardProject 
                                animation={ animationcardTwo }
                                title={ 'Project Holcim' }
                                content={
                                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum optio mollitia nemo dolorem. Exercitationem cupiditate reprehenderit sunt amet maxime iure pariatur'
                                }
                                technology={ 'SQL Server' }
                                technologyTwo={ '.NET' }
                                technologyThree={ 'Excel' }
                            />
                            <CardProject 
                                animation={ animationcardThree }
                                classNameLink={ 'hidden' }
                                title={ 'Project Bonafont' }
                                content={
                                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum optio mollitia nemo dolorem. Exercitationem cupiditate reprehenderit sunt amet maxime iure pariatur'
                                }
                                technology={ 'Visual Basic' }
                                technologyTwo={ 'MySQL' }
                                technologyThree={ 'Excel' }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default OtherWorks;