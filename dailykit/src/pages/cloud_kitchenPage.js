import React, { PureComponent } from 'react'
import Navbar from "../Navbar";
import Footer from "../Footer.js";
import Cloud_kitchen from '../components/Cloud_kitchen';


export default class cloud_kitchen_Page extends PureComponent {
    render() {
        return (
            <div>
            <Navbar />
                <Cloud_kitchen/>
            <Footer />
            </div>
        )
    }
}
