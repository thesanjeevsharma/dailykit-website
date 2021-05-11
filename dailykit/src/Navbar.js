import React, { PureComponent } from 'react'
import './style.css';

export default class Navbar extends PureComponent {
    render() {
        return (
        <div style={{"position":"fixed","top": "0","width":"100%",
        "z-index": "1"}}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{"border":"0px solid black", "boxShadow":"5px 5px 5px #888888"}}>
                    <div className="container-fluid mt-2 mb-2">
                    <a className="navbar-brand" href="/" style={{"marginLeft":"1.5rem","marginRight":"15rem"}}>
                        <img src="https://www.dailykit.org/hs-fs/hubfs/Group%2056-1.png?name=Group%2056-1.png" alt="" width="250" height="73"/>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">  
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" style={{"color":"#113D63","fontWeight":"600","marginLeft":"2rem","fontSize":"19px"}} href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Platform</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Sell</a></li>
                                    <li><a className="dropdown-item" href="#">Market</a></li>
                                    <li><a className="dropdown-item" href="#">Operate</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" style={{"color":"#113D63","fontWeight":"600","marginLeft":"2rem","fontSize":"19px"}} href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Resources</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">About Us </a></li>
                                    <li><a className="dropdown-item" href="#">Tools</a></li>
                                    <li><a className="dropdown-item" href="#">Meal Kit Guides</a></li>
                                    <li><a className="dropdown-item" href="#">Case study</a></li>
                                </ul>
                                </li>
                           <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" style={{"color":"#113D63","fontWeight":"600","marginLeft":"2rem","fontSize":"19px"}} href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Start Meal Kit Brand</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">What is a Meal Kit?</a></li>
                                    <li><a className="dropdown-item" href="#">How to start a Meal kit service</a></li>
                                    <li><a className="dropdown-item" href="#">For Enterprise</a></li>
                                    <li><a className="dropdown-item" href="/restaurants">For Restaurants</a></li>      
                                    <li><a className="dropdown-item" href="/cloud_kitchen">Cloud Kitchen</a></li>
                                    <li><a className="dropdown-item" href="/bakerypage">Bakery</a></li>
                                      
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" style={{"color":"#113D63","fontWeight":"600","marginLeft":"2rem","fontSize":"19px"}} href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Do more</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Recipe Provider</a></li>
                                    <li><a className="dropdown-item" href="#">Co-packer</a></li>
                                    <li><a className="dropdown-item" href="#">Co-Seller</a></li>
                                    <li><a className="dropdown-item" href="#">Delivery Partner</a></li>          
                                </ul>
                            </li>
                            <li className="nav-item" >
                                <a className="nav-link" style={{"color":"#113D63","fontWeight":"600","marginLeft":"2rem","fontSize":"19px"}} href="#">Schedule Demo</a>
                            </li>        
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        )
    }
}
