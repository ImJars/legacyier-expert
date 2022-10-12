import React, { useRef } from 'react'
import { motion, useCycle } from 'framer-motion';
import {MenuToggle} from '../side-menu/MenuToggle';
import {Navigation} from '../side-menu/Navigation';
import { useDimensions } from '../side-menu/use-dimensions';

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
}

const Example = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return ( 
        <>
            <motion.nav
                className={ isOpen ? 'open' : '' }
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
            >
                <motion.div
                    className={isOpen ? 'background open' : 'background closed'}
                    variants={sidebar}
                />
                <Navigation />
                <MenuToggle toggle={() => toggleOpen()} />
            </motion.nav>
        
        </>
     );
}
 
export default Example;