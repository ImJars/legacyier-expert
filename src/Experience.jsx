import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TabContent from './components/tabContentExp';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
        width: 770px;
        height: 600px;
        padding: 30px 20px;
        overflow: hidden;
        .tab-header{
            float: left;
            width: 125px;
            height: 100%;
            border-right: 1px solid #bfa6ff;
        }
        .tab-header > div {
            margin-bottom: 15px;
            height: 50px;
            font-size: 16px;
            font-weight: 600;
            color: #A4A4A4;
            cursor: pointer;
            padding-left: 0px;
            display: grid;
            align-items: center;
        }
        .tab-header > div:hover,
        .tab-header > div.active {
            transition: all 500ms ease-in-out;
            color: #8150FF;
        }
        .tab-content{
            position: relative;
            height: 100%;
            overflow: hidden;
            visibility: hidden;
        }
        .tab-content > div {
            position: absolute;
            text-align: center;
            padding:10px 0px 0px 20px;
            opacity: 0;
            text-align: start;
            transition: all 600ms ease-in-out;
        }
        .tab-content > div.active {
            opacity: 1;
            visibility: visible;
            overflow-y: auto;
        }
        .tab-indicator {
            position: absolute;
            width: 4px;
            height: 50px;
            background: #8150FF;
            left: 143px;
            top: 30px;
            border-radius: 10px 10px 10px 10px;
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
            document.querySelector('.tab-indicator').style.top = '95px';
        } else if ( index === 3 ) {
            document.querySelector('.tab-indicator').style.top = '160px';
        } else if ( index === 4 ) {
            document.querySelector('.tab-indicator').style.top = '225px';
        } else if ( index === 5 ) {
            document.querySelector('.tab-indicator').style.top = '290px';
        }
    }

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    })
    const animationTitle = useAnimation();
    const animationContent = useAnimation();

    useEffect(() => {
        if (inView) {
            animationTitle.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring', duration: 2, delay: .02
                }
            });
            animationContent.start({
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring', duration: 2, delay: .06
                }
            });
        }
        if (!inView) {
            animationTitle.start({
                opacity: 0,
                y: '5vw',
            });
        }
        if (!inView) {
            animationContent.start({
                opacity: 0,
                y: '5vw',
            });
        }
    }, [inView, animationTitle, animationContent])
    
    return ( 
        <>
            <div ref={ ref } className='w-full flex justify-center bg-Background text-white'
            >
                <div className='max-w-240 grid content-center my-32 sm:mx-20 '>
                    <motion.h1
                        animate={ animationTitle }
                        className='opacity-0 text-center text-4xl font-open-sans font-bold 
                                    mb-5 mt-40 sm:mt-0'
                    >
                        Where I’ve&nbsp;
                        <font
                            className="text-transparent bg-clip-text bg-gradient-to-r
                                    from-Color-Text-H3 via-Color-Text-H1 to-Color-Text-H2
                                    font-open-sans font-bold"
                        >
                            Worked
                        </font>
                    </motion.h1>
                    <Tablas>
                        <motion.div animate={ animationContent } className="tabs opacity-0 font-open-sans">
                            <div className="tab-header">
                                <div
                                    onClick={() => changeTab(1)}
                                    className={tab === 1 ? 'active' : ''}
                                >
                                    Legacyier
                                </div>
                                <div
                                    onClick={() => changeTab(2)}
                                    className={tab === 2 ? 'active' : ''}
                                >
                                    Bliss DDM
                                </div>
                                <div
                                    onClick={() => changeTab(3)}
                                    className={tab === 3 ? 'active' : ''}
                                >
                                    UAEH
                                </div>
                                <div
                                    onClick={() => changeTab(4)}
                                    className={tab === 4 ? 'active' : ''}
                                >
                                    SQDesarrollo & Holcim Mexico
                                </div>
                                <div
                                    onClick={() => changeTab(5)}
                                    className={tab === 5 ? 'active' : ''}
                                >
                                    SQDesarrollo & Bonafont
                                </div>
                            </div>
                            <div className="tab-indicator">

                            </div>
                            <div className="tab-content">
                                <div className={tab === 1 ? 'active': ''}>
                                    <TabContent
                                        url={'https://www.instagram.com/legacyier_official/'}
                                        title={'Legacyier'}
                                        work={'Chief Executive Officer'}
                                        date={'Jan 2022 - Present'}
                                        contentOne={
                                            'I am the creator and administrator of the Legacyier name, my mission is to leave a mark where customers look for ease and an excellent experience when using one of our developments, so that new businesses can implement new technologies in a safe, simple and efficient way.'
                                        }
                                        contentTwo={
                                            'Legacyier is a startup dedicated to innovation and web creation, mainly focused on the world of technology. We are currently working on the implementation of web3 and blockchain, working for SMEs so that they are not left out of this great technology.'
                                        }
                                        contentThree={
                                            'Direct communication with clients/companies to understand their needs and be able to offer them the best possible solution, as well as the creation of new products and services.'
                                        }
                                    />
                                </div>
                                <div className={tab === 2 ? 'active': ''}>
                                    <TabContent
                                        url={'https://blissddm.xyz/es/'}
                                        title={'Bliss DDM'}
                                        work={'Web developer'}
                                        date={'Jan 2021 - Dec 2021'}
                                        contentOne={
                                            'I wrote modern and clean code, participated with the design and programming that is intuitive for the user, attractive for potential clients.'
                                        }
                                        contentTwo={
                                            'Work with a variety of technologies and platforms like JavaScript, React, Gatsby, NodeJS, Netlify, and Github.'
                                        }
                                        contentThree={
                                            'Communication with the staff in charge, satisfying all the requirements and at the same time learning new skills, giving progress reports on web development and working as a team.'
                                        }
                                    />
                                </div>
                                <div className={tab === 3 ? 'active': ''}>
                                    <TabContent
                                        url={'https://www.uaeh.edu.mx/'}
                                        title={'UAEH'}
                                        work={'Design and programming'}
                                        date={'Jan 2020 - Dec 2020'}
                                        contentOne={
                                            'I designed and wrote modern code in the development of a software project on version control, using the best programming practices.'
                                        }
                                        contentTwo={
                                            'Work with a variety of technologies and platforms like .Net and MySQL.'
                                        }
                                        contentThree={
                                            'I had a presentation of the project before the staff in charge, giving reports of the progress in the development and working as a team.'
                                        }
                                    />
                                </div>
                                <div className={tab === 4 ? 'active': ''}>
                                    <TabContent
                                        url={'https://sqdesarrollo.com.mx/'}
                                        title={'SQDesarrollo & Holcim Mexico'}
                                        work={'Design and programming'}
                                        date={'Jan 2019 - Dec 2019'}
                                        contentOne={
                                            'I designed, wrote and analyzed data in the development of a software project on a labor cost simulator in the projects of the Holcim Mexico company, using the best programming and data analysis practices.'
                                        }
                                        contentTwo={
                                            'Work with .NET and SQL Server technologies giving priority to the development and solution of the data import problem.'
                                        }
                                        contentThree={
                                            'I had a presentation of the project before the staff in charge, giving reports of the progress in the development and working as a team.'
                                        }
                                    />
                                </div>
                                <div className={tab === 5 ? 'active': ''}>
                                    <TabContent
                                        url={'https://sqdesarrollo.com.mx/'}
                                        title={'SQDesarrollo & Bonafont'}
                                        work={'Design and programming'}
                                        date={'Jan 2018 - Dec 2018'}
                                        contentOne={
                                            'Design, write and analyze data in the development of a software project on data management, analysis and calculation for the company Bonafont, using the best practices of design, programming and data analysis.'
                                        }
                                        contentTwo={
                                            'Work with the technology of Visual Basic, Excel and SQL Server giving priority to the development and detailed analysis of data.'
                                        }
                                        contentThree={
                                            'I had a presentation of the project before the staff in charge, giving reports of the progress in the development and working as a team.'
                                        }
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </Tablas>
                </div>
            </div>
        </>
     );
}
 
export default Experienc;