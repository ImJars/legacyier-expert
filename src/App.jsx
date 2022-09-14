import React, { useEffect} from 'react';
import Menu from './Menu';
import { useInView } from 'react-intersection-observer';
import { useAnimation  } from 'framer-motion';
import Home from './Home';
import About from './about';
import Work from './Work';

const App = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
    });
    
    const animation = useAnimation();

    useEffect(() => {
        if (inView) {
            animation.start({
                background: '#011326',
                boxShadow: '0px 0px 20px 10px #011326',
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3
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
        }
    },[inView]);
    return ( 
        <div className='w-full'>
            <Menu animation={animation}/>
            <Home/>
            <div ref={ref}>
                <About/>
                <Work/>
            </div>
        </div>
)}
 
export default App;