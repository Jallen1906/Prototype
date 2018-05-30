import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'

export class NavMenu extends Component {
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">DnD</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/dice">Dice</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/log">Log</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/character">Character</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>                
            </div>
        );
    }
}