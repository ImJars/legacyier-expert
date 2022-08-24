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
  background-color: #8150FF;
  border-color: #8150FF;
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
                    <a href="">
                        <SiTwitter 
                            className='-rotate-90'
                        />
                    </a>
                    <a href="">
                        <SiInstagram 
                            className='-rotate-90'
                        />
                    </a>
                    <a href="">
                        <FiGithub 
                            className='-rotate-90'
                        />
                    </a>
                    <a href="">
                        <FaLinkedinIn 
                            className='-rotate-90'
                        />
                    </a>
                    <a href="">
                        <FaCodepen 
                            className='-rotate-90'
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