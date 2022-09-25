import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import { ShowMainWindow } from './components/main/ShowMainWindow';
import { ShowTaskWindow } from './components/task-window/ShowTaskWindow';
import { ShowTasks } from './components/tasks/ShowTasks';
import { ShowTheory } from './components/theory/ShowTheory'



function App() {
  const [currentDocId, setCurrentDocId] = useState(0);
  const [shouldRenderSolution, setSolutionRenderState] = useState(false);

  return (
    <div className="App">
      <ShowTasks 
        setCurrentDocId={setCurrentDocId}
        setSolutionRenderState={setSolutionRenderState} 
      ></ShowTasks>
      <ShowMainWindow></ShowMainWindow>
      <ShowTaskWindow 
        currentDocId={currentDocId} 
        shouldRenderSolution={shouldRenderSolution}
        setSolutionRenderState={setSolutionRenderState}
      ></ShowTaskWindow>
      <ShowTheory></ShowTheory>
    </div>
  );
}

export default App;
