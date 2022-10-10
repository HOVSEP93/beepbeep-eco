import { ADDITEM, DELITEM } from "../type";

// const addItem=[];

const initState =[]

 function  addItemReducer (state=initState,{type,payload}){
   switch (type) {
       case ADDITEM:
     
           return [...state,payload]
           break;

        case DELITEM:
        return  state=state.filter((el)=>{
            return el.id !==payload.id 
        })
            
        break;
   
       default: return state ;
           break;
   }
}
export default addItemReducer