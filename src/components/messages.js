import {useEffect, useState } from "react";
import { url } from "../URL";
import YouAre from "./youAre";

function Messages() {

    const [messages, setMessages] = useState([]);
    const [filteredMessages, setFilteredMessages] = useState([]);

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
            filterMessages();
            
        }, 3000 );
        return () => clearInterval(interval);
    }, [messages, filteredMessages])


    function filterMessages() {
        let arr = []

        for (let i in messages) {
            
            if (messages[i].dest === 'system' || messages[i].dest === YouAre.iAM) {
                arr.push(messages[i])
            }
        }
        setFilteredMessages(arr)
    }

    var counter = 0
    return (
        <div>
            <div>
                {filteredMessages.map((message) => {
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
