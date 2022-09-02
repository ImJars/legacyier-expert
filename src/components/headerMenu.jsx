import React, {useState} from 'react'
import styled from 'styled-components';
import HamburguerMenu from './HamburguerMenu';

const NavContainer = styled.div`
  padding-top: 10px;
  padding-left: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  background: #011326;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 400%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 640px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #228DFF;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 1450%;
  }
  `

const Header = () => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }
    return ( 
        <>
            <NavContainer 
            >
                <div className='burguer z-50'>
                    <HamburguerMenu clicked={clicked} handleClick={handleClick}/>
                </div>
                <div className={`links z-20 ${clicked ? 'active' : ''}`}>
                        <a className='font-roboto font-bold' onClick={handleClick} href="#Home">Home</a>
                        <a className='font-roboto font-bold' onClick={handleClick} href="#About">About</a>
                        <a className='font-roboto font-bold' onClick={handleClick} href="#Experience">Experience</a>
                        <a className='font-roboto font-bold' onClick={handleClick} href="#Work">Work</a>
                        <a className='font-roboto font-bold' onClick={handleClick} href="#Contact">Contact</a>
                </div>
                <BgDiv className={`initial z-10 ${ clicked ? 'active' : ''}`}></BgDiv>
            </NavContainer>
        </>
     );
}
 
export default Header;