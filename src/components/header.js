import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <nav className="navbar navbar-light bg-light  d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 ">
    <a className="navbar-brand my-0 mr-md-auto  font-weight-normal text-primary" href="#"><h3>{ siteTitle }</h3></a>
   </nav>
)

export default Header
