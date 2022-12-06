import React from 'react'

const MessageBox = () => {
    return (

        <>
            <div className="message-box active">
                <div className="row flex-center m-0">
                    {/* <div className="col-2 pr-0 flex-center">
                        <img src="./msg1.png" className="msg-profile" alt="" />
                    </div> */}
                    <div className="col-10 ps-0 py-2">
                        <h4 className="msg-name" style={{ fontSize: "20px", color: "#0e0e0e" }}>Rahul Dewal </h4>
                        <h4 className="msg-name">Cash Cuted, Coins Not Recieved. </h4>
                        <p className="text mb-0">
                            Good Morning! I am reaching out to you for a Plumber job vacancy which I have posted. But I &apos m not able to see jobseeker which one&aposs applied on the same?
                        </p>
                    </div>
                    <div
                        className="col-2 pl-0 flex-center issue-circle"
                    >
                        <p className="text mb-0">Coins Issue</p>
                        {/* <p className="no_messages">3</p> */}
                    </div>
                </div>
            </div>

            <hr className="m-0" />
        </>
    )
}

export default MessageBox