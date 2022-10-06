import React from 'react';
import { AiFillFolderOpen} from 'react-icons/ai';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const CardProject = () => {
    return ( 
        <>
            <div>
                <div className='flex justify-between'>
                    <AiFillFolderOpen />
                    <div className='flex space-x-2'>
                        <a href="#">
                            <FiGithub />
                        </a>
                        <a href="#">
                            <FiExternalLink />
                        </a>
                    </div>
                </div>
                <div>
                    <h1 
                        className='font-open-sans font-bold text-xl 
                                text-Color-Text-H4'
                    >
                        Title Project
                    </h1>
                    <p
                        className='font-open-sans text-md text-Color-Text-H4'
                    >
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Nisi animi, cum velit ad 
                        quidem omnis consequuntur dolore
                    </p>
                    <div
                        className='flex space-x-2 text-xs'
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
            </div>
        </>
     );
}
 
export default CardProject;