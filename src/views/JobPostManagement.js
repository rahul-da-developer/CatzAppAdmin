import React from 'react'
import DataTable from 'react-data-table-component'
import Profiles from './Profiles'

const JobPostManagement = () => {
  const columns = [
    // {
    //   name: "User Id",
    //   selector: (row) => row.id
    // },
    {
      name: "Jobs",
      selector: (row) => row.title
    },
    {
      name: "Post",
      selector: (row) => row.director
    },
    {
      name: "Posted By",
      selector: (row) => row.director
    },
    {
      name: "Action",
      cell: (row) => <><button className='btn btn-sm btn-outline-success px-3 me-1 rounded-4'>Approve</button>
      <button className='btn btn-sm btn-outline-danger px-3  rounded-4'>DisApprove</button></>
    }
  ]
  return (
    <div>
      <h2 className='mb-3 heading'>Posted Job Management</h2>
      <DataTable highlightOnHover selectableRowsHighlight fixedHeader fixedHeaderScrollHeight='calc(100vh - 65px - 54px - 72px)' columns={columns} data={Profiles} pagination />
    </div>
  )
}

export default JobPostManagement