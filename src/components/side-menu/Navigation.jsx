import React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from '../side-menu/MenuItem';
import { ButtonCV } from '../side-menu/button-cv';
import { Icons } from '../side-menu/icons';

const itemsIds = [0, 1, 2, 3];
const itemIDs = [0];
const iconsIDs = [0, 1, 2, 3, 4];

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
      },
      closed: {
        transition: { staggerChildren: 0.01, staggerDirection: -1 }
      }
};

export const Navigation = ( { handleClick }) => ( 
        <>
            <motion.ul variants={ variants }>
                {itemsIds.map(i => (
                    <MenuItem handleClick={ handleClick } i={i} key={i} />
                ))}
                {itemIDs.map(i => (
                    <ButtonCV handleClick={ handleClick } i={i} key={i} />
                ))}
                <div className={'flex mt-10 justify-center space-x-2'}>
                    {iconsIDs.map(i => (
                        <Icons handleClick={ handleClick } i={i} key={i} />
                    ))}
                </div>
            </motion.ul>
        </>
     );
 
export default Navigation;