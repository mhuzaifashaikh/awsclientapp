import React from "react";
import { Header, Button } from 'semantic-ui-react';
import './App.css';


function HomePage({setCurrentView}){

    const handleSubmit = () => {
        setCurrentView('Clients'); // Update currentView to render Clients component

      };
    
    


    return(
        <div>
            <Header as='h1' className="myHeaderHome">Welcome To 
                <br/> <div className="AppNameHome"> Xevron</div> 
                <br /><Button className="styledButton01" onClick={handleSubmit}>View My Clients</Button>
            </Header>
  
  

                {/* these are the waves on the bottom of the screen, i got this svg code from a svg wave generator online */}
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#F78DA7"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,500 L 0,125 C 87.20574162679424,137.8803827751196 174.41148325358847,150.76076555023923 257,155 C 339.5885167464115,159.23923444976077 417.5598086124403,154.83732057416267 535,140 C 652.4401913875597,125.16267942583731 809.3492822966506,99.88995215311003 903,106 C 996.6507177033494,112.11004784688997 1027.0430622009571,149.60287081339715 1106,158 C 1184.9569377990429,166.39712918660285 1312.4784688995214,145.69856459330143 1440,125 L 1440,500 L 0,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#F78DA7"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,500 L 0,291 C 101.93301435406698,297.5837320574162 203.86602870813397,304.1674641148325 308,308 C 412.13397129186603,311.8325358851675 518.4688995215311,312.9138755980861 605,304 C 691.5311004784689,295.0861244019139 758.2583732057418,276.177033492823 857,266 C 955.7416267942582,255.822966507177 1086.4976076555024,254.377990430622 1189,260 C 1291.5023923444976,265.622009569378 1365.751196172249,278.311004784689 1440,291 L 1440,500 L 0,500 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>

            


        </div>

        
    );
}

export default HomePage