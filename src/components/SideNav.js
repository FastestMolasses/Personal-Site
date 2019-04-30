import React from 'react';

import { Nav, NavItem, NavLink } from 'shards-react';

export default class SideNav extends React.Component {
    render() {
        var activeTab = this.props.activeTab;
        console.log(activeTab);
        return (
            <Nav pills vertical className="nav py-2">
                <NavItem className="nav-item">
                    <NavLink
                        className={
                            'nav-link ' + (activeTab === 'Blog' ? 'active' : '')
                        }
                        href="#"
                    >
                        Blog
                    </NavLink>
                </NavItem>
                <NavItem className="nav-item">
                    <NavLink
                        className={
                            'nav-link ' +
                            (activeTab === 'About Me' ? 'active' : '')
                        }
                        href="/"
                    >
                        About Me
                    </NavLink>
                </NavItem>
                <NavItem className="nav-item">
                    <NavLink
                        className={
                            'nav-link ' +
                            (activeTab === 'Book Notes' ? 'active' : '')
                        }
                        href="/"
                    >
                        Book Reviews
                    </NavLink>
                </NavItem>
                <NavItem className="nav-item">
                    <NavLink
                        className={
                            'nav-link ' +
                            (activeTab === 'School Notes' ? 'active' : '')
                        }
                        href="/"
                    >
                        Notes
                    </NavLink>
                </NavItem>
            </Nav>
        );
    }
}
