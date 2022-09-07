import React from 'react';
import Header from './components/headerMenu';
import Link from './components/LinkHeader';

const Menu = () => {
    return ( 
        <>
            <div className='bg-Background w-full fixed z-10'>
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
                            link={'#Home'}
                        />
                        <Link
                            textLink={'About'}
                            link={'#About'}
                        />
                        <Link
                            textLink={'Experience'}
                            link={'#Experience'}
                        />
                        <Link
                            textLink={'Work'}
                            link={'#Work'}
                        />
                        <Link
                            textLink={'Contact'}
                            link={'#Contact'}
                        />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Menu;