import React from 'react'
import{SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SidebarRoute,SideBtnWrap} from './SidebarElements'

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>  
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about'>
                        About
                    </SidebarLink>
                    <SidebarLink to='discover'>
                        Discover
                    </SidebarLink>
                    <SidebarLink to='services'>
                        Services
                    </SidebarLink>
                    <SidebarLink to='signup'>
                        Side Up
                    </SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to='/'>
                            Sign in
                        </SidebarRoute>
                    </SideBtnWrap>
                    </SidebarWrapper>   
        </SidebarContainer>
    )
}

export default Sidebar
