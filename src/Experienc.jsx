import React, { useState } from 'react';
import styled from 'styled-components';

const Tablas = styled.div`
    .tabs {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 680px;
        height: 360px;
        padding: 30px 20px;
        background: #f5f5f5;
        box-shadow: 5px 5px 10px 5px #ccc;
        overflow: hidden;
        .tab-header{
            float: left;
            width: 180px;
            height: 100%;
            border-right: 1px solid #ccc;
        }
        .tab-header > div {
            height: 50px;
            line-height: 50px;
            font-size: 16px;
            font-weight: 600;
            color: #888;
            cursor: pointer;
            padding-left: 10px;
        }
        .tab-header > div:hover,
        .tab-header > div.active {
            color: #00acee;
        }
        .tab-header > div i{
            display: inline-block;
            margin-left: 10px;
            margin-right: 5px;
        }
        .tab-content{
            position: relative;
            height: 100%;
            overflow: hidden;
        }
        .tab-content > div > i {
            display: inline-block;
            width: 50px;
            height: 50px;
            background: #555;
            color: #f5f5f5;
            font-size: 25px;
            font-weight: 600;
            text-align: center;
            line-height: 50px;
            border-radius: 50%;
        }
        .tab-content > div {
            position: absolute;
            text-align: center;
            padding: 40px 20px;
            top: -200%;
            transition: all 500ms ease-in-out;
        }
        .tab-content > div.active {
            top: 0px;
        }
        .tab-indicator {
            position: absolute;
            width: 4px;
            height: 50px;
            background: #00acee;
            left: 198px;
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
            document.querySelector('.tab-indicator').style.top = '30px';
        } else if ( index === 2 ) {
            document.querySelector('.tab-indicator').style.top = '80px';
        } else if ( index === 3 ) {
            document.querySelector('.tab-indicator').style.top = '130px';
        } else if ( index === 4 ) {
            document.querySelector('.tab-indicator').style.top = '180px';
        } 
        console.log(index);
    }
    return ( 
        <>
            <div className='w-full h-screen grid content-center justify-center'>
                <Tablas>
                    <div className="tabs">
                        <div className="tab-header">
                            <div
                                onClick={() => changeTab(1)}
                                className={tab === 1 ? 'active' : ''}
                            >
                                <i className='fa fa-code'></i>Code
                            </div>
                            <div
                                onClick={() => changeTab(2)}
                                className={tab === 2 ? 'active' : ''}
                            >
                                <i className='fa fa-pencil'></i>About
                            </div>
                            <div
                                onClick={() => changeTab(3)}
                                className={tab === 3 ? 'active' : ''}
                            >
                                <i className='fa fa-chart'></i>Services
                            </div>
                            <div
                                onClick={() => changeTab(4)}
                                className={tab === 4 ? 'active' : ''}
                            >
                                <i className='fa fa-envelope'></i>Contact
                            </div>
                        </div>
                        <div className="tab-indicator">

                        </div>
                        <div className="tab-content">
                            <div className={tab === 1 ? 'active': ''}>
                                <h1>This is a code section</h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur 
                                    adipisicing elit. Beatae delectus atque sunt, 
                                    aut maiores obcaecati incidunt! Placeat, eius? 
                                    Fugit pariatur maiores soluta non quos eos eligendi 
                                    numquam ex tempore a?
                                </p>
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
                        </div>
                    </div>
                </Tablas>
            </div>
        </>
     );
}
 
export default Experienc;