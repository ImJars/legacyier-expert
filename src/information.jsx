import React from 'react'
import { SiTwitter, SiInstagram } from 'react-icons/si'
import { FaCodepen, FaLinkedinIn } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'

import styled from 'styled-components';

const Section = styled.div`
  width: 80vw;
  @media (min-width: 640px) {
    width: 100vh;
  }
  .line {
    width: 90px;
  height: 0.5px;
  background-color: #A4A4A4;
  border-color: #A4A4A4;
}
`

const Information = () => {
    return ( 
        <>
            <Section
                className="fixed text-Color-Text-H4 flex justify-end transform left-auto 
                        rotate-90 -translate-y-3 translate-x-10 origin-left"
                orientation="left"
            >
                <div className='grid grid-cols-5 gap-x-6'>
                    <a 
                        href="https://twitter.com/Im_Jars"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiTwitter 
                            className='h-5 w-5 -rotate-90 text-icon-color transition 
                            ease-in-out hover:-translate-x-1 hover:text-Color-Text-H3 
                            duration-200'
                        />
                    </a>
                    <a 
                        href="https://www.instagram.com/jars.little/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiInstagram 
                            className='h-5 w-5 -rotate-90 text-icon-color transition 
                            ease-in-out hover:-translate-x-1 hover:text-Color-Text-H3 
                            duration-200'
                        />
                    </a>
                    <a 
                        href="https://github.com/ImJars"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiGithub 
                            className='h-5 w-5 -rotate-90 text-icon-color transition 
                            ease-in-out hover:-translate-x-1 hover:text-Color-Text-H3 
                            duration-200'
                        />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/angel-ramirez-08468212b/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn 
                            className='h-5 w-5 -rotate-90 text-icon-color transition 
                            ease-in-out hover:-translate-x-1 hover:text-Color-Text-H3 
                            duration-200'
                        />
                    </a>
                    <a 
                        href="https://codepen.io/Im_Jars"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaCodepen 
                            className='h-5 w-5 -rotate-90 text-icon-color transition 
                            ease-in-out hover:-translate-x-1 hover:text-Color-Text-H3 
                            duration-200'
                        />
                    </a>
                </div>
                <div className='grid content-center ml-5' >
                    <hr className='line'/>
                </div>
            </Section>
        </>
     );
}
 
export default Information;