import React, { useContext } from "react";
import { AppContext } from "../../App";
import Button from '@material-ui/core/Button';
import "./Details.css";
import Tooltip from '@material-ui/core/Tooltip';
import { useHistory } from 'react-router-dom';

function Details() {
    // const { todoList, setTodoList } = useContext(AppContext);
    const history = useHistory();

    function gotoHome() {
        history.push({
            pathname: '/'
        });
    }

    return (
        <div>
            <p>Details page</p>
            <Tooltip title="Go to Homepage">
                <Button onClick={gotoHome} style={{ margin: "30px" }} variant="contained" color="secondary">Go back</Button>
            </Tooltip>
        </div>
    );
}

export default Details;
