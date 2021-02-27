import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { Container, Navbar, NavbarToggler , Collapse, Nav } from 'reactstrap'
import {Link} from 'react-router-dom'
import LoginModal from '../components/auth/LoginModal'
import { useDispatch, useSelector } from 'react-redux'
import { LOGOUT_REQUEST } from '../redux/types'

const AppNavbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {isAuthenticated,user,userRole} = useSelector((state)=>state.auth)
    console.log(userRole,"userRole")

    const dispatch = useDispatch()

    const onLogout = useCallback(() => {
        dispatch({
            type: LOGOUT_REQUEST
        })
    }, [dispatch])

    useEffect(() => {
        setIsOpen(false)
    },[user])

    const handlerToggle = () => {
        setIsOpen(!isOpen)
    }

    return(
        <Fragment>
            <Navbar color="dark" expand="lg" className="stiky-top">
                <Container>
                    <Link to="/" className="text-white text-decoration-none">
                        Side Project's Blog(브리도 블로그)
                    </Link>
                    <NavbarToggler onClick={handlerToggle}/>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto d-flex justify-content-around" navbar>
                            {isAuthenticated ? (
                              <h1 className="text-white">authLink</h1>
                             ) : ( 
                              <LoginModal />
                             )}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </Fragment>
    )
    
}

export default AppNavbar