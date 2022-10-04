import React from 'react';
import Title from './components/title';
import WorkComponent from './components/workComponent';
import WorkComponentTwo from './components/workComponentTwo';

const Work = () => {
    return ( 
        <>
            <div className='bg-Background text-white w-full h-screen'>
                <div className=''>
                    <Title 
                        text={'Some Things I’ve'}
                        gradientText={'Built'}
                    />
                </div>
                <div className='flex flex-col space-y-8'>
                    <div className='flex justify-center'>
                        <WorkComponent />
                    </div>
                    <div className='flex justify-center'>
                        <WorkComponentTwo />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Work;