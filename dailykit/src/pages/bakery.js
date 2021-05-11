import React, { PureComponent } from 'react'
import Bakeries from "../components/Bakeries.js";
import Navbar from "../Navbar";
import Footer from "../Footer.js";


export default class BakeryPage extends PureComponent {
    render() {
        return (
            <div>
            <Navbar />
            <Bakeries />
            <Footer />
            </div>
        )
    }
}
