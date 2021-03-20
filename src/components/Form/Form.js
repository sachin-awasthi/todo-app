import React, { useContext } from "react";
import { AppContext } from "../../App";
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import "./Form.css";

function Form() {
    const { todoName, setTodoName } = useContext(AppContext);
    const { todoDate, setTodoDate } = useContext(AppContext);
    const { todoList, setTodoList } = useContext(AppContext);

    function handleAddTask(e) {
        todoList.push({ todoName: todoName, todoDate: todoDate });
        setTodoList(todoList);
        setTodoName("");

        e.preventDefault();
    }

    function onChangeTask(e) {
        const value = e.target.value;
        setTodoName(value);
    }

    function handleDateChange(e) {
        const value = e.target.value;
        setTodoDate(value);
    }

    return (
        <div className="form-div">
            <form method="post" onSubmit={handleAddTask}>
                <input
                    className="input-task"
                    type="text"
                    onChange={onChangeTask}
                    value={todoName}
                    placeholder="Type your todo"
                />
                <br />
                <label htmlFor="todo-date" className="dateLabel">
                    Planned date:
                </label>

                <input
                    type="date"
                    id="todo-date"
                    name="todoDate"
                    value={todoDate}
                    min="2021-03-01"
                    max="2022-12-31"
                    onChange={handleDateChange}
                    className="datePicker"
                />

                <Tooltip title="Login to your account">
                    <Button type="submit" style={{ margin: "30px" }} variant="contained" color="primary">Add todo</Button>
                </Tooltip>
                {/* <button className="input-btn" type="submit">
                    <span role="img" aria-label="react">
                        Add todo
                    </span>
                </button> */}

            </form>
        </div>
    );
}

export default Form;
