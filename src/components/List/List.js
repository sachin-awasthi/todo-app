import React, { useContext } from "react";
import { AppContext } from "../../App";
import Card from "../Card/Card";
import "./List.css";

function List() {
    const { todoList, setTodoList } = useContext(AppContext);
    return (
        <div className="todo-list-div">
            {todoList.length > 0 ? (
                <Card />
            ) : (
                <p className="default-p">Add your first todo..</p>
            )}
        </div>
    );
}

export default List;
