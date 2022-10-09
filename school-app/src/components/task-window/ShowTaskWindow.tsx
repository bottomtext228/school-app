import React from "react";
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
                    {shouldRenderSolution ?
                        <React.Fragment> 
                            <span><strong>{`Решение: `}</strong>{`${currentDoc.solution}`}</span>
                            <br></br>
                            <span><strong>{`Ответ: ${currentDoc.answer}`}</strong></span>
                        </React.Fragment>  
                        : null
                    }
                
                </div>
            </div>
        </div >
    )

}