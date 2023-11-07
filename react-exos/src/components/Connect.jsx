export default function Connect(){
    const triggerConnect = (e) => {
        e.preventDefault();
        // do stuff
    }

    return (
        <button onClick={triggerConnect}>
            Se connecter
        </button>
    )
}