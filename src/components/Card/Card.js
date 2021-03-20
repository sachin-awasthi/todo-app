import React, { useContext } from "react";
import { AppContext } from "../../App";
import { FaReact } from "react-icons/fa";
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import "./Card.css";
// import cards from "../../model/data";

function Card() {
    const { todoList, setTodoList } = useContext(AppContext);

    function handleRemove(e) {
        setTodoList((pValue) => {
            return pValue.filter((value, index) => {
                return index != e
            })
        });
    }

    return (
        <div>
            {todoList.map((item, index) => {
                return (
                    <div className="card-div">
                        <FaReact style={{ color: "blue" }} />
                        {item.todoName} @ {item.todoDate}
                        <Tooltip title="Remove this todo">
                            <Button onClick={() => handleRemove(index)} variant="contained" style={{ float: "right" }} color="secondary">Remove</Button>
                        </Tooltip>
                    </div>
                );
            })}
        </div>
    );
}

export default Card;
