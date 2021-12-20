import React from 'react';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
 
import { InputBase,Button ,IconButton} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
const useStyle=makeStyles((theme)=>({
   card:{
      
      paddingBottom:theme.spacing(4),
      margin:theme.spacing(0,1,1,1),
      padding:theme.spacing(1,1,1,0)
   },
   input:{
      '& .MuiInputBase-input':{
         margin:theme.spacing(1)
      }
   },
   btnConfirm:{
      background:"#5AAC44",
      color:"#fff",
      '&:hover':{
         background:"#5AAC44"
      }
   },
   confirm:{
      margin:theme.spacing(0,1,1,1),
   }



}))
export default function InputCard(props){
   const classes = useStyle()
   return(
      <div>
         <div >
            <Paper className={classes.card} >
               <InputBase 
                  multiline 
                  onBlur={()=>props.setOpen(false)}
                  fullWidth
                  className={classes.input}
                  placeholder="Enter a title of this card..." 
               />
            </Paper>
         </div>
         <div className={classes.confirm}>
            <Button sx={{background:"#5AAC44",color:"#fff",textTransform:"none",
                        '&:hover':{
                           background:"#5AAC44"
                        }}}
               onClick={()=>props.setOpen(false)}
            >
               Add Card
            </Button>
            <IconButton onClick={()=>props.setOpen(false)}>
               <ClearIcon />
            </IconButton>
         </div>
      </div>
       
   )
}