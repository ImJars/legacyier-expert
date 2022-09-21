import React from 'react'

const TabContent = ({ url, title, work, date, contentOne, contentTwo, contentThree }) => {
    return ( 
        <>
            <a
                className='text-3xl font-bold text-black'
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
                    <p className='text-black'>
                        { contentOne }
                    </p>
                </font>
            </h1>
            <h1>
                <font className='flex font-roboto text-Color-Text-H3'>
                    &#x25B8;&nbsp;
                    <p className='text-black'>
                        { contentTwo }
                    </p>
                </font>
            </h1>
            <h1>
                <font className='flex font-roboto text-Color-Text-H3'>
                    &#x25B8;&nbsp;
                    <p className='text-black'>
                        { contentThree }
                    </p>
                </font>
            </h1>
        </>
     );
}
 
export default TabContent;