import {useHistory} from 'react-router-dom';
import {Button} from 'react-bootstrap';

export default function Confirmation() {
    const history = useHistory();

    const backToDashboard = () => {
        history.push('/');
    }
    return(
        <div id="confirmation">
            <h4>Congratulations!</h4>
            <p>You are now registered</p>
            <Button onClick={backToDashboard} >Go to Dashboard</Button>
        </div>
    )
}