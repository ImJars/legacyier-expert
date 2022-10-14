import React from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

const ScrollMenu = () => {
    return ( 
        <>
            <div
                className='fixed bottom-0 right-0 z-50'
            >
                <div
                    className='mb-10 mr-10'
                >
                    <a 
                        href="#Home"
                        className='text-xl text-white'
                    >
                        <BsFillArrowUpCircleFill />
                    </a>
                </div>
            </div>
        </>
     );
}
 
export default ScrollMenu;