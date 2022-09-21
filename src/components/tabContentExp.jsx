import React from 'react'

const TabContent = ({ url, title, work, date, contentOne, contentTwo, contentThree }) => {
    return ( 
        <>
            <a
                className='text-3xl font-bold text-white font-roboto'
                href={ url }
                target='_blank'
                rel='noopener noreferrer'
            >
                { title }
            </a>
            <h2
                className='text-xl font-bold text-Color-Text-H1'
            >
                { work }
            </h2>
            <h3
                className='text-xs font-bold text-Color-Text-H3'
            >
                { date }
            </h3>
            <h1>
                <font className='flex font-roboto text-Color-Text-H3'>
                    &#x25B8;&nbsp;
                    <p className='text-white'>
                        { contentOne }
                    </p>
                </font>
            </h1>
            <h1>
                <font className='flex font-roboto text-Color-Text-H3'>
                    &#x25B8;&nbsp;
                    <p className='text-white'>
                        { contentTwo }
                    </p>
                </font>
            </h1>
            <h1>
                <font className='flex font-roboto text-Color-Text-H3'>
                    &#x25B8;&nbsp;
                    <p className='text-white'>
                        { contentThree }
                    </p>
                </font>
            </h1>
        </>
     );
}
 
export default TabContent;