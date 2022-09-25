import { theoryDocs } from "../../data/TheoryDoc";
import { TheoryListItem } from "./TheoryListItem";

import '../../App.css';


export function ShowTheory() {
    return (
        <div>
            <div className="theory">
                <div className="table">
                    {theoryDocs.map((element, index) => TheoryListItem(element))}
                </div>
            </div>
        </div>
    )
}