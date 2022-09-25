
import { TheoryDocProps } from "../../data/TheoryDoc";


export function TheoryListItem(listItem: TheoryDocProps) {
    return (
        <div>
            <h1>{listItem.header}</h1>
            <span>{listItem.description}</span>
        </div>
    )
}