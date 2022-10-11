import React from 'react'
import { FiGitBranch } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';

const Contact = () => {
    return ( 
        <>
            <div
                className="w-full min-h-750 bg-Background 
                        text-white flex flex-col justify-center items-center"
            >
                <div
                    className='flex flex-col mx-5'
                >
                    <div
                    className='text-center'
                    >
                        <h2
                            className='font-open-sans text-sm tracking-widest
                                    text-Color-Text-H1 mb-2'
                        >
                            What’s Next?
                        </h2>
                        <h1
                            className='text-Color-Text-H4 font-open-sans
                                    font-bold text-2xl sm:text-4xl'
                        >
                            Get In Touch
                        </h1>
                        <p
                            className='text-text-mini font-open-sans
                                    mb-14 mt-6 max-w-lg'
                        >
                        I am always looking for new opportunities to 
                        further develop my skills. My inbox is always open. 
                        Whether you have a question or just want to say hi, 
                        I’ll try my best to get back to you!
                        </p>
                        <a 
                            href="mailto:hi.legacyier@gmail.com"
                            
                        >
                            <button 
                                className='border border-Color-Text-H3 px-8 py-3
                                rounded-lg text-Color-Text-H3 font-open-sans
                                hover:bg-Color-Text-H3 hover:text-white transition
                                duration-500 ease-in-out'
                            >
                                Say Hello!
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <footer 
                className='w-full h-10 font-open-sans bg-Background text-text-mini
                        flex justify-center items-center text-xs tracking-wider'
            >
                    <a
                        href='https://github.com/ImJars'
                        target='_blank'
                        rel='noreferrer'
                        className='mb-14 hover:text-Color-Text-H1 transition
                                duration-500 ease-in-out'
                    >
                        <h1>
                            Designed & Built by Angel Ramirez
                        </h1>
                        <h2
                            className='flex justify-center items-center mt-2 space-x-1'
                        >
                            <AiOutlineStar 
                                className='w-3 h-3'
                            />
                            <FiGitBranch 
                                className='w-3 h-3'
                            />
                            <font>
                                ImJars
                            </font>
                        </h2>
                    </a>
            </footer>
        </>
     );
}
 
export default Contact;