import React from 'react'
import CardProject from './components/cardProject';

const OtherWorks = () => {
    return ( 
        <>
            <div
                className='bg-Background text-white w-full h-screen flex justify-center'
            >
                <div className='max-w-240 flex flex-col mx-5 sm:mx-20'>
                    <div className='mb-14 sm:mb-36'>
                        <h1
                            className='text-center text-2xl sm:text-4xl font-open-sans 
                                    font-bold'
                        >
                            Other Noteworthy&nbsp;
                            <font
                                className="text-transparent bg-clip-text bg-gradient-to-r
                                        from-Color-Text-H3 via-Color-Text-H1 to-Color-Text-H2
                                        font-bold font-open-sans"
                            >
                                Projects
                            </font>
                        </h1>
                    </div>
                    <div>
                        <div 
                            className='grid md:grid-cols-2 lg:grid-cols-3'
                        >
                            <CardProject />
                            <CardProject />
                            <CardProject />
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default OtherWorks;