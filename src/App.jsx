import React, { useEffect} from 'react';
import Menu from './Menu';
import { useInView } from 'react-intersection-observer';
import { useAnimation  } from 'framer-motion';
import Home from './Home';
import Information from './information';
import About from './about';
import Work from './Work';

const App = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
    });
    
    const animation = useAnimation();
    const animationInformation = useAnimation();


    useEffect(() => {
        if (inView) {
            animation.start({
                background: '#011326',
                boxShadow: '0px 0px 20px 10px #011326',
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3
                },
            });
            animationInformation.start({
                color: '#011326',
                transition: {
                    type: 'spring', duration: .1, bounce: 0.1
                },
            });
        }
        if (!inView) {
            animation.start({
                background: '#011326',
                boxShadow: '0px 0px 0px 0px #011326',
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3
                }, 
            });
            animationInformation.start({
                position: 'fixed',
                color: '#A4A4A4',
                transition: {
                    type: 'spring', duration: .1, bounce: 0.1
                },
            });
        }
    },[inView]);

    return ( 
        <div className='w-full'>
            <Information animationInfo={animationInformation}/>
            <Menu animation={animation}/>
            <Home/>
            <div ref={ref}>
                <About/>
                <Work/>
            </div>
        </div>
)}
 
export default App;