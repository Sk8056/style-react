import {FC, useState, ChangeEvent, MouseEvent} from "react";
import TaskListing from "./TaskListing"
import Form from "./Form"
import Button from "./Button"
import {isValidString} from "../utils";

const Base: FC = () => {

    const [input, setInput] = useState<string>("");
    const [tasks, setTasks] = useState<string[]>([]);

    const submitTaskOnClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(isValidString(input)) {
            setTasks(prevTask => [...prevTask, input])
        } else {
            alert("Not a valida task. Please add again!")
        }
        setInput("");
    }

    const addTaskOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const refreshTaskListOnClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        alert("Are you sure you want to remove all the tasks?");
        setTasks([]);
    }

    return (
        <>
            <Form placeholder="Enter your task" labelName="Please enter the task" name="user-input" type="text" value = {input} onChange={addTaskOnChange}/>
            <Button buttonName="Submit" onClick={submitTaskOnClick}/>
            <Button buttonName="Refresh" onClick={refreshTaskListOnClick}/>
            <ul>
                {tasks.map((task: string, index: number) => <TaskListing key={index} data={task}/>)}
            </ul>
        </>
    );
}

export default Base;