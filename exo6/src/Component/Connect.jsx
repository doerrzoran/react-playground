import { triggerConnect } from "./TriggerConnect"

export const Connect = () => {
    return (
        <button onClick={triggerConnect}>
            Se connecter
        </button>
    )
}