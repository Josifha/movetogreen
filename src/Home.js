import React from 'react'
import './Home.css'
import Product from './Product';
import Bial from './BIAL.png'
import Flight from './Flight.png'
import food from './food.png'
import cab from './cab.png'
import shop from './shop.png'
import shoppy from './shoppy.jpg'
import Slider from './slider';
import {Link} from "react-router-dom";

import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
// for slider

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Home(){
    
    return(
        
        <div className='home'>
          <div className='home_container'>
            
            <img className='home_image' src={Bial} alt=""/>
            
            
           <div className='home_row row1'>
         
            <Product title="Number palamts" image={Flight} />

            <Product title="" image={food} />
           
            <Product title="CAB BOOKING & NEARBY DESTINATION PLAN" image={cab} />
            
            <Product title="FASHION EXPO 2022" image={shop} />
           </div>

           <div className='news'>
             <div className='IN'>
                        <h1>COVID GUIDELINES</h1>
                        <p><b>Health Screening:</b></p>

                         <p>In view of the surge in number of COVID-19 cases, random sample collection will be done for passengers arriving from states where there has been a spurt in number for COVID-19 cases. Passengers will be allowed to exit after sample collection.</p> 

                          <p>Thermal screening will be done for all passengers upon arrival.</p>

                          <p>If you are travelling on a connecting flight and not leaving the airport in transit station then please refer to the detailed guidelines of the respective final destination arrival state</p>

                         <p><b>Quarantine:</b></p> 

                          <p>Passengers who are found positive will be quarantined at home or CCC/CHC/Hospital for 10 days.</p>

                          <p><b>Passenger Obligation: </b></p>

                          <p>Passengers are required to be in possession of RT-PCR negative certificate of not older than 72Hours else under testing on arrival free of cost </p>
           

             </div>
            
            </div>

        
       </div>
     
</div>
      
    );
}
export default Home;