import React from 'react';
import Menu from './Menu';
import Information from './information';
import Home from './Home';
import About from './about';
import Experience from './Experience';
import Work from './work';
import OtherWorks from './otherWorks';
import Contact from './contact';
import Example from './components/side-menu/Example';

const Layout = () => {
    return ( 
        <>
            <Menu />
            <Information />
            <Home/>
            <About />
            <Experience />
            <Work />
            <OtherWorks />
            <Contact />
            <Example />
        </>
     );
}
 
export default Layout;