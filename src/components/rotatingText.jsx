import React from 'react'
var ReactRotatingText = require('react-rotating-text');

const RotatingText = () => {
    return (
        <>
            <div className='flex text-xs mt-5'>
                <h1 className='font-roboto text-Color-Text-H4'>&#62; &nbsp;</h1>
                <ReactRotatingText 
                    className='font-roboto'
                    color='#E6E7E9'
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