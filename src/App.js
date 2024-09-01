import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MenuMenu, MenuItem, Input, Menu, Modal, Button, ModalHeader, ModalContent, ModalActions} from 'semantic-ui-react';
import Clients from './Clients';
import AddClient from './AddClient'; 
import './App.css';

Amplify.configure(config);


function App({ signOut, user }) {

  const [currentView, setCurrentView] = useState(null);
  const navigate = useNavigate(); 

  const handleMenuItemClick = (view) => {
    setCurrentView(view);
  };

  //using this state for a fancy logout button (everything us from semantic UI!!)
  const [open, setOpen] = useState(false)

  
  return (
    <>
    <Menu secondary >

    {/* <MenuItem><h1>xevClients</h1></MenuItem> */}
    <MenuItem><h1>XEVRON</h1></MenuItem>

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

     

      
    </>
  );
}

export default withAuthenticator(App);


