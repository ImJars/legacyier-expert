import React from 'react';
import { motion } from 'framer-motion';
import { SiTwitter, SiInstagram } from 'react-icons/si'
import { FaCodepen, FaLinkedinIn } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'

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
    { icon: <SiTwitter />, link: '#About' },
    { icon: <SiInstagram />, link: '#Experience' },
    { icon: <FiGithub />, link: '#Work' },
    { icon: <FaLinkedinIn />, link: '#Contact' },
    { icon: <FaCodepen />, link: '#Contact' },
]
export const Icons = ({ i, handleClick }) => {
    return ( 
        <>
            <motion.li
                className='flex'
                variants={ variants }
            >
                <a
                    href={ information[i].link }
                    onClick={ handleClick }
                    className={'text-Color-Text-H2 hover:transition hover:duration-200 hover:ease-in-out' +
                            ' text-xl hover:scale-125 hover:transform hover:-translate-y-2'    
                    }
                >
                    { information[i].icon }
                </a>
            </motion.li>
        </>
     );
}
 
export default Icons;