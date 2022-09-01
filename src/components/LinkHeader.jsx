import React from 'react'
import styled from 'styled-components';

const Link = styled.div`
display: grid;
justify-content: center;
    a {
        padding: 0.0em 0.8em;
        margin: 0.2em 0;
        display: inline-block;
        color: #E6E7E9;
        position: relative;
        text-decoration: none;
        margin-left: 5%;
        letter-spacing: .15rem;
    }
    a:before,
    a:after {
        height: 14px;
        width: 14px;
        position: absolute;
        content: "";
        -webkit-transition: all 0.35s ease;
        transition: all 0.35s ease;
        opacity: 0;
    }
    a:before {
        left: 0;
        top: -30%;
        border-left: 3px solid #8150FF;
        border-top: 3px solid #8150FF;
        -webkit-transform: translate(100%, 50%);
        transform: translate(100%, 50%);
        }
    a:after {
        right: 0;
        bottom: -30%;
        border-right: 3px solid #8150FF;
        border-bottom: 3px solid #8150FF;
        -webkit-transform: translate(-100%, -50%);
        transform: translate(-100%, -50%);
    }
    a:hover {
        -webkit-transition: all 0.35s ease;
        transition: all 0.35s ease;
        color: #8150FF;
    }
    a:hover:before,
    a:hover:after{
        -webkit-transform: translate(0%, 0%);
        transform: translate(0%, 0%);
        opacity: 1;
    }

    
`


const LinkHeader = ({ textLink, link }) => {
    return ( 
        <>
            <Link>
                <a
                    href={ link }
                    className="link4 font-roboto font-bold items-center"
                >
                    { textLink }
                </a>
            </Link>
        </>
     );
}
 
export default LinkHeader;