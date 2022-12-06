import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import Profiles from './Profiles'
import AddCategory from './Popup/AddCategory'

const Categories = () => {
  const [addCategory, setAddCategory] = useState(false)
  const columns = [
    {
      name: "User Id",
      selector: (row) => row.id
    },
    {
      name: "Category",
      selector: (row) => row.title
    },
    {
      name: "Create Date",
      selector: (row) => row.runtime
    },
    {
      name: "Create By",
      selector: (row) => row.director
    },
    {
      name: "Action",
      width: "190px",
      justifyContent: "center",
      cell: (row) => <div className='d-flex justify-content-center'>
        <button className='btn btn-sm btn-outline-success rounded-4 px-3 me-2'>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button className='btn btn-sm btn-outline-danger rounded-4 px-3'>
          <i className="fa fa-solid fa-trash" aria-hidden="true"></i>
        </button>
      </div>
    }
  ]
  return (
    <div>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <h2 className=' text-center mb-0 heading'>Job Categories</h2>
        <div className=' d-flex justify-content-end mr-3'>
          {/* <input type="text" placeholder="Enter Categories to add" className=" custom-input"/> */}
          <button className="btn admin-btn ms-3 " onClick={() => { setAddCategory(true) }}>Add Categories</button>
        </div>

      </div>
      {addCategory ? <AddCategory closePopup={() => { setAddCategory(false) }} /> : null}
      <DataTable highlightOnHover selectableRowsHighlight fixedHeader fixedHeaderScrollHeight='calc(100vh - 65px - 54px - 72px)' columns={columns} data={Profiles} pagination />
    </div>
  )
}

export default Categories