import React from 'react'
var ReactRotatingText = require('react-rotating-text');

const RotatingText = () => {
    return (
        <>
            <div className='flex text-xs mt-5'>
                <h1 className='font-open-sans text-Color-Text-H1 font-bold'>&nbsp; &#60;&nbsp;</h1>
                <ReactRotatingText 
                    className='font-open-sans'
                    color='#E6E7E9'
                    items={[` I'm Software developer 💻`,
                    ` UX / UI developer 👨‍💻`,
                    ` Professional designer 📐`,
                    ` Cryptocurrency investor ₿ 🪙`,
                    ` Competitive gamer 🏆`,
                ]}/>
                <h1 className='font-open-sans text-Color-Text-H1 font-bold'>&#47;&#62;</h1>

            </div>
        </>
     );
}
 
export default RotatingText;