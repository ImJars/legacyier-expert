import React from 'react'
import { FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';


const ScrollMenu = ({ animateScroll }) => {
    return ( 
        <>
            <motion.div
                animate={ animateScroll }
                className='opacity-0 fixed bottom-0 right-0 z-50
                        sm:hidden block'
            >
                <div
                    className='mb-2 mr-2 bg-Background rounded-full p-5 
                            cursor-pointer '
                >
                    <a 
                        href="#Home"
                        className='text-xl text-white '
                    >
                        <FaArrowUp 
                            className='animate-pulse hover:scale-150
                                    transition duration-500 ease-in-out'
                        />
                    </a>
                </div>
            </motion.div>
        </>
     );
}
 
export default ScrollMenu;