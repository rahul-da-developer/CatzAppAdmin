import React from 'react'
import DataTable from 'react-data-table-component'
import Profiles from './Profiles'

const ByPassPayment = () => {
    const columns = [
        {
            name: "User Id",
            selector: (row) => row.id
        },
        {
            name: "Jobs",
            selector: (row) => row.title
        },
        {
            name: "Post Date",
            selector: (row) => row.runtime
        },
        {
            name: "Posted By",
            selector: (row) => row.director
        },
        {
            name: "Action",
            cell: (row) => <button className='btn btn-sm btn-outline-success rounded-4 px-3'>Accept</button>
            // <button className='btn btn-sm btn-outline-success'>DisApprove</button>
        }
    ]
    return (
        <>
            <div>
                <h2 className='mb-3 heading'>Bypass-Payment</h2>
                <DataTable highlightOnHover selectableRowsHighlight fixedHeader fixedHeaderScrollHeight='calc(100vh - 65px - 54px - 72px)' columns={columns} data={Profiles} pagination />
            </div>
        </>
    )
}

export default ByPassPayment