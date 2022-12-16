import React from 'react';
import UserExistsAlert from "./components/alerts/UserExistsAlert";
import UserExistsNotAlert from "./components/alerts/UserExistsNotAlert";
import AbandonAlert from "./components/alerts/AbandonAlert"

function AlertLayer({ error, onCloseClick, onAbandonConfirmClick = () => { } }) {
    return <>
        {error === "USER_EXISTS" && <UserExistsAlert onCloseClick={onCloseClick} />}
        {error === "USER_EXISTS_NOT" && <UserExistsNotAlert onCloseClick={onCloseClick} />}
        {error === "ABANDON" && <AbandonAlert onCloseClick={onCloseClick} onConfirmClick={onAbandonConfirmClick} />}
    </>
}


export default AlertLayer;