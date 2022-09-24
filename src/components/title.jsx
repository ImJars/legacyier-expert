import React from 'react'

const Title = ({ text, gradientText}) => {
    return ( 
        <>
            <h1 
                className='text-center text-4xl font-open-sans 
                        font-bold mb-10 text-white'
            >
                { text }&nbsp; 
                <font className="text-transparent bg-clip-text bg-gradient-to-r
                            from-Color-Text-H3 via-Color-Text-H1 to-Color-Text-H2
                            font-bold font-open-sans text-4xl"
                >
                    { gradientText }
                </font>
            </h1>
        </>
     );
}
 
export default Title;