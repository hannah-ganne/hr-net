import { HeaderContainer, HeaderLogo, Nav, NavLi, NavA, SubHeader } from '../styles/Header'
import { Ul, A } from '../styles/GlobalStyle'
import { useLocation } from 'react-router'

export default function Header() {
    const location = useLocation();

    return (
        <>
            <HeaderContainer>
            <HeaderLogo>
                <A href="/create-employee">
                    HRnet
                </A>
            </HeaderLogo>
            <Nav>
                <Ul>
                    <NavLi>
                        <NavA href="create-employee">
                            Create Employee
                        </NavA>
                    </NavLi>
                    <NavLi>
                        <NavA href="view-employees" >
                            View Current Employees
                        </NavA>
                    </NavLi>
                </Ul>
            </Nav>
            </HeaderContainer>
            <SubHeader>
                <h2>{location.pathname === "/create-employee" ? 'Create Employee' : 'View Current Employees'}</h2>
            </SubHeader>
        </>
        
    )
}