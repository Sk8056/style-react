import {FC} from "react";

type TaskListingProps = {
    data: string
}

const TaskListing: FC<TaskListingProps> = ({data}) => {
    return <li>{data}</li>
}

export default TaskListing;