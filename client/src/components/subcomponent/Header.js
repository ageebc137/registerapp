import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Header(props) {
    return(
        <header>
            <div id="title">
                    <h1>Registration Database</h1>
                    <Button onClick={props.buttonFunction} >{props.buttonName}</Button>
            </div>  
        </header>
    );
}