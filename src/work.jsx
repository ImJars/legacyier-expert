import React from 'react';
import Title from './components/title';

const Work = () => {
    return ( 
        <>
            <div className='w-full flex justify-center bg-Background text-white'>
                <div className='grid content-center mt-28 sm:my-32 sm:mx-20'>
                    <Title 
                        text={'Some Things I’ve'}
                        gradientText={'Built'}
                    />
                </div>
            </div>
        </>
     );
}
 
export default Work;