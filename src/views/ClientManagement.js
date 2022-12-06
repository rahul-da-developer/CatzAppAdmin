import React from 'react'
import DataTable from 'react-data-table-component'
import Profiles from './Profiles'

const ClientManagement = () => {
    const columns = [
        {
            name: "Client Name",
            selector: (row) => row.title
        },
        {
            name: "Transaction History",
            selector: (row) => row.year
        },
        {
            name: "Balance Credits",
            selector: (row) => row.actors
        },
        {
            name: "Used Credits",
            selector: (row) => row.director
        },
        {
            name: "Carry Forward",
            cell: (row) => <button className='btn btn-sm btn-outline-danger px-3 rounded-4'>Disable</button>
        }
    ]
    return (
        <div>
            <div className=' d-flex justify-content-between mb-3 align-items-center'>
                <h2 className=' mb-0 heading'>On-boarded Clients</h2>
                <div className=''>
                    <input type="date" placeholder='enter' className=' custom-input' /> <span className=' mx-5'>To</span>
                    <input type="date" placeholder='enter' className=' custom-input' />
                    <button className='mx-3 btn admin-btn'>Show Data</button>
                </div>
            </div>
            <DataTable fixedHeader fixedHeaderScrollHeight='calc(100vh - 65px - 54px - 72px)' columns={columns} data={Profiles} pagination />
        </div>
    )
}

export default ClientManagement