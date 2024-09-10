import { Amplify } from 'aws-amplify'; //to work with amplify   
import { withAuthenticator } from '@aws-amplify/ui-react'; //this handles everythiing to do with auth and user sessions 
import '@aws-amplify/ui-react/styles.css'; //using this forr the login/signup page provided by amolify auth
import config from './amplifyconfiguration.json'; 
import { useNavigate } from 'react-router-dom'; //barely use this as i load compenents on the same screen rather than navigate to different links
import { useState } from 'react'; //the most important hook
import { MenuMenu, MenuItem, Input, Menu, Modal, Button, ModalHeader, ModalContent, ModalActions} from 'semantic-ui-react'; //i am using semantic UI as the foundation and styling up as per my liking
import Clients from './Clients'; // component showing all the clients added 
import AddClient from './AddClient'; //component to add clients
import HomePage from './HomePage';
import './App.css'; // my customs stlyles 

Amplify.configure(config); //iniitialize and configure the amplify app before anything else 


function App({ signOut, user }) { //'user' can be used to keep track of user sessions but I am not really using it here

  const [currentView, setCurrentView] = useState(null); //chanegs based on menus elction 

  const handleMenuItemClick = (view) => {
    setCurrentView(view);
  };

  //using this state for a fancy logout button (everything us from semantic UI!!)
  const [open, setOpen] = useState(false)

  
  return (
    <>
    <Menu secondary >

    {/* <MenuItem><h1>xevClients</h1></MenuItem> */}
    <MenuItem><h1>HuzaifaClientApp</h1></MenuItem>

        <MenuItem
          name='clients'
          onClick={() => handleMenuItemClick('Clients')}
        />
        <MenuItem
          name='add-client'
          onClick={() => handleMenuItemClick('AddClient')}
        />

        
          

        <MenuMenu position='right'>

            
          


          <Button className='styledButtonLogout' onClick={() => setOpen(true)}>Log Out</Button>

              <Modal
                dimmer="blurring"
                open={open}
                onClose={() => setOpen(false)}
              >
                <ModalHeader>Are you sure you want to log out?</ModalHeader>
               
                <ModalActions>
                  <Button negative onClick={() => setOpen(false)}>
                    Nope
                  </Button>
                  <Button positive onClick={signOut}>
                    Logout
                  </Button>
                </ModalActions>
              </Modal>

          
        </MenuMenu>

    </Menu>


    <div className='belowNavBar'></div>


    {/* WHAT THE USER WILL SEE BASED ON NAV BAR SELECTION */}
    

    {currentView === 'Clients' && <Clients />}
    {currentView === 'AddClient' && <AddClient setCurrentView={(view) => setCurrentView(view)} />}
    {!currentView && <HomePage setCurrentView={(view) => setCurrentView(view)}/>}

     

      
    </>
  );
}

export default withAuthenticator(App);


