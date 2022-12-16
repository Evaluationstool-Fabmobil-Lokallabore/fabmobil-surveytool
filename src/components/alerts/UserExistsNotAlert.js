import Alert from "../Alert";

function UserExistsNotAlert({ onCloseClick }) {
    return <Alert onCloseClick={onCloseClick}>
        <p>
            <span className="font-bold">Oh... Leider hat dein Login nicht funktioniert!</span><br /><br />
            Überprüfe am besten noch einmal, ob du dich verschrieben hast!Du hast deinen Spitznamen vergessen? Überlege nochmal scharf und schaue in deine Notizen. Sollte er dir nicht wieder einfallen, dann richte dich an die lokalen Betreuer*innen! </p>
    </Alert>
}

export default UserExistsNotAlert;