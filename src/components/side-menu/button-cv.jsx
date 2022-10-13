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
const information = [
    { key: 1, text: 'CV', link: '#Home' },
]
export const ButtonCV = ({ i, handleClick}) => {
    return ( 
        <>
            <motion.li
            className='flex flex-col'
                variants={ variants }
            >
                <a 
                    onClick={ handleClick }
                    href={ information[i].link}
                    className= {
                        'font-open-sans tracking-wider text-Color-Text-H2 text-base' +
                        ' hover:transition hover:duration-200 hover:ease-in-out' +
                        ' border border-Color-Text-H2 rounded-md px-20 py-2 hover:bg-Color-Text-H2' +
                        ' hover:bg-opacity-10'
                    }
                >
                        {information[i].text}
                </a>
            </motion.li>
        </>
     );
}
 
export default ButtonCV;