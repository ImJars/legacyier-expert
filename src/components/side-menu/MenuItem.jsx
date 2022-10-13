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
    { key: 1, number: '01.', text: 'About', link: '#About' },
    { key: 2, number: '02.', text: 'Experience', link: '#Experience' },
    { key: 3, number: '03.', text: 'Work', link: '#Work' },
    { key: 4, number: '04.', text: 'Contact', link: '#Contact' },
]

export const MenuItem = ({ i, handleClick }) => {
    return ( 
        <>
            <motion.li
                className='flex flex-col'
                variants={variants}
            >
                <h1
                    className='cursor-default text-sm font-open-sans tracking-wider text-Color-Text-H2'
                >
                    { information[i].number }
                </h1>
                <a 
                    onClick={ handleClick }
                    href={ information[i].link }
                    className="text-placeholder flex justify-center
                            font-open-sans tracking-wider hover:text-Color-Text-H2
                            hover:transition hover:duration-200 hover:ease-in-out 
                            items-center text-base text-text-mini"
                >
                    {information[i].text}   
                </a>

            </motion.li>
        </>
     );
}
 
export default MenuItem;