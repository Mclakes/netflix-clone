import React, { useState }from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components";
import logo from "../assets/logo.png";
import {FaSearch} from "react-icons/fa"

const Navbar = ({ isScrolled }) => {

  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);
  
  const links = [
    {name: "Home", link: "/"},
    {name: "TV Shows", link: "/tv"},
    {name: "Movies", link: "/movies"},
    {name: "My List", link: "/mylist"},
  ];  

  const Container = styled.div``;

  return (
    <Container>
      <nav className={`flex ${ isScrolled ? 'scrolled': "" }`}>
        <div className="left flex a-center">
          <div className='brand flex a-center j-center'>
            <img src={logo} alt="logo"/>
          </div>
          <ul className='links flex'>
            {links.map((name, link)=>{
              return(
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='right flex a-center'>
            <div className={`search ${showSearch ? "showSearch" : "" }`}>
              <button
               onFocus={()=>setShowSearch(true)} 
               onBlur={()=>{
                if(!inputHover) setShowSearch(false);      
                }}>
                <FaSearch />
              </button>
              <input type="text" placeholder="search"
                onMouseEnter={()=>setInputHover(true)}
                onMouseLeave={()=>setInputHover(false)}
                onBlur={()=>{
                  setShowSearch(false);
                  setInputHover(false)
                }}

              />
            </div>
        </div>
      </nav>
    </Container>
  )
}

export default Navbar