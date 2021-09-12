import {FC, ChangeEvent} from "react";

interface CustomForm {
    labelName: string,
    placeholder?: string,
    type: string,
    name: string,
    value: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Form: FC<CustomForm> = ({labelName, placeholder, type, name,value, onChange}) => {
        return (
            <form>
                <label>{labelName}</label>
                <input value = {value} type = {type} name = {name} placeholder = {placeholder ?? "Enter the task"} onChange = {onChange} autoComplete="off"/>
            </form>
        )
}

export default Form;