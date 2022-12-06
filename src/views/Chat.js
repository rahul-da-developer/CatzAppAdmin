import React from 'react'

const Chat = (props) => {
  return (

    <div className="chat-section-box">
      <div className="fix-chat-header">
        {/* <img src="./white-backbtn.png" onClick={() => { props.onClose() }} alt="l" className="backImg me-3 chat-back-arrow-header" /> */}
        <span className="chat-user-name">Rahul Dewal</span>
      </div>
      <div className="wrapped-message-area">
        <div className="chat ">
          <div className="flex-center w-100 position-relative">
            <hr className="days-update-line" />
            <p className="msg-day">Today</p>
          </div>


          {/* Chat Send Box */}
          <div className="d-flex justify-content-end">
            <div className="send-msg-box">
              <h3 className="sender-name">You</h3>
              <p className="text mt-2">
                Hey Emelio! Sure please let me check your profile and get back to
                you.
              </p>
            </div>
            <img src="./msg1.png" alt="" className="sender-img ml-1" />
          </div>

          {/* Recieve Box */}
          <div className="d-flex">
            <img src="./msg1.png" alt="" className="sender-img mr-1" />
            <div className="recieve-msg-box">
              <h3 className="sender-name">Rahul Dewal</h3>
              <p className="text mt-2">
                Good Morning! I am reaching out to you for a Plumber job vacancy
                which you have posted. Can we discuss on the same?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="send-input-box">
        <div className="relative w-100">
          <input
            type="text"
            placeholder="Type a message"
            className="send-input"
          />
          <img src="./smile-grey.png" alt="" className="left-img" />
          <img src="./camera.png" alt="" className="right-img" />
        </div>

        <button className="send-btn">
          <img src="./send-msg.png" alt="" className="send-img" />
        </button>
      </div>
    </div>
  )
}

export default Chat