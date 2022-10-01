import React from 'react'
import LegacyierPic from '../images/legacyier-react.png';
import { AiOutlineLink } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';

const WorkComponent = () => {
    return ( 
        <>
            <div
                className='max-w-workTarjet flex mx-20'
            >
                <div
                    className='w-auto lg:w-2/3 relative '
                >
                    <img
                        className='rounded-xl grayscale-90 hover:filter 
                                hover:grayscale-0 transition duration-500 
                                ease-in-out' 
                        src={ LegacyierPic } 
                        alt="" 
                    />
                </div>
                <div
                    className='w-auto lg:w-1/3 grid content-center absolute transform
                     xl:translate-y-1/4 xl:translate-x-[65%] lg:translate-x-[100%] lg:translate-y-[20%] 
                     translate-x-0 translate-y-0'
                >
                    <h1
                        className='text-xs text-Color-Text-H3
                                    justify-end flex'
                    >
                       Latest Project
                    </h1>
                    <h2
                        className='flex justify-end text-white'
                    >
                        <a
                            className='text-xl font-bold hover:text-Color-Text-H3
                                        transition duration-500 ease-in-out'
                            href='https://github.com/ImJars/legacyier-expert'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Legacyier Expert
                        </a>
                    </h2>
                    <div
                        className='bg-bg-img text-sm font-open-sans text-end
                                    px-4 py-4 rounded-xl text-Color-Text-H4
                                    my-4'
                    >
                        <p>
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Nam eveniet, ad mollitia 
                            facere fugit saepe laudantium. Consequatur
                            debitis fugiat assumenda. Corporis reprehenderit 
                            nulla libero illo laudantium atque, culpa sint 
                        </p>

                    </div>
                    <div
                        className='font-open-sans flex justify-end text-xs 
                                space-x-4 text-Color-Text-H5 font-semibold'
                    >
                        <p>
                           VS Code
                        </p>
                        <p>
                            ReactJS
                        </p>
                        <p>
                            TailwindCSS
                        </p>
                        <p>
                            Styled Components
                        </p>
                    </div>
                    <div
                        className='flex justify-end space-x-4 
                                text-icon-color mt-4'
                    >
                        <a 
                            href="https://github.com/ImJars/legacyier-expert"
                            target='_blank'
                            rel='noreferrer'
                        >
                            <FiGithub
                                className='text-xl hover:text-Color-Text-H3
                                            transition duration-500 ease-in-out'
                            />
                        </a>
                        <a
                            href="https://github.com/ImJars/legacyier-expert"
                            target='_blank'
                            rel='noreferrer'
                        >
                            <AiOutlineLink 
                                className='text-xl hover:text-Color-Text-H3
                                transition duration-500 ease-in-out'
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default WorkComponent;