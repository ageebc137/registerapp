import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Header() {
    const history = useHistory();
    const location = useLocation();
    
    const addUser = () => {
        history.push("/register");
    }

    useEffect(() => {
        console.log(location.pathname);

    }, []);
    return(
        <header>
            <div id="title">
                    <h1>Registration Database</h1>
                    <Button onClick={addUser} >Add User</Button>
            </div>  
        </header>
    );
}