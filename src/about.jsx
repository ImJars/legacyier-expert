import React from 'react'

const About = () => {
    return ( 
        <>
            <div className='w-full flex justify-center'>
                <div className="min-h-750 max-w-240 grid content-center mx-10 sm:mx-0">
                    <h1 
                        className='text-center text-4xl font-roboto font-bold text-gray-800 mb-10'
                    >
                        About&nbsp; 
                        <font className="text-transparent bg-clip-text bg-gradient-to-r
                                            from-Color-Text-H3 via-Color-Text-H1 to-Color-Text-H2
                                            font-roboto font-bold"
                        >
                            Me
                        </font>
                    </h1>
                    <div className='font-roboto'>
                        <h1 className='text-center mb-5'>
                           <font className="font-bold">Hello!</font> My name is <font className="font-bold">Ángel</font> and I like technology, I enjoy 
                            creating web applications and developing software. I started 
                            programming in 2014 during high school, in 2017 I started with 
                            web development during professional projects at university, 
                            I liked it so much that I continue to implement new technologies 
                            in my developments. 
                        </h1>
                        <h1 className='text-center mb-5'>
                            I continue my path in development learning new technologies and I had 
                            the privilege of working with some giant Mexican companies and some web 
                            development agencies, where I have learned new technologies and ways of working..
                        </h1>
                        <h1 className='text-center mb-5'>
                            My main focus these days is to create accessible and inclusive products 
                            with <font className="text-Color-Text-H3 font-bold">Web3</font> and <font className="text-Color-Text-H3 font-bold">Blockchain</font> technology for SMEs.
                        </h1>
                        <h1 className='text-center mb-5'>
                            I'm thinking of launching a web development course for beginners because I like to 
                            teach, although it will be in the near future.
                        </h1>
                        <h1 className='text-center mb-5 font-bold'>
                            Here are some technologies I've been working with recently:
                        </h1>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default About;