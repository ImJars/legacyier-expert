import React from 'react'
import styled from 'styled-components';

const LinkHeaderStyled = styled.a`
    background: linear-gradient(to left, rgba(255,255,255,0)
         50%, #4BBAFA 50%) 100% 98% / 220% 2px no-repeat, 
         linear-gradient(to right, rgba(255,255,255,0) 50%, 
         #4BBAFA 50%) 0% 0% / 220% 2px no-repeat;
    color: #000000;
    cursor: pointer !important;
	padding: 5px 2px;
    transition: all .35s ease-in-out;

    &:hover, :focus {
        background-position: 0 98%, 100% 0;
        color: #000;
        outline: none;
        transition: all .35s ease-in-out;
    }
`

const LinkHeader = ({ textLink, link }) => {
    return ( 
        <>
            <li className='mr-10 text-xl font-bold '>
                <LinkHeaderStyled 
                    href={ link }
                    target='_blank'
                >
                    { textLink }
                </LinkHeaderStyled>
            </li>
            
        </>
     );
}
 
export default LinkHeader;