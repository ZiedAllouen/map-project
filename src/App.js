import  React from 'react';
import Header from './components/Header/Header.jsx';
import List from './components/List/List.jsx'
import Map from './components/Map/Map.jsx'
import  PlaceDetails from './components/PlaceDetails/PlaceDetails.jsx'
import {CssBaseline,Grid} from '@material-ui/core'
const App = ()=>{
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