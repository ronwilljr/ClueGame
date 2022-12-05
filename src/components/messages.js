import {useEffect, useState } from "react";
import { url } from "../URL";

function Messages() {

    const [messages, setMessages] = useState([]);

    function callChatAPI() {
        fetch(url + '/chat')
            .then((response) => response.json())
            .then((data) => {
                setMessages(data.reverse());
        });
      }

    useEffect(() => {
        const interval = setInterval( () => {
            callChatAPI();
        }, 3000 );
        return () => clearInterval(interval);
    }, [messages])

    var counter = 0
    return (
        <div>
            <div>
                {messages.map((message) => {
                    counter += 1
                    return (
                        <div key={counter}>
                            <div className="messagesIndividual" >{message.msg}</div>            
                        </div>
                    )
                })}
            </div>    
        </div>
    )
}
export default Messages;
