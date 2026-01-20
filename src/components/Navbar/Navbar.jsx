import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/netflix-icon.png'
import search_icon from '../../assets/searchicon.png'
import bell_icon from '../../assets/bell-icon.png'
import profile_icon from '../../assets/profile-icon.jpg'
import dropdown_icon from '../../assets/dropdown-netflix.png'
import { logout } from '../../firebase'

const Navbar = () => {

  const navRef = useRef();  

  useEffect(() => {
    const handleScroll = () => {
        if (!navRef.current) return;

        if (window.scrollY >= 80) {
            navRef.current.classList.add('nav-dark');
        } else {
            navRef.current.classList.remove('nav-dark');
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <div ref={navRef} className='navbar'>
        <div className="navbar-left">
            <img src={logo} alt="" className='netflix-icon' />
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse by Languages</li>
            </ul>
        </div>
        <div className="navbar-right">
            <img src={search_icon} alt="" className='icons' />
            <p>Children</p>
            <img src={bell_icon} alt="" className='icons' />
            <div className="navbar-profile">
                <img src={profile_icon} alt="" className='profile-icon profile' />
                <img src={dropdown_icon} alt="" className='dropdown-icon profile' />
                <div className="dropdown">
                    <p onClick={() => {logout()}}>Sign Out of Netflix</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar