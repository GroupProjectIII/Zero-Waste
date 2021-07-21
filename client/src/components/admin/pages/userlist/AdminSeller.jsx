import React, { useEffect, useState } from 'react'
import './userlist.css'
import axios from 'axios'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline,Assessment } from '@material-ui/icons';
import {Link} from 'react-router-dom'
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';


export default function Userlist() {

    const [tdata, settdata] = useState([])

    useEffect(()=>{
        axios.get('/api/adminuser/getsellers').then(res=>{
            console.log(res.data)
            settdata(res.data)
        }).catch(err=>{
            console.log(err)
        })

    } , [])

    const handleDelete = (id)=>{
        settdata(tdata.filter(item=>item.id !== id))
    }

    const columns = [
        { field: 'username', headerName: 'Username', width: 250 },
        { field: 'email', headerName: 'E-mail', width: 300 },
        {
            field: 'usertype',
            headerName: 'Role',
            width: 200,
        },
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="ticons">
                        <Link to={"/admin/user/" + params.row.id}>
                            <button className="userlistEdit">Edit</button>
                        </Link>

                        <DeleteOutline className="userlistDelete" /*onClick={() => handleDelete(params.row.id)}*//>

                        <Link to={"/admin/userreport/" + params.row.id}>
                            <Assessment className="userlistreport" />
                        </Link>
                    </div>
                )
            }
        }
    ];

    return (
        <div>
        <Navbar/>
        <div className="container">
            <Sidebar/>
        <div className='userList'>
            <DataGrid rows={tdata} disableSelectionOnClick 
            columns={columns}
            getRowId={(row) => row._id}
             pageSize={9} checkboxSelection />
        </div>
        </div>
        <Footer/>
        </div>
    )
}
