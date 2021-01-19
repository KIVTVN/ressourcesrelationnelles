import React from 'react'
import {useState,useEffect} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Col,
    Row
} from 'reactstrap'


const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <Navbar color="primary"  dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href='/'>
                        Ressources Relationnelles
                    </NavbarBrand>   

                    <NavbarToggler onClick={toggle}></NavbarToggler>

                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto "  navbar>
                            <NavItem >
                            <Container className="overflow-hidden">
                            <Row xs="3" className='gx-8'>
                                <Col><NavLink href="">Ressources</NavLink></Col>
                                <Col><NavLink href="">Relations</NavLink></Col>
                                <Col><NavLink href="">Profil</NavLink></Col>
                                </Row>
                            </Container>
                            </NavItem>                           
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div> 
    )
    
}

export default Header