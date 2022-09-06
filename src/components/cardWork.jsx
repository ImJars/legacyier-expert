import React from 'react';
import SlideToggle from "react-slide-toggle";

const CardWork = ({ companyName, worked, date, textOneVisible, textTwoInvisible, textThreeInvisible }) => {
    return ( 
        <>
            <div className='border-l-8 border-cyan-900 rounded-lg flex 
                        justify-start mx-10 transition 
                        ease-in-out hover:translate-x-2 duration-500
                        hover:shadow-2xl'>   
                <SlideToggle
                    collapsed
                    render={({ toggle, setCollapsibleElement }) => (
                        <div className="slide-toggle mx-10 my-5 justify-start">
                            <div>
                                <a
                                    href="https://www.google.com.mx/?hl=es-419"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='text-4xl font-roboto 
                                            font-bold text-gray-800'
                                >
                                    { companyName }
                                </a>
                                <h2
                                    className='text-xl font-roboto 
                                            font-bold text-Color-Text-H3'
                                >
                                    { worked }
                                </h2>
                                <h3
                                    className='text-xs font-roboto
                                            font-bold text-Color-Text-H1'
                                >
                                    { date }
                                    </h3>
                                <h1>
                                    <font className='flex font-roboto text-Color-Text-H3'>
                                        &#x25B8;
                                        <h1 className='text-black'>
                                            { textOneVisible}
                                        </h1>
                                    </font>
                                </h1>
                            </div>
                            <div 
                                className="" 
                                ref={setCollapsibleElement}
                            >
                                <font className='flex font-roboto text-Color-Text-H3'>
                                    &#x25B8;
                                    <h1 className='text-black'>
                                        { textTwoInvisible }
                                    </h1>
                                </font>
                                <font className='flex font-roboto text-Color-Text-H3'>
                                    &#x25B8;
                                    <h1 className='text-black'>
                                        { textThreeInvisible }
                                    </h1>
                                </font>
                            </div>
                            <button
                                className="border rounded-lg border-cyan-900 text-white
                                            px-2 py-1 mt-5 bg-cyan-900 hover:bg-white hover:text-cyan-900
                                            transition ease-in-out duration-500" 
                                onClick={toggle}
                            >
                                Mas informacion
                            </button>
                        </div>
                    )}
                />
            </div>
        </>
     );
}
 
export default CardWork;