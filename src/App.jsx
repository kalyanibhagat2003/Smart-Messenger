import { useState, useEffect } from "react";
import UserList from "./Components/sidebar/UserList";
import ChatWindow from "./Components/chat/ChatWindow";
import { getAIReply } from "./services/aiService";

function App() {

  const [selectedUser, setSelectedUser] = useState(null);

  const [message, setMessage] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  // Load saved messages

  const [messages, setMessages] = useState(() => {

    const savedMessages = localStorage.getItem("messages");

    return savedMessages ? JSON.parse(savedMessages) : {};

  });

  // Save messages whenever they change

  useEffect(() => {

    localStorage.setItem(

      "messages",

      JSON.stringify(messages)

    );

  }, [messages]);

 async function sendMessage() {

  if (!selectedUser) return;

  if (message.trim() === "") return;

  const currentUser = selectedUser;

  const userText = message;

  const userMessage = {

    text: userText,

    time: new Date().toLocaleTimeString([], {

      hour: "2-digit",

      minute: "2-digit",

    }),

    sender: "me",

  };

  setMessages((prev) => ({

    ...prev,

    [currentUser.id]: [

      ...(prev[currentUser.id] || []),

      userMessage,

    ],

  }));

  setMessage("");

  const aiReply = await getAIReply(userText);

  const replyMessage = {

    text: aiReply,

    time: new Date().toLocaleTimeString([], {

      hour: "2-digit",

      minute: "2-digit",

    }),

    sender: "other",

  };

  setMessages((prev) => ({

    ...prev,

    [currentUser.id]: [

      ...(prev[currentUser.id] || []),

      replyMessage,

    ],

  }));

}

  return (

    <div className={darkMode ? "container dark" : "container"}>

      <button

        className="theme-btn"

        onClick={() => setDarkMode(!darkMode)}

      >

        {darkMode ? "☀️ Light" : "🌙 Dark"}

      </button>

      <UserList

        setSelectedUser={setSelectedUser}

      />

      <ChatWindow

        selectedUser={selectedUser}

        message={message}

        setMessage={setMessage}

        messages={messages[selectedUser?.id] || []}

        sendMessage={sendMessage}

      />

    </div>

  );

}

export default App;