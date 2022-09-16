import React, { useState } from 'react';
import styled from 'styled-components';

const Tablas = styled.div`
    .bloc-tabs {
        display: flex;
    }
    .tabs {
        padding: 15px;
        text-align: center;
        width: 50%;
        background: rgba(128, 128, 128, 0.075);
        cursor: pointer;
        border-bottom: 1px solid rgba(0, 0, 0, 0.274);
        box-sizing: content-box;
        position: relative;
        outline: none;
        }
    .tabs:not(:last-child){
        border-right: 1px solid rgba(0, 0, 0, 0.274);
    }

    .active-tabs  {
        background: white;
        border-bottom: 1px solid transparent;
    }

    .active-tabs::before {
        content: "";
        display: block;
        position: absolute;
        top: -5px;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100% + 2px);
        height: 5px;
        background: rgb(88, 147, 241);
    }



    button {
        border: none;

    }
    .content-tabs {
        flex-grow : 1;
    }
    .content {
        background: white;
        padding: 20px;
        width: 100%;
        height: 100%;
        display: none;
    }
    .content h2 {
        padding: 0px 0 5px 0px;
    }
    .content hr {
        width: 100px;
        height: 2px;
        background: #222;
        margin-bottom: 5px;
    }
    .content p {
        width: 100%;
        height: 100%;
    }
    .active-content {
        display: block;
        transition: all 0.5s ease-in-out;
    }
`

const Experience = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return ( 
        <>
            <Tablas className='w-full h-screen'>
                <div className="container">
                    <div className="bloc-tabs">
                        <div
                            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(1)}
                        >
                            Legacyier
                        </div>
                        <div 
                            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}
                        >
                            Bliss DDM
                        </div>
                        <div 
                            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(3)}
                        >
                            UAEH
                        </div>
                    </div>
                    <div className="content-tabs">
                        <div className={toggleState === 1 ? 'content active-content opacity-100 transition duration-500' : 'content opacity-0 transition duration-500'}>
                            <h1>Legacyier</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Deserunt architecto quas 
                                ullam id enim possimus accusamus quidem 
                                exercitationem perspiciatis quos error quia 
                                aut, nobis sequi quod. Iure ullam ex dolores!
                            </p>
                        </div>
                        <div className={toggleState === 2 ? 'content active-content opacity-100 transition duration-500' : 'content opacity-0 transition duration-500'}>
                            <h1>Bliss DDM</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Deserunt architecto quas 
                                ullam id enim possimus accusamus quidem 
                                exercitationem perspiciatis quos error quia 
                                aut, nobis sequi quod. Iure ullam ex dolores!
                            </p>
                        </div>
                        <div className={toggleState === 3 ? 'content active-content opacity-100 transition duration-500' : 'content opacity-0 transition duration-500'}>
                            <h1>UAEH</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Deserunt architecto quas 
                                ullam id enim possimus accusamus quidem 
                                exercitationem perspiciatis quos error quia 
                                aut, nobis sequi quod. Iure ullam ex dolores!
                            </p>
                        </div>
                    </div>
                </div>
            </Tablas>
        </>
     );
}
 
export default Experience;