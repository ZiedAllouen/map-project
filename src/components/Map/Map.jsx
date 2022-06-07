import React from 'react' ;
import GoogleMapReact from 'google-map-react';
import {Paper,Typography,useMediaQuery} from '@material-ui/core';
import  LocationOnOutlinedIcon  from '@material-ui/icons/LocalActivityOutlined';
import Rating from '@material-ui/lab';
import useStyles from './styles.js'

  const Map =()=> {
      const classes = useStyles
      return (
          <div>
              <h1>
                 Map
              </h1>
          </div>
      )
  }
  export default Map;
