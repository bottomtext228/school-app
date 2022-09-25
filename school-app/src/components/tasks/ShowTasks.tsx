import { tasks } from "../../data/Tasks";
import { TasksListItem } from "./TasksListItem";

import '../../App.css';

interface docsProps {
    setCurrentDocId: Function;
    setSolutionRenderState: Function
}

export function ShowTasks({setCurrentDocId, setSolutionRenderState}: docsProps) {
    return (
        <div>
            <div className="tasks">
                <div className="table">
                    <h1>Список заданий</h1>
                    <ul>
                        {tasks.map((element, index) => TasksListItem(element, setCurrentDocId, setSolutionRenderState))}
                    </ul>
                </div>
            </div>
        </div>
    )
}