import React from 'react'

const TabContent = ({ url, title, work, date, contentOne, contentTwo, contentThree }) => {
    return ( 
        <>
            <a
                className='text-xl font-bold text-white font-open-sans
                            hover:text-Color-Text-H3 hover:duration-700'
                href={ url }
                target='_blank'
                rel='noopener noreferrer'
            >
                { title }
            </a>
            <h2
                className='text-base sm:text-base font-bold text-Color-Text-H1'
            >
                { work }
            </h2>
            <h3
                className='text-xs sm:text-sm font-bold text-Color-Text-H3 mb-1'
            >
                { date }
            </h3>
            <h1>
                <font className='flex text-Color-Text-H3 text-xs sm:text-sm font-open-sans'>
                    &#x25B8;&nbsp;
                    <p className='text-white'>
                        { contentOne }
                    </p>
                </font>
            </h1>
            <h1>
                <font className='flex text-Color-Text-H3 text-xs sm:text-sm font-open-sans mt-1 sm:mt-2'>
                    &#x25B8;&nbsp;
                    <p className='text-white'>
                        { contentTwo }
                    </p>
                </font>
            </h1>
            <h1>
                <font className='flex text-Color-Text-H3 text-xs sm:text-sm font-open-sans mt-1 sm:mt-2'>
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