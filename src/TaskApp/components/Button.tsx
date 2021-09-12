import {FC, MouseEvent} from "react"

interface CustomButton {
    buttonName: string,
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

const Button: FC<CustomButton> = ({buttonName, onClick}) => {
    return <button onClick={onClick}>{buttonName}</button>
}

export default Button;