import { tasks } from "../../data/Tasks";

export interface TaskWindowProps {
    currentDocId: number;
    shouldRenderSolution: boolean;
    setSolutionRenderState: Function;
}

export function ShowTaskWindow({ currentDocId, shouldRenderSolution, setSolutionRenderState }: TaskWindowProps) {
    const currentDoc = tasks[currentDocId];

    function onShowSolutionClick() {
        setSolutionRenderState(!shouldRenderSolution);
    }
    return (
        <div>
            <div className="task">
                <div className="table">
                    <h1>{`Задание №${currentDoc.name}`}</h1>
                    <a href={`${currentDoc.file}`}>{currentDoc.name}.xlsx</a>
                    <br></br> {/* html goes <br><br><br><br><br><br> */}
                    <br></br>
                    <span>{currentDoc.theory}</span>
                    <br></br>
                    <button onClick={onShowSolutionClick}>{shouldRenderSolution ? 'Скрыть решение' : 'Показать решение'} </button>
                    <br></br>
                    {shouldRenderSolution ? <span>{`Решение: \n${currentDoc.solution}`}</span> : null }
                      
                    
                </div>
            </div>
        </div>
    )

}