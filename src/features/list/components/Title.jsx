import React ,{useState}from 'react';

 
import {Typography , InputBase} from '@mui/material';
 
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { makeStyles } from '@mui/styles';

const useStyle=makeStyles((theme)=>({
   editableTitleContainer:{
      marginLeft:theme.spacing(1),
      display:"flex",
      '& $editableTitle':{
         fontSize:"20px",
         fontWeight:"600",
      }
   },
   editableTitle:{
      flexGrow:"1",
       
   },
   input:{
       
      '& .MuiInputBase-input':{
         margin:theme.spacing(1),
         fontSize:"20px",
         fontWeight:"600",
         "&:focus":{
            background:"#ddd"
         },
      }
   }
}));

export default function Title(){
   const classes = useStyle()
   const [open , setOpen] =useState(false);
   return(
      <div>
         {open ?(
            <div>
               <InputBase value="Todo"
                  className= {classes.input}
                  autoFocus
                  onBlur={()=>setOpen(!open)}
               />
            </div>
         ):(
            <div className={classes.editableTitleContainer}>
               <Typography onClick={()=>setOpen(!open)} 
                  className ={classes.editableTitle}
               >
                  Todo1
               </Typography>
               <MoreHorizIcon/>
            </div>
         )}
      </div>
   )
}