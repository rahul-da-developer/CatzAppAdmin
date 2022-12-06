import React from 'react'
import DataTable from 'react-data-table-component'
import Profiles from './Profiles'
import { Link } from 'react-router-dom'
const Tickets = () => {
  const columns = [
    {
      name: "Raised By.",
      selector: (row) => row.director
    },
    {
      name: "Category",
      selector: (row) => row.title
    },
    {
      name: "Status",
      selector: (row) => row.runtime
    },
    // {
    //   name: "Reply",
    //   cell: (row) => <Link to="/raised-ticket" className='btn btn-sm theme-btn'>Reply</Link>
    // },
    // {
    //   name: "Mark as",
    //   cell: (row) => <button className='btn btn-sm btn-outline-success px-3 rounded-4'>Mark as Read</button>
    // },
    {
      name: "Action",
      width:"160px",
      justifyContent: "center",
      cell: (row) => <div className='d-flex w-100 justify-content-center'>
        {/* <button className='btn btn-sm btn-outline-danger rounded-4 px-3'>
        <i className="fa fa-reply" aria-hidden="true"></i>
        </button> */}
        <Link to="/raised-ticket" className='btn btn-sm btn-outline-danger rounded-4 px-3'>
        <i className="fa fa-reply" aria-hidden="true"></i>
        </Link>
        <button className='btn btn-sm btn-outline-danger rounded-4 mx-2 px-3'>
          <i className="fa fa-window-close" aria-hidden="true"></i>
        </button>
        {/* <button className='btn btn-sm btn-outline-danger rounded-4 px-3'>Close</button> */}
      </div>
      // <button className='btn btn-sm btn-outline-success'>DisApprove</button>
    }
  ]
  return (
    <div>
      <h1 className="heading mb-3">Tickets</h1>
      <DataTable highlightOnHover selectableRowsHighlight fixedHeader fixedHeaderScrollHeight='calc(100vh - 65px - 54px - 72px)' columns={columns} data={Profiles} pagination />
    </div>
  )
}

export default Tickets