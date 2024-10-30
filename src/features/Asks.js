import { createSlice } from "@reduxjs/toolkit";
import QUESTIONS from "../Questions";


const initialState={
numOfAr:0,
score:0,
warning:"",
starts:false,
color:"",
nextQes:false,
show:null
}

export  const askSlice=createSlice({
name:"questions",
initialState,
reducers:{
handleAnswer:(state,action)=>{
let number = QUESTIONS[state.numOfAr].correct   
if(state.numOfAr<QUESTIONS.length){
if(number === action.payload){ 
    state.warning="Doğru Cevap" 
    state.nextQes=false
    state.color="green"  
    state.numOfAr +=1
    state.score +=1
    
}else{
    state.warning="Yanlış Cevap"
    state.nextQes=false
    state.color="red"
    state.numOfAr +=1
}
}
if(state.numOfAr === 5){
state.numOfAr=0
state.starts=false
state.show=true
}
console.log(state.numOfAr)
console.log(state.score)
},
startButton:(state)=>{
state.starts=true
state.nextQes=true
state.show=false
state.score=0
state.numOfAr=0
    
},
clearAnswer:(state)=>{
state.warning=""

},
next:(state)=>{
state.nextQes=true

}



}



})


export const {handleAnswer,startButton,clearAnswer,next} = askSlice.actions

export default askSlice.reducer
