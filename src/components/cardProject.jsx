import React from 'react';
import { AiFillFolderOpen} from 'react-icons/ai';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

const CardProject = ({ 
    classNameGit, 
    classNameLink, 
    title,
    content,
    technology,
    technologyTwo,
    technologyThree,
    technologyFour,
    animation 
}) => {
    return ( 
        <>
        <motion.div animate= { animation }>
            <div
                className='px-6 py-3 md:py-5 lg:py-10 m-3
                 md:m-4 lg:m-2 bg-bg-example rounded-lg cursor-pointer
                        hover:transform hover:-translate-y-4 transition duration-500 ease-in-out'
            >
                <div className='flex justify-between mb-5'>
                    <AiFillFolderOpen 
                        className='text-4xl text-Color-Text-H1'
                    />
                    <div className='flex items-center space-x-2'>
                        <a 
                            href="https://github.com/ImJars/legacyier-expert"
                            className={ classNameGit }
                        >
                            <FiGithub 
                                className='text-xl text-icon-color 
                                        hover:text-Color-Text-H1 
                                        transition duration-500 ease-in-out'
                            />
                        </a>
                        <a 
                            href="https://github.com/ImJars/legacyier-expert"
                            className={ classNameLink }
                        >
                            <FiExternalLink 
                                className='text-xl text-icon-color
                                        hover:text-Color-Text-H1 transition 
                                        duration-500 ease-in-out'
                            />
                        </a>
                    </div>
                </div>
                <div>
                    <h1 
                        className='font-open-sans font-bold text-xl 
                                text-Color-Text-H4 mb-2'
                    >
                        { title }
                    </h1>
                    <p
                        className='font-open-sans text-sm text-text-mini
                                mb-5'
                    >
                        { content }
                    </p>
                    <div
                        className='font-open-sans flex space-x-2 text-xs text-icon-color'
                    >
                        <p>
                            { technology }
                        </p>
                        <p>
                            { technologyTwo }
                        </p>
                        <p>
                            { technologyThree }
                        </p>
                        <p>
                            { technologyFour }
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
        </>
     );
}
 
export default CardProject;