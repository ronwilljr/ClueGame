import {useEffect, useState } from "react";

function Messages() {
    function loadMessages() {
        fetch("https://www.boredapi.com/api/activity")
            .then((response) => response.json())
            .then((data) => {
                setMessages([data, ...messages]);
                console.log(data)
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
                    return <div key={message.key}>-{message.activity}</div>
                })}
            </div>    
        </div>
    )
}
export default Messages;
