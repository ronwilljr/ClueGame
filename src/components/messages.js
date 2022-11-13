import {useEffect, useState } from "react";
import { url } from "../URL";

function Messages() {

    const [messages, setMessages] = useState([]);
 
    function loadMessages() {
        fetch("https://www.boredapi.com/api/activity")
            .then((response) => response.json())
            .then((data) => {
                setMessages([data, ...messages]);
        });
    }


    function callChatAPI() {
        fetch(url + '/chat')
            .then((response) => response.json())
            .then((data) => {
        });
      }

    useEffect(() => {
        const interval = setInterval( () => {
            callChatAPI();
        }, 3000 );
        return () => clearInterval(interval);
    }, [messages])


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
