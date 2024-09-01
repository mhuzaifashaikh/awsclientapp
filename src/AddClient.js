// src/Clients.js
import React, { useState } from "react";
import { get, post } from 'aws-amplify/api';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { FormField, Button, Form, Header, FormGroup } from 'semantic-ui-react'
import { v4 as uuidv4 } from 'uuid'; //for generating client ids


// apigateway - api name, connects my ui to the lambda function
const myAPI = "apiaa9ac2eb";

const AddClient = ({ signOut, user, setCurrentView }) => {
    const navigate = useNavigate(); 





    //-------------!----------------!_-----------------_!_-------------------------
  // Some states to use
  const [phoneNumber, setPhoneNumber] = useState(""); //this is clientID
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");


  // Get client function
  // async function getClient(e) {
  
  //   //the user/business who created this client
  //   let clientCreator = user.userId;

  //   try {
  //     // Get function - interacts with lambda
  //     const restOperation = get({
  //       apiName: myAPI,
  //       path: '/addClient',
  //       options: {
  //         queryParams: {
  //           userID: clientCreator
  //         }
  //       }
  //     });

  //     const { body } = await restOperation.response;
  //     const str = await body.text();

  //     const newClient = JSON.parse(str);
  //     console.log('GET call succeeded: ', newClient);

  //   } catch (e) {
  //     console.log('GET call failed: ', JSON.parse(e.response.body));
  //   }
  // }



  // Post client function
  async function postClient(e) {
    
    //using UUID to generate mt unique client ID 
    const clientID_IN = uuidv4();
    console.log("generated ID", clientID_IN);

    let clientName_IN = e.name;
    let clientLastName_IN = e.lastName;
    let clientEmail_IN = e.email;
    let clientPhone_IN = e.phoneNumber;
    let currentTime = new Date().toISOString();

    console.log(currentTime);

    //the user/business who created this client
    let clientCreator = user.userId;

    console.log("the user who created this client: ", clientCreator);
    try {
        // Post function - interacts with lambda
        const restOperation = post({
          apiName: myAPI,
          path: '/addClient',
          options: {
            body: {
              userID: clientCreator,
              clientID: clientID_IN,
              clientName: clientName_IN,
              clientLastName: clientLastName_IN,            
              clientEmail: clientEmail_IN,
              clientPhone: clientPhone_IN,
              dateCreated: currentTime,
            }
          }
        });
      
        const { body } = await restOperation.response;
        const str = await body.text();
        const newClient = JSON.parse(str);
      
        console.log('POST call succeeded: ', newClient);
      
      } catch (e) {
        console.log('POST call failed: ', JSON.parse(e.response.body));
      }
  }


  const handleSubmit = () => {
    postClient({ name, lastName, email, phoneNumber }); //this array is "e"
    setCurrentView('Clients'); // Update currentView to render Clients component

  };






  return (
    // <div className="Clients">
    <div>
    <Header as='h1' className="myHeader">Add a new Client</Header>

      <Form style={{
  maxHeight: 'calc(100vh - 2rem)', // adjust the height to fit your needs
  overflowY: 'auto', // add scrollbars when content overflows
  overflowX: 'hidden', // hide horizontal scrollbars
  padding: '2rem' // add some padding
  
}}>
        <FormGroup widths='equal'>

        <FormField >
          <label>First Name</label>
          <input className="formFieldcustom" placeholder="Enter First Name" type="text" onChange={(e) => setName(e.target.value)} />
        </FormField>


        <FormField >
          <label>Last Name</label>
          <input className="formFieldcustom" placeholder="Enter Last Name" type="text" onChange={(e) => setLastName(e.target.value)} />
        </FormField>

        </FormGroup>

    <FormField >
    <label>Email</label>
    <input className="formFieldcustom" placeholder="Enter Email" type="email" onChange={(e) => setEmail(e.target.value)}/>
    </FormField>
    <FormField >
        <label>Phone Number</label>
        <input className="formFieldcustom" placeholder="Enter Phone Number" type="tel" onChange={(e) => setPhoneNumber(e.target.value)} />
      </FormField>
    
    <Button className="styledButton01" type='submit' onClick={handleSubmit}>Add</Button>
  </Form>

    </div>
  );
};

export default withAuthenticator(AddClient);
