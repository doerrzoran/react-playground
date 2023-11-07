import { Connect } from "./Connect";
import GuestGreeting from "./GuestGreeting";
import UserGreeting from "./UserGreeting";

export default function Greeting(props) {
    let isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
      return <UserGreeting/>;
    }
    return(
      <div>
        <GuestGreeting/>
      </div>
    )

  }