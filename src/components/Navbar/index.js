import React from 'react'
import { NavLink } from 'react-router-dom';
import {FaBars} from 'react-icons/fa'
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from './NavbarElements';


const Navbar = () => {
    return (
       <>
       <Nav>
              <NavbarContainer>
                  <NavLogo to='/'>akash </NavLogo>
                  <MobileIcon>
                      <FaBars />

                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to="about">
                                    About
                          </NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="discover">
                                    Discover
                          </NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="services">
                                    Services
                          </NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to="signup">
                                   Sign up
                          </NavLinks>
                      </NavItem>
                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink to="/signin"> Sign in</NavBtnLink>
                  </NavBtn>
              </NavbarContainer>

          </Nav>
       </>
    )
}

export default Navbar;