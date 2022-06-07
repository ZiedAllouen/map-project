import  React,{useState,useEffect} from 'react';
import Header from './components/Header/Header.jsx';
import List from './components/List/List.jsx'
import Map from './components/Map/Map.jsx'
import  PlaceDetails from './components/PlaceDetails/PlaceDetails.jsx'
import {CssBaseline,Grid} from '@material-ui/core'
import {getPlacesData} from './api'
const App = ()=>{
  const [places,setPlaces]= useState([])
  useEffect(() => {
   getPlacesData () 
   .then( (data)=>
   console.log(data));
   setPlaces(data);

  }, []);
    return (
        <>
        <CssBaseline/>
          <Header/>
          <Grid container spacing ={3} style ={{ width :'100%'}}>
                <Grid item xs={12} md={4}> 
                <List/>
                </Grid>
                <Grid item xs={12} md={8}> 
                <Map/>
                </Grid>
                

          </Grid>
        </>
    )
} 
export default App;