import React from 'react'
import "./report.css"
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Report() {
    return (
        <div>
        <Navbar/>
        <div className="container">
            <Sidebar/>
        <div className="newuser">
            <h1 className="reportTitle">Generate Reports</h1>
            <form action="" className="newform">

                <div className="fitems">
                    <label>Report Type</label>
                    <select className="selectList" id="selectList1">
                        <option value="option 1">Sales Report</option>
                        <option value="option 2">Waste Items Report</option>
                    </select>
                </div>
                

                <div className="fitems">
                    <label>Select Time Period</label>
                    <label className='slabel'>From</label>
                    <input type="date" placeholder="name"/><br/>
                    <label className='slabel'>To</label>
                    <input type="date" placeholder="name"/>
                </div>

            </form>
            <button className="nbutton">Generate</button>    

        </div>
        </div>
        <Footer/>
        </div>
    )
}
