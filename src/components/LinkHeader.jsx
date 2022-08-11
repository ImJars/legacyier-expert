import React from 'react'
import styled from 'styled-components';

const LinkHeaderStyled = styled.a`
    background: linear-gradient(to bottom, #3549ff, #3549ff) 50% calc(100% - 2px) / 25px 2px no-repeat;
    color: #111;
    font: normal 600 20px / 1.35 "Work Sans", Helvetica, Arial, Verdana, sans-serif;
		margin: -1px;
    margin-bottom: -2px !important;
    padding: 1px 5px 5px 3px;
    text-decoration: none !important;

    -webkit-transition: all .35s ease-in-out;
            transition: all .35s ease-in-out;

    &:hover, :focus {
        background-size: 100% 2px;

    -webkit-transition: all .35s ease-in-out !important;
            transition: all .35s ease-in-out !important;
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