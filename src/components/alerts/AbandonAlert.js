import Alert from "../Alert";
import Button from "../Fabutton"

function AbandonAlert({ onCloseClick, onConfirmClick }) {
    return <Alert onCloseClick={onCloseClick}>
        <p>
            <span className="font-bold">
                Eh!<br /><br />
                Du bist mit deinen Einträgen noch nicht fertig!
            </span><br /><br />
            Bist du sicher, dass du diese Seite verlassen willst? Ohne Deine Einträge können wir unseren Lieblingsbus nicht für euch optimieren!</p>
        <Button className="text-black font-bold" onClick={onConfirmClick}>Verlassen</Button>
    </Alert>
}

export default AbandonAlert;