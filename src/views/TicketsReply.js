import React, { useState } from 'react'
import MessageBox from './MessageBox'
import Chat from './Chat'

const TicketsReply = () => {

    const [chatBoxOpen, setChatBoxOpen] = useState(false);



    return (
        <>

            {/* Chat And Messages */}
            <div style={{height: "calc(100vh - 81px)"}}>
                <div className="row">
                    <div className='col-4 px-0'>
                        <MessageBox />
                    </div>
                    <div className='col-8'>
                        <Chat />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TicketsReply