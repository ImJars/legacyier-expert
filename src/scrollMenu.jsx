import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { motion } from 'framer-motion';


const ScrollMenu = ({ animateScroll }) => {
    return ( 
        <>
            <motion.div
                animate={ animateScroll }
                className='fixed bottom-0 right-0 z-50'
            >
                <div
                    className='mb-2 mr-2 bg-Background rounded-full p-5 
                            cursor-pointer '
                >
                    <a 
                        href="#Home"
                        className='text-xl text-white '
                    >
                        <AiOutlineArrowUp 
                        className='animate-pulse hover:scale-150'/>
                    </a>
                </div>
            </motion.div>
        </>
     );
}
 
export default ScrollMenu;