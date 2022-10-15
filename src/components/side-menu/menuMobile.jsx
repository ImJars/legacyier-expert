import React, { useEffect } from 'react'
import Example from './Example';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const MenuMobile = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    })
    const animation = useAnimation();
    useEffect(() => {
        if (!inView) {
            animation.start({
                opacity: 1,
                transition: {
                    delay: 3,
                    duration: 1,
                }
            });
        }
    }, [inView, animation]);
    
    return ( 
        <>
            <div 
                ref={ ref }
            >
                <Example 
                    animate={ animation }
                />
            </div>
        </>
     );
}
 
export default MenuMobile;