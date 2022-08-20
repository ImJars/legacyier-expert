import React from 'react'
var ReactRotatingText = require('react-rotating-text');

const RotatingText = () => {
    return (
        <>
            <div className='flex'>
                <h1 className='font-thin text-base text-Color-Text-H3'>&#62;</h1>
                <ReactRotatingText 
                    className='font-thin text-base'
                    color='#8150FF'
                    items={[` I'm Software developer 💻`,
                    ` UX / UI developer 👨‍💻`,
                    ` Professional designer 📐`,
                    ` Cryptocurrency investor ₿ 🪙`,
                    ` Competitive gamer 🏆`,
                ]}/>
            </div>
        </>
     );
}
 
export default RotatingText;