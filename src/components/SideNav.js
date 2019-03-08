import React from 'react';

import { Nav, NavItem, NavLink } from 'shards-react';

export default class SideNav extends React.Component {
    render() {
        var activeTab = this.props.activeTab;
        console.log(activeTab);
        return (
            <Nav pills vertical className="py-2">
                <NavItem>
                    <NavLink
                        className={activeTab === 'Blog' ? 'active' : ''}
                        href="#"
                    >
                        Blog
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={activeTab === 'About Me' ? 'active' : ''}
                        href="/"
                    >
                        About Me
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={activeTab === 'Book Reviews' ? 'active' : ''}
                        href="/"
                    >
                        Book Reviews
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={activeTab === 'Notes' ? 'active' : ''}
                        href="/"
                    >
                        Notes
                    </NavLink>
                </NavItem>
            </Nav>
        );
    }
}
