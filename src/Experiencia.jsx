import React from 'react';
import styled from 'styled-components';

const Table = styled.div`
    .tab{
        width: 680px;
        height: 360px;
        margin: 30px 20px 20px 30px;
        background: #f5f5f5;
        box-shadow: 5px 5px 10px 5px #ccc;
        overflow: hidden;
    }
    .tab-header{
        float: left;
        width: 180px;
        height: 350px;
        border-right: 1px solid #ccc;
        line-height: 25px;
        display: grid;
        grid-template-columns: 1fr;
        }
    .tab-header > div {
        height: auto;
        line-height: 25px;
        font-weight: 600;
        color: #888;
        cursor: pointer;
        padding-left: 10px;
        padding-right: 10px;
        }
        .tab-header > div:hover,
        .tab-header > div.active {
            color: #00acee;
        }
        .tab-header > div h1{
            display: inline-block;
            margin-left: 10px;
            margin-right: 5px;
        }
        .tab-content{
            position: relative;
            height: 100%;
            overflow: hidden;
        }
        .tab-content > div > h1 {
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
`

const Experiencia = () => {
    return ( 
        <>
            <div className='w-full h-screen'>
                <h1
                    className='text-center text-4xl font-roboto font-bold 
                    text-gray-800 mb-10'
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
                <Table>
                    <div className="tab">
                        <div className="tab-header">
                            <div className='active'>
                                <h1>Legacyier</h1>
                            </div>
                            <div>
                                <h1>Bliss DDM</h1>
                            </div>
                            <div>
                                <h1>UAEH</h1>
                            </div>
                            <div>
                                <h1>SQDesarrollo & Holcim Mexico</h1>
                            </div>
                            <div>
                                <h1>SQDesarrollo & Bonafont</h1>
                            </div>
                        </div>
                        <div className="tab-indicator"></div>
                        <div className="tab-content">
                            <div className='active'>
                                <h1>
                                    Legacyier
                                </h1>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur 
                                    adipisicing elit. Exercitationem mollitia 
                                    reprehenderit ipsa voluptatum eligendi 
                                    officia quas, nisi ut consequatur molestias 
                                    omnis nostrum delectus minima unde rerum tempora 
                                    recusandae tenetur repellat.
                                </p>
                            </div>
                            <div>
                                <h1>
                                    Bliss DDM
                                </h1>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur 
                                    adipisicing elit. Exercitationem mollitia 
                                    reprehenderit ipsa voluptatum eligendi 
                                    officia quas, nisi ut consequatur molestias 
                                    omnis nostrum.
                                </p>
                            </div>
                            <div>
                                <h1>
                                    UAEH
                                </h1>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur 
                                    adipisicing elit. Exercitationem mollitia 
                                    reprehenderit ipsa voluptatum eligendi 
                                    officia quas, nisi ut consequatur.
                                </p>
                            </div>
                            <div>
                                <h1>
                                    SQDesarrollo & Holcim Mexico
                                </h1>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur 
                                    adipisicing elit. Exercitationem mollitia 
                                    reprehenderit ipsa voluptatum .
                                </p>
                            </div>
                            <div>
                                <h1>
                                    SQDesarrollo & Bonafont
                                </h1>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur 
                                    adipisicing elit. Exercitationem mollitia 
                                    reprehenderit ipsa voluptatum eligendi 
                                    officia quas, nisi ut consequatur molestias 
                                    omnis nostrum delectus minima unde rerum tempora 
                                    recusandae tenetur repellat.
                                </p>
                            </div>
                        </div>
                    </div>
                </Table>
            </div>
        </>
     );
}
 
export default Experiencia;