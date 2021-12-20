import React from 'react';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from '@mui/styles';
import Title from './Title';
import CardUI from '../../../components/card/CardUI';
import InputContainer from '../../../components/input/InputUI';
const useStyle=makeStyles((theme)=>({
   root:{
      width:"300px",
      backgroundColor:"#EBECF0",
      marginLeft:theme.spacing(1),
   }


}))

export default function List(){
   const classes = useStyle()
   return(
      <div>
         <Paper className ={classes.root}>
            <CssBaseline/>
            <Title/>
            <CardUI/>
            <CardUI/>
            <CardUI/>
            <InputContainer/>
         </Paper>

      </div>
   )
}