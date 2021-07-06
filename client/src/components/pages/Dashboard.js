import {useEffect, useState} from 'react';
import {Table} from 'react-bootstrap';
import axios from 'axios';
import Header from '../subcomponent/Header';
import { useHistory } from 'react-router-dom';

function Dashboard() {
    const [users, setUsers] = useState([]);
    const history = useHistory();

    function addUser() {
        history.push("/register");
    }

    useEffect(() => {
        async function fetchData() {
            const resp = await axios.get("db/all");
            console.log(resp);
            setUsers(resp.data);
        }
        
        fetchData();
    }, [])
    return (
        <>
            <Header buttonFunction={addUser} buttonName={`Add User`} />
          <Table variant="dark" striped bordered hover>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address1</th>
                    <th>Address2</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip</th>
                    <th>Country</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {users.length > 0 ? users.sort((a,b) => {
                    return new Date(b.dateAdded) - new Date(a.dateAdded);
                }).map((user, i) => (
                    <tr key={i}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.address1}</td>
                        <td>{user.address2 || ''}</td>
                        <td>{user.city}</td>
                        <td>{user.state}</td>
                        <td>{user.zip}</td>
                        <td>{user.country}</td>
                        <td>{user.dateAdded}</td>
                    </tr>
                )) : ""}
            </tbody>
            </Table>
        </>
    )
}

export default Dashboard;