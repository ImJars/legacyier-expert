import React from 'react';
import Title from './components/title';

const Work = () => {
    return ( 
        <>
            <div className='bg-Background w-full'>
                <div className='min-h-750 flex justify-center mx-20'>
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