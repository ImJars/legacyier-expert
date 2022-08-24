import React from 'react';
import { DiReact, DiNodejs, DiJavascript1, DiAngularSimple } from 'react-icons/di';
import { SiSolidity, SiTailwindcss, SiFirebase, SiRust } from 'react-icons/si';

const DevelopmentIcons = () => {
    return ( 
        <>
            <div className='grid grid-cols-4 sm:grid-cols-8'>
                <a
                    className='flex justify-center my-2 sm:my-0' 
                    href="https://es.reactjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <DiReact 
                        className='h-20 w-20 text-icon-color transition 
                                    ease-in-out hover:scale-125 duration-200' 
                    />
                </a>
                <a 
                    className='flex justify-center my-2 sm:my-0' 
                    href="https://angular.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <DiAngularSimple 
                        className='h-20 w-20 text-icon-color transition 
                                    ease-in-out hover:scale-125 duration-200' 
                    />
                </a>
                <a 
                    className='flex justify-center my-2 sm:my-0'
                    href="https://www.javascript.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <DiJavascript1 
                        className='h-20 w-20 text-icon-color transition 
                                    ease-in-out hover:scale-125 duration-200' 
                    />
                </a>
                <a 
                    className='flex justify-center my-2 sm:my-0' 
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SiTailwindcss 
                        className='h-20 w-20 text-icon-color transition 
                                    ease-in-out hover:scale-125 duration-200º' 
                    />
                </a>
                <a 
                    className='flex justify-center my-2 sm:my-0' 
                    href="https://nodejs.org/es/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <DiNodejs 
                        className='h-20 w-20 text-icon-color transition 
                                    ease-in-out hover:scale-125 duration-200' 
                    />
                </a>
                <a 
                    className='flex justify-center my-2 sm:my-0' 
                    href="https://firebase.google.com/?hl=es/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SiFirebase 
                        className='h-20 w-20 text-icon-color transition 
                                    ease-in-out hover:scale-125 duration-200' 
                    />
                </a>
                <a 
                    className='flex justify-center my-2 sm:my-0' 
                    href="https://docs.soliditylang.org/en/v0.8.16/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SiSolidity 
                        className='h-20 w-20 text-icon-color transition 
                                    ease-in-out hover:scale-125 duration-200º' 
                    />
                </a>
                <a 
                    className='flex justify-center my-2 sm:my-0' 
                    href="https://www.rust-lang.org/es"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SiRust 
                        className='h-20 w-20 text-icon-color transition 
                                    ease-in-out hover:scale-125 duration-200º' 
                    />
                </a>
            </div>
        </>
     );
}
 
export default DevelopmentIcons;