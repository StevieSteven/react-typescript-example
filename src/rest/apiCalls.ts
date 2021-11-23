import {NamedTodoList} from "../model/model";
import axios from "axios";

interface TodoListResponse {
    data: NamedTodoList[]
}

export const getTodoList = (): Promise<NamedTodoList[]> => {
    const request = axios.get<NamedTodoList[]>("/todoList")

    return request.then((response) => {
        const todos = response.data
        return Promise.resolve(todos)
    });
}
