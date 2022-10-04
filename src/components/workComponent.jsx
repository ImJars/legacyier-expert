import React from 'react'
import LegacyierPic from '../images/legacyier-react.png';
import { AiOutlineLink } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';

const WorkComponent = () => {
    return ( 
        <>
            <div
                className='max-w-workTarjet relative mx-5 sm:mx-20'
            >
                <div
                    className='static'
                >
                    <img
                        className='rounded-xl grayscale-50 sm:grayscale-90 hover:filter 
                                hover:grayscale-0 transition duration-500 
                                ease-in-out blur-sm opacity-70' 
                        src={ LegacyierPic } 
                        alt="" 
                    />
                    <div
                        className='absolute bottom-0 top-0 
                                grid content-center ml-6 mr-2'
                    >
                        <h1
                            className='text-xs text-Color-Text-H3
                                    sm:justify-end flex'
                        >
                            Latest Project
                        </h1>
                        <h2
                            className='flex sm:justify-end text-white'
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
                            className='sm:bg-bg-img font-open-sans sm:text-end
                                    sm:px-4 sm:py-4 rounded-xl text-Color-Text-H4 text-sm
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
                            className='font-open-sans flex sm:justify-end text-xs 
                                sm:space-x-4 space-x-3 text-Color-Text-H5 font-semibold'
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
                            className='flex sm:justify-end space-x-4 
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
            </div>
        </>
     );
}
 
export default WorkComponent;