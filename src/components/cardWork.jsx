import React from 'react';
import SlideToggle from "react-slide-toggle";

const CardWork = ({ companyLink, companyName, worked, date, textOneVisible, textTwoInvisible, textThreeInvisible }) => {    
    return ( 
        <>
            <div className='border-l-8 border-cyan-900 rounded-lg flex 
                        justify-start mx-10 transition 
                        ease-in-out hover:translate-x-2 duration-500
                        hover:shadow-2xl z-0 max-w-240'>   
                <SlideToggle
                    collapsed
                    render={({ toggleState, toggle, setCollapsibleElement }) => (
                        <div className="slide-toggle mx-10 my-5 justify-start">
                            <div>
                                <a
                                    href={ companyLink }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='text-2xl font-roboto 
                                            font-bold text-gray-800'
                                >
                                    { companyName }
                                </a>
                                <h2
                                    className='text-base font-roboto 
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
                                className="mt-2 font-roboto font-bold text-xs border rounded-lg
                                            transition ease-in-out duration-500" 
                                 onClick={toggle}
                            >
                                {toggleState === "EXPANDED" ? "- Informacion" : "+ Informacion"}
                            </button>
                        </div>
                    )}
                />
            </div>
        </>
     );
}
 
export default CardWork;