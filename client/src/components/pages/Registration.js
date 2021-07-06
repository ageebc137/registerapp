import React, { useState } from 'react';
import {Form, Col, Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Header from '../subcomponent/Header';

function Registration() {

    const history = useHistory();

    const [registerForm, setRegistration] = useState({
        firstName:'',
        lastName: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        country: ''
    });

    const [validForm, setValidForm] = useState({
        firstName:true,
        lastName: true,
        address1: true,
        address2: true,
        city: true,
        state: true,
        zip: true,
        country: true
    });

    const backToDashboard = () => {
        history.push('/');
    }

    const submitData = (e) => {
        e.preventDefault();
        resetData();

        if (!validateData()) return;

        async function postData() {
            try {
               await axios.post("/db/add", { 
                   firstName: registerForm.firstName,
                   lastName: registerForm.lastName,
                   address1: registerForm.address1,
                   address2: registerForm.address2,
                   city: registerForm.city,
                   state: registerForm.state,
                   zip: registerForm.zip,
                   country: registerForm.country});
                       
                   history.push('/');
                    
           }catch(err) {
               console.log(err);
           }
        }

        postData();


       
    }

    const validateData = () => {
       let validatedForm = {...validForm};
       let noError = true;
       if (registerForm.firstName.length < 2 || !(/^[a-zA-Z]+$/).test(registerForm.firstName.trim())) {
           validatedForm.firstName = false;
           noError = false;
       }

       if (registerForm.lastName.length < 2 || !(/^[a-zA-Z]+$/).test(registerForm.lastName.trim())) {
           validatedForm.lastName = false;
           noError = false;
       }

       if (registerForm.address1.length < 7 || !(/^[a-zA-Z\s0-9]+$/).test(registerForm.address1.trim())) {
            validatedForm.address1 = false;
            noError = false;
       }

       if (registerForm.city.length  <  2 || !(/^[a-zA-Z\s]+$/).test(registerForm.city.trim())) {
             validatedForm.city = false;
             noError = false;
        }

        if (registerForm.state.length !== 2 ) {
             validatedForm.state = false;
             noError = false;
        }

        if (!(registerForm.zip.trim().length == 5 || registerForm.zip.trim().length == 9) || !(/^\d+$/).test(registerForm.zip.trim())) {
            validatedForm.zip = false;
            noError = false;
        }
        if (registerForm.country !== 'US') {
             validatedForm.country = false;
             noError = false;
        }
         setValidForm({...validatedForm});
         return noError;
    }

    const resetData = () => {
        validForm.firstName = true;
        validForm.lastName = true;
        validForm.address1 = true;
        validForm.city = true;
        validForm.state = true;
        validForm.country = true;
        validForm.zip = true;
        setValidForm({...validForm});
    }

    return ( 
        <>
        <Header buttonFunction={backToDashboard} buttonName={'Back to Dashboard'} />
        <Form id="register-form">
        <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control value={registerForm.firstName} 
                    type="text" 
                    placeholder="Enter First Name"
                    name="firstName"
                    onChange={e => setRegistration({...registerForm, [e.target.name]: e.target.value})} />
           {validForm.firstName ? "" : <p><i>First Name not formatted correctly</i></p>}
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control 
                    value={registerForm.lastName} 
                    type="text" placeholder="Enter Last Name" 
                    name="lastName"
                    onChange={e => setRegistration({...registerForm, [e.target.name]: e.target.value})}/>
            {validForm.lastName ? "" : <p><i>Last Name not formatted correctly</i></p>}
            </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
            <Form.Label>Address 1</Form.Label>
            <Form.Control 
                    value={registerForm.address1}
                    placeholder="1234 Main St" 
                    name="address1" 
                    onChange={e => setRegistration({...registerForm, [e.target.name]: e.target.value})}
                    />
             {validForm.address1 ? "" : <p><i>Address1 not formatted correctly</i></p>}
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2 (optional)</Form.Label>
            <Form.Control 
                    value={registerForm.address2}
                    placeholder="Apartment, studio, or floor" 
                    name="address2"
                    onChange={e => setRegistration({...registerForm, [e.target.name]: e.target.value})}
                    />
        </Form.Group>

        <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
                    value={registerForm.city} 
                    placeholder="city"
                    name="city"
                    onChange={e => setRegistration({...registerForm, [e.target.name]: e.target.value})}/>
             {validForm.lastName ? "" : <p><i>City not formatted correctly</i></p>}
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Choose..." name="state"
             onChange={e => setRegistration({...registerForm, [e.target.name]: e.target.value})}>
                <option disabled>Choose...</option>
                <option value="AL">AL</option>
                              <option value="AK">AK</option>
                              <option value="AR">AR</option>
                              <option value="AZ">AZ</option>
                              <option value="CA">CA</option>
                              <option value="CO">CO</option>
                              <option value="CT">CT</option>
                              <option value="DC">DC</option>
                              <option value="DE">DE</option>
                              <option value="FL">FL</option>
                              <option value="GA">GA</option>
                              <option value="HI">HI</option>
                              <option value="IA">IA</option>
                              <option value="ID">ID</option>
                              <option value="IL">IL</option>
                              <option value="IN">IN</option>
                              <option value="KS">KS</option>
                              <option value="KY">KY</option>
                              <option value="LA">LA</option>
                              <option value="MA">MA</option>
                              <option value="MD">MD</option>
                              <option value="ME">ME</option>
                              <option value="MI">MI</option>
                              <option value="MN">MN</option>
                              <option value="MO">MO</option>
                              <option value="MS">MS</option>
                              <option value="MT">MT</option>
                              <option value="NC">NC</option>
                              <option value="NE">NE</option>
                              <option value="NH">NH</option>
                              <option value="NJ">NJ</option>
                              <option value="NM">NM</option>
                              <option value="NV">NV</option>
                              <option value="NY">NY</option>
                              <option value="ND">ND</option>
                              <option value="OH">OH</option>
                              <option value="OK">OK</option>
                              <option value="OR">OR</option>
                              <option value="PA">PA</option>
                              <option value="RI">RI</option>
                              <option value="SC">SC</option>
                              <option value="SD">SD</option>
                              <option value="TN">TN</option>
                              <option value="TX">TX</option>
                              <option value="UT">UT</option>
                              <option value="VT">VT</option>
                              <option value="VA">VA</option>
                              <option value="WA">WA</option>
                              <option value="WI">WI</option>
                              <option value="WV">WV</option>
                              <option value="WY">WY</option>
            </Form.Control>
            {validForm.state ? "" : <p><i>Must choose a state</i></p>}
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control 
                name="zip"
                onChange={e => setRegistration({...registerForm, [e.target.name]: e.target.value})}/>
              {validForm.zip ? "" : <p><i>Zip not formatted correctly</i></p>}
            </Form.Group>
        </Form.Row>

        <Form.Group as={Col} controlId="formGridCountry">
            <Form.Label>Country</Form.Label>
            <Form.Control as="select" defaultValue="Choose..." name="country"  
                    onChange={e => setRegistration({...registerForm, [e.target.name]: e.target.value})}>
                <option disabled >Choose...</option>
                <option>US</option>
            </Form.Control>
            {validForm.country ? "" : <p><i>Must choose a country</i></p>}
            </Form.Group>

            <Button onClick={submitData} variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </>
   
    )
}

export default Registration;