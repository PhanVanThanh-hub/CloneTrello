import React,{useState} from 'react';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import {Typography } from '@mui/material';
import InputCard from './InputCard';
import { Collapse } from '@mui/material';
const useStyle=makeStyles((theme)=>({
   root:{
      marginTop:theme.spacing(1),
   },
   addCard:{
      padding: theme.spacing(1,1,1,2),
      margin: theme.spacing(0,1,1,1),
      background:'#EBECF0',
      '&:hover':{
         backgroundColor:'#836969'
      }
   }


}))
export default function InputContainer(){
   const classes = useStyle()
   const [open, setOpen]=useState(false)
   return(
      <div className={classes.root}>
         <Collapse in={open}>
            <InputCard setOpen={setOpen}/>
         </Collapse>
         <Collapse in={!open}>
            <Paper   className={classes.addCard} 
                  elevation={0}
                  onClick={()=>setOpen(!open)}
            >
               <Typography>+Add a card</Typography>
            </Paper>
         </Collapse>
          
      </div>
   )
}