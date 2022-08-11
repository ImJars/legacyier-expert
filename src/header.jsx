import React from 'react'
import LinkHeader from './components/LinkHeader';

const Header = () => {
    return ( 
        <>
            <div className='w-full h-16 flex 
                            justify-between'
            >
                <div className='grid content-center'>
                    <h1>Espacio en blanco</h1>
                </div>
                <div className='grid content-center mr-10'>
                    <ol className='flex'>
                        <LinkHeader href='#' textLink={'Home'}/>
                        <LinkHeader href='#' textLink={'About'}/>
                        <LinkHeader href='#' textLink={'Portafolio'}/>
                        <LinkHeader href='#' textLink={'Contact'}/>
                    </ol>
                </div>

            </div>
        </>
     );
}
 
export default Header;