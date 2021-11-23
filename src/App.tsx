import React, {useEffect, useState} from 'react';
import './App.css';
import HelloParagraph from "./components/HelloParagraph";
import {TodoList} from "./components/TodoList";
import {NamedTodoList} from "./model/model";
import {getTodoList} from "./rest/apiCalls";

function App() {
    // https://reactjs.org/docs/hooks-state.html
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [todos, setTodos] = useState<NamedTodoList[]>([]);

    // https://reactjs.org/docs/hooks-effect.html
    useEffect(() => {
        if(isLoaded) {
            return;
        }
        getTodoList()
            .then((todoResponse) => {
            setTodos(todoResponse);
            setIsLoaded(true)
        })
    });

    return (
        <div className="App">
            <HelloParagraph city={"Görlitz"}/>
            <HelloParagraph city={"Zittau"}/>
            <HelloParagraph city={"Dresden"}/>

            <TodoList todoLists={todos}/>
        </div>
    );
}

export default App;
