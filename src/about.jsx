import React from 'react'

const About = () => {
    return ( 
        <>
            <div className='w-full h-screen'>
                <h1 
                    className='text-center text-4xl font-bold text-gray-800'
                >
                    About&nbsp; 
                    <font className="text-transparent bg-clip-text bg-gradient-to-r
                                        from-Color-Text-H3 via-Color-Text-H1 to-Color-Text-H2
                                        font-roboto font-bold"
                    >
                        Me
                    </font>
                </h1>
                <div>
                    <h1>
                        Hello! My name is Ángel and I like technology, I enjoy 
                        creating web applications and developing software. I started 
                        programming in 2014 during high school, in 2017 I started with 
                        web development during professional projects at university, 
                        I liked it so much that I continue to implement new technologies 
                        in my developments. 
                    </h1>
                    <h1>
                        I continue my path in development learning new technologies and I had 
                        the privilege of working with some giant Mexican companies and some web 
                        development agencies, where I have learned the best.
                    </h1>
                    <h1>
                        My main focus these days is to create accessible and inclusive products 
                        with web3 and blockchain technology for SMEs.
                    </h1>
                    <h1>
                        I'm thinking of launching a web development course for beginners because I like to 
                        teach, although it will be in the near future.
                    </h1>
                    <h1>
                        Here are some technologies I've been working with recently:
                    </h1>
                </div>
            </div>
        </>
     );
}
 
export default About;