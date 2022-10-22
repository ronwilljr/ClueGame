import {useEffect, useState } from "react";

function Messages() {
    function loadMessages() {
        fetch("https://www.boredapi.com/api/activity")
            .then((response) => response.json())
            .then((data) => {
                setMessages([data, ...messages]);
        });
    }

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        loadMessages();
    }, [])

    return (
        <div>
            <button onClick={loadMessages}>Load Message</button>
            <div>
                {messages.map((message) => {
                    return (
                        <div key={message.key}>
                            <div className="messagesIndividual" >{message.activity}</div>            
                        </div>
                    )
                })}
            </div>    
        </div>
    )
}
export default Messages;
