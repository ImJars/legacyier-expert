import React, { useEffect } from 'react';
import About from './about';
import ScrollMenu from './components/scrollMenu';
import Experience from './Experience';
import Work from './work';
import OtherWorks from './otherWorks';
import Contact from './contact';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LayoutScroll = () => {

    const { ref, inView } = useInView({
        threshold: 0.03,
        triggerOnce: false,
    });
    const animateScroll = useAnimation();

    useEffect(() => {
      if (inView) {
        animateScroll.start({
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring', duration: 2, delay: .02
            }
        });
      }
      if (!inView) {
        animateScroll.start({
            opacity: 0,
            x: '5vw',
        });
      }
    }, [inView, animateScroll]);
    
    return ( 
        <>
            <div
                ref={ ref }
            >
                <ScrollMenu 
                    animateScroll={ animateScroll }
                />
                <About />
                <Experience />
                <Work />
                <OtherWorks />
                <Contact />
            </div>
        </>
     );
}
 
export default LayoutScroll;