import { ReactComponent as CloseIcon } from "../assets/close-x.svg"

function Alert({ children, onCloseClick = () => { } }) {
    return <>
        <div className="Alert">
            <CloseIcon className="cursor-pointer Alert__close" onClick={onCloseClick} />
            <div className="">{children}</div>
        </div>
        <div className="Alert__bg">
        </div>
    </>
}

export default Alert;