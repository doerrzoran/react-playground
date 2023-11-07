export default function Trigger(){
    const TriggerConnect = (e) => {
    e.preventDefault();
    // do stuff
    }
    return (
        <button onClick={TriggerConnect}>
            Se connecter
        </button>
    )

}
