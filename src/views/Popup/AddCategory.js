import React from 'react'

const AddCategory = (props) => {
    console.log(props)
    return (
        <div className='blur-screen flex-center'>
            <div className='addCategory position-relative'>

                <img src='./grey-cross.png' className="dismiss-popup" alt="" onClick={props.closePopup}/>
                <h4 className='heading text-center mb-3'>Add Category</h4>
                <input type="text" placeholder="Categories tittle" className=" custom-input border-2 w-100 mb-3" /> <br />
                <input type="file" className=" custom-input w-100" /> <br />
                <div className=' flex-center justify-content-between'>
                    <button className="btn admin-outline-dark mt-3 " onClick={props.closePopup}>Cancel</button>
                    <button className="btn admin-btn mt-3 ">Add Now</button>
                </div>
            </div>
        </div>
    )
}

export default AddCategory