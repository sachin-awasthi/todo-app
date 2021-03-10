import React, { useContext } from "react";
import { AppContext } from "../../App";
import { FaReact } from "react-icons/fa";
import "./Card.css";
// import cards from "../../model/data";

function Card() {
    const { todoList, setTodoList } = useContext(AppContext);

    return (
        <div>
            {todoList.map((item, index) => {
                return (
                    <div className="card-div">
                        <FaReact style={{ color: "blue" }} />
                        {item.todoName} @ {item.todoDate}
                    </div>
                );
            })}
        </div>
    );
}

export default Card;
