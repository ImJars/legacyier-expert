import React from 'react'
import styled from 'styled-components';

const LinkHeaderStyled = styled.a`
    color: black;
	background-image: linear-gradient(to bottom, transparent 65%, #3963ec 0);
	background-size: 0% 100%;
	background-repeat: no-repeat;
	transition: background-size .4s ease;

    &:hover {
        background-size: 100% 100%;
	    cursor: pointer;
    }
`

const LinkHeader = ({ textLink }) => {
    return ( 
        <>
            <li className='mr-10 text-xl'>
                <LinkHeaderStyled href="">{ textLink }</LinkHeaderStyled>
            </li>
            
        </>
     );
}
 
export default LinkHeader;