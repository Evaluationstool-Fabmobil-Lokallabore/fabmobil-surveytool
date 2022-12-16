import Alert from "../Alert";

function UserExistsAlert({ onCloseClick }) {
    return <Alert onCloseClick={onCloseClick}>
        <p>
            <span className="font-bold">Upsidupsi :( <br /><br /> Diese Kombination aus Name und Geburtstag ist schon vergeben...</span><br /><br />
            Bitte denk dir einen anderen Namen aus! </p>
    </Alert>
}

export default UserExistsAlert;