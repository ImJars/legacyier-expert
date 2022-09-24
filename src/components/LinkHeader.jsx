import React from 'react'
import styled from 'styled-components';

const Link = styled.div`
display: grid;
justify-content: center;
    a {
        padding: 0.0em 0.8em;
        margin: 0.2em 0;
        display: inline-block;
        position: relative;
        margin-left: 5%;
        letter-spacing: .1rem;
    }
    
`


const LinkHeader = ({ textLink, link, classNames }) => {
    return ( 
        <>
            <Link>
                <a
                    href={ link }
                    className={`${classNames} text-icon-color font-open-sans text-base 
                                font-medium items-center hover:text-Color-Text-H3
                                transition duration-500 ease-in-out hover:-translate-y-1`}
                >
                    { textLink }
                </a>
            </Link>
        </>
     );
}
 
export default LinkHeader;