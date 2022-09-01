import React from 'react';
import Header from './components/headerMenu';

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
                                content-center mr-20 list-none'
                    >
                        <li>
                            Home
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Experience
                        </li>
                        <li>
                            Work
                        </li>
                        <li>
                            Contact
                        </li>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Menu;