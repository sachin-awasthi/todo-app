import React from "react";
import "./Header.css";
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

function Header() {
    const history = useHistory();

    function goToDetails() {
        history.push({
            pathname: '/details'
        });
    }

    return (
        <div className="header-div">
            <p>Todo App</p>
            <div className="header-btn">
                <Tooltip title="Go to Details page">
                    <Button onClick={goToDetails} variant="contained" color="primary">Details page</Button>
                </Tooltip>
            </div>
        </div>
    );
}

export default Header;
