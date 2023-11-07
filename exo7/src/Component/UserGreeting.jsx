import Mailbox from "./Mailbox";
import { Messages } from "./messages";

export default function UserGreeting(Props){
    return(
        <div>
            <h1>Bienvenue</h1>
            <Mailbox unreadMessages={Messages} />
        </div>
    ) 
}