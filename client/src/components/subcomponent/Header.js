import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../assets/users-logo.png';

export default function Header(props) {
    return(
        <header>
            <div id="title">
                    <img src={logo} />
                    <h1>Registration Database</h1>
                    <Button onClick={props.buttonFunction} >{props.buttonName}</Button>
            </div>  
        </header>
    );
}