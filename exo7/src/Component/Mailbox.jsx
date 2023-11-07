export default function Mailbox(props) {
    // Ici nous pourrions destructurer la prop pour éviter de passer par une variable tampon
    /* function Mailbox({unreadMessages}) {
        // Et nous aurions directement accès à unreadMessages
    }*/
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Bonjour !</h1>
      {unreadMessages.length > 0 &&
        <h2>
          Vous avez {unreadMessages.length} message(s) non-lu(s).
        </h2>
      }
    </div>
  );
}