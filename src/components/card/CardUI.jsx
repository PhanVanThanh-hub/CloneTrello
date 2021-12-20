import React from 'react';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
 
const useStyle=makeStyles((theme)=>({
   card:{
      padding: theme.spacing(1,1,1,2),
      margin: theme.spacing(1),
   }


}))
export default function CardUI(){
   const classes = useStyle()
   return(
      <div>
         <Paper className={classes.card}>Making youtube video</Paper>
      </div>
   )
}