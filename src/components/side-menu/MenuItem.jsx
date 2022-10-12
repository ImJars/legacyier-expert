import React from 'react'
import { motion } from 'framer-motion';
import { MdAccountCircle } from 'react-icons/md';

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

const information = [
    { key: 0, icon: <MdAccountCircle />, text: 'Home', link: '#Home' },
    { key: 1, icon: <MdAccountCircle />, text: 'About', link: '#About' },
    { key: 2, icon: <MdAccountCircle />, text: 'Experience', link: '#Experience' },
    { key: 3, icon: <MdAccountCircle />, text: 'Work', link: '#Work' },
    { key: 4, icon: <MdAccountCircle />, text: 'Contact', link: '#Contact' },
]

export const MenuItem = ({ i, handleClick }) => {
    return ( 
        <>
            <motion.li
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                {/* <div key={ information[i].key } className="icon-placeholder" style={style} >
                    {information[i].icon}
                </div> */}
                <a 
                    onClick={ handleClick }
                    href={ information[i].link }
                    className="text-placeholder flex justify-center
                        items-center text-2xl font-bold text-white"
                >
                    {information[i].text}   
                </a>
            </motion.li>
        </>
     );
}
 
export default MenuItem;