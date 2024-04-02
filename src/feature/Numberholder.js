import { createSlice } from "@reduxjs/toolkit";

const initialState={
    User1:[],
    User2:[],
    AllTotal:[],
    TotalSum:0,
}
const getTheTotalSum = (TotalArray)=>{
    let sum=0
    /* for( const ele of TotalArray){
        sum+=ele
    } */
    TotalArray.array.forEach(element => {
        sum+=element
    });
    return sum
}
export const NumberHolderSlice = createSlice({
    initialState:initialState,
    name:"Number Holder",
    reducers:{
        AddValue1:(state,action)=>{
            state.User1.push(parseInt(action.payload))
            state.AllTotal.push(parseInt(action.payload))
            state.TotalSum=state.TotalSum+parseInt(action.payload)
        },
        AddValue2:(state,action)=>{
            state.User2.push(parseInt(action.payload))
            state.AllTotal.push(parseInt(action.payload))
            state.TotalSum=state.TotalSum+parseInt(action.payload)
        },
        Reset:(state,action)=>{
            state.User1=[]
            state.User2=[]
            state.AllTotal=[]
            state.TotalSum=0
        }
    }
})

export const {AddValue1,AddValue2,Reset} = NumberHolderSlice.actions
export default NumberHolderSlice.reducer