import {NamedTodoList} from "../model/model";
import {useState} from "react";

interface TodoListProps {

    todoLists: NamedTodoList[]
}

export const TodoList = (props: TodoListProps) => {
    const namedTodoList = props.todoLists;
    return (
        <div>
            <h1>Meine Todolisten</h1>

            {namedTodoList.length} TodoListen vorhanden

            {
                namedTodoList.map(value => {
                    return (<TodoListEntry key={value.id} list={value}/>)
                })
            }
        </div>
    )
}

interface TodoListEntryProps {
    list: NamedTodoList;
}

export const TodoListEntry = (props: TodoListEntryProps) => {
    const list = props.list

    const [isHidden, setIsHidden] = useState<boolean>(false);

    const onVisibilityChangeClick = () => {
        console.log("soll geschlossen werden")
        setIsHidden(!isHidden);
    }

    return (
        <div>
            <h2>{list.name}
                <small onClick={onVisibilityChangeClick}>{
                    isHidden
                        ? "aufklappen"
                        : "zuklappen"
                }</small>
            </h2>
            {
                !isHidden && (
                    <ul>
                        {list.entries.map((entry, index) => {
                            return (
                                <li key={index}>{entry.text}</li>
                            )
                        })}
                    </ul>
                )
            }
        </div>
    )
}
