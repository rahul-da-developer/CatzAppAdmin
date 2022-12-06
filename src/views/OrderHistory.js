import React from 'react'
import DataTable from 'react-data-table-component'
import Profiles from './Profiles'

const OrderHistory = () => {
  const columns = [
    {
      name: "User Id",
      selector: (row) => row.id
    },
    {
      name: "Product",
      selector: (row) => row.title
    },
    {
      name: "No. of Orders",
      selector: (row) => row.runtime
    },
    {
      name: "Order By",
      selector: (row) => row.director
    },
    {
      name: "Download",
      cell: (row) => <button className='btn btn-sm btn-outline-primary px-3 rounded-4'>
        <i className="fa-solid fa-download"></i>
      </button>
    }
  ]
  return (
    <div>
      <div className=' d-flex justify-content-between mb-3 align-items-center'>
        <h2 className=' text-center mb-0 heading'>Order History</h2>
        <div className=''>
          <input type="date" placeholder='enter' className=' custom-input' /> <span className=' mx-5'>To</span>
          <input type="date" placeholder='enter' className=' custom-input' />
          <button className='mx-3 btn admin-btn'>Show Data</button>
        </div>

      </div>
      <DataTable highlightOnHover selectableRowsHighlight fixedHeader fixedHeaderScrollHeight='calc(100vh - 65px - 54px - 72px)' columns={columns} data={Profiles} pagination />
    </div>
  )
}

export default OrderHistory