import React, { useState } from 'react'
import './userlist.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline,Assessment } from '@material-ui/icons';
import {Link} from 'react-router-dom'
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';


export default function Userlist() {

    const handleDelete = (id)=>{
        setdata(data.filter(item=>item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'Username', width: 200 },
        { field: 'email', headerName: 'E-mail', width: 200 },
        {
          field: 'role',
          headerName: 'Role',
          width: 200,
        },
        {
            field: 'contact',
            headerName: 'Contact umber',
            type: Number,
            width: 200,
          },
          {
              field:"action",
              headerName:"Action",
              width:200,
              renderCell: (params)=>{
                  return(
                      <div className="ticons">
                        <Link to={"/admin/user/"+params.row.id}>
                            <button className="userlistEdit">Edit</button>
                        </Link>
                          <DeleteOutline className="userlistDelete" onClick={()=>handleDelete(params.row.id)}/>
                          <Link to={"/admin/userreport/" + params.row.id}>
                            <Assessment className="userlistreport" />
                        </Link>
                      </div>
                  )
              }
          }
      ];


      const rows = [
        { id: 1, username: 'Jon Snow', email: 'Jon@gmail.com', role: 'Seller' , contact: '0776564197' },
        { id: 2, username: 'Ruvidu Munasinghe', email: 'ruv@gmail.com', role: 'Seller' , contact: '0776564198' },
        { id: 3, username: 'Waste Managers', email: 'WMgmail.com', role: 'Seller' , contact: '0776564199' },
        { id: 4, username: 'Jon Snow', email: 'Jon@gmail.com', role: 'Seller' , contact: '0776564197' },
        { id: 5, username: 'Ruvidu Munasinghe', email: 'ruv@gmail.com', role: 'Seller' , contact: '0776564198' },
      
      ];
      const [data,setdata] = useState(rows)
      
    return (
        <div>
        <Navbar/>
        <div className="container">
            <Sidebar/>
        <div className='userList'>
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={9} checkboxSelection />
        </div>
        </div>
        <Footer/>
        </div>
    )
}
