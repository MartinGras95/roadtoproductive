import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
    // graphql query grabbing title attribute from metadata
    const data = useStaticQuery(graphql`
    query {
        site {
        siteMetadata {
            title
            }
            }
        }
    `)

    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/">
                    {data.site.siteMetadata.title}
                </Link>
                <nav>
                    <ul className={headerStyles.navList}>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/" >Home</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blogs">Blog</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link>
                        </li>
                    </ul>
            </nav>
            </h1>
        </header>
    )
}

export default Header