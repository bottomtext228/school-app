
import { TaskProps } from "../../data/Tasks";
import { tasks } from "../../data/Tasks";

export function TasksListItem(listItem: TaskProps, setCurrentDocId: Function, setSolutionRenderState: Function) {
    function onTaskListItemClick() {
        setCurrentDocId(tasks.indexOf(listItem));
        setSolutionRenderState(false);
    }


    return (
        <li>        
            <button  className="button" onClick = {onTaskListItemClick}>{"Задание " + listItem.name}</button>
        </li>
    )
}



