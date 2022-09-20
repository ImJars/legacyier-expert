import React from 'react'

const TabContent = ({ title, work, date, content }) => {
    return ( 
        <>
            <h1
                className='text-3xl font-bold text-black'
            >
                { title }
            </h1>
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
            <p
                className='text-base font-roboto mt-4'
            >
                { content }
            </p>
        </>
     );
}
 
export default TabContent;