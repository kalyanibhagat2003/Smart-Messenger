function ChatWindow({
  selectedUser,
  message,
  setMessage,
  messages,
  sendMessage,
}) {

  if (!selectedUser) {

    return (

      <div className="chat">

        <h2>Select a user</h2>

      </div>

    );

  }

  return (

    <div className="chat">

      <h2>{selectedUser.name}</h2>

      <div className="messages-container">

        {messages.length === 0 ? (

          <p>No messages yet</p>

        ) : (

          messages.map((msg, index) => (

            <div

              className={`message-bubble ${
                msg.sender === "me"
                  ? "my-message"
                  : "other-message"
              }`}

              key={index}
            >

              <div>

                {msg.text}

              </div>

              <small>

                {msg.time}

              </small>

            </div>

          ))

        )}

      </div>

      <div className="input-area">

        <input

          type="text"

          placeholder="Type a message"

          value={message}

          onChange={(e) => setMessage(e.target.value)}

          onKeyDown={(e) => {

            if (e.key === "Enter") {

              sendMessage();

            }

          }}
        />

        <button onClick={sendMessage}>

          Send

        </button>

      </div>

    </div>

  );

}

export default ChatWindow;