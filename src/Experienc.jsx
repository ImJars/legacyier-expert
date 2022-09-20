import React, { useState } from 'react';
import styled from 'styled-components';
import TabContent from './components/tabContentExp';

const Tablas = styled.div`
    display: flex;
    justify-content: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none; 

@media screen and (max-width: 768px) {
    overflow: hidden;
}

    .tabs {
        position: relative;
        width: 680px;
        height: 460px;
        padding: 30px 20px;
        overflow: hidden;
        .tab-header{
            float: left;
            width: 125px;
            height: 100%;
            border-right: 1px solid #bfa6ff;
        }
        .tab-header > div {
            margin-bottom: 5px;
            height: 50px;
            font-size: 16px;
            font-weight: 600;
            color: #888;
            cursor: pointer;
            padding-left: 0px;
        }
        .tab-header > div:hover,
        .tab-header > div.active {
            transition: all 500ms ease-in-out;
            color: #8150FF;
        }
        .tab-header > div i{
            display: inline-block;
        }
        .tab-content{
            position: relative;
            height: 100%;
            overflow: hidden;
        }
        .tab-content > div {
            position: absolute;
            text-align: center;
            padding:0px 0px 0px 10px;
            opacity: 0;
            text-align: justify;
            transition: all 300ms ease-in-out;
        }
        .tab-content > div.active {
            opacity: 1;
        }
        .tab-indicator {
            position: absolute;
            width: 4px;
            height: 50px;
            background: #8150FF;
            left: 143px;
            top: 30px;
            transition: all 500ms ease-in-out;
        }
    }
`
const Experienc = () => {
    const [tab, setTab] = useState(1);
    function changeTab(index) {
        setTab(index);
        if ( index === 1 ) {
            document.querySelector('.tab-indicator').style.top = '20px';
        } else if ( index === 2 ) {
            document.querySelector('.tab-indicator').style.top = '70px';
        } else if ( index === 3 ) {
            document.querySelector('.tab-indicator').style.top = '130px';
        } else if ( index === 4 ) {
            document.querySelector('.tab-indicator').style.top = '190px';
        } else if ( index === 5 ) {
            document.querySelector('.tab-indicator').style.top = '250px';
        }
        console.log(index);
    }
    return ( 
        <>
            <div className='w-full h-screen grid content-center 
                            justify-center'
            >
                <h1
                    className='text-center text-4xl font-roboto font-bold 
                    text-gray-800 mb-5 mt-40 sm:mt-0'
                >
                    Where I’ve&nbsp;
                    <font
                        className="text-transparent bg-clip-text bg-gradient-to-r
                                from-Color-Text-H3 via-Color-Text-H1 to-Color-Text-H2
                                font-roboto font-bold"
                    >
                        Worked
                    </font>
                </h1>
                <Tablas>
                    <div className="tabs">
                        <div className="tab-header">
                            <div
                                onClick={() => changeTab(1)}
                                className={tab === 1 ? 'active' : ''}
                            >
                                <i className='fa fa-code'></i>Legacyier
                            </div>
                            <div
                                onClick={() => changeTab(2)}
                                className={tab === 2 ? 'active' : ''}
                            >
                                <i className='fa fa-pencil'></i>Bliss DDM
                            </div>
                            <div
                                onClick={() => changeTab(3)}
                                className={tab === 3 ? 'active' : ''}
                            >
                                <i className='fa fa-chart'></i>UAEH
                            </div>
                            <div
                                onClick={() => changeTab(4)}
                                className={tab === 4 ? 'active' : ''}
                            >
                                <i className='fa fa-envelope'></i>SQDesarrollo & Holcim Mexico
                            </div>
                            <div
                                onClick={() => changeTab(5)}
                                className={tab === 5 ? 'active' : ''}
                            >
                                <i className='fa fa-envelope'></i>SQDesarrollo & Bonafont
                            </div>
                        </div>
                        <div className="tab-indicator">

                        </div>
                        <div className="tab-content">
                            <div className={tab === 1 ? 'active': ''}>
                                <TabContent 
                                    title={'Legacyier'}
                                    work={'Chief Executive Officer'}
                                    date={'Jan 2022 - Present'}
                                    content={'Legacyier is a company that offers services in the area of ​​software development, web design, web hosting, web maintenance, web positioning, among others. I was in charge of the development of the web page, the design of the logo and the design of the web page. I also did the web hosting and the web positioning of the page.'}
                                />
                            </div>
                            <div className={tab === 2 ? 'active': ''}>
                                <h1>This is a About section</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur 
                                    adipisicing elit. Beatae delectus atque sunt, 
                                    aut maiores obcaecati incidunt! Placeat, eius? 
                                    Fugit pariatur maiores soluta non quos eos eligendi 
                                    numquam ex tempore a?
                                </p>
                            </div>
                            <div className={tab === 3 ? 'active': ''}>
                                <h1>This is a services section</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur 
                                    adipisicing elit. Beatae delectus atque sunt, 
                                    aut maiores obcaecati incidunt! Placeat, eius? 
                                    Fugit pariatur maiores soluta non quos eos eligendi 
                                    numquam ex tempore a?
                                </p>
                            </div>
                            <div className={tab === 4 ? 'active': ''}>
                                <h1>This is a contact section</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur 
                                    adipisicing elit. Beatae delectus atque sunt, 
                                    aut maiores obcaecati incidunt! Placeat, eius? 
                                    Fugit pariatur maiores soluta non quos eos eligendi 
                                    numquam ex tempore a?
                                </p>
                            </div>
                            <div className={tab === 5 ? 'active': ''}>
                                <h1>This is a SQDesarrollo section</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur 
                                    adipisicing elit. Beatae delectus atque sunt, 
                                    aut maiores obcaecati incidunt! Placeat, eius? 
                                    Fugit pariatur maiores soluta non quos eos eligendi 
                                    numquam ex tempore a?
                                </p>
                            </div>
                        </div>
                    </div>
                </Tablas>
            </div>
        </>
     );
}
 
export default Experienc;