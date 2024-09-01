// src/Clients.js
import React, { useState, useEffect } from "react";
import { get } from 'aws-amplify/api';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { Header, ItemMeta,
  ItemImage,
  ItemHeader,
  ItemGroup,
  ItemExtra,
  ItemDescription,
  ItemContent,
  Image,
  Item,
  Input } from 'semantic-ui-react';
import randomdp1 from './images/randomdp1.png';
import randomdp2 from './images/randomdp2.png';
import randomdp3 from './images/randomdp3.png';
import randomdp4 from './images/randomdp4.png';



// apigateway - api name, connects my ui to the lambda function
const myAPI = "apiaa9ac2eb";

const Clients = ({ signOut, user }) => {

  const navigate = useNavigate(); 

  //the list of clients which is populated later by dynamboDB records (hopefully :D)
  const [clients, setClients] = useState([]);

  const [searchQuery, setSearchQuery] = useState('');
 
  async function getClient() {
  
    //the user/business who created this client
    let clientCreator = user.userId;
    console.log("Logged in user - ", clientCreator);
    

    try {
      // Get function - interacts with lambda
      const restOperation = get({
        apiName: myAPI,
        path: '/addClient',
        options: {
          queryParams: {
            userID: clientCreator
          }
        }
      });

      const { body } = await restOperation.response;
      const str = await body.text();

      const ClientListFromLambda = JSON.parse(str);
      console.log('GET call succeeded: ', ClientListFromLambda);
       // Set the data in your component's state
       setClients(ClientListFromLambda);

    } catch (e) {
      console.log('GET call failed: ', JSON.parse(e.response.body));
    }
  }

  useEffect(() => {
    getClient();
  }, []); // Empty dependency array means it runs only once on mount


  
  const images = [randomdp1, randomdp2, randomdp3, randomdp4];

  
  return (
    <div>
      
    
      
      <Header as='h1' className="myHeader">Your Clients</Header>
              {/* 
            <div>
            <button onClick={() => navigate('/AddClient')}>Add a new Client</button>
            </div> */}




<Item.Group style={{
  maxHeight: 'calc(100vh - 2rem)', // adjust the height to fit your needs
  overflowY: 'auto', // add scrollbars when content overflows
  overflowX: 'hidden', // hide horizontal scrollbars
  padding: '2rem 4rem' // add some padding
  
}}>
{/* 
<Input icon='search' placeholder='Search...' />
  
  {clients.map((client, index) => (
  <Item key={client.clientId}>
    <ItemImage size='tiny' src={images[Math.floor(Math.random() * images.length)]} />
    <ItemContent>
      <ItemHeader as='a'>{client.clientName} {client.clientLastName}</ItemHeader>
      <ItemDescription>
        <p>Email: {client.clientEmail}</p>
        <p>Phone Number: {client.clientPhone}</p>
      </ItemDescription>
      <ItemExtra>Additional Details</ItemExtra>
    </ItemContent>
    
  </Item>
))} */}


   {/* trying search query box */}
  <Input 
  icon='search' 
  placeholder='Search...' 
  value={searchQuery} 
  onChange={(e) => setSearchQuery(e.target.value)} 
/>

{clients.filter((client) => {
  const clientName = `${client.clientName} ${client.clientLastName}`;
  return (clientName && clientName.toLowerCase().includes(searchQuery.toLowerCase())) || 
         (client.clientEmail && client.clientEmail.toLowerCase().includes(searchQuery.toLowerCase())) || 
         (client.clientPhone && client.clientPhone.toLowerCase().includes(searchQuery.toLowerCase()));
}).sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated))
.map((client) => (
  <Item key={client.clientId}>
    <ItemImage size='tiny' src={images[Math.floor(Math.random() * images.length)]} />
    <ItemContent>
      <ItemHeader as='a'>{client.clientName} {client.clientLastName}</ItemHeader>
      <ItemDescription>
        <p>Email: {client.clientEmail}</p>
        <p>Phone Number: {client.clientPhone}</p>
      </ItemDescription>
      <ItemExtra>Additional Details</ItemExtra>
    </ItemContent>
  </Item>
))
}

  </Item.Group>

            
      {/* <div>
        
       {clients.map((client) => (
            <div key={client.clientID}>
              <h3>{client.clientName}</h3>
              <p>{client.userID}</p>
            </div>
    ))}
      </div> */}

      
    </div>
  );
};

export default withAuthenticator(Clients);
