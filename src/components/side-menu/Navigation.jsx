import React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from '../side-menu/MenuItem';
import { ButtonCV } from '../side-menu/button-cv';

const itemsIds = [0, 1, 2, 3];
const itemIDs = [0];

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
      },
      closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
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
            </motion.ul>
        </>
     );
 
export default Navigation;