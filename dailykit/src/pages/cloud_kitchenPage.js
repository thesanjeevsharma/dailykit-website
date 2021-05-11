import React, { PureComponent } from 'react'
import cloud_kitchen from "../components/cloud_kitchen";
import Navbar from "../Navbar";
import Footer from "../Footer.js";


export default class cloud_kitchen_Page extends PureComponent {
    render() {
        return (
            <div>
            <Navbar />
            <cloud_kitchen />
            <Footer />
            </div>
        )
    }
}
