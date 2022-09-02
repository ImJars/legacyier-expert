import React from 'react'
import CardWork from './components/cardWork';

const Work = () => {
    return ( 
        <>
        <div id='Work' className='w-full flex justify-start'>
            <div className='min-h-750 max-w-240'>
                <div>
                    <CardWork />
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Work;