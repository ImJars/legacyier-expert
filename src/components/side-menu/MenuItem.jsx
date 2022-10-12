import React from 'react'
import { motion } from 'framer-motion';

const variants = {
    open: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        opacity: 0,
        y: 50,
        x: -500,
        transition: {
            y: { stiffness: 1000 }
        }
    }    
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"]

export const MenuItem = ({ i }) => {
    const style = { border: `2px solid ${colors[i]}` } 
    return ( 
        <>
            <motion.li
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <div className="icon-placeholder" style={style} />
                <div className="text-placeholder" style={style} />
            </motion.li>
        </>
     );
}
 
export default MenuItem;