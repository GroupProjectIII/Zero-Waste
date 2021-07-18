import React from 'react'
import "./sidebar.css"
import {LineStyle , Timeline , TrendingUp , People , Forum , Report} from "@material-ui/icons"
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/admin" className="link">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon"/>
                                Home
                            </li>
                        </Link>   
                        <Link to="/admin/statistics" className="link">
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Statistics
                        </li>
                        </Link> 
                        
                        <li className="sidebarListItem">
                            <Report className="sidebarIcon"/>
                            Review Complaints
                        </li>

                        <Link to="/admin/newUser" className="link">
                            <li className="sidebarListItem">
                                <People className="sidebarIcon"/>
                                Add New User
                            </li>
                        </Link>    

                    </ul>    
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/admin/users" className="link">
                            <li className="sidebarListItem">
                                <People className="sidebarIcon"/>
                                Users
                            </li>
                        </Link>  

                        <li className="sidebarListItem">
                            <Forum className="sidebarIcon"/>
                            Messages
                        </li>

                        <Link to="/admin/report" className="link">
                        <li className="sidebarListItem">
                            <Report className="sidebarIcon"/>
                            Reports
                        </li>
                        </Link>
                    </ul>    
                </div>

            </div>
        </div>
    )
}
