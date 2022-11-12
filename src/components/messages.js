import {useEffect, useState } from "react";

function Messages() {

    const [messages, setMessages] = useState([]);
 
    function loadMessages() {
        fetch("https://www.boredapi.com/api/activity")
            .then((response) => response.json())
            .then((data) => {
                setMessages([data, ...messages]);
        });
    }

    // useEffect(() => {
    //     const interval = setInterval( () => {
    //         loadMessages();
    //     }, 3000 );
    //     return () => clearInterval(interval);
    // }, [messages])


    return (
        <div>
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
