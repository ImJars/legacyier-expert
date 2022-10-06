import React from 'react';
import { AiFillFolderOpen} from 'react-icons/ai';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const CardProject = () => {
    return ( 
        <>
            <a
                href='#'
                className='px-6 py-10 m-2 bg-bg-example rounded-lg 
                        hover:transform hover:-translate-y-4 transition duration-500 ease-in-out'
            >
                <div className='flex justify-between mb-5'>
                    <AiFillFolderOpen 
                        className='text-4xl text-Color-Text-H1'
                    />
                    <div className='grid grid-cols-2 content-center space-x-2'>
                        <a href="#">
                            <FiGithub 
                                className='text-xl text-icon-color
                                            hover:text-Color-Text-H1
                                            transition duration-500 ease-in-out'
                            />
                        </a>
                        <a href="#">
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
                        Title Project
                    </h1>
                    <p
                        className='font-open-sans text-sm text-text-mini
                                mb-5'
                    >
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Nisi animi, cum velit ad 
                        quidem omnis consequuntur dolore
                    </p>
                    <div
                        className='font-open-sans flex space-x-2 text-xs text-icon-color'
                    >
                        <p>
                            SQL Server
                        </p>
                        <p>
                            .NET
                        </p>
                        <p>
                            Excel
                        </p>
                    </div>
                </div>
            </a>
        </>
     );
}
 
export default CardProject;