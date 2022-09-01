import React from 'react';
import Header from './components/headerMenu';
import Link from './components/LinkHeader';

const Menu = () => {
    return ( 
        <>
            <div className='bg-Background w-full fixed'>
                <div className='flex justify-between'>
                    <div>
                        <Header />
                    </div>
                    <div
                        className='invisible sm:visible h-20 text-white grid grid-cols-5 
                                content-center mr-20'
                    >
                        <Link
                            textLink={'Home'}
                            link={'#'}
                        />
                        <Link
                            textLink={'About'}
                            link={'#'}
                        />
                        <Link
                            textLink={'Experience'}
                            link={'#'}
                        />
                        <Link
                            textLink={'Work'}
                            link={'#'}
                        />
                        <Link
                            textLink={'Contact'}
                            link={'#'}
                        />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Menu;